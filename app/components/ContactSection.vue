<script setup lang="ts">
const { openContactModal } = useContactModal()

const profiles = [
  { label: 'Espaço Psique e Vida', handle: '@espacopsiqueevida', href: 'https://www.instagram.com/espacopsiqueevida/', primary: true },
  { label: 'Joana Darc', handle: '@joanadarcpsico', href: 'https://www.instagram.com/joanadarcpsico/' },
  { label: 'Viviane Gatis', handle: '@vivianegatispsi', href: 'https://www.instagram.com/vivianegatispsi/' },
]

</script>

<template>
  <section id="contato" class="pv-contact">
    <video
      v-lazy-video="'/videos-espaco/consultorio2.mp4'"
      class="pv-contact-bg"
      poster="/fotos/consultorio2-poster.jpg"
      preload="none"
      muted
      loop
      playsinline
      aria-hidden="true"
    />
    <div class="pv-container pv-contact-inner">
      <p class="pv-kicker pv-reveal" v-reveal>Vamos conversar</p>
      <h2 class="pv-contact-title pv-reveal" v-reveal="80">
        Chegou o momento de <span class="pv-script">cuidar de si</span>
      </h2>
      <p class="pv-contact-lede pv-reveal" v-reveal="150">
        Preencha o formulário e vamos continuar a conversa no WhatsApp — será um prazer
        acolher você.
      </p>

      <button
        type="button"
        class="pv-btn pv-btn-primary pv-contact-cta pv-reveal"
        v-reveal="220"
        @click="openContactModal"
      >
        Agendar atendimento
      </button>

      <div class="pv-contact-profiles pv-reveal" v-reveal="300">
        <a v-for="p in profiles" :key="p.handle" :href="p.href" target="_blank" rel="noopener" class="pv-contact-profile">
          <span class="pv-contact-profile-label">{{ p.label }}</span>
          <span class="pv-contact-profile-handle">{{ p.handle }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-contact {
  position: relative;
  overflow: hidden;
  background: var(--pv-ink);
  color: #fbf4ee;
}
.pv-contact-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0.5;
  filter: grayscale(0.3);
}
.pv-contact::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(74, 53, 39, 0.88), rgba(74, 53, 39, 0.97));
}

.pv-contact-inner {
  position: relative;
  z-index: 1;
  max-width: 40rem;
}

.pv-contact-title {
  font-size: clamp(1.9rem, 4vw, 2.7rem);
  color: #fbf4ee;
  margin-bottom: 1.1rem;
}
.pv-contact-title .pv-script {
  font-size: 1.25em;
  color: #e8b492;
}

.pv-contact-lede {
  color: rgba(251, 244, 238, 0.82);
  font-size: 1.02rem;
  margin-bottom: 2rem;
  max-width: 34rem;
}

.pv-contact-cta {
  margin-bottom: 2.75rem;
}

.pv-contact-profiles {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.pv-contact-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid rgba(251, 244, 238, 0.18);
  border-radius: 14px;
  text-decoration: none;
  color: #fbf4ee;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}
.pv-contact-profile:hover {
  border-color: rgba(251, 244, 238, 0.45);
  background: rgba(251, 244, 238, 0.06);
  transform: translateX(4px);
}
.pv-contact-profile-label {
  font-weight: 700;
  font-size: 0.98rem;
}
.pv-contact-profile-handle {
  font-size: 0.9rem;
  color: rgba(251, 244, 238, 0.7);
}
</style>
