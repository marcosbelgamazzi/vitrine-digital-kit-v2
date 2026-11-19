import { Smartphone, Search, Palette, MessageCircle, LifeBuoy, Target } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightGroup } from "@/components/ui/spotlight-group";
import { LighthouseGauge } from "@/components/home/lighthouse-gauge";
import { lighthouse } from "@/lib/performance";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

const tile =
  "spotlight-card group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-7 transition-transform duration-500 hover:-translate-y-1";

function TileTitle({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Smartphone;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/15 to-brand-blue/15 text-brand-violet">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-navy/65">{description}</p>
    </div>
  );
}

/**
 * Benefícios, pilares de valor e prova técnica da Home reunidos em um
 * bento grid. As métricas vêm de src/lib/performance.ts (medição real).
 */
export function Bento() {
  return (
    <section className="relative bg-brand-white py-20 sm:py-28">
      <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
      <Container className="relative flex flex-col gap-12">
        <SectionHeading
          center
          eyebrow="Por que a Vitrine Digital"
          title="Um site bem feito trabalha pelo seu negócio todos os dias"
          description="Design sob medida, tecnologia moderna e estrutura pensada para converter. Sem templates genéricos."
        />

        <SpotlightGroup className="grid gap-4 md:grid-cols-6">
          {/* Performance — prova real */}
          <Reveal className="h-full md:col-span-4">
            <div className="spotlight-card relative flex h-full flex-col gap-8 overflow-hidden rounded-3xl bg-brand-navy p-7 text-brand-white sm:flex-row sm:items-center sm:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-violet/30 blur-[90px]" />
              <LighthouseGauge value={lighthouse.performance} label="Performance" />
              <div className="relative flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral">
                  Performance real
                </span>
                <h3 className="text-2xl font-semibold leading-tight">
                  Performance não é promessa, é o que este site entrega
                </h3>
                <dl className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
                  {[
                    ["Carregamento (LCP)", lighthouse.lcp],
                    ["Instabilidade (CLS)", lighthouse.cls],
                    ["Acessibilidade", lighthouse.accessibility],
                    ["SEO", lighthouse.seo],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs text-brand-white/50">{label}</dt>
                      <dd className="text-2xl font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias que usamos">
                  {stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-brand-white/15 bg-brand-white/5 px-3 py-1 text-xs text-brand-white/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-brand-white/40">
                  Medido no próprio vittrinedigital.com.br via Google PageSpeed Insights (celular) em{" "}
                  {lighthouse.measuredAt}.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Celular */}
          <Reveal className="h-full md:col-span-2" delay={80}>
            <div className={tile}>
              <TileTitle
                icon={Smartphone}
                title="Funciona bem no celular"
                description="Testado em diferentes tamanhos de tela, do celular ao desktop."
              />
              <div aria-hidden="true" className="mt-auto flex items-end justify-center gap-3 pt-2">
                {[
                  "h-20 w-12",
                  "h-24 w-16",
                  "h-16 w-24",
                ].map((size, i) => (
                  <div
                    key={size}
                    className={`${size} rounded-lg border border-brand-navy/15 bg-gradient-to-b from-brand-white to-white p-1 transition-transform duration-500 group-hover:-translate-y-1`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="h-1.5 w-1/2 rounded bg-brand-violet/40" />
                    <div className="mt-1 h-1 w-3/4 rounded bg-brand-navy/10" />
                    <div className="mt-1 h-1 w-2/3 rounded bg-brand-navy/10" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Google */}
          <Reveal className="h-full md:col-span-2" delay={60}>
            <div className={tile}>
              <TileTitle
                icon={Search}
                title="Feito para aparecer no Google"
                description="Estrutura técnica pensada desde o início para ser encontrada nos buscadores (SEO técnico)."
              />
              <div aria-hidden="true" className="mt-auto rounded-2xl border border-brand-navy/10 bg-brand-white p-4">
                <p className="truncate text-[11px] text-brand-navy/50">vittrinedigital.com.br</p>
                <p className="truncate text-sm font-medium text-brand-blue">
                  Vitrine Digital — Seu negócio merece ser visto.
                </p>
                <p className="line-clamp-2 text-[11px] text-brand-navy/60">
                  Criamos sites modernos, rápidos e estratégicos para empresas e profissionais…
                </p>
              </div>
            </div>
          </Reveal>

          {/* Design */}
          <Reveal className="h-full md:col-span-2" delay={120}>
            <div className={tile}>
              <TileTitle
                icon={Palette}
                title="Design sob medida"
                description="Nada de templates genéricos — cada site reflete a identidade do seu negócio."
              />
              <div aria-hidden="true" className="mt-auto flex -space-x-3">
                {["bg-brand-violet", "bg-brand-blue", "bg-brand-coral", "bg-brand-navy", "bg-brand-graphite"].map(
                  (color, i) => (
                    <span
                      key={color}
                      className={`h-11 w-11 rounded-full border-4 border-white ${color} shadow-md transition-transform duration-500 hover:-translate-y-2`}
                      style={{ zIndex: 5 - i }}
                    />
                  ),
                )}
              </div>
            </div>
          </Reveal>

          {/* Conversão */}
          <Reveal className="h-full md:col-span-2" delay={180}>
            <div className={tile}>
              <TileTitle
                icon={Target}
                title="Foco em conversão"
                description="Estrutura pensada para transformar visitas em contatos reais, direto no seu WhatsApp."
              />
              <div aria-hidden="true" className="mt-auto flex flex-col gap-2">
                <span className="w-fit max-w-[85%] self-end rounded-2xl rounded-br-sm bg-[#25D366]/15 px-3 py-2 text-xs text-brand-navy/80">
                  Olá! Vim pelo site e quero um orçamento.
                </span>
                <span className="w-fit rounded-2xl rounded-bl-sm bg-brand-navy/5 px-3 py-2 text-xs text-brand-navy/60">
                  Mensagem já chega com a origem do contato ✓
                </span>
              </div>
            </div>
          </Reveal>

          {/* Comunicação */}
          <Reveal className="h-full md:col-span-3" delay={60}>
            <div className={tile}>
              <TileTitle
                icon={MessageCircle}
                title="Comunicação direta"
                description="Processo transparente, com contato direto pelo WhatsApp em cada etapa — sem intermediários."
              />
            </div>
          </Reveal>

          {/* Suporte */}
          <Reveal className="h-full md:col-span-3" delay={120}>
            <div className={tile}>
              <TileTitle
                icon={LifeBuoy}
                title="Você não fica sozinho depois"
                description="Acompanhamento e evolução contínua do seu site depois que ele vai ao ar."
              />
            </div>
          </Reveal>
        </SpotlightGroup>
      </Container>
    </section>
  );
}
