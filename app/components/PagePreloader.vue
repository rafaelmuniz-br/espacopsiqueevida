<script setup lang="ts">
const visible = ref(true)
const leaving = ref(false)

onMounted(() => {
  try {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      visible.value = false
      return
    }

    document.body.style.overflow = 'hidden'

    window.setTimeout(() => {
      leaving.value = true
    }, 1400)

    window.setTimeout(() => {
      visible.value = false
      document.body.style.overflow = ''
    }, 2000)

    // Segurança extra: garante que o overlay nunca fique preso na tela,
    // mesmo que algo dê errado com os timers acima.
    window.setTimeout(() => {
      visible.value = false
      document.body.style.overflow = ''
    }, 3500)
  } catch {
    visible.value = false
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div v-if="visible" class="pv-preloader" :class="{ 'is-leaving': leaving }" aria-hidden="true">
    <div class="pv-preloader-inner">
      <p class="pv-preloader-phrase">
        <span class="pv-preloader-word" style="animation-delay: 0ms">Espaço</span>
        <span class="pv-preloader-word" style="animation-delay: 140ms">Psique</span>
        <span class="pv-preloader-word pv-preloader-word-e" style="animation-delay: 280ms">e</span>
        <span class="pv-preloader-word" style="animation-delay: 380ms">Vida</span>
      </p>
      <div class="pv-preloader-bar">
        <div class="pv-preloader-bar-fill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pv-preloader {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pv-ink);
  transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s ease;
}
.pv-preloader.is-leaving {
  transform: translateY(-100%);
  opacity: 0.6;
}

.pv-preloader-inner {
  text-align: center;
  padding: 0 1.5rem;
}

.pv-preloader-phrase {
  font-family: var(--pv-font-display);
  font-size: clamp(1.6rem, 5.4vw, 2.6rem);
  font-weight: 600;
  color: #fbf4ee;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 0.45em;
  margin: 0;
}
.pv-preloader-word {
  display: inline-block;
  opacity: 0;
  animation: pv-preloader-word-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.pv-preloader-word-e {
  font-style: italic;
  color: var(--pv-accent-light);
}
@keyframes pv-preloader-word-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pv-preloader-bar {
  width: min(60vw, 220px);
  height: 2px;
  margin: 1.85rem auto 0;
  background: rgba(251, 244, 238, 0.18);
  border-radius: 999px;
  overflow: hidden;
}
.pv-preloader-bar-fill {
  height: 100%;
  width: 0%;
  background: var(--pv-accent);
  animation: pv-preloader-bar-fill 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  animation-delay: 0.05s;
}
@keyframes pv-preloader-bar-fill {
  to {
    width: 100%;
  }
}

/* Sem "reduzir movimento": o overlay nem chega a aparecer — some antes do
   primeiro paint, sem depender de JS pra esconder a tempo. */
@media (prefers-reduced-motion: reduce) {
  .pv-preloader {
    display: none !important;
  }
}
</style>
