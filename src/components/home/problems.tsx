import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

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
          {problems.map((problem) => (
            <li key={problem} className="flex items-start gap-3 text-brand-white/80">
              <span
                aria-hidden="true"
                className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-coral"
              />
              {problem}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
