// Scroll-reveal simples e leve (sem lib externa), com stagger por item via
// delay individual passado na diretiva (ver docs/prompt-desenvolvimento-site.md
// do myCRM: cada card/parágrafo revela com seu próprio atraso, não a seção
// inteira de uma vez).
//
// A classe `pv-reveal` já vai direto no template de cada seção (estática, não
// injetada pela diretiva) para servidor e cliente renderizarem o mesmo HTML
// na hidratação — a diretiva só cuida do IntersectionObserver (client-only).
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      observer?.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
