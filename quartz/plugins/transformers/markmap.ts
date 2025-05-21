import { QuartzTransformerPlugin } from "../types"
import { Transformer } from "markmap-lib"

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
        }
    }
}
