export const projectTypeOptions = [
  "Site institucional",
  "Landing page",
  "Site profissional/empresarial",
  "Site para evento",
  "Reformulação de site existente",
  "Sistema web personalizado",
  "Outro",
] as const;

export const featureOptions = [
  "Formulário de contato",
  "Catálogo de produtos ou serviços",
  "Blog",
  "Loja online",
  "Agendamento online",
  "Área de login",
  "Integração com WhatsApp",
  "Outra",
] as const;

export const timelineOptions = [
  "O quanto antes",
  "Até 1 mês",
  "1 a 3 meses",
  "Sem urgência",
] as const;

export const budgetOptions = [
  "Até R$ 1.500",
  "R$ 1.500 a R$ 3.000",
  "R$ 3.000 a R$ 6.000",
  "Acima de R$ 6.000",
  "Prefiro conversar primeiro",
] as const;

const originLabels: Record<string, string> = {
  header: "Menu do site",
  "header-mobile": "Menu do site (mobile)",
  "home-hero": "Início",
  "home-final-cta": "Início",
  servicos: "Página de Serviços",
  solucoes: "Página de Soluções",
  portfolio: "Página de Portfólio",
  "como-trabalhamos": "Página Como Trabalhamos",
  "meta-ads-regiao-central": "Anúncio Meta Ads",
};

export function getOriginLabel(origin?: string | null): string | undefined {
  if (!origin) return undefined;
  if (originLabels[origin]) return originLabels[origin];
  if (origin.startsWith("portfolio-")) return "Página de um case do Portfólio";
  return undefined;
}
