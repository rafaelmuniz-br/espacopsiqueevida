<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="pv-footer">
    <div class="pv-container pv-footer-inner">
      <NuxtLink to="/#topo" class="pv-logo">
        <img src="/marca/logo-icon.webp" alt="" class="pv-logo-icon" />
        <span class="pv-logo-text">
          <span class="pv-logo-kicker">ESPAÇO</span>
          <span class="pv-logo-title">Psique <em>e</em> Vida</span>
        </span>
      </NuxtLink>

      <p class="pv-footer-tagline">Psicologia • Neuropsicologia</p>

      <nav class="pv-footer-nav" aria-label="Navegação do rodapé">
        <a href="#espaco">O Espaço</a>
        <a href="#sobre">Sobre</a>
        <a href="#fundadoras">Fundadoras</a>
        <a href="#servicos">Serviços</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#contato">Contato</a>
      </nav>

      <p class="pv-footer-copy">© {{ year }} Espaço Psique e Vida.</p>

      <NuxtLink to="/politicas-e-termos" class="pv-footer-policy">
        Políticas e Termos
      </NuxtLink>

      <a
        href="https://wa.me/5571991055569?text=Ol%C3%A1%2C%20Rafael%21%20Vi%20o%20site%20do%20Espa%C3%A7o%20Psique%20e%20Vida%2C%20que%20voc%C3%AA%20desenvolveu%2C%20e%20gostaria%20de%20saber%20mais%20sobre%20um%20or%C3%A7amento%20para%20o%20meu%20projeto."
        target="_blank"
        rel="noopener"
        class="pv-footer-credit"
      >
        Site desenvolvido por Rafael Muniz
      </a>
    </div>
  </footer>
</template>

<style scoped>
.pv-footer {
  background: var(--pv-bg-alt);
  border-top: 1px solid var(--pv-line);
  padding: 3rem 0 2.25rem;
}
.pv-footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.1rem;
}
.pv-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--pv-ink);
}
.pv-logo-icon {
  height: 2rem;
  width: auto;
}
.pv-logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  text-align: left;
}
.pv-logo-kicker {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: var(--pv-ink-soft);
}
.pv-logo-title {
  font-family: var(--pv-font-display);
  font-size: 1.15rem;
  font-weight: 600;
}
.pv-logo-title em {
  font-style: italic;
  color: var(--pv-accent);
}
.pv-footer-tagline {
  font-size: 0.9rem;
  color: var(--pv-ink-soft);
}
.pv-footer-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  font-size: 0.88rem;
  font-weight: 600;
}
.pv-footer-nav a {
  text-decoration: none;
  color: var(--pv-ink);
}
.pv-footer-nav a:hover {
  color: var(--pv-accent);
}
.pv-footer-copy {
  font-size: 0.8rem;
  color: var(--pv-ink-soft);
  margin-top: 0.5rem;
}
.pv-footer-policy {
  font-size: 0.8rem;
  color: var(--pv-ink-soft);
  text-decoration: none;
  transition: color 0.2s ease;
}
.pv-footer-policy:hover {
  color: var(--pv-accent);
}
.pv-footer-credit {
  font-size: 0.76rem;
  color: var(--pv-ink-soft);
  text-decoration: none;
  opacity: 0.75;
  transition: opacity 0.2s ease, color 0.2s ease;
}
.pv-footer-credit:hover {
  opacity: 1;
  color: var(--pv-accent);
}
</style>
