import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SolutionPicker } from "@/components/home/solution-picker";

export function SolutionsTeaser() {
  return (
    <section className="relative bg-brand-white py-20 sm:py-28">
      <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
      <Container className="relative flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Soluções"
            title="Qual é o seu objetivo agora?"
            description="Não sabe qual serviço escolher? Comece pelo objetivo do seu negócio — a gente indica o caminho certo."
          />
          <Button href="/solucoes" variant="secondary" arrow className="shrink-0">
            Ver todas as soluções
          </Button>
        </div>
        <SolutionPicker />
      </Container>
    </section>
  );
}
