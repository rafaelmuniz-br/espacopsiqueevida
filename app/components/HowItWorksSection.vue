<script setup lang="ts">
const steps = [
  {
    title: 'Acolhimento inicial',
    text: 'O atendimento começa com escuta, vínculo e um espaço seguro. Nesse primeiro momento acolhemos sua história, suas angústias e aquilo que motivou a busca por cuidado psicológico.',
    tagline: 'Cada processo começa pelo acolhimento.',
  },
  {
    title: 'Compreensão da demanda',
    text: 'Buscamos entender o que você está vivendo. Identificamos as queixas principais, o contexto de vida e os aspectos emocionais que precisam de atenção.',
    tagline: 'Entender a demanda é essencial.',
  },
  {
    title: 'Processo terapêutico',
    text: 'O cuidado é pensado de forma individualizada. A partir da escuta clínica, definimos objetivos terapêuticos e conduzimos o acompanhamento de acordo com sua singularidade.',
    tagline: 'Cada atendimento é único.',
  },
  {
    title: 'Sessões de acompanhamento',
    text: 'Os encontros favorecem reflexão, elaboração e desenvolvimento emocional. Ao longo das sessões, trabalhamos sentimentos, pensamentos, comportamentos e estratégias para lidar melhor com o cotidiano.',
    tagline: 'O processo acontece no seu tempo.',
  },
  {
    title: 'Continuidade e cuidado',
    text: 'O vínculo terapêutico é construído com constância e respeito. Ao longo do caminho, revisamos avanços, acolhemos novas demandas e fortalecemos recursos para promover bem-estar e saúde mental.',
    tagline: 'Cuidar da mente também é cuidar da vida.',
  },
]
</script>

<template>
  <section id="como-funciona">
    <div class="pv-container">
      <div class="pv-how-head">
        <p class="pv-kicker pv-reveal" v-reveal>Passo a passo</p>
        <h2 class="pv-reveal" v-reveal="80">
          Como funciona o <span class="pv-script">atendimento psicológico</span>?
        </h2>
      </div>

      <ol class="pv-timeline">
        <li v-for="(s, i) in steps" :key="s.title" class="pv-timeline-item pv-reveal" v-reveal="i * 110">
          <span class="pv-timeline-index">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <p class="pv-timeline-tagline">{{ s.tagline }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.pv-how-head {
  max-width: 42rem;
  margin-bottom: 3.5rem;
}
.pv-how-head h2 {
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
}
.pv-how-head .pv-script {
  font-size: 1.2em;
}

.pv-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}
.pv-timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  padding: 1.6rem 0;
  border-top: 1px solid var(--pv-line);
  align-items: start;
}
.pv-timeline-item:last-child {
  border-bottom: 1px solid var(--pv-line);
}
.pv-timeline-index {
  font-family: var(--pv-font-display);
  font-style: italic;
  font-size: 1.9rem;
  color: var(--pv-accent);
  line-height: 1;
  min-width: 2.75rem;
}
.pv-timeline-item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}
.pv-timeline-item p {
  color: var(--pv-ink-soft);
  font-size: 0.96rem;
  max-width: 40rem;
}
.pv-timeline-item p.pv-timeline-tagline {
  margin-top: 0.6rem;
  font-family: var(--pv-font-display);
  font-style: italic;
  color: var(--pv-accent-dark);
  font-size: 1.02rem;
}

@media (min-width: 640px) {
  .pv-timeline-item {
    grid-template-columns: 4rem 1fr;
  }
}
</style>
