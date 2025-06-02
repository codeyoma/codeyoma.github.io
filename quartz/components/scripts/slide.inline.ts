import { Marpit } from '@marp-team/marpit'
import { registerEscapeHandler, removeAllChildren } from './util'

const marpit = new Marpit()

marpit.themeSet.default = marpit.themeSet.add(`
/* @theme quartz */
section {
  background-color: #fff;
  color: #222;
  padding: 60px;
  font-size: 28px;
}
`)

async function renderSlide(slide: HTMLElement) {
  removeAllChildren(slide)

  if (!slide.dataset["origin"]) {
    return () => { }
  }

  const { html, css } = marpit.render(slide.dataset.origin, { htmlAsArray: true })

  const style = document.createElement("style")
  style.textContent = css
  slide.appendChild(style)

  const temp = document.createElement("div")
  temp.innerHTML = html
  while (temp.firstChild) {
    slide.appendChild(temp.firstChild)
  }

  return () => {
    slide.innerHTML = ""
  }
}

let globalSlideCleanups: (() => void)[] = []

function cleanupGlobalSlides() {
  for (const cleanup of globalSlideCleanups) {
    cleanup()
  }
  globalSlideCleanups = []
}

document.addEventListener("nav", async () => {

  const containers = [...document.getElementsByClassName("global-slide-outer")] as HTMLElement[]
  async function renderGlobalSlide() {

    for (const container of containers) {
      container.classList.add("active")
      registerEscapeHandler(container, hideGlobalSlide)
      const slideContainer = container.querySelector(".global-slide-container") as HTMLElement
      if (slideContainer) {
        globalSlideCleanups.push(await renderSlide(slideContainer))
      }
    }
  }

  function hideGlobalSlide() {
    cleanupGlobalSlides()
    for (const container of containers) {
      container.classList.remove("active")
    }
  }

  async function shortcutHandler(e: HTMLElementEventMap["keydown"]) {
    if (e.key === "s" && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
      e.preventDefault()
      const anyGlobalSlideOpen = containers.some((container) =>
        container.classList.contains("active"),
      )
      anyGlobalSlideOpen ? hideGlobalSlide() : renderGlobalSlide()
    }
  }

  const containerIcons = document.getElementsByClassName("slide-icon")
  Array.from(containerIcons).forEach((icon) => {
    icon.addEventListener("click", renderGlobalSlide)
    window.addCleanup(() => icon.removeEventListener("click", renderGlobalSlide))
  })

  document.addEventListener("keydown", shortcutHandler)
  window.addCleanup(() => {
    document.removeEventListener("keydown", shortcutHandler)
  })
})
