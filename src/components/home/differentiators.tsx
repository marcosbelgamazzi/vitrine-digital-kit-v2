import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ScrollWords } from "@/components/home/scroll-words";

const items = [
  {
    title: "Direto com quem constrói",
    description:
      "Atendimento direto com quem constrói o seu site — sem intermediários, do orçamento à publicação.",
  },
  {
    title: "Do tamanho do seu negócio",
    description:
      "Começa simples e ganha novas funcionalidades conforme a necessidade.",
  },
  {
    title: "Feito para você",
    description:
      "Projeto pensado para o seu negócio específico, sem pacotes fechados iguais para todo mundo.",
  },
  {
    title: "Processo transparente",
    description:
      "Comunicação direta pelo WhatsApp em cada etapa, do início ao fim.",
  },
];

export function Differentiators() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-24 text-brand-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-brand-violet/15 blur-[140px]" />
        <div className="bg-grid absolute inset-0" />
      </div>
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" aria-hidden="true" />
            Diferenciais
          </span>
          <h2 className="sr-only">O que muda ao trabalhar com a gente</h2>
          <ScrollWords
            className="max-w-5xl text-3xl font-semibold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl"
            text="Um site não é um cartão de visitas. É o *vendedor* que trabalha pelo seu negócio *24h* por dia — e merece ser construído com o mesmo *cuidado* que você tem com os seus clientes."
          />
        </div>

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-brand-white/10 bg-brand-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <li key={item.title} className="bg-brand-navy">
              <Reveal delay={index * 80} className="h-full">
                <div className="flex h-full flex-col gap-3 p-7 transition-colors duration-500 hover:bg-brand-graphite">
                <span className="text-sm font-medium tabular-nums text-brand-violet">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-white/60">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
