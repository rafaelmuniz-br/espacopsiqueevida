// Carrega e reproduz vídeos de fundo só quando estão perto da viewport —
// evita baixar todos os vídeos "abaixo da dobra" (Contato, Galeria) já no
// carregamento inicial da página. O vídeo do Hero fica de fora disso de
// propósito (autoplay/preload direto no template), porque ele já está
// visível assim que a página abre.
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            if (!el.src && el.dataset.src) {
              el.src = el.dataset.src
              el.load()
            }
            // Vídeo de fundo decorativo (mudo, em loop) — toca sempre,
            // mesmo com "Reduzir movimento" ativado. O Safari (iOS/macOS)
            // suprime o atributo HTML autoplay nesse caso, mas ainda
            // respeita uma chamada explícita de .play() via JS. Em alguns
            // navegadores mobile, chamar .play() antes do vídeo ter dados
            // carregados também é silenciosamente ignorado — reforça a
            // tentativa assim que houver dado suficiente pra tocar.
            const tryPlay = () => el.play().catch(() => {})
            tryPlay()
            el.addEventListener('loadeddata', tryPlay, { once: true })
            el.addEventListener('canplay', tryPlay, { once: true })
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
