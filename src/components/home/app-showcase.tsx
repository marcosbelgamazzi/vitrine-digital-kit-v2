import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getCaseBySlug } from "@/lib/portfolio";

/** O que o app real do ORVIAN faz (resumo de src/lib/portfolio.ts). */
const appFeatures = [
  "Mesma conta na web e no aplicativo Android",
  "Contas, cartões, orçamentos e metas em um só lugar",
  "Assistente com IA que responde sobre os dados do usuário",
  "Segurança: senhas com hash, sessões curtas e dados isolados",
];

/** Seção de aplicativos, com o case real do ORVIAN (web + Android). */
export function AppShowcase() {
  const app = getCaseBySlug("orvian");
  if (!app?.appUrl) return null;
  const mobile = app.gallery.find((image) => image.endsWith("/mobile.png"));

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/10 blur-[110px]" />
      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto flex max-w-md items-end justify-center gap-5" aria-hidden="true">
            <div className="absolute inset-x-6 bottom-6 top-16 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-violet/15 via-brand-blue/10 to-transparent" />
            {mobile && (
              <div className="w-[58%] -rotate-3 rounded-[2.2rem] border border-brand-navy/10 bg-brand-navy p-2 shadow-2xl shadow-brand-navy/25 transition-transform duration-700 hover:rotate-0">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-white">
                  <Image src={mobile} alt="" fill sizes="(min-width: 1024px) 260px, 60vw" className="object-cover object-top" />
                  <span className="absolute left-1/2 top-2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-brand-navy" />
                </div>
              </div>
            )}
            <div className="mb-10 w-[42%] rotate-3 rounded-[1.8rem] border border-brand-navy/10 bg-white p-4 shadow-xl shadow-brand-navy/10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-violet">Disponível na</p>
              <p className="mt-1 text-lg font-semibold text-brand-navy">Google Play</p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-navy/10">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-violet to-brand-blue" />
              </div>
              <p className="mt-2 text-[11px] text-brand-navy/50">Web + Android, mesma conta</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col items-start gap-8 lg:order-2">
          <SectionHeading
            eyebrow="Aplicativos"
            title="Também criamos aplicativos"
            description={`Além de sites, desenvolvemos plataformas completas com aplicativo. O ${app.name} é um exemplo real: controle financeiro com IA, na web e no Android.`}
          />
          <ul className="flex flex-col gap-3">
            {appFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-brand-navy/80">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-violet to-brand-blue text-brand-white">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={`/portfolio/${app.slug}`} arrow>
              Ver o case {app.name}
            </Button>
            <a
              href={app.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-brand-navy px-5 py-3 text-brand-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-navy/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="#2a6bff" d="M3.6 2.3 13.5 12l-9.9 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" />
                <path fill="#6c3cff" d="m16.8 8.7-3.3 3.3-9.9-9.7c.3-.1.7-.1 1 .1l12.2 6.3z" />
                <path fill="#ff5a7d" d="M16.8 15.3 4.6 21.6c-.3.2-.7.2-1 .1l9.9-9.7 3.3 3.3z" />
                <path fill="#f3f4f8" d="M20.4 13.4 16.8 15.3 13.5 12l3.3-3.3 3.6 1.9c1 .5 1 1.3 0 1.8z" />
              </svg>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-wider text-brand-white/60">Disponível no</span>
                <span className="text-sm font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
