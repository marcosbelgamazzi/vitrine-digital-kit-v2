import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

const homeSlugs = [
  "sites-institucionais",
  "landing-pages",
  "sites-profissionais",
  "sistemas-web-personalizados",
];

export function ServicesTeaser() {
  const featured = homeSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Serviços"
            title="O que entregamos"
            description="Sites e sistemas prontos para o seu negócio. Catálogo completo com mais opções em /servicos."
          />
          <Button href="/servicos" variant="secondary" className="shrink-0">
            Ver todos os serviços
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
