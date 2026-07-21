import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/portfolio";

export function PortfolioTeaser() {
  const [featured, ...rest] = caseStudies;

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos reais da Vitrine Digital"
          />
          <Button href="/portfolio" variant="secondary" className="shrink-0">
            Ver portfólio completo
          </Button>
        </div>

        {featured ? (
          <div className="grid gap-8 overflow-hidden rounded-2xl border border-brand-navy/10 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={featured.cover}
                alt={`Captura de tela do projeto ${featured.name}`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                {featured.category}
              </span>
              <h3 className="text-2xl font-semibold text-brand-navy">{featured.name}</h3>
              <p className="text-brand-navy/70">{featured.summary}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={`/portfolio/${featured.slug}`}>Conhecer o projeto</Button>
                <Button
                  href={`/orcamento?origem=home-case-${featured.slug}`}
                  variant="secondary"
                >
                  Quero algo assim
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-brand-navy/20 p-8 text-brand-navy/70">
            Nossos primeiros cases estão em produção. Fale com a gente para
            saber como seu projeto pode ser o próximo.
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6 transition-colors hover:border-brand-violet/40"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                  {item.category}
                </span>
                <h3 className="font-semibold text-brand-navy">{item.name}</h3>
                <p className="text-sm text-brand-navy/70">{item.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
