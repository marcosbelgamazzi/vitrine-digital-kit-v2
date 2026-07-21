export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  cover: string;
  gallery: string[];
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: string[];
  url?: string;
};

/**
 * Não inventar clientes, depoimentos ou resultados. Preencher apenas com
 * projetos reais da Vitrine Digital. Ver docs/PENDENCIAS.md para o restante
 * do backlog de cases.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "festa-sao-sebastiao",
    name: "6ª Festa do Padroeiro São Sebastião",
    category: "Plataforma Digital para Evento",
    summary:
      "Plataforma oficial da Festa do Padroeiro São Sebastião, com venda de cartelas e ingressos, área do cliente, painel administrativo e checkout com PIX.",
    description:
      "Site oficial da 6ª Festa do Padroeiro São Sebastião (Rolim de Moura/RO), organizada pela Comissão Paroquial de Eventos. Vai além de uma landing page: reúne divulgação do evento, vendas online (cartelas de bingo e churrasco antecipado) com checkout e geração de PIX, área do cliente para consulta de pedidos e uma área administrativa dedicada à gestão do evento.",
    cover: "/portfolio/festa-sao-sebastiao/cover.png",
    gallery: [
      "/portfolio/festa-sao-sebastiao/mobile.png",
      "/portfolio/festa-sao-sebastiao/checkout-pix.png",
      "/portfolio/festa-sao-sebastiao/central-cliente.png",
      "/portfolio/festa-sao-sebastiao/cartelas.png",
      "/portfolio/festa-sao-sebastiao/painel-admin.png",
    ],
    challenge:
      "Centralizar em um único canal toda a operação de um evento paroquial de grande porte: divulgação, venda antecipada de cartelas e churrasco, controle de pedidos dos compradores e gestão administrativa — que antes dependia de canais fragmentados.",
    solution:
      "Plataforma multipágina com áreas protegidas por login para clientes e para a organização, catálogo de produtos com checkout individual (nome, CPF, quantidade e horário de retirada) e geração de PIX, além de contagem regressiva, programação, enquete e captação para o grupo VIP no WhatsApp. Totalmente responsivo: no celular o menu colapsa em hambúrguer, os cards se reorganizam em coluna única e o checkout mantém todos os campos funcionais, sem perda de funcionalidade em relação ao desktop.",
    features: [
      "Checkout por produto com geração de PIX",
      "Central do cliente (login por CPF + WhatsApp) para consultar pedidos, pagamentos e QR Code",
      "Painel administrativo dedicado para gestão do evento",
      "Venda de cartelas de bingo (física e digital)",
      "Contagem regressiva e programação do evento",
      "Enquete oficial com cadastro de participantes",
      "Captação para Grupo VIP no WhatsApp",
      "Página de doações",
      "Galeria de fotos, vídeos incorporados e mapa de localização",
    ],
    technologies: [],
    results: [],
    url: "https://www.festasaosebastiao.com.br",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
