import { Search, PenTool, Rocket, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/**
 * Versão resumida (4 macroetapas) das 7 etapas de src/lib/process.ts,
 * só para a Home. A página /como-trabalhamos mantém as 7 etapas completas.
 */
const macroSteps = [
  {
    title: "Descoberta e planejamento",
    description: "Entendemos seu negócio, objetivos e público, e definimos escopo e prazos.",
    icon: Search,
  },
  {
    title: "Estrutura, design e desenvolvimento",
    description: "Organizamos o conteúdo e construímos a interface e o site.",
    icon: PenTool,
  },
  {
    title: "Revisão e publicação",
    description: "Testamos, ajustamos e colocamos o site no ar.",
    icon: Rocket,
  },
  {
    title: "Suporte e evolução",
    description: "Acompanhamos e evoluímos o site depois do lançamento.",
    icon: LifeBuoy,
  },
];

export function ProcessTeaser() {
  return (
    <section className="bg-brand-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Como trabalhamos" title="Um processo claro, do início ao fim" />
          <Button href="/como-trabalhamos" variant="secondary" className="shrink-0">
            Ver processo completo
          </Button>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {macroSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 60}>
              <li className="group flex flex-col gap-2">
                <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-brand-violet">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-brand-navy">{step.title}</h3>
                <p className="text-sm text-brand-navy/70">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
