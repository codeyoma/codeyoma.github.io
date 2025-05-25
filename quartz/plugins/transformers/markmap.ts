import { QuartzTransformerPlugin } from "../types"
import { Transformer } from "markmap-lib"
import mermaidStyle from "../../components/styles/mermaid.inline.scss"
import { JSResource, CSSResource } from "../../util/resources"

export const MarkmapTransformer: QuartzTransformerPlugin = () => {

    const transformer = new Transformer()
    return {
        name: "MarkmapTransformer",
        textTransform(ctx, src) {
            return src
        },
        markdownPlugins() {
            return [() => {
                return (_, file) => {
                    file.data.markmap = transformer.transform(String(file.value)).root
                }
            }]
        },
        externalResources() {
            const js: JSResource[] = []
            const css: CSSResource[] = []
            css.push({
                content: mermaidStyle,
                inline: true,
            })

            return { js, css }
        },
    }
}
