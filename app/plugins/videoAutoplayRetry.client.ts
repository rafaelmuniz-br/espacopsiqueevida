// Em alguns iPhones — sobretudo com o Modo de Baixo Consumo ativado — o
// Safari bloqueia qualquer autoplay de vídeo iniciado por JS que não esteja
// diretamente ligado a um gesto real do usuário, não importa quantas vezes
// .play() seja chamado programaticamente sozinho (como já fazemos no mount
// e via IntersectionObserver). Esse plugin tenta novamente sempre que o
// usuário interage com a página pela primeira vez (toque, clique ou
// rolagem), o que satisfaz essa exigência do WebKit.
export default defineNuxtPlugin(() => {
  function retryAutoplay() {
    document.querySelectorAll<HTMLVideoElement>('video[autoplay]').forEach((el) => {
      if (el.paused) el.play().catch(() => {})
    })
  }

  window.addEventListener('touchstart', retryAutoplay, { passive: true })
  window.addEventListener('pointerdown', retryAutoplay, { passive: true })
  window.addEventListener('scroll', retryAutoplay, { passive: true })
})
