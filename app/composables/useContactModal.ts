// Número de WhatsApp da clínica — ainda não existe, o cliente vai enviar em
// breve. Placeholder óbvio (DDD 71 = Salvador) até ser substituído.
export const WHATSAPP_NUMBER = '5571900000000'

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
