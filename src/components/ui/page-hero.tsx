import { Container } from "@/components/ui/container";

/**
 * Cabeçalho das páginas internas, com a mesma linguagem visual do Hero da
 * Home (aurora da marca + grade técnica), em versão mais compacta.
 */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-brand-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-1/4 -top-1/2 h-[140%] w-3/4 animate-aurora rounded-full bg-brand-violet/25 blur-[120px]" />
        <div className="absolute -right-1/4 top-0 h-full w-1/2 animate-aurora rounded-full bg-brand-blue/20 blur-[120px] [animation-delay:-6s]" />
        <div className="bg-grid absolute inset-0" />
        <div className="bg-noise absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent" />
      </div>
      <Container className="flex flex-col gap-5 py-20 sm:py-28">
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-white/15 bg-brand-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-coral" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg font-light leading-relaxed text-brand-white/75">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
