# Vitrine Digital — Instruções do Projeto

Este arquivo é lido automaticamente no início de cada sessão. Siga-o antes de qualquer ação.

## Leitura obrigatória, nesta ordem, antes de escrever qualquer código
1. README.md
2. PROMPT-MESTRE.md
3. docs/PROJECT-MASTER.md
4. docs/SITE-ARCHITECTURE.md
5. docs/BRAND-GUIDE.md
6. docs/EXECUTION-CHECKLIST.md

## Como trabalhar
- Execute o projeto progressivamente, da Fase 00 à Fase 12, conforme docs/EXECUTION-CHECKLIST.md. Não pule fases.
- Antes de iniciar uma fase, confirme no checklist o que já foi concluído em sessões anteriores.
- Ao concluir cada fase, marque/atualize o status no EXECUTION-CHECKLIST.md para que a próxima sessão saiba onde parou.
- Siga rigorosamente a identidade visual e as diretrizes de BRAND-GUIDE.md (paleta, tipografia Poppins, logo).
- Siga a arquitetura de rotas definida em SITE-ARCHITECTURE.md. Não duplique conteúdo entre /servicos e /solucoes.
- WhatsApp e demais dados de contato devem ficar centralizados em um único arquivo de configuração, nunca hardcoded em múltiplos componentes.
- Stack: Next.js (App Router) + TypeScript + Tailwind CSS + ESLint, priorizando recursos nativos, evitando dependências desnecessárias.

## Se algo estiver ambíguo ou faltando
- Documente a pendência (ex: assets de logo ausentes) em vez de inventar/redesenhar definitivamente.
- Pergunte ao usuário apenas quando a decisão for irreversível ou bloquear o progresso; caso contrário, tome a decisão mais razoável e siga.

## Modo de trabalho autônomo
- Trabalhe do início ao fim sem pedir confirmação intermediária: implemente, teste, corrija, faça commit, abra PR, faça o merge e confirme o deploy conforme a seção "Publicação".
- Só pare e pergunte ao usuário se a decisão for irreversível e genuinamente ambígua (ex: apagar dados reais de produção, trocar domínio, excluir algo sem backup, mudar de provedor de hospedagem/e-mail).
- Ao final de cada tarefa, entregue um resumo direto do que foi feito, testado e publicado — sem relatar o passo a passo do processo.
- Faça tudo o que estiver ao seu alcance sem esperar o usuário. O que só o usuário pode fazer (acessos, contas, painéis externos, variáveis de ambiente, DNS, decisões de negócio) não interrompe o trabalho: registre em `docs/PENDENCIAS.md` e entregue, ao final, uma lista única de pendências do usuário, com o passo a passo para concluí-las junto com ele.

## Publicação
- Hospedagem: projeto Vercel `vitrine-digital-kit-v2` (conta Belgamazzi Apps), que recebe o domínio `vittrinedigital.com.br`. O projeto antigo da Vercel (`vitrine-digital-ro`, outra conta) não recebe mais o domínio e não deve ser usado.
- A `main` tem um ruleset que bloqueia commits diretos e exige o check "Vercel". Toda mudança vai por PR.
- Fluxo de cada tarefa: crie uma branch, faça as mudanças, rode `npm run lint`, `npx tsc --noEmit` e `npm run build`, abra o PR, faça o merge e confirme o deploy.
- Merge (sem pedir ao usuário): tente `gh pr merge --auto --squash`. Se o GitHub recusar porque o PR já está limpo (checks passados), rode `gh pr merge --squash --delete-branch` direto.
- Confirmação do deploy: depois do merge, espere o check "Vercel" do commit na `main` ficar verde e teste `https://vittrinedigital.com.br` — `/`, `/servicos`, `/solucoes`, `/portfolio` e `/sitemap.xml` devem responder 200.
- Não altere DNS, domínios, variáveis de ambiente nem configurações da Vercel ou do GitHub; se algo assim for necessário, registre em `docs/PENDENCIAS.md` e avise o usuário.
