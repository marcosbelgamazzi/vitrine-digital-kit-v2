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
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-violet/10 blur-[120px]" />
      <Container className="flex flex-col gap-14">
        <SectionHeading
          center
          eyebrow="O problema — e a solução"
          title="Sem uma presença digital forte, oportunidades passam direto"
          description="A Vitrine Digital une design, tecnologia e estratégia para transformar seu site em um ativo real do seu negócio — não apenas um cartão de visitas online."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-brand-navy/10 bg-brand-white p-7 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/40">
                Sem estratégia
              </span>
              <ul className="flex flex-col gap-4">
                {pairs.map(({ problem }) => (
                  <li key={problem} className="flex items-start gap-3 text-brand-navy/60">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-coral/15 text-[#d63a5c]">
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={120}>
            <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-brand-violet/40 bg-brand-navy bg-gradient-to-br from-brand-violet/30 via-brand-navy to-brand-blue/20 p-7 text-brand-white shadow-[0_30px_80px_-30px_rgb(108_60_255/0.6)] sm:p-9">
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
