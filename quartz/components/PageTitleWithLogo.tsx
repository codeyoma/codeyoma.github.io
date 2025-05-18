import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = pathToRoot(fileData.slug!)
    return (
        <h2 class={classNames(displayClass, "page-title")}>
            <a href={baseDir}>
                {title}
                <img class="page-logo" src="https://avatars.githubusercontent.com/u/71107230?v=4" />
            </a>
        </h2>
    )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  display: flex;
}

.page-logo {
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  padding-left: 0.25rem;
  margin: 0;
  vertical-align: text-top;

  @media (min-width: 1400px){
    display: block;
    width: auto;
    height: auto;
    padding: 0;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
