import Image from "next/image";
import { MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sobre",
  description:
    "Conheça a Vitrine Digital: sites modernos, rápidos e estratégicos para empresas e profissionais que querem fortalecer sua presença digital.",
  path: "/sobre",
});

const values = [
  {
    title: "Comunicação direta",
    description:
      "Sem burocracia: você fala com quem está de fato trabalhando no seu projeto, pelo WhatsApp.",
    icon: MessageCircle,
  },
  {
    title: "Trabalho sob medida",
    description:
      "Cada site é pensado a partir do seu negócio, não de um template genérico reaproveitado.",
    icon: Ruler,
  },
  {
    title: "Atenção aos detalhes técnicos",
    description:
      "Performance, responsividade, SEO técnico e acessibilidade fazem parte do processo, não são um extra.",
    icon: ShieldCheck,
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Tecnologia com presença comercial de verdade"
        description="A Vitrine Digital nasceu para ajudar pequenas e médias empresas, profissionais autônomos e empreendedores a terem uma presença digital que realmente gera resultado."
      />

      <section className="py-12 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" aria-hidden="true" />
              No que acreditamos
            </span>
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-brand-navy sm:text-4xl">
              Clareza, velocidade e resultado
            </h2>
            <p className="text-lg font-light leading-relaxed text-brand-navy/70">Acreditamos que um bom site vai além da estética: ele precisa comunicar com clareza, carregar rápido, funcionar bem em qualquer tela e ajudar o seu negócio a ser encontrado. É esse o padrão que buscamos em cada projeto.</p>
          </div>
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-[4%] bottom-0 top-[10%] rounded-[2.5rem] bg-gradient-to-br from-brand-violet via-brand-blue to-brand-navy shadow-2xl shadow-brand-violet/25"
              >
                <div className="bg-grid absolute inset-0 rounded-[2.5rem]" />
              </div>
              <Image
                src="/images/ilustracoes/apresentacao-projeto.webp"
                alt="Ilustração de um projeto sendo apresentado em um notebook para duas pessoas"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="relative w-full"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-white py-12 sm:py-20">
        <Container className="grid gap-8 sm:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 60}>
              <div className="flex flex-col gap-2">
                <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/10 to-brand-blue/10 text-brand-violet">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="font-semibold text-brand-navy">{value.title}</h2>
                <p className="text-sm text-brand-navy/70">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Vamos conversar sobre o seu projeto?"
        description="Conte o que você precisa e veja como podemos ajudar."
        origin="sobre"
      />
    </>
  );
}
