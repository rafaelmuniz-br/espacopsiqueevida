<script setup lang="ts">
const { openContactModal } = useContactModal()
</script>

<template>
  <button
    type="button"
    class="pv-logo-float"
    aria-label="Agendar atendimento"
    @click="openContactModal"
  >
    <img src="/marca/logo-icon.webp" alt="" />
  </button>
</template>

<style scoped>
.pv-logo-float {
  position: fixed;
  left: 1.25rem;
  bottom: 1.25rem;
  z-index: 60;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 999px;
  border: none;
  background: var(--pv-surface);
  box-shadow: var(--pv-shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.pv-logo-float:hover {
  transform: translateY(-3px) scale(1.05);
}
.pv-logo-float:active {
  transform: scale(0.94);
}
.pv-logo-float img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
@media (prefers-reduced-motion: reduce) {
  .pv-logo-float {
    transition: none;
  }
}
</style>
