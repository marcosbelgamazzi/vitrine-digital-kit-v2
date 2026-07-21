import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

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
    <section className="bg-brand-navy py-20 text-brand-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-brand-white/80">{description}</p>
        )}
        <Button href={href}>{buttonLabel}</Button>
      </Container>
    </section>
  );
}
