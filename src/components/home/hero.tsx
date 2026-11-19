import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PointerGlow } from "@/components/ui/pointer-glow";
import { HeroShowcase, type ShowcaseItem } from "@/components/home/hero-showcase";
import { caseStudies } from "@/lib/portfolio";
import { lighthouse } from "@/lib/performance";

const showcase: ShowcaseItem[] = caseStudies.map((item) => ({
  slug: item.slug,
  name: item.name,
  category: item.category,
  cover: item.cover,
  mobile: item.gallery.find((image) => image.endsWith("/mobile.png")),
  domain: item.url?.replace(/^https?:\/\//, ""),
  highlights: item.highlights,
}));

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-brand-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[20%] -top-[30%] h-[90%] w-[70%] animate-aurora rounded-full bg-brand-violet/30 blur-[130px]" />
        <div className="absolute -right-[15%] top-[10%] h-[80%] w-[55%] animate-aurora rounded-full bg-brand-blue/25 blur-[130px] [animation-delay:-7s]" />
        <div className="absolute bottom-[-30%] left-[30%] h-[60%] w-[40%] animate-aurora rounded-full bg-brand-coral/10 blur-[130px] [animation-delay:-12s]" />
        <div className="bg-grid absolute inset-0" />
        <div className="bg-noise absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-navy" />
      </div>
      <PointerGlow className="-z-10" />

      <Container className="grid grid-cols-1 items-center gap-16 [&>*]:min-w-0 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-32 lg:pt-24">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-white/15 bg-brand-white/5 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.16em] text-brand-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-violet to-brand-coral" aria-hidden="true" />
            Criação de sites e soluções digitais
          </span>

          <h1 className="text-[2.4rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
            Seu negócio
            <br />
            merece ser <span className="text-gradient">visto.</span>
          </h1>

          <p className="max-w-xl text-lg font-light leading-relaxed text-brand-white/75 sm:text-xl">
            Criamos sites modernos, rápidos e estratégicos para empresas e
            profissionais que querem fortalecer sua presença digital e
            conquistar novas oportunidades.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <MagneticButton className="w-full sm:w-auto">
              <Button href="/orcamento?origem=home-hero" arrow size="lg" className="w-full sm:w-auto">
                Quero meu site
              </Button>
            </MagneticButton>
            <Button href="/portfolio" variant="light" size="lg">
              Ver projetos
            </Button>
          </div>

          <Link
            href="/como-trabalhamos"
            className="group text-sm text-brand-white/60 transition-colors hover:text-brand-white"
          >
            Ainda não sabe por onde começar?{" "}
            <span className="underline decoration-brand-white/30 underline-offset-4 group-hover:decoration-brand-white">
              Veja como funciona o processo
            </span>
          </Link>

          <dl className="mt-4 grid w-full max-w-lg grid-cols-3 gap-4 border-t border-brand-white/10 pt-6">
            <div>
              <dt className="text-xs text-brand-white/50">Projetos no ar</dt>
              <dd className="text-xl font-semibold sm:text-2xl">{caseStudies.length}</dd>
            </div>
            <div>
              <dt className="text-xs text-brand-white/50">Lighthouse mobile</dt>
              <dd className="text-xl font-semibold sm:text-2xl">{lighthouse.performance}</dd>
            </div>
            <div>
              <dt className="text-xs text-brand-white/50">Plataformas</dt>
              <dd className="text-xl font-semibold sm:text-2xl">Web + App</dd>
            </div>
          </dl>
        </div>

        <HeroShowcase items={showcase} />
      </Container>
    </section>
  );
}
