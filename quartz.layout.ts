import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [
    ],
    afterBody: [
        Component.Backlinks({ hideWhenEmpty: false }),
    ],
    beforeFooter: [
        Component.Comments({
            provider: 'giscus',
            options: {
                repo: 'codeyoma/codeyoma.github.io',
                repoId: 'R_kgDOOraRoA',
                category: 'General',
                categoryId: 'DIC_kwDOOraRoM4CqR8o',
                // loading: 'lazy',
            }
        }),
        Component.ScrollProgress()
    ],
    footer: Component.Footer({
        links: {
            Home: "/",
            About: "/About",
            "Blog source": "https://github.com/codeyoma/codeyoma.github.io",
            // GitHub: "https://github.com/codeyoma",
            // LinkedIn: "https://www.linkedin.com/in/codeyoma",
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.ConditionalRender({
            component: Component.Breadcrumbs(),
            condition: (page) => page.fileData.slug !== "index",
        }),
        Component.ArticleTitle(),
        Component.ContentMeta(),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
                { Component: Component.DesktopOnly(Component.ReaderMode()) },
            ],
        }),
        Component.Explorer({
            folderClickBehavior: "link",
            useSavedState: false,
            sortFn: (a, b) => {
                if (!a.isFolder && a.slug === 'About')
                    return -99
                if (!b.isFolder && b.slug === 'About')
                    return 99


                if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
                    return a.displayName.localeCompare(b.displayName, undefined, {
                        numeric: true,
                        sensitivity: "base",
                    })
                }

                if (!a.isFolder && b.isFolder) {
                    return 1
                } else {
                    return -1
                }
            },
            // mapFn: (node) => {
            //     if (node.isFolder) {
            //         node.displayName = "📁 " + node.displayName
            //     }
            // },
        }),
        // Component.RecentNotes({ limit: 5}),
    ],
    right: [
        Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: [
        Component.Breadcrumbs(),
        Component.ArticleTitle(),
        Component.ContentMeta(),
        Component.TagList()
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                {
                    Component: Component.Search(),
                    grow: true,
                },
                { Component: Component.Darkmode() },
                { Component: Component.DesktopOnly(Component.ReaderMode()) },
            ],
        }),
        Component.Explorer({
            folderClickBehavior: "link",
            useSavedState: false,
            sortFn: (a, b) => {
                if (!a.isFolder && a.slug === 'About')
                    return -99
                if (!b.isFolder && b.slug === 'About')
                    return 99


                if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
                    return a.displayName.localeCompare(b.displayName, undefined, {
                        numeric: true,
                        sensitivity: "base",
                    })
                }

                if (!a.isFolder && b.isFolder) {
                    return 1
                } else {
                    return -1
                }
            },
        }
        ),
    ],
    right: [
        Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
    ],
}
