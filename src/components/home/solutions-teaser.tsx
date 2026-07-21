import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { solutions } from "@/lib/solutions";

export function SolutionsTeaser() {
  return (
    <section className="bg-brand-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Soluções"
            title="Qual é o seu objetivo agora?"
            description="Organizamos nossa oferta pela necessidade do seu negócio, não só pelo tipo de serviço."
          />
          <Button href="/solucoes" variant="secondary" className="shrink-0">
            Ver todas as soluções
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.slug}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6"
            >
              <h3 className="font-semibold text-brand-navy">{solution.title}</h3>
              <p className="text-sm text-brand-navy/70">{solution.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
