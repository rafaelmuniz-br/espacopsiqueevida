<script setup lang="ts">
interface PolicyClause {
  title: string
  text: string
}
interface PolicyDocument {
  id: string
  title: string
  summary: string
  intro: string
  sections: PolicyClause[]
}

defineProps<{
  documents: PolicyDocument[]
}>()

const openStates = ref<boolean[]>([])

function toggle(i: number) {
  openStates.value[i] = !openStates.value[i]
}
</script>

<template>
  <div class="pv-policy-list">
    <article
      v-for="(doc, i) in documents"
      :id="doc.id"
      :key="doc.id"
      class="pv-card pv-policy-doc pv-reveal"
      v-reveal="i * 100"
    >
      <button
        type="button"
        class="pv-policy-toggle"
        :aria-expanded="!!openStates[i]"
        @click="toggle(i)"
      >
        <span class="pv-policy-toggle-text">
          <span class="pv-policy-toggle-title">{{ doc.title }}</span>
          <span class="pv-policy-toggle-summary">{{ doc.summary }}</span>
        </span>
        <svg
          class="pv-policy-chevron"
          :class="{ 'is-open': openStates[i] }"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path d="M5 7.5 10 12.5 15 7.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <div class="pv-policy-expand" :class="{ 'is-open': openStates[i] }">
        <div class="pv-policy-expand-inner">
          <p class="pv-policy-intro">{{ doc.intro }}</p>

          <ol class="pv-policy-timeline">
            <li v-for="(s, j) in doc.sections" :key="s.title" class="pv-policy-timeline-item">
              <span class="pv-policy-timeline-index">{{ String(j + 1).padStart(2, '0') }}</span>
              <div>
                <h3>{{ s.title }}</h3>
                <p>{{ s.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.pv-policy-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pv-policy-doc {
  overflow: hidden;
  scroll-margin-top: 4.75rem;
}

.pv-policy-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  padding: 1.75rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.pv-policy-toggle-text {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.pv-policy-toggle-title {
  font-family: var(--pv-font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--pv-ink);
}
.pv-policy-toggle-summary {
  font-size: 0.9rem;
  color: var(--pv-ink-soft);
}
.pv-policy-chevron {
  flex-shrink: 0;
  width: 1.2rem;
  height: 1.2rem;
  color: var(--pv-accent-dark);
  transition: transform 0.3s ease;
}
.pv-policy-chevron.is-open {
  transform: rotate(180deg);
}

.pv-policy-expand {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}
.pv-policy-expand.is-open {
  grid-template-rows: 1fr;
}
.pv-policy-expand-inner {
  overflow: hidden;
}

.pv-policy-intro {
  color: var(--pv-ink-soft);
  font-size: 0.98rem;
  padding: 0 1.75rem 0.5rem;
}

.pv-policy-timeline {
  list-style: none;
  margin: 0;
  padding: 0 1.75rem 1.75rem;
}
.pv-policy-timeline-item {
  display: grid;
  grid-template-columns: 2.75rem 1fr;
  gap: 1.1rem;
  padding: 1.1rem 0;
  border-top: 1px solid var(--pv-line);
  align-items: start;
}
.pv-policy-timeline-index {
  font-family: var(--pv-font-display);
  font-style: italic;
  font-size: 1.4rem;
  color: var(--pv-accent);
  line-height: 1.3;
}
.pv-policy-timeline-item h3 {
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.pv-policy-timeline-item p {
  color: var(--pv-ink-soft);
  font-size: 0.94rem;
}

@media (max-width: 480px) {
  .pv-policy-toggle {
    padding: 1.4rem;
  }
  .pv-policy-intro,
  .pv-policy-timeline {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
  .pv-policy-timeline-item {
    grid-template-columns: 2.25rem 1fr;
    gap: 0.85rem;
  }
}
</style>
