import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
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
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col items-start gap-8 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Serviços"
            title="O que entregamos"
            description="Sites e sistemas prontos para o seu negócio. Do primeiro site a plataformas completas."
          />
          <Button href="/servicos" variant="secondary" arrow>
            Ver todos os serviços
          </Button>
        </div>

        <ol className="flex flex-col border-t border-brand-navy/10">
          {featured.map((service, index) => (
            <li key={service.slug}>
              <Reveal delay={index * 70}>
                <Link
                  href="/servicos"
                  className="group relative flex items-start gap-5 overflow-hidden border-b border-brand-navy/10 px-2 py-8 transition-colors sm:gap-8 sm:px-4"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-0 origin-left scale-x-0 bg-gradient-to-r from-brand-violet/[0.07] to-brand-blue/[0.04] transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <span className="relative pt-1 text-sm font-medium tabular-nums text-brand-navy/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-brand-white transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-blue">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="relative flex flex-1 flex-col gap-1.5">
                    <span className="text-xl font-semibold text-brand-navy sm:text-2xl">
                      {service.title}
                    </span>
                    <span className="text-sm leading-relaxed text-brand-navy/65 sm:text-base">
                      {service.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="relative mt-1 h-6 w-6 shrink-0 text-brand-navy/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-violet"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
