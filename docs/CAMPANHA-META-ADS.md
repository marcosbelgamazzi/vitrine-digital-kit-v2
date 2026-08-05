# Campanha Meta Ads — Rolim de Moura / Cacoal / Ji-Paraná

Plano de campanha de tráfego pago (Meta Ads / Facebook e Instagram) para
divulgar o serviço de criação de sites da Vitrine Digital na região central
de Rondônia. Documento de planejamento — **nada aqui é publicado ou
ativado automaticamente**; serve para deixar tudo pronto para quando a
restrição da conta Meta for removida (ver `PENDENCIAS.md`).

## Status e bloqueio atual

- Conta Meta Business "Vitrine Digital" (ID `4442878092595392`) está
  restrita e não pode criar/veicular anúncios. Pedido de revisão em
  andamento desde 05/08/2026 — ver `PENDENCIAS.md` para status atualizado.
- Sem Pixel ativo ainda, então a campanha inicial deve usar objetivo
  **Tráfego** ou **Mensagens/Cliques para WhatsApp**, não "Conversões"
  (que depende do Pixel). Migrar para Conversões assim que o Pixel for
  criado e tiver volume de eventos suficiente.
- Nenhuma verba será comprometida por mim — inserir cartão/forma de
  pagamento e ativar (publicar) a campanha são etapas que você mesmo
  precisa confirmar/executar no Gerenciador de Anúncios.

## Objetivo da campanha

Gerar pedidos de orçamento (via WhatsApp) para o serviço de criação de
sites, vindos de donos de pequenas e médias empresas na região.

## Segmentação geográfica

Em vez de listar cidade por cidade (o que exclui bairros/distritos
vizinhos), usar segmentação por **raio a partir de um alfinete central**,
que é como o Gerenciador de Anúncios lida melhor com "cidades vizinhas":

- Alfinete 1: **Rolim de Moura** — raio de 40 km (cobre Novo Horizonte do
  Oeste, Alta Floresta D'Oeste, Santa Luzia D'Oeste, Costa Marques
  próximo)
- Alfinete 2: **Cacoal** — raio de 40 km (cobre Espigão D'Oeste,
  Ministro Andreazza, Pimenta Bueno próximo)
- Alfinete 3: **Ji-Paraná** — raio de 40 km (cobre Presidente Médici,
  Nova União, Ouro Preto do Oeste próximo)

Os três raios juntos cobrem a faixa central de Rondônia sem precisar
adivinhar limites municipais exatos. Ajustável depois: se o custo por
clique estiver alto, testar reduzir para 25–30 km; se a base for pequena
demais, aumentar para 50–60 km.

**Idioma:** Português (Brasil).

## Público (segmentação por interesse/comportamento)

- Idade: 25–55 (faixa que decide sobre presença digital do próprio
  negócio)
- Interesses sugeridos: pequenas empresas, empreendedorismo, marketing
  digital, comércio local, Instagram for Business, "criação de sites"
  (como interesse do Meta)
- Comportamento: administradores de Páginas do Facebook (proxy comum
  para "dono de negócio com Página no Facebook")
- Não restringir por gênero.

Não invento números de audiência estimada aqui — isso só aparece dentro
do próprio Gerenciador de Anúncios ao montar o conjunto de anúncios.

## Estrutura sugerida da campanha

- **Objetivo:** Tráfego (ou Interação, se priorizar cliques no WhatsApp
  direto pelo anúncio)
- **Orçamento inicial:** valor de teste, ex. R$ 20–30/dia por 5–7 dias,
  para ter dado suficiente antes de otimizar. (Sugestão de ponto de
  partida comum para testes locais — ajuste conforme seu caçamento
  disponível; não é uma promessa de resultado.)
- **Duração do teste:** 5–7 dias corridos antes de qualquer decisão de
  pausar/escalar.
- **Posicionamento:** Automático (Meta otimiza entre Feed, Stories,
  Reels) para reduzir custo por resultado no início.

## Link de destino

Usar a página `/orcamento` com um parâmetro `origem` — o site já usa essa
convenção (`src/app/orcamento/page.tsx` → `BudgetForm`) para rastrear de
onde veio o lead, tanto no GA4 (`budget_start`/`budget_complete`) quanto
na mensagem que cai no seu WhatsApp.

```
https://vittrinedigital.com.br/orcamento?origem=meta-ads-regiao-central
```

Pequeno ajuste opcional de código (não feito ainda, aviso antes de
mexer): adicionar `"meta-ads-regiao-central": "Anúncio Meta Ads"` em
`src/lib/budget.ts` (`originLabels`) para que a mensagem do WhatsApp já
chegue com "Origem: Anúncio Meta Ads" em vez de omitir a origem.

## Copy do anúncio (3 variações para testar)

**Variação A — direta**
- Título: Seu negócio merece ser visto.
- Texto: Sites modernos, rápidos e feitos sob medida para empresas de
  Rolim de Moura, Cacoal e Ji-Paraná. Sem template genérico — cada site
  reflete a identidade do seu negócio. Fale com a gente e peça seu
  orçamento agora.
- CTA: Solicitar orçamento

**Variação B — dor/problema**
- Título: Seu site ainda não representa o tamanho do seu negócio?
- Texto: Site lento, desatualizado ou você nem tem um site ainda? A
  Vitrine Digital cria presença digital profissional para negócios da
  região central de Rondônia — com contato direto por WhatsApp em cada
  etapa do processo.
- CTA: Falar no WhatsApp

**Variação C — foco local**
- Título: Presença digital para o comércio de Rondônia
- Texto: Ajudamos empresas de Rolim de Moura, Cacoal, Ji-Paraná e região
  a conquistarem mais clientes com um site rápido, profissional e
  otimizado para aparecer no Google. Peça seu orçamento sem compromisso.
- CTA: Saiba mais

Nenhuma das variações usa números de clientes, anos de mercado ou
depoimentos — a `PENDENCIAS.md` deste projeto proíbe inventar esse tipo
de dado, e ainda não há material real disponível para isso.

## Criativos (imagem/vídeo)

- Prints reais do próprio site (`vittrinedigital.com.br`) em desktop e
  mobile lado a lado — já é conteúdo real, sem precisar produzir nada
  novo.
- Se disponível, imagens do case real já publicado no portfólio ("6ª
  Festa do Padroeiro São Sebastião") como prova de trabalho entregue.
- Evitar bancos de imagem genéricos de "pessoa mexendo no notebook" —
  prints reais convertem mais e são mais fáceis de produzir agora.

## Próximos passos

1. Aguardar liberação da restrição da Meta (pedido em análise desde
   05/08/2026).
2. Quando liberado: criar a campanha juntos no Gerenciador de Anúncios
   seguindo esta estrutura — eu ajudo a preencher cada campo, você
   confirma forma de pagamento e publica.
3. Depois de ~5–7 dias de teste, revisar métricas (custo por clique,
   cliques no WhatsApp, orçamentos iniciados via `budget_start`) e
   decidir se escala, ajusta segmentação ou pausa.
4. Assim que o Pixel estiver ativo e com eventos suficientes, considerar
   migrar para objetivo de Conversão.
