export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-brand-white" : "text-brand-navy";
  const descriptionColor =
    tone === "dark" ? "text-brand-white/65" : "text-brand-navy/65";
  // Coral só atinge contraste AA sobre fundos escuros; violeta é usado sobre
  // fundos claros (ver revisão de acessibilidade da Fase 10).
  const eyebrowColor = tone === "dark" ? "text-brand-coral" : "text-brand-violet";
  const dotColor = tone === "dark" ? "bg-brand-coral" : "bg-brand-violet";

  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg font-light leading-relaxed ${descriptionColor} ${center ? "max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
