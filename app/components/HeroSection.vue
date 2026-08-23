<script setup lang="ts">
const { openContactModal } = useContactModal()
const videoEl = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const el = videoEl.value
  if (!el) return
  el.muted = true
  if (reduceMotion) {
    el.pause()
    return
  }
  // Em alguns navegadores mobile, chamar .play() antes do vídeo ter dados
  // carregados é silenciosamente ignorado — reforça a tentativa assim que
  // houver dado suficiente pra tocar.
  const tryPlay = () => el.play().catch(() => {})
  tryPlay()
  el.addEventListener('loadeddata', tryPlay, { once: true })
  el.addEventListener('canplay', tryPlay, { once: true })
})
</script>

<template>
  <section id="topo" class="pv-hero">
    <video
      ref="videoEl"
      class="pv-hero-bg"
      src="/videos-espaco/consultorio1.mp4"
      poster="/fotos/espaco-area-espera.jpg"
      preload="auto"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
    />
    <div class="pv-hero-veil" aria-hidden="true" />

    <div class="pv-container pv-hero-inner">
      <p class="pv-kicker pv-reveal" v-reveal="0">Psicologia e Neuropsicologia caminhando juntas</p>

      <h1 class="pv-hero-title pv-reveal" v-reveal="80">Espaço Psique <em>e</em> Vida</h1>

      <p class="pv-hero-lede pv-reveal" v-reveal="180">
        Um espaço pensado para acolher, escutar e cuidar.
      </p>

      <div class="pv-hero-actions pv-reveal" v-reveal="280">
        <button type="button" class="pv-btn pv-btn-primary" @click="openContactModal">
          Agendar atendimento
        </button>
        <a href="#servicos" class="pv-btn pv-btn-outline">Conhecer os serviços</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 4rem;
  overflow: hidden;
  isolation: isolate;
}

.pv-hero-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.02);
}

.pv-hero-veil {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(
    100deg,
    rgba(251, 244, 238, 0.97) 0%,
    rgba(251, 244, 238, 0.93) 32%,
    rgba(251, 244, 238, 0.65) 58%,
    rgba(74, 53, 39, 0.28) 100%
  );
}

.pv-hero-title {
  font-size: clamp(2.6rem, 6.4vw, 4.6rem);
  font-weight: 600;
  color: var(--pv-ink);
  margin-bottom: 1.4rem;
}
.pv-hero-title em {
  font-style: italic;
  color: var(--pv-accent);
}

.pv-hero-lede {
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  color: var(--pv-ink-soft);
  max-width: 38rem;
  margin-bottom: 2.2rem;
}

.pv-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
