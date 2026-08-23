<script setup lang="ts">
const services = [
  {
    icon: 'brain',
    title: 'Avaliação Neuropsicológica',
    text: 'Investigação detalhada de habilidades cognitivas, comportamentais e emocionais, auxiliando na compreensão de dificuldades, potencialidades e necessidades específicas. Disponível também on-line.',
  },
  {
    icon: 'heart',
    title: 'Psicologia',
    text: 'Um espaço de acolhimento e escuta para elaboração de conflitos, fortalecimento emocional e desenvolvimento de novas formas de lidar com a própria história.',
  },
  {
    icon: 'puzzle',
    title: 'Acompanhamento e Intervenção Neuropsicológica',
    text: 'Estimulação e reabilitação de funções como atenção, memória, organização, planejamento, flexibilidade cognitiva e controle emocional.',
  },
  {
    icon: 'book',
    title: 'Psicopedagogia',
    text: 'Acompanhamento das dificuldades de aprendizagem, considerando os aspectos cognitivos, emocionais e pedagógicos envolvidos no processo de aprender.',
  },
]
</script>

<template>
  <section id="servicos" class="pv-section-alt">
    <div class="pv-container">
      <div class="pv-services-head">
        <p class="pv-kicker pv-reveal" v-reveal>Serviços realizados na Psique e Vida</p>
        <h2 class="pv-reveal" v-reveal="80">
          Cuidado voltado à compreensão do funcionamento
          <span class="pv-script">cognitivo, emocional</span> e da aprendizagem
        </h2>
      </div>

      <div class="pv-services-grid">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          class="pv-card pv-service-card pv-reveal"
          v-reveal="i * 90"
        >
          <span class="pv-service-icon">
            <svg v-if="s.icon === 'brain'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">
              <path
                d="M18 8c-4 0-7 3-7 6.5 0 1 .2 1.9.6 2.7C9 18.3 7 20.9 7 24c0 2.8 1.6 5.2 3.9 6.4-.2.7-.3 1.5-.3 2.3 0 4.4 3.9 8 8.7 8H20V8h-2Z"
                stroke-linejoin="round"
              />
              <path
                d="M30 8c4 0 7 3 7 6.5 0 1-.2 1.9-.6 2.7C39 18.3 41 20.9 41 24c0 2.8-1.6 5.2-3.9 6.4.2.7.3 1.5.3 2.3 0 4.4-3.9 8-8.7 8H28V8h2Z"
                stroke-linejoin="round"
              />
              <path d="M24 8v32" stroke-linecap="round" />
            </svg>
            <svg v-else-if="s.icon === 'heart'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">
              <path
                d="M24 40S8 30.4 8 19.6C8 13.6 12.6 9 18.3 9c2.9 0 5.5 1.4 7.2 3.6L24 14l-1.5-1.4C24.2 10.4 26.8 9 29.7 9 35.4 9 40 13.6 40 19.6 40 30.4 24 40 24 40Z"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
            <svg v-else-if="s.icon === 'puzzle'" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">
              <path
                d="M17 9h8v4.2a3 3 0 0 0 4.8 2.4A3 3 0 0 1 34.6 21H39v8h-4.2a3 3 0 0 0-2.4 4.8A3 3 0 0 1 27.4 39H23v-4.2a3 3 0 0 0-4.8-2.4A3 3 0 0 1 13.4 27H9v-8h4.2a3 3 0 0 0 2.4-4.8A3 3 0 0 1 17 9Z"
                stroke-linejoin="round"
              />
            </svg>
            <svg v-else viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">
              <path d="M24 12c-3.5-2.7-8.3-4-13-4v25c4.7 0 9.5 1.3 13 4 3.5-2.7 8.3-4 13-4V8c-4.7 0-9.5 1.3-13 4Z" stroke-linejoin="round" stroke-linecap="round" />
              <path d="M24 12v25" />
            </svg>
          </span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-services-head {
  max-width: 40rem;
  margin-bottom: 3rem;
}
.pv-services-head h2 {
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
}
.pv-services-head .pv-script {
  font-size: 1.25em;
}

.pv-services-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

.pv-service-card {
  padding: 2rem 1.75rem;
}
.pv-service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 999px;
  background: var(--pv-bg-alt);
  color: var(--pv-accent);
  margin-bottom: 1.25rem;
}
.pv-service-icon svg {
  width: 1.7rem;
  height: 1.7rem;
}
.pv-service-card h3 {
  font-size: 1.15rem;
  margin-bottom: 0.65rem;
}
.pv-service-card p {
  color: var(--pv-ink-soft);
  font-size: 0.96rem;
}

@media (min-width: 640px) {
  .pv-services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1100px) {
  .pv-services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
