// @ts-ignore
import scrollProgressScript from "./scripts/scrollProgress.inline"
import scrollStyle from "./styles/scrollProgress.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ScrollProgress: QuartzComponent = ({ children }: QuartzComponentProps) => {
    return <div id="scroll-progress">{children}</div>
}

ScrollProgress.afterDOMLoaded = scrollProgressScript
ScrollProgress.css = scrollStyle

export default (() => ScrollProgress) satisfies QuartzComponentConstructor
