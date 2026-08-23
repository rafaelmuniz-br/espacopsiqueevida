<script setup lang="ts">
const videos = [
  { src: '/videos-espaco/consultorio1.mp4', poster: '/fotos/consultorio1-poster.jpg' },
  { src: '/videos-espaco/consultorio2.mp4', poster: '/fotos/consultorio2-poster.jpg' },
  { src: '/videos-espaco/consultorio3.mp4', poster: '/fotos/consultorio3-poster.jpg' },
]
</script>

<template>
  <section id="espaco">
    <div class="pv-container">
      <div class="pv-gallery-head">
        <p class="pv-kicker pv-reveal" v-reveal>Conheça o espaço</p>
        <h2 class="pv-reveal" v-reveal="80">
          Um ambiente para <span class="pv-script">se apaixonar pelo processo</span>
        </h2>
        <p class="pv-gallery-lede pv-reveal" v-reveal="150">
          Iluminação, cores e organização pensadas para transformar cada visita em um momento de
          conforto e tranquilidade — antes mesmo do atendimento começar.
        </p>

        <div class="pv-gallery-address pv-reveal" v-reveal="220">
          <svg viewBox="0 0 24 24" class="pv-gallery-address-icon" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <path d="M12 21s-7-6.05-7-11.5A7 7 0 0 1 19 9.5C19 14.95 12 21 12 21Z" stroke-linejoin="round" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <p>
            <strong>Ed. Elite Comercial</strong> — Rua Dr. José Peroba, nº 325, 6º andar
            <br />Salvador – BA
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ed.+Elite+Comercial,+Rua+Dr.+Jos%C3%A9+Peroba,+325,+Salvador+-+BA"
            target="_blank"
            rel="noopener"
            class="pv-gallery-address-link"
          >
            Ver no mapa
          </a>
        </div>
      </div>

      <div class="pv-gallery-grid">
        <figure
          v-for="(v, i) in videos"
          :key="v.src"
          class="pv-gallery-item pv-reveal"
          v-reveal="i * 130"
        >
          <video
            v-lazy-video="v.src"
            :poster="v.poster"
            preload="none"
            autoplay
            muted
            loop
            playsinline
            aria-hidden="true"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-gallery-head {
  max-width: 42rem;
  margin-bottom: 3rem;
}
.pv-gallery-head h2 {
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
  margin-bottom: 1rem;
}
.pv-gallery-head .pv-script {
  font-size: 1.15em;
}
.pv-gallery-lede {
  color: var(--pv-ink-soft);
  font-size: 1.02rem;
}

.pv-gallery-address {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.75rem;
  padding: 1.1rem 1.4rem;
  background: var(--pv-surface);
  border: 1px solid var(--pv-line);
  border-radius: var(--pv-radius);
}
.pv-gallery-address-icon {
  width: 1.6rem;
  height: 1.6rem;
  color: var(--pv-accent);
  flex-shrink: 0;
}
.pv-gallery-address p {
  color: var(--pv-ink);
  font-size: 0.94rem;
  line-height: 1.5;
  margin-right: auto;
}
.pv-gallery-address p strong {
  font-weight: 700;
}
.pv-gallery-address-link {
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--pv-accent-dark);
  text-decoration: none;
  white-space: nowrap;
}
.pv-gallery-address-link:hover {
  color: var(--pv-accent);
}

.pv-gallery-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}
.pv-gallery-item {
  margin: 0;
  position: relative;
  border-radius: var(--pv-radius);
  overflow: hidden;
  box-shadow: var(--pv-shadow-sm);
  transition: box-shadow 0.3s ease;
  background: var(--pv-bg-alt);
}
.pv-gallery-item:hover {
  box-shadow: var(--pv-shadow-md);
}
.pv-gallery-item video {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.pv-gallery-item:hover video {
  transform: scale(1.05);
}
@media (min-width: 700px) {
  .pv-gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1020px) {
  .pv-gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
