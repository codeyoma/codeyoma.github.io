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

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const match = path.match(/^\/(\d+)$/);
  if (match) {
    const num = match[1];
    window.location.replace(`/Computer-Science/1-Foundations--and--Theory/Algorithms/ps/boj/${num}/${num}`);
  }
});
