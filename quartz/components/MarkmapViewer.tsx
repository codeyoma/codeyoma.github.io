// @ts-ignore
import markmapScript from "./scripts/markmap.inline"
import style from "./styles/markmap.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

import { IPureNode } from 'markmap-common'


const recurseChildren = (fn: (node: IPureNode) => void) => (node: IPureNode) => {
    fn(node)
    node.children?.forEach(recurseChildren(fn))
}

function* matchRegex(str: string, regex: RegExp) {
    while (true) {
        const match = regex.exec(str)
        if (!match) break
        yield match
    }
}

function replaceMatches(str: string, regex: RegExp, replacer: (match: RegExpExecArray) => string) {
    let accumulator = str
    const matches = matchRegex(str, regex)
    for (const match of matches)
        accumulator = accumulator.replace(match[0], replacer(match))
    return accumulator
}


const wikilinkRegex = /\[\[(?<link>[^|\]]+)\|?((?<displayText>[^\]]+))?\]\]/g

function replacement(match) {
    const { link, displayText } = match.groups!
    const safeLink = link.trim().replace(/\s+/g, "-")
    // return `<a href=\"/${safeLink}\">${displayText || link}</a>`
    return `"${displayText || link}"`
}

export const parseInternalLinks = recurseChildren(node => {
    node.content =
        replaceMatches(node.content, wikilinkRegex, replacement)
})


const MarkmapViewer: QuartzComponent = ({ displayClass, fileData }: QuartzComponentProps) => {
    const root = fileData.markmap
    if (!root) {
        return (
            <div class={classNames(displayClass, "markmap")}>
                <button class={classNames(displayClass, "markmapmode")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="markmapIcon"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="64px"
                        height="64px"
                        viewBox="0 -960 960 960"
                        aria-label="mind map"
                    >
                        <title>mind map</title>
                        <path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87q0-50 35-85t85-35h160v-127q-35-12-57.5-43T360-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-647v127h160q50 0 85 35t35 85v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87q0-17-11.5-28.5T680-440H520v127q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-127H280q-17 0-28.5 11.5T240-400v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm280 0q17 0 28.5-11.5T520-200q0-17-11.5-28.5T480-240q-17 0-28.5 11.5T440-200q0 17 11.5 28.5T480-160Zm280 0q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
                    </svg>
                </button>
            </div>
        )
    }

    parseInternalLinks(root)

    return (
        <div class={classNames(displayClass, "markmap")}>

            <button id="show-markmap" class={classNames(displayClass, "markmapmode")}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="markmapIcon"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="64px"
                    height="64px"
                    viewBox="0 -960 960 960"
                    aria-label="mind map"
                >
                    <title>mind map</title>
                    <path d="M200-80q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87q0-50 35-85t85-35h160v-127q-35-12-57.5-43T360-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-647v127h160q50 0 85 35t35 85v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87q0-17-11.5-28.5T680-440H520v127q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-127H280q-17 0-28.5 11.5T240-400v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T240-200q0-17-11.5-28.5T200-240q-17 0-28.5 11.5T160-200q0 17 11.5 28.5T200-160Zm280 0q17 0 28.5-11.5T520-200q0-17-11.5-28.5T480-240q-17 0-28.5 11.5T440-200q0 17 11.5 28.5T480-160Zm280 0q17 0 28.5-11.5T800-200q0-17-11.5-28.5T760-240q-17 0-28.5 11.5T720-200q0 17 11.5 28.5T760-160ZM480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
                </svg>
            </button>
            <div class="global-markmap-outer">
                <div class="global-markmap-container">
                    <svg id="global-markmap" ></svg>
                    <div id="global-markmap-toolbar"></div>
                    <script
                        id="global-markmap-data"
                        type="application/json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(fileData.markmap) }}
                    />
                </div>
            </div>
        </div>
    )
}

MarkmapViewer.afterDOMLoaded = markmapScript
MarkmapViewer.css = style

export default (() => MarkmapViewer) satisfies QuartzComponentConstructor
