# Pendências

Registro de itens que dependem de decisão ou material externo. Não inventar
valores definitivos para os itens abaixo — usar placeholder discreto e
documentado até que a informação real seja fornecida.

## Assets de marca — resolvido

- **Logo (monograma VD)**: assets oficiais do Kit Oficial de Marca
  integrados em `/public/brand/` (SVGs mestres: `symbol.svg`,
  `logo-horizontal.svg`, `logo-horizontal-dark.svg`, `logo-white.svg`,
  `logo-stacked.svg`, `favicon.svg`). `src/components/ui/logo.tsx` usa a
  logo oficial (`tone="light"` → `logo-horizontal-dark.svg` no Header;
  `tone="dark"` → `logo-horizontal.svg` no Footer). Placeholder tipográfico
  removido.
- **Favicon/manifest/ícones PWA**: derivados raster gerados a partir de
  `symbol.svg` (renderização via Chromium headless, sem distorção nem
  efeitos adicionados ao asset-base): `favicon.ico` (multi-tamanho
  16/32/48), `apple-touch-icon.png` (180×180, fundo navy sólido conforme
  exigido pelo iOS), `icon-192.png` e `icon-512.png` (fundo transparente).
  `manifest.ts` e `layout.tsx` (`metadata.icons`) atualizados para
  referenciá-los.
- **Imagem Open Graph**: `og-image.png` (1200×630) gerado com a identidade
  oficial (símbolo + wordmark + slogan, tipografia Poppins), aplicado
  globalmente via `src/lib/seo.ts` (todas as páginas) e `layout.tsx`
  (Home).

## Conteúdo real

- **Portfólio/cases**: primeiro case real cadastrado em `src/lib/portfolio.ts`
  (`caseStudies`): "6ª Festa do Padroeiro São Sebastião" (slug
  `festa-sao-sebastiao`), com galeria real em `public/portfolio/`. Campos
  `technologies` e `results` desse case seguem vazios (não informados) —
  preencher apenas quando os dados reais forem fornecidos. Novos cases devem
  ser adicionados ao mesmo array, sempre com projetos reais, nunca com
  clientes, depoimentos ou resultados fictícios.
- **Sobre/Contato**: não inventar anos de mercado, equipe, prêmios ou
  certificações. Usar apenas o que for fornecido.

## Integrações

- **Domínio de produção — resolvido**: domínio oficial
  `vittrinedigital.com.br` (e `www.`) vinculado ao projeto Vercel
  (`vitrine-digital-ro`), DNS configurado no Registro.br (registro `A`
  para `76.76.21.21`) e propagado. `NEXT_PUBLIC_SITE_URL` definido em
  produção como `https://vittrinedigital.com.br`, usado em `metadataBase`,
  `sitemap.ts` e `robots.ts`. HTTPS provisionado automaticamente pela
  Vercel.
- **E-mail corporativo (Zoho Mail) — bloqueado**: tentativa de configurar
  `contato@vittrinedigital.com.br` via Zoho Mail. O domínio correto
  (`vittrinedigital.com.br`) não pôde ser adicionado ao Zoho Mail Admin
  Console porque o Zoho retorna "domain appears to be already in use in
  another organization" — provavelmente reivindicado em uma tentativa/trial
  anterior esquecida (o `TXT` `zoho-verification=zb63473231.zmverify.zoho.com`
  já presente no DNS antes desta configuração é evidência disso). Não há
  ainda registros `MX`, SPF ou DKIM no DNS — e-mail não está funcional.
  Próximo passo: localizar a organização Zoho antiga que reivindicou o
  domínio (buscar e-mails antigos de verificação Zoho) ou abrir chamado no
  suporte Zoho pedindo a liberação do domínio. Retomar depois.
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
