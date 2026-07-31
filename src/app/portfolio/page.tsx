import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { caseStudies } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";
import { ViewTracker } from "@/components/analytics/view-tracker";

export const metadata = pageMetadata({
  title: "Portfólio",
  description: "Projetos reais desenvolvidos pela Vitrine Digital.",
  path: "/portfolio",
});

/**
 * Destaques curtos por case, derivados das funcionalidades reais em
 * src/lib/portfolio.ts (sem inventar nada novo, só resumindo para exibição
 * em selo/etiqueta). Casos sem entrada aqui caem no fallback (primeiras
 * funcionalidades da lista completa).
 */
const highlightsBySlug: Record<string, string[]> = {
  "festa-sao-sebastiao": [
    "Checkout com PIX",
    "Central do cliente",
    "Painel administrativo",
    "Cartelas de bingo",
  ],
};

export default function PortfolioPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <>
      <ViewTracker event="portfolio_view" eventParams={{ page: "list" }} />
      <PageHero
        eyebrow="Portfólio"
        title="Projetos reais da Vitrine Digital"
        description="Cases desenvolvidos com estratégia, design e tecnologia."
      />

      <section className="pb-8 pt-16 sm:pb-10 sm:pt-20">
        <Container className="flex flex-col gap-10">
          {featured ? (
            <div className="group grid overflow-hidden rounded-2xl border border-brand-navy/10 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.cover}
                  alt={`Captura de tela do projeto ${featured.name}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                  {featured.category}
                </span>
                <h2 className="text-2xl font-semibold text-brand-navy">{featured.name}</h2>
                <p className="text-brand-navy/70">{featured.summary}</p>

                <ul className="flex flex-wrap gap-2">
                  {(highlightsBySlug[featured.slug] ?? featured.features.slice(0, 4)).map(
                    (highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-brand-navy/10 bg-brand-white px-3 py-1 text-xs font-medium text-brand-navy/80"
                      >
                        {highlight}
                      </li>
                    ),
                  )}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button href={`/portfolio/${featured.slug}`}>Ver case completo</Button>
                  {featured.url && (
                    <Button href={featured.url} variant="secondary" target="_blank" rel="noopener noreferrer">
                      Visitar projeto
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-brand-navy/20 p-10 text-center text-brand-navy/70">
              Nossos primeiros cases estão em produção. Fale com a gente para
              saber como o seu projeto pode ser o próximo aqui.
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-violet/40 hover:shadow-lg hover:shadow-brand-violet/5"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                    {item.category}
                  </span>
                  <h2 className="font-semibold text-brand-navy">{item.name}</h2>
                  <p className="text-sm text-brand-navy/70">{item.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBanner
        title="Quer que seu projeto seja o próximo case?"
        description="Conte sobre o seu negócio e vamos construir algo com resultado real."
        origin="portfolio"
      />
    </>
  );
}
