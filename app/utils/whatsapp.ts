export interface ContactFormData {
  nome: string
  telefone: string
  email: string
  tipoAtendimento: string
  modalidade: string
  dias: string[]
  periodo: string
  observacoes: string
}

export function buildWhatsappMessage(data: ContactFormData): string {
  const lines = [
    'Olá! Gostaria de agendar um atendimento no Espaço Psique e Vida.',
    '',
    `Nome: ${data.nome}`,
    `WhatsApp: ${data.telefone}`,
  ]

  if (data.email) lines.push(`E-mail: ${data.email}`)

  lines.push(`Tipo de atendimento: ${data.tipoAtendimento}`)
  lines.push(`Modalidade: ${data.modalidade}`)

  if (data.dias.length) lines.push(`Dias de preferência: ${data.dias.join(', ')}`)
  if (data.periodo && data.periodo !== 'Sem preferência') lines.push(`Período: ${data.periodo}`)
  if (data.observacoes) lines.push(`Observações: ${data.observacoes}`)

  return lines.join('\n')
}

export function buildWhatsappUrl(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
