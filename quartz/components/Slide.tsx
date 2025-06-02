import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/slide.inline"
import style from "./styles/slide.scss"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

interface MindmapOptions {
  mode: "button" | "global"
}

const defaultOptions: MindmapOptions = {
  mode: "button",
}

export default ((opts?: Partial<MindmapOptions>) => {
  const Slide: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const mode = opts?.mode ?? defaultOptions.mode

    const button = (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 -960 960 960"
        fill="currentColor"
        xmlSpace="preserve"
      >
        <path d="m380-300 280-180-280-180v360ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
      </svg>
    )

    if (mode === "button") {
      return (
        <div class={classNames(displayClass, "slide-button")}>
          <button class="slide-icon" aria-label="Slide Toggle">
            {button}
          </button>
        </div>
      )
    }

    if (!fileData.origin) {
      return null
    }

    return (
      <div class={classNames(displayClass, "global-slide slide")}>
        <div class="global-slide-outer">
          <div class="global-slide-container" data-origin={fileData.origin}>
          </div>
        </div>
      </div>
    )
  }

  Slide.css = style
  Slide.afterDOMLoaded = script

  return Slide
}) satisfies QuartzComponentConstructor
