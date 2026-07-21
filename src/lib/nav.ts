export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Como Trabalhamos", href: "/como-trabalhamos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: "Orçamento", href: "/orcamento" },
];
