import type { Metadata } from "next";
import Image from "next/image";
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
          {item.cover && (
            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-brand-navy/10">
              <Image
                src={item.cover}
                alt={`Captura de tela do projeto ${item.name}`}
                fill
                sizes="100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          )}

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

          {item.gallery.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-brand-navy">Galeria</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {item.gallery.map((image) => (
                  <div
                    key={image}
                    className="group relative aspect-video overflow-hidden rounded-xl border border-brand-navy/10"
                  >
                    <Image
                      src={image}
                      alt={`Tela do projeto ${item.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(item.url || item.appUrl) && (
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-violet underline underline-offset-4"
                >
                  Visitar projeto
                </a>
              )}
              {item.appUrl && (
                <a
                  href={item.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-violet underline underline-offset-4"
                >
                  Baixar o app (Google Play)
                </a>
              )}
            </div>
          )}
        </Container>
      </section>

      <CtaBanner
        title="Quer um projeto como este?"
        description="Fale com a gente e vamos entender como aplicar essa estratégia no seu negócio."
        buttonLabel="Quero um projeto como este"
        origin={`portfolio-${item.slug}`}
      />
    </>
  );
}
