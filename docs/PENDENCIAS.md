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
  Rechecado em 27/07/2026: erro idêntico ao tentar adicionar o domínio de
  novo. Chamado de suporte enviado por e-mail a support@zohomail.com (o
  formulário interno do painel Zoho retornou erro ao tentar enviar)
  solicitando a liberação do domínio. Aguardando resposta do suporte Zoho.
- **Analytics — GA4 e GTM configurados**: propriedade GA4 "Vitrine Digital"
  criada, ID de medição `G-XKMCXFV8ZS` definido em `NEXT_PUBLIC_GA_ID`
  (produção, Vercel) e confirmado ativo em `https://vittrinedigital.com.br`.
  Container GTM "Vitrine Digital" criado, ID `GTM-P2HCVHQZ` definido em
  `NEXT_PUBLIC_GTM_ID` e confirmado ativo. Os eventos (`whatsapp_click`,
  `budget_start`, `budget_complete`, `portfolio_view`, `service_view`,
  `contact_submit`, `cta_click`) via `src/lib/analytics.ts` já estão sendo
  enviados ao GA4.
- **Google Search Console — configurado (27/07/2026)**: propriedade
  `https://vittrinedigital.com.br/` verificada via meta tag
  (`verification.google` em `src/app/layout.tsx`), sitemap
  (`sitemap.xml`) enviado, e a inspeção de URL confirma "A página está
  indexada", sem ações manuais pendentes. O site aparece normalmente
  via `site:vittrinedigital.com.br`. Não aparece ainda em buscas
  genéricas como "vitrine digital" — termo disputado por outras
  empresas (Tupperware, sinalização digital, outras agências); domínio
  muito novo, sem autoridade/backlinks acumulados. Isso é esperado e
  não é um problema técnico — melhora com tempo, conteúdo e links.
- **Meta Pixel — bloqueado**: portfólio empresarial Meta Business "Vitrine
  Digital" (ID `4442878092595392`) criado, mas a Meta aplicou uma restrição
  automática de segurança à conta ("Sua empresa está proibida de anunciar
  ou criar pixels" — suspeita de automação), impedindo a criação do Pixel.
  Solicitada revisão ("Pedir análise") no painel da Meta; resultado
  pendente. Rechecado em 27/07/2026: restrição continua ativa ("Você não
  pode usar este portfólio empresarial para anunciar"); o botão "Ver
  detalhes" trava carregando indefinidamente no painel, sem exibir prazo
  ou status da análise. Não há ação adicional possível do nosso lado —
  depende só da revisão manual da Meta. Retomar a criação do Pixel nesse
  mesmo portfólio assim que a restrição for removida — não criar um
  portfólio novo.

## Segurança

- **Next.js atualizado (16.2.10 → 16.2.11)**: corrigida vulnerabilidade alta
  "Unauthenticated disclosure of internal Server Function endpoints"
  (GHSA-955p-x3mx-jcvp) no próprio Next.js. Build/lint/TypeScript
  reverificados sem erros após a atualização.
- **`npm audit`**: restam vulnerabilidades altas sem fix seguro disponível,
  todas em dependências internas de ferramentas (não vão para o bundle de
  produção): `postcss` e `sharp` usados internamente pelo próprio `next`
  (`node_modules/next/node_modules/...`), e `brace-expansion`/`minimatch`
  na cadeia do ESLint (`devDependency`, usado só em lint local, não afeta o
  site publicado). O único fix automático (`npm audit fix --force`)
  rebaixaria o Next.js para `9.3.3` (7 major versions abaixo) ou o ESLint
  para uma versão com breaking changes — pior que o problema original, não
  aplicado. Reavaliar quando essas ferramentas publicarem versões com as
  dependências internas atualizadas.
