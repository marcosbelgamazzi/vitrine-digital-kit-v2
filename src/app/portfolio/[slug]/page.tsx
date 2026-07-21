import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { caseStudies, getCaseBySlug } from "@/lib/portfolio";
import { pageMetadata } from "@/lib/seo";
import { ViewTracker } from "@/components/analytics/view-tracker";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return { title: "Case não encontrado" };
  }

  return pageMetadata({
    title: item.name,
    description: item.summary,
    path: `/portfolio/${item.slug}`,
  });
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <ViewTracker event="portfolio_view" eventParams={{ slug: item.slug }} />
      <PageHero eyebrow={item.category} title={item.name} description={item.summary} />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <p className="max-w-3xl text-brand-navy/80">{item.description}</p>

          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-brand-navy">Desafio</h2>
              <p className="text-sm text-brand-navy/70">{item.challenge}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-brand-navy">Solução</h2>
              <p className="text-sm text-brand-navy/70">{item.solution}</p>
            </div>
          </div>

          {item.features.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-brand-navy">Funcionalidades</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {item.features.map((feature) => (
                  <li key={feature} className="text-sm text-brand-navy/70">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.technologies.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-brand-navy">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-navy/10 px-3 py-1 text-xs text-brand-navy/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.results.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-brand-navy">Resultados</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {item.results.map((result) => (
                  <li key={result} className="text-sm text-brand-navy/70">
                    • {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-violet underline underline-offset-4"
            >
              Visitar site
            </a>
          )}
        </Container>
      </section>

      <CtaBanner
        title="Quer um resultado parecido para o seu negócio?"
        description="Fale com a gente e vamos entender como aplicar essa estratégia no seu projeto."
        origin={`portfolio-${item.slug}`}
      />
    </>
  );
}
