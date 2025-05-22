import { Markmap, deriveOptions } from "markmap-view"
import { Toolbar } from "markmap-toolbar"
import { registerEscapeHandler } from "./util"


function renderGlobalMarkmap() {
    const jsonOptions = {
        colorFreezeLevel: 2,
    }
    const markmapOptions = deriveOptions(jsonOptions);
    markmapOptions.scrollForPan = false

    const container = document.querySelector(".global-markmap-outer") as HTMLElement
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
    toolbarEl.append(toolbar.render())

    mm.fit()

    container.classList.add("active")

    registerEscapeHandler(container, hideGlobalMarkmap)
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
