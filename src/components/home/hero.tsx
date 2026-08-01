import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-brand-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-violet/30 via-transparent to-brand-blue/20"
      />
      <Container className="relative flex flex-col items-start gap-6 py-24 sm:py-32">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-coral">
          Criação de sites e soluções digitais
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Seu negócio merece ser visto.
        </h1>
        <p className="max-w-xl text-lg text-brand-white/80">
          Criamos sites modernos, rápidos e estratégicos para empresas e
          profissionais que querem fortalecer sua presença digital e
          conquistar novas oportunidades.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/orcamento?origem=home-hero">Quero meu site</Button>
          <Button href="/portfolio" variant="secondary" className="border-brand-white/30 text-brand-white hover:bg-brand-white/10">
            Ver projetos
          </Button>
        </div>
        <Link
          href="/como-trabalhamos"
          className="text-sm text-brand-white/70 underline underline-offset-4 transition-colors hover:text-brand-white"
        >
          Ainda não sabe por onde começar? Veja como funciona o processo
        </Link>
      </Container>
    </section>
  );
}
