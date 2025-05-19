import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = pathToRoot(fileData.slug!)
    return (
        <a href={baseDir} class="page-header-link">
            <h2 class={classNames(displayClass, "page-title")}>
                {title}
            </h2>
            <img class="page-logo" src="https://avatars.githubusercontent.com/u/71107230?v=4" />
        </a>
    )
}

PageTitle.css = `
.page-header-link {
  display: flex;
  gap: 0.5rem;
  text-decoration: none;

  @media (min-width: 1025px) {
    flex-direction: column;
  }
}

.page-title {
  font-size: 1.1rem;
  margin: 0;
  margin-left: 0.5em;
  font-family: var(--titleFont);
  white-space: nowrap;

  @media (min-width: 1025px) {
    font-size: 1.7rem;
  }
}

.page-logo {
  margin: 0;
  width: 1.6rem;
  height: 1.6rem;

  @media (min-width: 1025px) {
    width: auto;
    height: auto;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
