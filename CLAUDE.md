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
- Trabalhe do início ao fim sem pedir confirmação intermediária: implemente, teste, corrija, faça commit, abra PR e deixe o auto-merge concluir a publicação sozinho.
- Só pare e pergunte ao usuário se a decisão for irreversível e genuinamente ambígua (ex: apagar dados reais de produção, trocar domínio, excluir algo sem backup, mudar de provedor de hospedagem/e-mail).
- Ao final de cada tarefa, entregue um resumo direto do que foi feito, testado e publicado — sem relatar o passo a passo do processo.
