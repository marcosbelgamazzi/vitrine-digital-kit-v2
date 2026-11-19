import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { buildWhatsAppLink } from "@/config/site";
import { TrackedLink } from "@/components/analytics/tracked-link";

export function CtaBanner({
  title,
  description,
  buttonLabel = "Quero meu site",
  buttonHref = "/orcamento",
  origin,
}: {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Identifica a origem do clique para contextualizar a mensagem no orçamento. */
  origin?: string;
}) {
  const href = origin
    ? `${buttonHref}?origem=${encodeURIComponent(origin)}`
    : buttonHref;

  return (
    <section className="bg-brand-white px-4 py-10 sm:px-6 sm:py-24">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-16 text-brand-white shadow-2xl shadow-brand-violet/20 sm:px-12 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -bottom-1/2 left-1/2 h-[120%] w-[90%] -translate-x-1/2 animate-aurora rounded-full bg-gradient-to-r from-brand-violet/50 via-brand-blue/40 to-brand-coral/25 blur-[100px]" />
          <div className="bg-grid absolute inset-0" />
          <div className="bg-noise absolute inset-0" />
        </div>
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-lg font-light text-brand-white/75">{description}</p>
          )}
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <MagneticButton>
              <Button href={href} arrow size="lg">
                {buttonLabel}
              </Button>
            </MagneticButton>
            <TrackedLink
              event="whatsapp_click"
              eventParams={{ source: origin ? `cta-${origin}` : "cta-banner" }}
              href={buildWhatsAppLink(
                "Olá! Vim pelo site da Vitrine Digital e quero conversar sobre um projeto.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-brand-white/20 bg-brand-white/5 px-8 py-4 text-base font-medium text-brand-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-white/40 hover:bg-brand-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Falar no WhatsApp
            </TrackedLink>
          </div>
        </Container>
      </div>
    </section>
  );
}
