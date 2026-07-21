# Pendências

Registro de itens que dependem de decisão ou material externo. Não inventar
valores definitivos para os itens abaixo — usar placeholder discreto e
documentado até que a informação real seja fornecida.

## Assets de marca

- **Logo (monograma VD)**: nenhum arquivo oficial (SVG/PNG) foi fornecido no
  kit. Enquanto isso, usar placeholder textual/tipográfico discreto no Header
  e Footer. Não redesenhar um logo definitivo em CSS. Substituir assim que os
  arquivos oficiais forem entregues.
- **Favicon/manifest/ícones PWA**: o `favicon.ico` atual é o gerado pelo
  `create-next-app`. O `manifest.ts` (Fase 08) usa esse mesmo favicon como
  ícone único — faltam versões 192x192 e 512x512 com a identidade oficial.
  Substituir assim que os assets do logo forem entregues.
- **Imagem Open Graph**: nenhuma imagem oficial (og:image) foi definida —
  as páginas ficam sem preview de imagem ao compartilhar links até que um
  asset seja fornecido.

## Conteúdo real

- **Portfólio/cases**: nenhum projeto real foi informado ainda. A estrutura de
  dados foi criada em `src/lib/portfolio.ts` (Fase 04), mas o array
  `caseStudies` está vazio — preencher apenas com projetos reais, nunca com
  clientes, depoimentos ou resultados fictícios.
- **Sobre/Contato**: não inventar anos de mercado, equipe, prêmios ou
  certificações. Usar apenas o que for fornecido.

## Integrações

- **Domínio de produção**: nenhuma URL oficial foi fornecida. `siteUrl` em
  `src/config/site.ts` usa `NEXT_PUBLIC_SITE_URL` com fallback para
  `http://localhost:3000`, usado em `metadataBase`, `sitemap.ts` e
  `robots.ts`. Configurar a variável de ambiente no Vercel assim que o
  domínio oficial for definido (Fase 12).
- **Analytics**: Google Analytics, GTM e Meta Pixel estão preparados
  estruturalmente (`src/components/analytics/`), mas os scripts só carregam
  se `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID` ou `NEXT_PUBLIC_META_PIXEL_ID`
  forem definidos (ver `.env.example`). Nenhum ID real foi fornecido ainda.
  Os eventos (`whatsapp_click`, `budget_start`, `budget_complete`,
  `portfolio_view`, `service_view`, `contact_submit`, `cta_click`) já estão
  disparando via `src/lib/analytics.ts`, mas não têm efeito até um ID real
  ser configurado.

## Segurança

- **`npm audit`**: reporta 2 vulnerabilidades moderadas de XSS no `postcss`
  usado internamente pelo próprio `next` (`node_modules/next/node_modules/postcss`,
  não uma dependência direta do projeto). O único fix automático
  (`npm audit fix --force`) rebaixaria o Next.js para `9.3.3` (7 major
  versions abaixo), o que é pior que o problema original — não aplicado.
  Reavaliar quando o Next.js publicar uma versão com o postcss interno
  atualizado.
