import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightGroup } from "@/components/ui/spotlight-group";
import { solutions } from "@/lib/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Soluções",
  description:
    "Encontre a solução certa para o seu momento: colocar sua empresa na internet, modernizar seu site, gerar contatos, divulgar um evento ou criar algo sob medida.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Qual é o seu objetivo agora?"
        description="Organizamos nossa oferta pela necessidade do seu negócio — não apenas pelo tipo de serviço."
      />

      <section className="relative py-12 sm:py-28">
        <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
        <Container className="relative">
          <SpotlightGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 60} className="h-full">
                <div className="spotlight-card group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-7 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-sm font-medium tabular-nums text-brand-navy/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-white transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gradient-to-br group-hover:from-brand-violet group-hover:to-brand-blue">
                    <solution.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-semibold text-brand-navy">{solution.title}</h2>
                  <p className="text-sm leading-relaxed text-brand-navy/65">{solution.description}</p>
                </div>
              </Reveal>
            ))}
          </SpotlightGroup>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-[4%] bottom-[4%] top-[14%] rounded-[2.5rem] bg-gradient-to-br from-brand-violet via-brand-blue to-brand-navy shadow-2xl shadow-brand-violet/25"
              >
                <div className="bg-grid absolute inset-0 rounded-[2.5rem]" />
              </div>
              <Image
                src="/images/ilustracoes/evento-festa-notebook.webp"
                alt="Ilustração de duas pessoas organizando um evento, com o site real da Festa do Padroeiro São Sebastião aberto no notebook"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="relative w-full"
              />
            </div>
          </Reveal>
          <div className="order-1 flex flex-col items-start gap-5 lg:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" aria-hidden="true" />
              Caso real · Divulgar um evento
            </span>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-brand-navy sm:text-4xl">
              Do objetivo à solução no ar
            </h2>
            <p className="text-lg font-light leading-relaxed text-brand-navy/70">
              A 6ª Festa do Padroeiro São Sebastião precisava divulgar o evento e
              vender cartelas e churrasco antecipado. A solução virou uma
              plataforma completa, com checkout com PIX, área do cliente e painel
              administrativo.
            </p>
            <Button href="/portfolio/festa-sao-sebastiao" arrow>
              Ver o case completo
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Vamos encontrar o melhor caminho para o seu negócio?"
        description="Fale com a gente e monte um plano de ação a partir do seu objetivo."
        origin="solucoes"
      />
    </>
  );
}
