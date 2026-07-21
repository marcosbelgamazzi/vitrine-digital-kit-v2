import { Container } from "@/components/ui/container";

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
    <section className="bg-brand-navy text-brand-white">
      <Container className="flex flex-col gap-4 py-16 sm:py-20">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-coral">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-lg text-brand-white/80">{description}</p>
        )}
      </Container>
    </section>
  );
}
