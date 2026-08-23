<script setup lang="ts">
const psychologyTags = [
  'Ansiedade',
  'Tristeza e estresse',
  'Luto',
  'Conflitos relacionais',
  'Autoconhecimento',
  'Sofrimento emocional',
]
const neuroTags = [
  'TDAH',
  'TEA',
  'AH/SD',
  'Dislexia',
  'Dificuldades de memória',
  'Dificuldades de aprendizagem',
]
</script>

<template>
  <section id="diferenciais" class="pv-section-alt">
    <div class="pv-container">
      <div class="pv-diff-head">
        <p class="pv-kicker pv-reveal" v-reveal>Entenda a diferença</p>
        <h2 class="pv-reveal" v-reveal="80">
          Psicologia e Neuropsicologia <span class="pv-script">caminham juntas</span>
        </h2>
        <p class="pv-diff-lede pv-reveal" v-reveal="150">
          Não são a mesma coisa, mas se complementam para oferecer um cuidado mais amplo,
          sensível e individualizado — porque cada pessoa é única, e o cuidado também deve ser.
        </p>
      </div>

      <div class="pv-diff-grid">
        <article class="pv-card pv-diff-card pv-reveal" v-reveal="0">
          <h3><img src="/marca/logo-icon.webp" alt="" class="pv-diff-icon" /> Psicologia</h3>
          <p>
            Volta o olhar para as emoções, os pensamentos, os comportamentos, os vínculos e as
            experiências que atravessam a vida.
          </p>
          <ul class="pv-diff-tags">
            <li v-for="t in psychologyTags" :key="t">{{ t }}</li>
          </ul>
        </article>

        <article class="pv-card pv-diff-card pv-reveal" v-reveal="120">
          <h3><img src="/marca/logo-icon.webp" alt="" class="pv-diff-icon" /> Neuropsicologia</h3>
          <p>
            Investiga a relação entre cérebro, cognição e comportamento — diante de dificuldades
            de atenção, memória, aprendizagem, organização e raciocínio, ou suspeitas de
            alterações do neurodesenvolvimento.
          </p>
          <ul class="pv-diff-tags">
            <li v-for="t in neuroTags" :key="t">{{ t }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-diff-head {
  max-width: 42rem;
  margin-bottom: 3rem;
}
.pv-diff-head h2 {
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
  margin-bottom: 1rem;
}
.pv-diff-head .pv-script {
  font-size: 1.2em;
}
.pv-diff-lede {
  color: var(--pv-ink-soft);
  font-size: 1.02rem;
}

.pv-diff-grid {
  display: grid;
  gap: 1.5rem;
}
.pv-diff-card {
  padding: 2.25rem;
}
.pv-diff-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.pv-diff-icon {
  height: 1em;
  width: auto;
}
.pv-diff-card > p {
  color: var(--pv-ink-soft);
  margin-bottom: 1.5rem;
}
.pv-diff-tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.pv-diff-tags li {
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: var(--pv-bg-alt);
  color: var(--pv-accent-dark);
}

@media (min-width: 780px) {
  .pv-diff-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
