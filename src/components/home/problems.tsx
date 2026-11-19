import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

/** Cada problema comum tem a resposta correspondente da Vitrine Digital. */
const pairs = [
  {
    problem: "Site desatualizado, lento ou que não passa credibilidade",
    answer: "Site moderno e rápido, com visual que transmite confiança",
  },
  {
    problem: "Baixa visibilidade nos resultados de busca",
    answer: "SEO técnico pensado desde a primeira linha de código",
  },
  {
    problem: "Poucos contatos e oportunidades vindas do digital",
    answer: "Estrutura de conversão com WhatsApp e orçamento integrados",
  },
  {
    problem: "Presença online inconsistente entre redes sociais e site",
    answer: "Uma identidade única, do Instagram ao site e ao Google",
  },
];

/**
 * Seções "problema" e "solução" da arquitetura da Home, apresentadas como
 * um comparativo lado a lado.
 */
export function Problems() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-graphite py-20 text-brand-white sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-violet/60 to-transparent" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="bg-noise absolute inset-0" />
      </div>
      <Container className="flex flex-col gap-14">
        <SectionHeading
          tone="dark"
          center
          eyebrow="O problema — e a solução"
          title="Sem uma presença digital forte, oportunidades passam direto"
          description="A Vitrine Digital une design, tecnologia e estratégia para transformar seu site em um ativo real do seu negócio — não apenas um cartão de visitas online."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-brand-white/10 bg-brand-white/[0.03] p-7 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-white/40">
                Sem estratégia
              </span>
              <ul className="flex flex-col gap-4">
                {pairs.map(({ problem }) => (
                  <li key={problem} className="flex items-start gap-3 text-brand-white/60">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-coral/15 text-brand-coral">
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={120}>
            <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-brand-violet/40 bg-gradient-to-br from-brand-violet/20 via-brand-navy to-brand-blue/15 p-7 shadow-[0_30px_80px_-30px_rgb(108_60_255/0.6)] sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral">
                Com a Vitrine Digital
              </span>
              <ul className="flex flex-col gap-4">
                {pairs.map(({ answer }) => (
                  <li key={answer} className="flex items-start gap-3 text-brand-white">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet to-brand-blue">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {answer}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
