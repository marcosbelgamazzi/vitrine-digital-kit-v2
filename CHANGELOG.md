# Changelog

## Fase 00 — Fundação (2026-07-19)

- Inicializado repositório git.
- Scaffold do projeto Next.js (App Router, TypeScript, Tailwind CSS v4,
  ESLint) via `create-next-app`, preservando a documentação existente
  (`README.md`, `PROMPT-MESTRE.md`, `docs/`, `CLAUDE.md`).
- Removidos assets/placeholder padrão do template (`next.svg`, `vercel.svg`,
  etc.) e conteúdo de exemplo da home.
- Criada configuração central de marca/WhatsApp em `src/config/site.ts`
  (`siteConfig`, `buildWhatsAppLink`) para evitar número hardcoded em
  múltiplos componentes.
- Home substituída por placeholder mínimo informando que o projeto está em
  fundação.
- Metadata base do layout atualizada (`lang="pt-BR"`, título/descrição a
  partir do `siteConfig`).
- Documentadas pendências em `docs/PENDENCIAS.md` (logo oficial, tipografia
  Poppins, favicon, conteúdo real de portfólio/sobre, IDs de analytics).
- Validado: `npm run lint`, `tsc --noEmit` e `npm run build` sem erros.

## Fase 01 — Design System (2026-07-19)

- Paleta de marca, tipografia Poppins (`next/font/google`) e tokens Tailwind v4
  (`@theme inline` em `globals.css`) implementados conforme `BRAND-GUIDE.md`.
- Componentes de UI base criados em `src/components/ui/`: `Logo` (placeholder
  do monograma VD), `Button` (variants primary/secondary/ghost), `Container`,
  `SectionHeading`, `PageHero`, `CtaBanner`.
- Header e Footer criados em `src/components/layout/`, navegação centralizada
  em `src/lib/nav.ts`.
- Botão flutuante de WhatsApp criado, usando `buildWhatsAppLink()` de
  `src/config/site.ts`.

## Fase 02 — Home (2026-07-19)

- Home composta pelas 12 seções definidas em `SITE-ARCHITECTURE.md`
  (`src/components/home/`): Hero, ValueProof, Problems, Solution, Benefits,
  ServicesTeaser, SolutionsTeaser, PortfolioTeaser, ProcessTeaser,
  Differentiators, FaqSection, FinalCta.
- QA visual em desktop e mobile via Playwright.

## Fase 03 — Serviços e Soluções (2026-07-19)

- Dados estruturados em `src/lib/services.ts` (9 serviços) e
  `src/lib/solutions.ts` (6 soluções por objetivo de negócio).
- Páginas `/servicos` e `/solucoes` criadas sem duplicação de conteúdo entre
  elas, conforme `SITE-ARCHITECTURE.md`.

## Fase 04 — Portfólio e Cases (2026-07-19)

- Estrutura de dados `CaseStudy` criada em `src/lib/portfolio.ts`, com array
  `caseStudies` intencionalmente vazio (nenhum case real informado ainda).
- Páginas `/portfolio` (lista, com estado vazio tratado) e
  `/portfolio/[slug]` (SSG via `generateStaticParams`, `notFound()` para
  slugs inexistentes) criadas.

## Fase 05 — Como Trabalhamos (2026-07-19)

- Processo de trabalho estruturado em `src/lib/process.ts` (7 etapas).
- Página `/como-trabalhamos` criada com lista numerada das etapas.

## Fase 06 — Orçamento e WhatsApp (2026-07-19)

- Formulário de orçamento inteligente (`src/components/orcamento/budget-form.tsx`)
  com campos completos, geração de mensagem estruturada para o WhatsApp e
  suporte a mensagens contextuais via `?origem=`.
- Página `/orcamento` como Server Component assíncrono lendo `searchParams`.
- Testado ponta a ponta via Playwright, incluindo interceptação do link do
  WhatsApp gerado.

## Fase 07 — Sobre, Contato e FAQ (2026-07-19)

- Páginas `/sobre` e `/contato` criadas com conteúdo honesto (sem inventar
  anos de mercado, equipe ou prêmios).
- Formulário de contato (`src/components/contato/contact-form.tsx`) e FAQ
  reutilizável (`src/components/faq/faq.tsx`, `<details>/<summary>`) criados.

## Fase 08 — SEO e Marketing (2026-07-19)

- Metadata completa (title template, Open Graph, Twitter Card, canonical) via
  `src/lib/seo.ts`, aplicada em todas as rotas.
- JSON-LD (Organization) adicionado ao `layout.tsx`.
- Rotas de convenção `sitemap.ts`, `robots.ts` e `manifest.ts` criadas.

## Fase 09 — Analytics (2026-07-19)

- Componentes de analytics (`src/components/analytics/`) para GA4, GTM e Meta
  Pixel, todos condicionados a variáveis de ambiente (sem IDs reais
  hardcoded).
- Bus de eventos customizado (`src/lib/analytics.ts`) com eventos
  `whatsapp_click`, `budget_start`, `budget_complete`, `portfolio_view`,
  `service_view`, `contact_submit`, `cta_click`.
- `TrackedLink` e `ViewTracker` criados para instrumentar cliques e
  visualizações de página.

## Fase 10 — Performance, Acessibilidade e Segurança (2026-07-19)

- Corrigido problema de hierarquia de headings (`value-proof.tsx`) e de
  contraste WCAG AA insuficiente do eyebrow em fundos claros
  (`section-heading.tsx`), com verificação manual de contraste e captura de
  tela.
- Headers de segurança adicionados via `next.config.ts` (`X-Content-Type-Options`,
  `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).
- `npm audit` avaliado: vulnerabilidades moderadas restritas ao `postcss`
  interno do Next.js; fix automático rebaixaria o Next.js 7 major versions —
  não aplicado, decisão documentada em `docs/PENDENCIAS.md`.

## Fase 11 — QA e Refinamento (2026-07-20)

- Validação responsiva em 8 breakpoints (320/360/390/430/768/1024/1280/1440px)
  na Home e spot-checks em orçamento, serviços, soluções, portfólio, sobre e
  contato.
- Verificados os estados interativos do menu mobile e do acordeão de FAQ (via
  clique real, sem erros de console/hidratação).
- Confirmado HTTP 200 em todas as 9 rotas principais + `sitemap.xml`,
  `robots.txt`, `manifest.webmanifest`, e HTTP 404 correto para slug de
  portfólio inexistente.
- `npm run lint`, `npx tsc --noEmit` e `npm run build` validados sem erros.

## Fase 12 — Produção (2026-07-20)

- Build de produção (`next build` + `next start`) testado localmente: todas
  as rotas respondendo 200 e headers de segurança presentes nas respostas.
- Documentação atualizada: `CHANGELOG.md` (este arquivo) e
  `docs/EXECUTION-CHECKLIST.md` sincronizados com o estado real do projeto.
- Site tecnicamente pronto para deploy. Itens que dependem de material
  externo (domínio de produção, logo oficial, IDs de analytics, cases reais
  de portfólio) permanecem documentados e pendentes em
  `docs/PENDENCIAS.md` — não bloqueiam o deploy, mas devem ser resolvidos
  para a experiência final estar completa.

## Portfólio — LucreFree e ORVIAN (2026-11-19)

- Novos cases reais em `src/lib/portfolio.ts`: LucreFree (plataforma SaaS)
  e ORVIAN (controle financeiro na web e no Android, com a assistente OrvIA),
  com capturas reais em `public/portfolio/`. Campo opcional `appUrl` para o
  link da Google Play.

## Remodelagem visual (2026-11-19)

- Nova linguagem visual dentro do `BRAND-GUIDE.md` (paleta, Poppins, logo
  oficial), sem novas dependências: aurora animada com as cores da marca,
  grade técnica, textura sutil e utilitários em `globals.css`
  (`text-gradient`, `bg-grid`, `bg-noise`, `spotlight-card`).
- Header escuro em vidro que encolhe ao rolar, link ativo, barra de progresso
  de leitura, link "Pular para o conteúdo" e menu mobile em tela cheia
  (fecha com Esc).
- Home: Hero com vitrine 3D (navegador + celular) alternando as capturas
  reais dos projetos e reagindo ao mouse; faixa contínua de capacidades;
  bento grid com medidor animado da performance real (valores centralizados
  em `src/lib/performance.ts`); comparativo "sem estratégia × com a Vitrine
  Digital"; serviços em lista editorial; seletor de objetivos em abas
  acessíveis (setas do teclado); portfólio com mockups e inclinação 3D;
  linha do tempo do processo que se preenche na rolagem; manifesto com
  palavras reveladas na rolagem; FAQ com acordeão animado.
- `PageHero`, `CtaBanner` (com botão magnético e WhatsApp), `Footer`,
  `Button` (tamanhos `md`/`lg`, seta e brilho) e cartões de `/servicos` e
  `/solucoes` atualizados. `/portfolio` passou a usar a mesma vitrine da Home
  (`src/components/portfolio/case-showcase.tsx`).
- Destaques curtos de cada case (`highlights`) movidos para os dados do
  portfólio. `priority` de `next/image` trocado por `preload` (Next.js 16).
- Todas as animações respeitam `prefers-reduced-motion`. Sem rolagem
  horizontal em 320, 390, 768, 1024, 1280 e 1440px.
- Validado: `npm run lint`, `tsc --noEmit` e `npm run build` sem erros.
