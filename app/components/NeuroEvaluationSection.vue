<script setup lang="ts">
const steps = [
  {
    title: 'Entrevista inicial',
    text: 'O processo começa com acolhimento e escuta qualificada. Nesse primeiro momento, buscamos compreender a queixa principal, a história do paciente e os motivos que levaram à avaliação.',
    tagline: 'Cada avaliação começa pela escuta.',
  },
  {
    title: 'Anamnese e histórico',
    text: 'Entendemos o desenvolvimento e o contexto de vida do paciente. São reunidas informações sobre rotina, aprendizagem, saúde, comportamento, desenvolvimento e outros aspectos importantes para compreender o caso de forma ampla.',
    tagline: 'Olhar para a história também faz parte do cuidado.',
  },
  {
    title: 'Aplicação de testes',
    text: 'Nessa etapa investigamos habilidades cognitivas e emocionais. São utilizados instrumentos e atividades que ajudam a avaliar atenção, memória, linguagem, raciocínio, funções executivas, aprendizagem e aspectos emocionais, conforme a necessidade de cada caso.',
    tagline: 'A avaliação é individualizada.',
  },
  {
    title: 'Análise dos resultados',
    text: 'Os dados são organizados e interpretados com cuidado técnico. Após as etapas anteriores, realizamos uma análise integrada das informações obtidas na entrevista, na anamnese, na observação clínica e nos testes aplicados.',
    tagline: 'Cada dado é interpretado dentro da singularidade de cada pessoa.',
  },
  {
    title: 'Devolutiva e orientação',
    text: 'Ao final, compartilhamos os resultados com clareza e sensibilidade. Na devolutiva, apresentamos as conclusões da avaliação, esclarecemos dúvidas e oferecemos orientações e encaminhamentos quando necessários.',
    tagline: 'Avaliar também é compreender para cuidar melhor.',
  },
]
</script>

<template>
  <section id="avaliacao-neuropsicologica">
    <div class="pv-container">
      <div class="pv-how-head">
        <p class="pv-kicker pv-reveal" v-reveal>Passo a passo</p>
        <h2 class="pv-reveal" v-reveal="80">
          Como funciona a <span class="pv-script">Avaliação Neuropsicológica</span>?
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
