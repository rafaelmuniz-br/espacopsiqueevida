<script setup lang="ts">
defineProps<{
  photo: string
  name: string
  role: string
  quote: string
  summary: string
  bio: string
  formation: string[]
  instagram: string
  delay?: number
  open: boolean
}>()

const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <article class="pv-card pv-founder pv-reveal" v-reveal="delay ?? 0">
    <div class="pv-founder-photo">
      <img :src="photo" :alt="`Foto de ${name}, ${role} do Espaço Psique e Vida`" loading="lazy" />
    </div>

    <div class="pv-founder-body">
      <h3>{{ name }}</h3>
      <p class="pv-founder-role">{{ role }}</p>

      <p class="pv-founder-quote">
        <span class="pv-script">“{{ quote }}”</span>
      </p>

      <p class="pv-founder-summary">{{ summary }}</p>

      <div class="pv-founder-expand" :class="{ 'is-open': open }">
        <div class="pv-founder-expand-inner">
          <p class="pv-founder-bio">{{ bio }}</p>
          <ul class="pv-founder-formation">
            <li v-for="f in formation" :key="f">{{ f }}</li>
          </ul>
        </div>
      </div>

      <div class="pv-founder-actions">
        <button type="button" class="pv-founder-toggle" @click="emit('toggle')">
          {{ open ? 'Ler menos' : 'Ler mais' }}
          <svg viewBox="0 0 20 20" :class="{ 'is-open': open }" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M5 7.5 10 12.5 15 7.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <a :href="instagram" target="_blank" rel="noopener" class="pv-founder-ig">@{{ instagram.split('/').filter(Boolean).pop() }}</a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.pv-founder {
  overflow: hidden;
}
.pv-founder-photo {
  aspect-ratio: 3 / 4;
  overflow: hidden;
}
.pv-founder-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.5s ease;
}
.pv-founder:hover .pv-founder-photo img {
  transform: scale(1.03);
}

.pv-founder-body {
  padding: 1.75rem;
}
.pv-founder-body h3 {
  font-size: 1.35rem;
}
.pv-founder-role {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--pv-accent);
  margin: 0.3rem 0 1rem;
}
.pv-founder-quote {
  margin-bottom: 1rem;
}
.pv-founder-quote .pv-script {
  font-size: 1.35rem;
  line-height: 1.25;
}
.pv-founder-summary {
  color: var(--pv-ink-soft);
  font-size: 0.96rem;
  margin-bottom: 0.25rem;
}

.pv-founder-expand {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.pv-founder-expand.is-open {
  grid-template-rows: 1fr;
}
.pv-founder-expand-inner {
  overflow: hidden;
}
.pv-founder-bio {
  color: var(--pv-ink-soft);
  font-size: 0.96rem;
  padding-top: 0.85rem;
  margin-bottom: 1rem;
}
.pv-founder-formation {
  list-style: none;
  margin: 0 0 0.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.pv-founder-formation li {
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: var(--pv-bg-alt);
  color: var(--pv-accent-dark);
}

.pv-founder-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--pv-line);
}
.pv-founder-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  padding: 0;
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--pv-accent-dark);
  cursor: pointer;
}
.pv-founder-toggle svg {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}
.pv-founder-toggle svg.is-open {
  transform: rotate(180deg);
}
.pv-founder-ig {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pv-ink-soft);
  text-decoration: none;
}
.pv-founder-ig:hover {
  color: var(--pv-accent);
}

</style>
