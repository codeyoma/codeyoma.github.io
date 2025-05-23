import { concatenateResources } from "../util/resources"
import DesktopOnly from './DesktopOnly'
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

type FlexConfig = {
    components: {
        Component: QuartzComponent
        grow?: boolean
        shrink?: boolean
        basis?: string
        order?: number
        align?: "start" | "end" | "center" | "stretch"
        justify?: "start" | "end" | "center" | "between" | "around"
        desktopOnly?: boolean
    }[]
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    gap?: string
}

export default ((config: FlexConfig) => {
    const Flex: QuartzComponent = (props: QuartzComponentProps) => {
        const direction = config.direction ?? "row"
        const wrap = config.wrap ?? "nowrap"
        const gap = config.gap ?? "1rem"

        return (
            <div
                class="flex-container"
            // style={`display: flex; flex-direction: ${direction}; gap: ${gap};`}
            >
                {config.components.map((c, i) => {
                    const grow = c.grow ? 1 : 0
                    const shrink = (c.shrink ?? true) ? 1 : 0
                    const basis = c.basis ?? "auto"
                    const order = c.order ?? 0
                    const align = c.align ?? "center"
                    const justify = c.justify ?? "end"
                    const desktopOnly = c.desktopOnly ?? false

                    return (
                        <div
                            class={`flex-child ${i === 0 ? "first-child" : "other-child"} ${desktopOnly ? "flex-desktop-only" : ""}`}
                        // style={`flex-grow: ${grow}; flex-shrink: ${shrink}; order: ${order}; align-self: ${align}; justify-self: ${justify};`}
                        >
                            <c.Component {...props} />
                        </div>
                    )
                })}
            </div>
        )
    }

    Flex.afterDOMLoaded = concatenateResources(
        ...config.components.map((c) => c.Component.afterDOMLoaded),
    )
    Flex.beforeDOMLoaded = concatenateResources(
        ...config.components.map((c) => c.Component.beforeDOMLoaded),
    )
    Flex.css = concatenateResources(...config.components.map((c) => c.Component.css))
    return Flex
}) satisfies QuartzComponentConstructor<FlexConfig>
