import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"
import mermaidStyle from "../../components/styles/mermaid.inline.scss"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null

async function renderMermaidInPopovers() {
    requestAnimationFrame(async () => {
        const codeBlocks = document.querySelectorAll(".popover .popover-inner code.mermaid")

        if (codeBlocks.length === 0) return

        const { default: mermaid } = await import(
            "https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.4.0/mermaid.esm.min.mjs"
        )

        mermaid.initialize({
            startOnLoad: false,
            theme: document.documentElement.getAttribute("saved-theme") === "dark" ? "dark" : "base",
            securityLevel: "loose",
        })

        for (const code of codeBlocks) {
            const graph = code.textContent?.trim()
            if (!graph) continue

            const container = document.createElement("div")
            container.className = "mermaid"
            container.textContent = graph

            container.style.visibility = "hidden"
            container.style.position = "absolute"
            container.style.top = "-9999px"
            document.body.appendChild(container)

            try {
                await mermaid.run({ nodes: [container] })
            } catch (err) {
                console.error("Mermaid render failed:", err)
                container.remove()
                continue
            }

            const svgEl = container.querySelector("svg")
            if (!svgEl) {
                container.remove()
                continue
            }

            const rendered = svgEl.cloneNode(true) as SVGSVGElement
            const parent = code.parentElement
            code.remove()
            parent?.appendChild(rendered)

            container.remove()
        }
    })
}

async function mouseEnterHandler(
    this: HTMLAnchorElement,
    { clientX, clientY }: { clientX: number; clientY: number },
) {
    const link = (activeAnchor = this)
    if (link.dataset.noPopover === "true") {
        return
    }

    async function setPosition(popoverElement: HTMLElement) {
        const { x, y } = await computePosition(link, popoverElement, {
            strategy: "fixed",
            middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
        })
        Object.assign(popoverElement.style, {
            transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
        })
    }

    function showPopover(popoverElement: HTMLElement) {
        clearActivePopover()
        popoverElement.classList.add("active-popover")
        setPosition(popoverElement as HTMLElement)

        if (hash !== "") {
            const targetAnchor = `#popover-internal-${hash.slice(1)}`
            const heading = popoverInner.querySelector(targetAnchor) as HTMLElement | null
            if (heading) {
                // leave ~12px of buffer when scrolling to a heading
                popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
            }
        }

        renderMermaidInPopovers();
    }

    const targetUrl = new URL(link.href)
    const hash = decodeURIComponent(targetUrl.hash)
    targetUrl.hash = ""
    targetUrl.search = ""
    const popoverId = `popover-${link.pathname}`
    const prevPopoverElement = document.getElementById(popoverId)

    // dont refetch if there's already a popover
    if (!!document.getElementById(popoverId)) {
        showPopover(prevPopoverElement as HTMLElement)
        return
    }

    const response = await fetchCanonical(targetUrl).catch((err) => {
        console.error(err)
    })

    if (!response) return
    const [contentType] = response.headers.get("Content-Type")!.split(";")
    const [contentTypeCategory, typeInfo] = contentType.split("/")

    const popoverElement = document.createElement("div")
    popoverElement.id = popoverId
    popoverElement.classList.add("popover")
    const popoverInner = document.createElement("div")
    popoverInner.classList.add("popover-inner")
    popoverInner.dataset.contentType = contentType ?? undefined
    popoverElement.appendChild(popoverInner)

    switch (contentTypeCategory) {
        case "image":
            const img = document.createElement("img")
            img.src = targetUrl.toString()
            img.alt = targetUrl.pathname

            popoverInner.appendChild(img)
            break
        case "application":
            switch (typeInfo) {
                case "pdf":
                    const pdf = document.createElement("iframe")
                    pdf.src = targetUrl.toString()
                    popoverInner.appendChild(pdf)
                    break
                default:
                    break
            }
            break
        default:
            const contents = await response.text()
            const html = p.parseFromString(contents, "text/html")
            normalizeRelativeURLs(html, targetUrl)
            // prepend all IDs inside popovers to prevent duplicates
            html.querySelectorAll("[id]").forEach((el) => {
                const targetID = `popover-internal-${el.id}`
                el.id = targetID
            })
            const elts = [...html.getElementsByClassName("popover-hint")]
            if (elts.length === 0) return

            elts.forEach((elt) => popoverInner.appendChild(elt))
    }

    if (!!document.getElementById(popoverId)) {
        return
    }

    document.body.appendChild(popoverElement)
    if (activeAnchor !== this) {
        return
    }

    showPopover(popoverElement)
}

function clearActivePopover() {
    activeAnchor = null
    const allPopoverElements = document.querySelectorAll(".popover")
    allPopoverElements.forEach((popoverElement) => popoverElement.classList.remove("active-popover"))
}

document.addEventListener("nav", () => {
    const links = [...document.querySelectorAll("a.internal")] as HTMLAnchorElement[]
    for (const link of links) {
        link.addEventListener("mouseenter", mouseEnterHandler)
        link.addEventListener("mouseleave", clearActivePopover)
        window.addCleanup(() => {
            link.removeEventListener("mouseenter", mouseEnterHandler)
            link.removeEventListener("mouseleave", clearActivePopover)
        })
    }
})

export { mouseEnterHandler, clearActivePopover }
