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
  /** Destaques curtos (selos), resumidos das funcionalidades reais. */
  highlights: string[];
  features: string[];
  technologies: string[];
  results: string[];
  url?: string;
  appUrl?: string;
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
      "/portfolio/festa-sao-sebastiao/enquete.png",
      "/portfolio/festa-sao-sebastiao/produtos.png",
      "/portfolio/festa-sao-sebastiao/cartelas.png",
      "/portfolio/festa-sao-sebastiao/admin-menu.png",
      "/portfolio/festa-sao-sebastiao/pedidos-admin.png",
      "/portfolio/festa-sao-sebastiao/cartelas-admin.png",
    ],
    challenge:
      "Centralizar em um único canal toda a operação de um evento paroquial de grande porte: divulgação, venda antecipada de cartelas e churrasco, controle de pedidos dos compradores e gestão administrativa — que antes dependia de canais fragmentados.",
    solution:
      "Plataforma multipágina com áreas protegidas por login para clientes e para a organização, catálogo de produtos com checkout individual (nome, CPF, quantidade e horário de retirada) e geração de PIX, além de contagem regressiva, programação, enquete e captação para o grupo VIP no WhatsApp. Totalmente responsivo: no celular o menu colapsa em hambúrguer, os cards se reorganizam em coluna única e o checkout mantém todos os campos funcionais, sem perda de funcionalidade em relação ao desktop.",
    highlights: ["Checkout com PIX", "Central do cliente", "Painel administrativo", "Cartelas de bingo"],
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
  {
    slug: "lucrefree",
    name: "LucreFree",
    category: "Plataforma SaaS",
    summary:
      "Plataforma que transforma o link da bio em uma vitrine de produtos com botão de WhatsApp, página de links, estatísticas e QR Code.",
    description:
      "O LucreFree é uma plataforma online para quem divulga e vende pelo Instagram, TikTok, Facebook e WhatsApp. Cada usuário cria sua conta e monta, sem programar, uma vitrine de produtos e/ou uma página de links (link na bio) com endereço próprio em lucrefree.com.br, pensada primeiro para o celular. O projeto inclui cadastro com e-mail ou Google, painel do usuário, planos, programa de indicação e uma área pública para descobrir produtos de pequenos vendedores.",
    cover: "/portfolio/lucrefree/cover.png",
    gallery: [
      "/portfolio/lucrefree/mobile.png",
      "/portfolio/lucrefree/exemplo.png",
      "/portfolio/lucrefree/recursos.png",
      "/portfolio/lucrefree/como-funciona.png",
    ],
    challenge:
      "Pequenos vendedores, prestadores de serviço e afiliados perdem tempo mandando foto e preço de cada produto, um por um, e espalham links soltos na bio. Faltava uma forma simples e gratuita de reunir tudo em um único endereço que já leve o cliente ao WhatsApp.",
    solution:
      "Uma plataforma SaaS com duas ferramentas na mesma conta — vitrine de produtos e página de links — em que o usuário escolhe o endereço, monta a página vendo tudo ao vivo, personaliza cores e layout e acompanha visitas e cliques. O botão \"Tenho interesse\" abre o WhatsApp com o nome do produto já na mensagem.",
    highlights: ["Vitrine com WhatsApp", "Link na bio", "Estatísticas", "QR Code"],
    features: [
      "Vitrine de produtos com foto, preço e botão \"Tenho interesse\" no WhatsApp",
      "Página de links (link na bio) com destaques, seções e agendamento de links",
      "Links de afiliado para Shopee, Mercado Livre, Amazon e outras lojas",
      "Várias páginas por conta, cada uma com endereço, foto e cores próprios",
      "Estatísticas de visitas, cliques e produtos mais clicados",
      "Formulário de captação de contatos com exportação em planilha",
      "QR Code pronto para baixar e domínio próprio",
      "Cadastro com e-mail ou Google, planos e programa de indicação",
    ],
    technologies: [],
    results: [],
    url: "https://www.lucrefree.com.br",
  },
  {
    slug: "orvian",
    name: "ORVIAN",
    category: "Aplicativo Web e Android",
    summary:
      "Plataforma de controle financeiro pessoal e familiar, na web e no Android, com a OrvIA: uma assistente que responde sobre os lançamentos do usuário.",
    description:
      "O ORVIAN organiza contas, cartões, orçamentos e metas em um só lugar, com a mesma conta no site e no aplicativo Android publicado na Google Play. A OrvIA, assistente financeira integrada, responde perguntas em linguagem natural com base nos lançamentos do próprio usuário e propõe lançamentos por texto, que só são gravados após confirmação. O produto está em fase Beta, com acesso gratuito.",
    cover: "/portfolio/orvian/cover.png",
    gallery: [
      "/portfolio/orvian/mobile.png",
      "/portfolio/orvian/plataforma.png",
      "/portfolio/orvian/orvia.png",
    ],
    challenge:
      "Dinheiro espalhado entre contas, cartões e planilhas cansa, e números soltos não explicam nada. O desafio era reunir tudo em um painel único e ajudar a pessoa a entender o que mudou e o que merece atenção, sem expor dados financeiros sensíveis.",
    solution:
      "Plataforma web e aplicativo Android com a mesma conta, painel calculado pelo servidor, importação de extratos e faturas, Espaço Família com convites e permissões separado das finanças pessoais, e uma assistente com IA que só responde com base nos dados do usuário e nunca grava nada sem confirmação. Senhas guardadas apenas como hash argon2, sessões curtas com tokens rotativos e dados isolados por espaço.",
    highlights: ["App Android", "Assistente com IA", "Espaço Família", "Importação de extratos"],
    features: [
      "Receitas e despesas com categorias, busca e filtros por período",
      "Contas e cartões com faturas, limites e compras parceladas",
      "Orçamentos por categoria e metas, como reserva de emergência",
      "Relatórios, projeção de saldo e exportação em CSV",
      "Espaço Família com convites e permissões por membro",
      "OrvIA: perguntas em linguagem natural e lançamentos por texto com confirmação",
      "Importação de faturas (PDF) e extratos (PDF, OFX, CSV)",
      "Aplicativo Android na Google Play com a mesma conta da web",
    ],
    technologies: [],
    results: [],
    url: "https://www.orvian.app.br",
    appUrl: "https://play.google.com/store/apps/details?id=com.orvian.mobile",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((item) => item.slug === slug);
}
