// Carrega e reproduz vídeos de fundo só quando estão perto da viewport —
// evita baixar todos os vídeos "abaixo da dobra" (Contato, Galeria) já no
// carregamento inicial da página. O vídeo do Hero fica de fora disso de
// propósito (autoplay/preload direto no template), porque ele já está
// visível assim que a página abre.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  if (import.meta.client) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            if (!el.src && el.dataset.src) {
              el.src = el.dataset.src
              el.load()
            }
            if (!reduceMotion) el.play().catch(() => {})
          } else {
            el.pause()
          }
        }
      },
      { rootMargin: '250px 0px', threshold: 0.01 }
    )
  }

  nuxtApp.vueApp.directive('lazy-video', {
    mounted(el: HTMLVideoElement, binding) {
      el.muted = true
      el.dataset.src = binding.value
      observer?.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
