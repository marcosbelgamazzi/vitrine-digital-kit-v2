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
- **Imagens ilustrativas — em uso (fornecidas pelo usuário em 20/11/2026)**:
  `public/images/ilustracoes/pessoas-celular.webp` (Home, seção "É pelo
  celular que seus clientes vão encontrar você") e
  `apresentacao-projeto.webp` (página Sobre). São ilustrações do público e
  do serviço — nunca apresentá-las como clientes, equipe ou depoimentos.
  `public/portfolio/lucrefree/descubra-notebook.webp`: ilustração de pessoa
  com notebook, com a captura real do LucreFree Descubra montada na tela em
  perspectiva (Home, coluna "O que entregamos", e galeria do case LucreFree).
  Ao atualizar o Descubra, gerar de novo a montagem com a tela atual.
- **Fotos reais — pendente**: fotos reais do responsável e de entregas para
  clientes (com autorização) e um depoimento real com nome continuam sendo
  o próximo passo para dar credibilidade (referência analisada:
  sicredi.com.br). Não inventar depoimentos.
- **Sobre/Contato**: não inventar anos de mercado, equipe, prêmios ou
  certificações. Usar apenas o que for fornecido.

## Integrações

- **Domínio de produção**: domínio oficial `vittrinedigital.com.br` (e
  `www.`, que redireciona com 308) agora vinculado ao projeto Vercel
  `vitrine-digital-kit-v2` (conta Belgamazzi Apps). O projeto antigo
  (`vitrine-digital-ro`, outra conta) não recebe mais o domínio e não deve
  ser usado. DNS no Registro.br (registro `A` para `76.76.21.21`, também em
  `www`) conferido em 19/11/2026. HTTPS provisionado pela Vercel. Fluxo de
  publicação documentado em `CLAUDE.md` (seção "Publicação").
- **Variáveis de ambiente no projeto Vercel novo — resolvido**:
  `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_GTM_ID`
  configuradas no projeto `vitrine-digital-kit-v2`. Conferido em 19/11/2026
  no site publicado: `robots.txt` e `sitemap.xml` usam
  `https://vittrinedigital.com.br` e os IDs de GA4/GTM aparecem no HTML.
- **E-mail corporativo (Zoho Mail) — resolvido**: domínio
  `vittrinedigital.com.br` liberado pelo suporte Zoho da organização antiga
  e adicionado com sucesso à conta atual (`Vittrine Digital`). Domínio
  verificado via TXT `zoho-verification=zb37490382.zmverify.zoho.com`.
  Conta `marcos.belgamazzi@vittrinedigital.com.br` criada como
  Superadministrador. Registros de roteamento de e-mail adicionados no
  Registro.br e confirmados propagados: `MX` (`mx.zoho.com` prioridade 10,
  `mx2.zoho.com` prioridade 20, `mx3.zoho.com` prioridade 50), SPF (`TXT`
  `@` → `v=spf1 include:zohomail.com ~all`) e DKIM (`TXT`
  `zmail._domainkey` → chave pública RSA do Zoho). Verificação final no
  Zoho Mail ("Verificar todos os registros") retornou "Todos os registros
  foram notificados" — e-mail está funcional para envio e recebimento.
  Etapa "Migração de e-mails" do assistente Zoho ainda não foi percorrida
  (não solicitada); retomar apenas se o usuário pedir.
  Alias `contato@vittrinedigital.com.br` criado no Zoho (mesma caixa do
  Superadmin) e adicionado a `siteConfig.email` em `src/config/site.ts` —
  exibido com link `mailto:` no rodapé (`src/components/layout/footer.tsx`)
  e na página `/contato` (`src/app/contato/page.tsx`), ao lado do WhatsApp.
- **Analytics — GA4 e GTM configurados**: propriedade GA4 "Vitrine Digital"
  (ID de medição `G-XKMCXFV8ZS`, em `NEXT_PUBLIC_GA_ID`) e container GTM
  "Vitrine Digital" (ID `GTM-P2HCVHQZ`, em `NEXT_PUBLIC_GTM_ID`), ambos
  ativos no projeto Vercel `vitrine-digital-kit-v2` (conferido em
  19/11/2026). Os eventos (`whatsapp_click`, `budget_start`,
  `budget_complete`, `portfolio_view`, `service_view`, `contact_submit`,
  `cta_click`) de `src/lib/analytics.ts` voltam a ser enviados ao GA4.
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
- **Meta Pixel — bloqueado (em análise)**: portfólio empresarial Meta
  Business "Vitrine Digital" (ID `4442878092595392`) criado, mas a Meta
  aplicou uma restrição automática de segurança à conta ("Sua empresa está
  proibida de anunciar ou criar pixels" — suspeita de automação),
  impedindo a criação do Pixel. Rechecado em 27/07/2026: restrição
  continuava ativa. Rechecado novamente em 05/08/2026: restrição segue
  ativa, mas o botão "Pedir análise" (em
  `business-support-home/4442878092595392`) estava disponível — a
  solicitação anterior não tinha sido de fato registrada pela Meta. Nova
  solicitação de revisão enviada com sucesso em 05/08/2026 (após
  verificação humana via reCAPTCHA, feita pelo usuário). Status agora:
  "Em análise", com previsão da própria Meta de resposta em até 4 dias.
  Não há ação adicional possível do nosso lado — depende só da revisão
  manual da Meta. Retomar a criação do Pixel nesse mesmo portfólio assim
  que a restrição for removida — não criar um portfólio novo.

## Performance

- **Lighthouse remedido após a remodelagem — resolvido**: medição de
  19/11/2026 no PageSpeed Insights (celular): Performance 97, Acessibilidade
  97, Boas práticas 100, SEO 100, LCP 1.1s, CLS 0, TBT 20 ms (desktop:
  Performance 98). Valores atualizados em `src/lib/performance.ts` e
  exibidos na Home.

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
