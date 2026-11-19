import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { caseStudies } from "@/lib/portfolio";

/**
 * Lista de cases em destaque (fundo escuro): mockup navegador + celular com
 * inclinação 3D e informações do projeto, alternando os lados.
 * Usada na Home e em /portfolio.
 */
export function CaseShowcase({ origin = "home" }: { origin?: string }) {
  if (caseStudies.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-white/20 p-8 text-brand-white/70">
        Nossos primeiros cases estão em produção. Fale com a gente para saber
        como seu projeto pode ser o próximo.
      </div>
    );
  }

  return (
    <>
      {caseStudies.map((item, index) => {
        const mobile = item.gallery.find((image) => image.endsWith("/mobile.png"));
        const reversed = index % 2 === 1;
        return (
          <Reveal key={item.slug}>
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={reversed ? "lg:order-2" : ""}>
                <TiltCard className="rounded-3xl">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    aria-label={`Ver o case ${item.name}`}
                    className="relative block rounded-3xl border border-brand-white/10 bg-gradient-to-br from-brand-white/10 to-brand-white/[0.02] p-3 shadow-[0_40px_100px_-30px_rgb(108_60_255/0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:p-4"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-brand-graphite">
                      <Image
                        src={item.cover}
                        alt={`Captura de tela do projeto ${item.name}`}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover object-top transition-transform duration-700 group-hover/tilt:scale-105"
                      />
                    </div>
                    {mobile && (
                      <div
                        aria-hidden="true"
                        className={`absolute -bottom-6 w-[24%] min-w-[90px] rounded-[1.3rem] border border-brand-white/20 bg-brand-navy p-1 shadow-2xl [transform:translateZ(60px)] ${
                          reversed ? "-left-4" : "-right-4"
                        }`}
                      >
                        <div className="relative aspect-[9/16] overflow-hidden rounded-[1rem]">
                          <Image src={mobile} alt="" fill sizes="140px" className="object-cover object-top" />
                        </div>
                      </div>
                    )}
                  </Link>
                </TiltCard>
              </div>

              <div className="flex flex-col items-start gap-5">
                <span className="text-sm font-medium tabular-nums text-brand-white/30">
                  {String(index + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral">
                  {item.category}
                </span>
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">{item.name}</h3>
                <p className="max-w-lg text-lg font-light leading-relaxed text-brand-white/70">
                  {item.summary}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.highlights.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-brand-white/10 bg-brand-white/5 px-3 py-1 text-xs text-brand-white/70"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <Button href={`/portfolio/${item.slug}`} arrow>
                    Conhecer o projeto
                  </Button>
                  <Link
                    href={`/orcamento?origem=${origin}-case-${item.slug}`}
                    className="px-3 py-3 text-sm font-medium text-brand-white underline decoration-brand-white/30 underline-offset-4 transition-colors hover:decoration-brand-white"
                  >
                    Quero algo assim
                  </Link>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-brand-white/70 transition-colors hover:text-brand-white"
                    >
                      Visitar o site
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </>
  );
}
