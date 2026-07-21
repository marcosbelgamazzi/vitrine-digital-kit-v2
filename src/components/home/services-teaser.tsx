import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export function ServicesTeaser() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title="O que fazemos"
            description="Do primeiro site à evolução contínua do seu projeto digital."
          />
          <Button href="/servicos" variant="secondary" className="shrink-0">
            Ver todos os serviços
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6"
            >
              <h3 className="font-semibold text-brand-navy">{service.title}</h3>
              <p className="text-sm text-brand-navy/70">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
