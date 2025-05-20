import NProgress from "nprogress"

NProgress.configure({
    showSpinner: false,
    trickle: false,
    minimum: 0.01
})

let started = false

window.addEventListener("scroll", () => {
    if (!started) {
        NProgress.start()
        started = true
    }
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = scrollTop / docHeight
    NProgress.set(progress)
})
