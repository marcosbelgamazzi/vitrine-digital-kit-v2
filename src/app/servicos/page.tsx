import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { ViewTracker } from "@/components/analytics/view-tracker";

export const metadata = pageMetadata({
  title: "Serviços",
  description:
    "Conheça os serviços da Vitrine Digital: sites institucionais, landing pages, sistemas web, manutenção, integrações, performance e SEO técnico.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <ViewTracker event="service_view" eventParams={{ page: "list" }} />
      <PageHero
        eyebrow="Serviços"
        title="O que fazemos"
        description="Da criação do primeiro site à evolução contínua do seu projeto digital — cada serviço pensado para gerar resultado real."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6"
              >
                <h2 className="font-semibold text-brand-navy">{service.title}</h2>
                <p className="text-sm text-brand-navy/70">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Não sabe por onde começar?"
        description="Conte seu objetivo no orçamento inteligente e a gente indica o melhor caminho."
        origin="servicos"
      />
    </>
  );
}
