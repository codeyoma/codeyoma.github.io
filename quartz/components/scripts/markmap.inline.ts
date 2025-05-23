import { Markmap, deriveOptions, loadCSS } from "markmap-view"
import { Transformer } from "markmap-lib"
import { Toolbar } from "markmap-toolbar"
import { registerEscapeHandler } from "./util"
import { mouseEnterHandler, clearActivePopover } from './popover.inline'

const externalIcon = `
    <svg aria-hidden="true" class="external-icon" style="max-width:0.8em;max-height:0.8em; margin-left:0.2em;" viewBox="0 0 512 512">
    <path d="M320 0H288V64h32 82.7L201.4 265.4 178.7 288 224 333.3l22.6-22.6L448 109.3V192v32h64V192 32 0H480 320zM32 32H0V64 480v32H32 456h32V480 352 320H424v32 96H64V96h96 32V32H160 32z"/>
    </svg>`.trim()

const fullIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" aria-hidden="true">
        <path stroke="none" fill="currentColor" fill-rule="evenodd"
            d="M120-120v-320h80v184l504-504H520v-80h320v320h-80v-184L256-200h184v80H120Z"/>
    </svg>`

const closeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" aria-hidden="true">
        <path stroke="none" fill="currentColor" fill-rule="evenodd"
    d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z"/>
</svg>`

const exitIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" >
        <path stroke="none" fill="currentColor" fill-rule="evenodd"
d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
</svg>
`

function renderGlobalMarkmap() {
    const transformer = new Transformer()
    const { styles } = transformer.getAssets();
    if (styles)
        loadCSS(styles)

    const jsonOptions = {
        colorFreezeLevel: 2,
        spacingHorizontal: 100,
        spacingVertical: 10,
    }
    const markmapOptions = deriveOptions(jsonOptions);
    markmapOptions.scrollForPan = false

    const container = document.querySelector(".global-markmap-outer") as HTMLElement
    const containerInner = container.querySelector('.global-markmap-container') as HTMLElement
    const svg = container.querySelector("#global-markmap") as SVGSVGElement
    const toolbarEl = container.querySelector("#global-markmap-toolbar") as HTMLElement

    if (!container || !svg || !toolbarEl) {
        console.warn("❌ Markmap container or elements not found.")
        return
    }

    svg.innerHTML = ""
    toolbarEl.innerHTML = ""

    const raw = container.dataset.markmap
    if (!raw) {
        return
    }

    const data = JSON.parse(decodeURIComponent(raw))
    const mm = Markmap.create(svg, markmapOptions, data)
    const toolbar = Toolbar.create(mm)
    const mmToolbar = toolbar.render()
    toolbarEl.append(mmToolbar)
    mm.fit()

    registerEscapeHandler(container, hideGlobalMarkmap)
    setupMarkmapPopoverSupport()

    svg.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach(a => {
        a.classList.add('external')
    })

    svg.querySelectorAll<HTMLAnchorElement>('a.external').forEach(a => {
        a.insertAdjacentHTML('beforeend', externalIcon)
    })

    let isToggled = containerInner.classList.contains('fullscreen') ? true : false;
    const customToolbar = document.createElement("div");
    customToolbar.className = "mm-toolbar-item";
    customToolbar.title = "Toggle fullscreen";
    customToolbar.innerHTML = isToggled ? closeIcon : fullIcon

    const customExit = document.createElement("div");
    customExit.className = "mm-toolbar-item";
    customExit.title = "Exit";
    customExit.innerHTML = exitIcon

    mmToolbar.append(customToolbar);
    mmToolbar.append(customExit);

    container.classList.add("active")

    customToolbar.addEventListener('click', () => {
        containerInner.classList.toggle('fullscreen')
        isToggled = !isToggled;
        customToolbar.innerHTML = isToggled ? closeIcon : fullIcon;
    })

    customExit.addEventListener("click", () => {
        const escEvent = new KeyboardEvent("keydown", {
            key: "Escape",
            code: "Escape",
            keyCode: 27,
            which: 27,
            bubbles: true,
        });
        document.dispatchEvent(escEvent);
    });

}

function hideGlobalMarkmap() {
    const container = document.querySelector(".global-markmap-outer") as HTMLElement
    container?.classList.remove("active")
}

function toggleGlobalMarkmap() {
    const container = document.querySelector(".global-markmap-outer") as HTMLElement
    if (container?.classList.contains("active")) {
        hideGlobalMarkmap()
    } else {
        renderGlobalMarkmap()
    }
}

function setupMarkmapPopoverSupport() {
    const markmapLinks = document.querySelectorAll(".markmap .markmap-foreign a.internal") as NodeListOf<HTMLAnchorElement>
    console.log("markmap links", markmapLinks)
    for (const link of markmapLinks) {
        if (link.dataset.noPopover === "true") continue

        link.addEventListener("mouseenter", mouseEnterHandler)
        link.addEventListener("mouseleave", clearActivePopover)
        window.addCleanup?.(() => {
            link.removeEventListener("mouseenter", mouseEnterHandler)
            link.removeEventListener("mouseleave", clearActivePopover)
        })
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("show-markmap")
    if (btn) {
        btn.addEventListener("click", renderGlobalMarkmap)
    }

    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "m" && !e.shiftKey) {
            e.preventDefault()
            toggleGlobalMarkmap()
        }
    })
})
