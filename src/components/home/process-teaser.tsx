import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { processSteps } from "@/lib/process";

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
          {processSteps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-brand-violet">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-brand-navy">{step.title}</h3>
              <p className="text-sm text-brand-navy/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
