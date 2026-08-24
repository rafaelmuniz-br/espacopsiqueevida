export interface AtendimentoOption {
  label: string
  numero: string
}

// Cada tipo de atendimento é roteado pro WhatsApp da profissional
// responsável: Joana Darc (Neuropsicóloga) ou Viviane Gatis (Psicopedagoga).
// Quem não sabe qual escolher cai com a Joana, que faz a triagem inicial.
export const ATENDIMENTO_OPTIONS: AtendimentoOption[] = [
  { label: 'Neuropsicóloga', numero: '5571988067842' },
  { label: 'Psicopedagoga', numero: '5571987275302' },
  { label: 'Não sei / gostaria de orientação', numero: '5571988067842' },
]

export function whatsappNumberFor(tipoAtendimento: string): string {
  return ATENDIMENTO_OPTIONS.find((o) => o.label === tipoAtendimento)?.numero ?? ATENDIMENTO_OPTIONS[0].numero
}

// Referência de DOM para devolver o foco ao fechar — fica fora do useState
// de propósito: HTMLElement não é serializável no payload SSR e só existe
// no client (sempre criada a partir de um @click, contexto já client-only).
let lastFocusedEl: HTMLElement | null = null

export function useContactModal() {
  const isOpen = useState('contact-modal-open', () => false)

  function openContactModal() {
    if (import.meta.client) lastFocusedEl = document.activeElement as HTMLElement
    isOpen.value = true
  }

  function closeContactModal() {
    isOpen.value = false
    lastFocusedEl?.focus()
    lastFocusedEl = null
  }

  return { isOpen, openContactModal, closeContactModal }
}
