<script setup lang="ts">
const founders = [
  {
    photo: '/fundadoras/joana-darc.JPG',
    name: 'Joana Darc',
    role: 'Psicóloga · Neuropsicóloga',
    quote: 'Cuidar da mente é acreditar que toda história pode encontrar novos caminhos quando há acolhimento, conhecimento e propósito.',
    summary:
      '30 anos dedicados ao cuidado, à inclusão e à escuta. Acredita que cada história merece ser acolhida com respeito, sensibilidade e um olhar atento para além dos sintomas.',
    bio: 'Com sólida formação em Psicologia, Neuropsicologia, Psicopedagogia, Pedagogia e Orientação Psicanalítica, e especialização em Educação Especial e Inclusiva, desenvolve um trabalho integrado, unindo conhecimento técnico e sensibilidade clínica. Sua atuação contempla crianças, adolescentes, adultos e idosos, realizando avaliação neuropsicológica, reabilitação cognitiva e acompanhamento de pessoas com TDAH, Transtorno do Espectro Autista (TEA), Deficiência Intelectual, Síndrome de Down, Deficiência Visual, além de transtornos e dificuldades de aprendizagem. Também oferece Avaliação Neuropsicológica on-line, com a mesma ética, sigilo profissional e qualidade técnica do atendimento presencial.',
    formation: ['Psicologia', 'Neuropsicologia', 'Psicopedagogia', 'Pedagogia', 'Orientação Psicanalítica', 'Educação Especial e Inclusiva'],
    instagram: 'https://www.instagram.com/joanadarcpsico',
  },
  {
    photo: '/fundadoras/viviane-gatis.JPG',
    name: 'Viviane Gatis',
    role: 'Psicóloga · Psicopedagoga',
    quote: 'Acolher é oferecer um lugar seguro para que cada pessoa reencontre a força que sempre existiu dentro de si.',
    summary:
      'Acredita que o acolhimento é o primeiro passo para toda transformação. Sua prática clínica é guiada pela escuta sensível e pelo respeito à singularidade de cada pessoa.',
    bio: 'Com formação em Psicologia, especialização em Saúde Mental Funcional Integrativa e em Psicopedagogia, integra conhecimento técnico e olhar humanizado para oferecer um cuidado ético, atento e personalizado. Atua no acompanhamento de adolescentes, adultos e idosos, auxiliando pessoas que enfrentam ansiedade, depressão, TDAH, Transtorno do Espectro Autista (TEA) e Transtorno Opositivo Desafiador (TOD). Também desenvolve um trabalho especializado no acolhimento e fortalecimento de mulheres em situação de relacionamentos abusivos, oferecendo suporte para a reconstrução da autonomia e da autoestima.',
    formation: ['Psicologia', 'Saúde Mental Funcional Integrativa', 'Psicopedagogia'],
    instagram: 'https://www.instagram.com/vivianegatispsi',
  },
]

const openStates = ref(founders.map(() => false))
const anyOpen = computed(() => openStates.value.some(Boolean))
</script>

<template>
  <section id="fundadoras" class="pv-section-alt">
    <div class="pv-container">
      <div class="pv-founders-head">
        <p class="pv-kicker pv-reveal" v-reveal>Conheça as idealizadoras</p>
        <h2 class="pv-reveal" v-reveal="80">
          Duas trajetórias, <span class="pv-script">um só propósito</span>
        </h2>
        <p class="pv-founders-lede pv-reveal" v-reveal="150">
          O Espaço Psique e Vida nasceu do encontro de duas psicólogas que acreditam que cuidar
          também é construir caminhos juntos, com sensibilidade, conhecimento e respeito ao
          tempo de cada pessoa.
        </p>
      </div>

      <div class="pv-founders-grid" :class="{ 'has-open': anyOpen }">
        <FounderCard
          v-for="(f, i) in founders"
          :key="f.name"
          v-bind="f"
          :delay="i * 130"
          :open="openStates[i]"
          @toggle="openStates[i] = !openStates[i]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-founders-head {
  max-width: 42rem;
  margin-bottom: 3rem;
}
.pv-founders-head h2 {
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
  margin-bottom: 1rem;
}
.pv-founders-head .pv-script {
  font-size: 1.2em;
}
.pv-founders-lede {
  color: var(--pv-ink-soft);
  font-size: 1.02rem;
}

.pv-founders-grid {
  display: grid;
  gap: 1.75rem;
  align-items: stretch;
}
.pv-founders-grid.has-open {
  align-items: start;
}

@media (min-width: 980px) {
  .pv-founders-grid {
    grid-template-columns: 1fr 1fr;
    max-width: 70%;
    margin: 0 auto;
  }
}
</style>
