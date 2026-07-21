import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  "Comunicação direta pelo WhatsApp em todas as etapas",
  "Processo transparente, sem surpresas no meio do caminho",
  "Projetos sob medida, sem templates genéricos",
  "Atenção a performance, acessibilidade e SEO técnico desde o início",
];

export function Differentiators() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading eyebrow="Diferenciais" title="O que muda ao trabalhar com a gente" />
        <ul className="flex flex-col gap-4 lg:w-1/2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-brand-navy/80">
              <span
                aria-hidden="true"
                className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-violet"
              />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
