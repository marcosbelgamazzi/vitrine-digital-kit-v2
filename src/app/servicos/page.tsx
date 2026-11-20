import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightGroup } from "@/components/ui/spotlight-group";
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

      <section className="relative py-12 sm:py-28">
        <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60} className="h-full">
                <div className="spotlight-card group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-7 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-sm font-medium tabular-nums text-brand-navy/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-white transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-blue">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold text-brand-navy">{service.title}</h2>
                  <p className="text-sm leading-relaxed text-brand-navy/65">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </SpotlightGroup>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-navy/15">
              <Image
                src="/images/ilustracoes/loja-celular.webp"
                alt="Ilustração de uma lojista mostrando no celular a plataforma LucreFree, desenvolvida pela Vitrine Digital"
                width={848}
                height={562}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="w-full"
              />
            </div>
          </Reveal>
          <div className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" aria-hidden="true" />
              Para pequenos negócios
            </span>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-brand-navy sm:text-4xl">
              Do primeiro site a uma plataforma completa
            </h2>
            <p className="text-lg font-light leading-relaxed text-brand-navy/70">
              Começamos pelo que o seu negócio precisa hoje e evoluímos junto com
              ele. O LucreFree, por exemplo, é uma plataforma que criamos para
              quem vende pelo Instagram e pelo WhatsApp mostrar seus produtos em
              uma vitrine no celular.
            </p>
            <Button href="/portfolio/lucrefree" arrow>
              Ver o case LucreFree
            </Button>
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
