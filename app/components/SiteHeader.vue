<script setup lang="ts">
const { openContactModal } = useContactModal()
const isOpen = ref(false)
const isScrolled = ref(false)

const links = [
  { href: '#espaco', label: 'O Espaço' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#fundadoras', label: 'Fundadoras' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
]

function close() {
  isOpen.value = false
}

function onScroll() {
  isScrolled.value = window.scrollY > 12
}

// overflow:hidden no body não trava scroll por toque no Safari iOS — a
// página continua rolando atrás do menu. Trava de verdade fixando o body
// no lugar (técnica padrão pra iOS) e restaura a posição da rolagem ao fechar.
let lockedScrollY = 0
watch(isOpen, (open) => {
  if (open) {
    lockedScrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${lockedScrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
  } else {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    window.scrollTo(0, lockedScrollY)
  }
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="pv-header" :class="{ 'is-scrolled': isScrolled, 'is-menu-open': isOpen }">
    <div class="pv-container pv-header-inner">
      <a href="#topo" class="pv-logo">
        <img src="/marca/logo-icon.webp" alt="" class="pv-logo-icon" />
        <span class="pv-logo-text">
          <span class="pv-logo-kicker">ESPAÇO</span>
          <span class="pv-logo-title">Psique <em>e</em> Vida</span>
        </span>
      </a>

      <nav class="pv-nav-desktop" aria-label="Navegação principal">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>

      <button type="button" class="pv-btn pv-btn-primary pv-header-cta" @click="openContactModal">
        Agendar atendimento
      </button>

      <button
        type="button"
        class="pv-menu-btn"
        :class="{ 'is-open': isOpen }"
        aria-label="Abrir menu"
        @click="isOpen = !isOpen"
      >
        <span class="pv-menu-bar pv-menu-bar-1" aria-hidden="true" />
        <span class="pv-menu-bar pv-menu-bar-2" aria-hidden="true" />
        <span class="pv-menu-bar pv-menu-bar-3" aria-hidden="true" />
      </button>
    </div>

    <div class="pv-mobile-panel" :class="{ 'is-open': isOpen }">
      <nav aria-label="Navegação mobile" @click="close">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
        <button type="button" class="pv-btn pv-btn-primary" @click="openContactModal">
          Agendar atendimento
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.pv-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}
.pv-header.is-scrolled {
  background: rgba(251, 244, 238, 0.92);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--pv-line);
  box-shadow: var(--pv-shadow-sm);
}
.pv-header.is-menu-open {
  background: var(--pv-bg);
  backdrop-filter: none;
  border-bottom-color: transparent;
  box-shadow: none;
}

.pv-header-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.pv-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--pv-ink);
  margin-right: auto;
}
.pv-logo-icon {
  height: 2.15rem;
  width: auto;
  flex-shrink: 0;
}
.pv-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}
.pv-logo-kicker {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--pv-ink-soft);
}
.pv-logo-title {
  font-family: var(--pv-font-display);
  font-size: 1.25rem;
  font-weight: 600;
}
.pv-logo-title em {
  font-style: italic;
  color: var(--pv-accent);
}

.pv-nav-desktop {
  display: none;
  align-items: center;
  gap: 1.75rem;
  font-size: 0.92rem;
  font-weight: 600;
}
.pv-nav-desktop a {
  text-decoration: none;
  color: var(--pv-ink);
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s ease;
}
.pv-nav-desktop a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 2px;
  background: var(--pv-accent);
  transition: right 0.25s ease;
}
.pv-nav-desktop a:hover {
  color: var(--pv-accent-dark);
}
.pv-nav-desktop a:hover::after {
  right: 0;
}

.pv-header-cta {
  display: none;
}

.pv-menu-btn {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
.pv-menu-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.5rem;
  height: 2px;
  margin-left: -0.75rem;
  margin-top: -1px;
  background: var(--pv-ink);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.pv-menu-bar-1 {
  transform: translateY(-7px);
}
.pv-menu-bar-3 {
  transform: translateY(7px);
}
.pv-menu-btn.is-open .pv-menu-bar-1 {
  transform: translateY(0) rotate(45deg);
}
.pv-menu-btn.is-open .pv-menu-bar-2 {
  opacity: 0;
}
.pv-menu-btn.is-open .pv-menu-bar-3 {
  transform: translateY(0) rotate(-45deg);
}

.pv-mobile-panel {
  position: fixed;
  top: 4.75rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  overflow-y: auto;
  background: var(--pv-bg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-12px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}
.pv-mobile-panel.is-open {
  opacity: 1;
  visibility: visible;
  transform: none;
}
.pv-mobile-panel nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1.5rem 1.5rem 2.5rem;
}
.pv-mobile-panel a {
  text-decoration: none;
  color: var(--pv-ink);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--pv-line);
  touch-action: manipulation;
}
.pv-mobile-panel .pv-btn {
  margin-top: 1.25rem;
  justify-content: center;
  border-bottom: none;
}
@media (prefers-reduced-motion: reduce) {
  .pv-mobile-panel {
    transition: none;
  }
}

@media (min-width: 900px) {
  .pv-nav-desktop {
    display: flex;
  }
  .pv-header-cta {
    display: inline-flex;
  }
  .pv-menu-btn {
    display: none;
  }
}
</style>
