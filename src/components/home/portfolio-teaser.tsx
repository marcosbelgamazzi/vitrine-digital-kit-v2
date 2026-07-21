import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/portfolio";

export function PortfolioTeaser() {
  const featured = caseStudies.slice(0, 3);

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

        {featured.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
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
        ) : (
          <div className="rounded-2xl border border-dashed border-brand-navy/20 p-8 text-brand-navy/70">
            Nossos primeiros cases estão em produção. Fale com a gente para
            saber como seu projeto pode ser o próximo.
          </div>
        )}
      </Container>
    </section>
  );
}
