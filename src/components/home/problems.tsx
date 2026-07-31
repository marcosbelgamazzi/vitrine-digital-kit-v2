import { AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const problems = [
  "Site desatualizado, lento ou que não passa credibilidade",
  "Baixa visibilidade nos resultados de busca",
  "Poucos contatos e oportunidades vindas do digital",
  "Presença online inconsistente entre redes sociais e site",
];

export function Problems() {
  return (
    <section className="bg-brand-graphite py-16 text-brand-white sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          tone="dark"
          eyebrow="O problema"
          title="Sem uma presença digital forte, oportunidades passam direto"
          description="Muitos negócios ainda enfrentam os mesmos obstáculos online."
        />
        <ul className="flex flex-col gap-4">
          {problems.map((problem, index) => (
            <Reveal key={problem} delay={index * 60}>
              <li className="flex items-start gap-3 text-brand-white/80">
                <AlertCircle
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral"
                />
                {problem}
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
