import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/home/process-timeline";

export function ProcessTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Um processo claro, do início ao fim"
            description="Você sabe exatamente em que etapa o seu projeto está — e fala direto com quem está construindo."
          />
          <Button href="/como-trabalhamos" variant="secondary" arrow className="shrink-0">
            Ver processo completo
          </Button>
        </div>
        <ProcessTimeline />
      </Container>
    </section>
  );
}
