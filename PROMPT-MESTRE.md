# PROMPT MESTRE — VITRINE DIGITAL v2

Você atuará como arquiteto de software sênior, desenvolvedor full-stack, especialista em UX/UI, CRO, SEO, acessibilidade, performance e segurança.

Construa o site completo da Vitrine Digital, progressivamente, da fundação à produção.

## IDENTIDADE
Nome: Vitrine Digital
Slogan: Seu negócio merece ser visto.
WhatsApp oficial: +55 69 98438-4210
Link-base: https://wa.me/5569984384210

Centralize o WhatsApp em configuração única. Não repita o número manualmente pelos componentes.

## OBJETIVO
Captar clientes, inicialmente pequenas e médias empresas, profissionais autônomos, prestadores de serviços e empreendedores.

Jornada: problema → necessidade → solução → benefícios → credibilidade → portfólio → processo → redução de objeções → conversão.

## STACK
Preferencialmente Next.js estável, App Router, TypeScript, Tailwind CSS, ESLint e Vercel. Priorize recursos nativos e evite dependências desnecessárias.

## IDENTIDADE VISUAL
Paleta: #6C3CFF, #2A6BFF, #FF5A7D, #0D1124, #171B2E e #F3F4F8.
Tipografia: Poppins.
Logo: monograma VD e marca Vitrine Digital. Se os assets oficiais não estiverem disponíveis, documente a pendência e use placeholder discreto; não redesenhe o logo final em CSS.

## ARQUITETURA OFICIAL
1. `/` — Home
2. `/servicos` — Serviços
3. `/solucoes` — Soluções
4. `/portfolio` — Portfólio
5. `/portfolio/[slug]` — Cases dinâmicos
6. `/como-trabalhamos` — Processo
7. `/sobre` — Sobre
8. `/orcamento` — Orçamento inteligente
9. `/contato` — Contato

FAQ deve ser componente reutilizável, inicialmente usado na Home.

## DIFERENÇA ENTRE SERVIÇOS E SOLUÇÕES
Serviços explica o que a empresa executa.
Soluções organiza a oferta pelo problema ou objetivo do cliente.
Não duplique as duas páginas.

## HOME
Criar Header, Hero, prova de valor, problemas, solução, benefícios, serviços, soluções, portfólio real, processo resumido, diferenciais, FAQ, CTA final e Footer.

Hero:
“Seu negócio merece ser visto.”
“Criamos sites modernos, rápidos e estratégicos para empresas e profissionais que querem fortalecer sua presença digital e conquistar novas oportunidades.”

CTAs: “Quero meu site” e “Ver projetos”.

## SERVIÇOS
Sites institucionais, landing pages, sites profissionais, empresariais e para eventos, reformulação, sistemas web personalizados, manutenção, integrações, performance e SEO técnico.

## SOLUÇÕES
Criar jornadas para:
- colocar a empresa na internet;
- modernizar um site;
- gerar contatos e oportunidades;
- criar página de campanha;
- divulgar evento;
- desenvolver solução personalizada.

## PORTFÓLIO
Estrutura orientada a dados com slug, nome, categoria, resumo, descrição, capa, galeria, desafio, solução, funcionalidades, tecnologias, resultados comprovados e URL. Nunca invente clientes, depoimentos ou resultados.

## COMO TRABALHAMOS
Detalhar: descoberta, planejamento, estrutura/conteúdo, design/desenvolvimento, revisão, publicação, suporte/evolução.

## ORÇAMENTO INTELIGENTE
Qualificar sem formulário excessivo: nome, empresa, segmento, projeto, site atual, objetivo, funcionalidades, prazo, investimento se apropriado e observações. Gerar resumo e enviar ao WhatsApp oficial. Criar mensagens contextuais conforme origem.

## SOBRE E CONTATO
Transmitir proximidade e competência sem inventar anos de mercado, equipe, clientes, prêmios ou certificações.

## SEO E MARKETING
Metadata global e por página, canonical, Open Graph, sitemap, robots, manifest, favicon, HTML semântico, headings, URLs amigáveis e dados estruturados apenas quando reais/aplicáveis.

## ANALYTICS
Preparar Google Analytics, GTM se necessário e Meta Pixel sem IDs fictícios. Eventos: whatsapp_click, budget_start, budget_complete, portfolio_view, service_view, contact_submit e cta_click.

## QUALIDADE
Mobile-first real. Validar 320, 360, 390, 430, 768, 1024, 1280 e 1440px.
Revisar Core Web Vitals, contraste, teclado, foco, labels, headings, alt, reduced motion, segredos, env, dependências e headers.

## ROADMAP
FASE 00 — Fundação e documentação.
FASE 01 — Design system e estrutura global.
FASE 02 — Home.
FASE 03 — Serviços e Soluções.
FASE 04 — Portfólio e Cases.
FASE 05 — Como Trabalhamos.
FASE 06 — Orçamento e WhatsApp.
FASE 07 — Sobre, Contato e FAQ.
FASE 08 — SEO e Marketing.
FASE 09 — Analytics.
FASE 10 — Performance, Acessibilidade e Segurança.
FASE 11 — QA e Refinamento.
FASE 12 — Produção.

Antes de cada fase, leia a documentação e analise o código existente. Ao final de cada fase, valide, corrija erros e atualize o CHANGELOG. Não faça alterações massivas sem checkpoints técnicos.

## CONCLUSÃO
Somente considere concluído com lint, TypeScript e build aprovados, rotas funcionais, responsividade validada, SEO básico, acessibilidade, performance e segurança revisadas e documentação atualizada.

Comece pela Fase 00. Analise o diretório e ambiente, apresente um plano curto e execute progressivamente até a produção. Não invente informações reais ausentes; trate-as como configuração ou pendência documentada.
