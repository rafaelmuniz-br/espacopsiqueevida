<script setup lang="ts">
import { buildWhatsappMessage, buildWhatsappUrl, type ContactFormData } from '~/utils/whatsapp'
import { ATENDIMENTO_OPTIONS, whatsappNumberFor } from '~/composables/useContactModal'

const { isOpen, closeContactModal } = useContactModal()

const panelEl = ref<HTMLElement | null>(null)
const firstFieldEl = ref<HTMLInputElement | null>(null)

const servicos = ATENDIMENTO_OPTIONS.map((o) => o.label)
const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const periodos = ['Sem preferência', 'Manhã', 'Tarde', 'Noite']

function blankForm(): ContactFormData {
  return {
    nome: '',
    telefone: '',
    email: '',
    tipoAtendimento: '',
    modalidade: '',
    dias: [],
    periodo: '',
    observacoes: '',
  }
}

const form = reactive<ContactFormData>(blankForm())

function handleSubmit() {
  const message = buildWhatsappMessage(form)
  const numero = whatsappNumberFor(form.tipoAtendimento)
  window.open(buildWhatsappUrl(numero, message), '_blank', 'noopener')
  closeContactModal()
}

function handleTabTrap(e: KeyboardEvent) {
  if (!panelEl.value) return
  const focusables = panelEl.value.querySelectorAll<HTMLElement>(
    'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  if (!focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

let previousBodyOverflow = ''
watch(isOpen, async (open) => {
  if (!import.meta.client) return
  if (open) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    Object.assign(form, blankForm())
    await nextTick()
    firstFieldEl.value?.focus()
  } else {
    document.body.style.overflow = previousBodyOverflow
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="pv-modal">
      <div
        v-if="isOpen"
        class="pv-modal-overlay"
        @click.self="closeContactModal"
        @keydown.esc="closeContactModal"
      >
        <div
          ref="panelEl"
          class="pv-modal-panel pv-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pv-modal-title"
          @keydown.tab="handleTabTrap"
        >
          <button type="button" class="pv-modal-close" aria-label="Fechar" @click="closeContactModal">
            <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 5l10 10M15 5 5 15" stroke-linecap="round" />
            </svg>
          </button>

          <p class="pv-kicker">Vamos conversar</p>
          <h2 id="pv-modal-title" class="pv-modal-title">
            Agendar <span class="pv-script">atendimento</span>
          </h2>
          <p class="pv-modal-subtitle">
            Preencha os dados abaixo — vamos abrir o WhatsApp com sua mensagem já organizada.
          </p>

          <form class="pv-modal-form" @submit.prevent="handleSubmit">
            <label class="pv-field">
              <span>Nome*</span>
              <input ref="firstFieldEl" v-model="form.nome" required type="text" autocomplete="name" />
            </label>

            <div class="pv-field-row">
              <label class="pv-field">
                <span>WhatsApp*</span>
                <input v-model="form.telefone" required type="tel" autocomplete="tel" placeholder="(71) 90000-0000" />
              </label>
              <label class="pv-field">
                <span>E-mail</span>
                <input v-model="form.email" type="email" autocomplete="email" />
              </label>
            </div>

            <label class="pv-field">
              <span>Tipo de atendimento*</span>
              <select v-model="form.tipoAtendimento" required>
                <option value="" disabled>Selecione uma opção</option>
                <option v-for="s in servicos" :key="s" :value="s">{{ s }}</option>
              </select>
            </label>

            <fieldset class="pv-field">
              <legend>Modalidade*</legend>
              <div class="pv-radio-group">
                <label class="pv-radio">
                  <input v-model="form.modalidade" type="radio" name="modalidade" value="Presencial" required />
                  Presencial
                </label>
                <label class="pv-radio">
                  <input v-model="form.modalidade" type="radio" name="modalidade" value="On-line" required />
                  On-line
                </label>
              </div>
            </fieldset>

            <fieldset class="pv-field">
              <legend>Dias de preferência</legend>
              <div class="pv-checkbox-group">
                <label v-for="d in diasSemana" :key="d" class="pv-checkbox">
                  <input v-model="form.dias" type="checkbox" :value="d" />
                  {{ d }}
                </label>
              </div>
            </fieldset>

            <label class="pv-field">
              <span>Período</span>
              <select v-model="form.periodo">
                <option v-for="p in periodos" :key="p" :value="p">{{ p }}</option>
              </select>
            </label>

            <label class="pv-field">
              <span>Observações</span>
              <textarea v-model="form.observacoes" rows="3" placeholder="Conte um pouco sobre o que está sentindo ou o que motivou a busca por atendimento." />
            </label>

            <button type="submit" class="pv-btn pv-btn-primary pv-modal-submit">Enviar pelo WhatsApp</button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.pv-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgba(74, 53, 39, 0.55);
}

.pv-modal-panel {
  position: relative;
  width: min(94vw, 34rem);
  max-height: min(90vh, 46rem);
  overflow-y: auto;
  padding: 2rem 1.75rem;
}

.pv-modal-title {
  font-size: 1.6rem;
  margin: 0.3rem 0 0.6rem;
}
.pv-modal-title .pv-script {
  font-size: 1.25em;
}
.pv-modal-subtitle {
  color: var(--pv-ink-soft);
  font-size: 0.92rem;
  margin-bottom: 1.5rem;
}

.pv-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border: none;
  background: var(--pv-bg-alt);
  color: var(--pv-ink);
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}
.pv-modal-close:hover {
  background: var(--pv-line);
}

.pv-modal-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.pv-field-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}
@media (min-width: 480px) {
  .pv-field-row {
    grid-template-columns: 1fr 1fr;
  }
}

.pv-field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border: none;
  padding: 0;
  margin: 0;
}
.pv-field > span,
.pv-field > legend {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pv-ink);
  padding: 0;
}

.pv-field input[type='text'],
.pv-field input[type='tel'],
.pv-field input[type='email'],
.pv-field select,
.pv-field textarea {
  font-family: var(--pv-font-body);
  font-size: 0.95rem;
  color: var(--pv-ink);
  background: var(--pv-bg);
  border: 1px solid var(--pv-line);
  border-radius: 12px;
  padding: 0.7rem 0.9rem;
  width: 100%;
}
.pv-field textarea {
  resize: vertical;
  min-height: 4.5rem;
}
.pv-field input:focus-visible,
.pv-field select:focus-visible,
.pv-field textarea:focus-visible {
  outline: 2px solid var(--pv-accent);
  outline-offset: 1px;
}

.pv-radio-group,
.pv-checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.2rem;
}
.pv-radio,
.pv-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.92rem;
  color: var(--pv-ink-soft);
  cursor: pointer;
}
.pv-radio input,
.pv-checkbox input {
  accent-color: var(--pv-accent);
  width: 1.05rem;
  height: 1.05rem;
}

.pv-modal-submit {
  justify-content: center;
  margin-top: 0.4rem;
}

.pv-modal-enter-active,
.pv-modal-leave-active {
  transition: opacity 0.25s ease;
}
.pv-modal-enter-active .pv-modal-panel,
.pv-modal-leave-active .pv-modal-panel {
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
}
.pv-modal-enter-from,
.pv-modal-leave-to {
  opacity: 0;
}
.pv-modal-enter-from .pv-modal-panel,
.pv-modal-leave-to .pv-modal-panel {
  transform: scale(0.96) translateY(8px);
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .pv-modal-enter-active,
  .pv-modal-leave-active,
  .pv-modal-enter-active .pv-modal-panel,
  .pv-modal-leave-active .pv-modal-panel {
    transition: none;
  }
}

@media (max-width: 640px) {
  .pv-modal-panel {
    padding: 1.5rem 1.25rem;
    max-height: 92vh;
  }
}
</style>
