// Estado do menu hambúrguer mobile compartilhado entre SiteHeader (que o
// controla) e outros componentes que precisam reagir a ele — como o botão
// flutuante, que some enquanto o menu está aberto.
export function useMobileMenu() {
  const isOpen = useState('mobile-menu-open', () => false)
  return { isOpen }
}
