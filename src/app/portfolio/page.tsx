import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { caseStudies } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";
import { ViewTracker } from "@/components/analytics/view-tracker";

export const metadata = pageMetadata({
  title: "Portfólio",
  description: "Projetos reais desenvolvidos pela Vitrine Digital.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <ViewTracker event="portfolio_view" eventParams={{ page: "list" }} />
      <PageHero
        eyebrow="Portfólio"
        title="Projetos reais da Vitrine Digital"
        description="Cases desenvolvidos com estratégia, design e tecnologia."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((item) => (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 p-6 transition-colors hover:border-brand-violet/40"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-violet">
                    {item.category}
                  </span>
                  <h2 className="font-semibold text-brand-navy">{item.name}</h2>
                  <p className="text-sm text-brand-navy/70">{item.summary}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-brand-navy/20 p-10 text-center text-brand-navy/70">
              Nossos primeiros cases estão em produção. Fale com a gente para
              saber como o seu projeto pode ser o próximo aqui.
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
