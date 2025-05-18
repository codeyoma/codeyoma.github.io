import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
    links: Record<string, string>
}

export default ((opts?: Options) => {
    const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
        const year = new Date().getFullYear()
        const links = opts?.links ?? []
        return (
            <footer class={`${displayClass ?? ""}`}>
                <ul>
                    {Object.entries(links).map(([text, link]) => (
                        <li>
                            <a href={link} >{text}</a>
                        </li>
                    ))}
                </ul>
                <p>
                    {/* {i18n(cfg.locale).components.footer.createdWith}{" "} */}
                    Created by Yòmá with <a href="https://quartz.jzhao.xyz/" target="_blank">Quartz v{version}</a> © {year}
                </p>
            </footer>
        )
    }

    Footer.css = style
    return Footer
}) satisfies QuartzComponentConstructor
