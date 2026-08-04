/**
 * Domínio de produção ainda não definido — ver docs/PENDENCIAS.md.
 * Configurar NEXT_PUBLIC_SITE_URL no ambiente de produção (Vercel) assim que
 * o domínio oficial estiver disponível.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "Vitrine Digital",
  slogan: "Seu negócio merece ser visto.",
  description:
    "Criamos sites modernos, rápidos e estratégicos para empresas e profissionais que querem fortalecer sua presença digital e conquistar novas oportunidades.",
  whatsapp: {
    display: "(69) 98438-4210",
    international: "+55 69 98438-4210",
    e164: "5569984384210",
  },
  email: "contato@vittrinedigital.com.br",
} as const;

/**
 * Monta o link do WhatsApp oficial. Aceita uma mensagem opcional para
 * gerar links contextuais (ex: origem da página, resumo do orçamento).
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.e164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
