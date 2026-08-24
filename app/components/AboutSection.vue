<template>
  <section id="sobre">
    <div class="pv-container pv-about-grid">
      <div class="pv-about-media pv-reveal" v-reveal>
        <img
          src="/fotos/escultura.webp"
          alt="Escultura de duas mãos acolhendo um rosto, símbolo do cuidado do Espaço Psique e Vida"
          loading="lazy"
        />
      </div>

      <div class="pv-about-copy">
        <p class="pv-kicker pv-reveal" v-reveal>Sobre a Psique e Vida</p>
        <h2 class="pv-about-title pv-reveal" v-reveal="80">
          Um espaço pensado para <span class="pv-script">acolher</span>
        </h2>

        <p class="pv-about-text pv-reveal" v-reveal="160">
          Às vezes, tudo o que precisamos é de um espaço seguro para respirar, falar sobre o que
          sentimos e ser acolhidos com verdade, cuidado e respeito.
        </p>

        <p class="pv-about-text pv-reveal" v-reveal="220">
          A escuta e o acolhimento são o começo de todo processo terapêutico. É nesse encontro
          sensível que dores encontram voz, sentimentos encontram lugar e a história de cada
          pessoa passa a ser cuidada com atenção e humanidade.
        </p>

        <p class="pv-about-text pv-reveal" v-reveal="280">
          Cuidar da saúde mental também é um gesto de amor-próprio. Você não precisa dar conta
          de tudo sozinho(a). Se você sente que é o momento de cuidar de si, agende seu
          atendimento — será um prazer acolher você.
        </p>

        <blockquote class="pv-about-mission pv-reveal" v-reveal="340">
          <span class="pv-script">"Acolher histórias, compreender singularidades e promover
          caminhos de cuidado e desenvolvimento."</span>
          <cite>— Missão do Espaço Psique e Vida</cite>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pv-about-grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

/* Só no mobile: texto em cima, imagem da escultura embaixo. */
.pv-about-media {
  order: 2;
}
.pv-about-copy {
  order: 1;
}

.pv-about-media img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}
.pv-about-media:hover img {
  transform: scale(1.03);
}

@media (max-width: 859px) {
  .pv-about-media img {
    max-width: 65%;
    margin: 0 auto;
  }
}

.pv-about-title {
  font-size: clamp(1.8rem, 3.4vw, 2.5rem);
  margin-bottom: 1.5rem;
}
.pv-about-title .pv-script {
  font-size: 1.35em;
}

.pv-about-text {
  color: var(--pv-ink-soft);
  font-size: 1.02rem;
  margin-bottom: 1.25rem;
}

.pv-about-mission {
  margin: 1.75rem 0 0;
  padding: 1.5rem 1.75rem;
  background: var(--pv-surface);
  border-left: 3px solid var(--pv-accent);
  border-radius: 0 var(--pv-radius) var(--pv-radius) 0;
  box-shadow: var(--pv-shadow-sm);
}
.pv-about-mission .pv-script {
  font-size: 1.5rem;
  display: block;
  line-height: 1.3;
}
.pv-about-mission cite {
  display: block;
  margin-top: 0.75rem;
  font-style: normal;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pv-ink-soft);
}

@media (min-width: 860px) {
  .pv-about-grid {
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4rem;
  }
  .pv-about-media {
    order: 1;
  }
  .pv-about-copy {
    order: 2;
  }
}
</style>
