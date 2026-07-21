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
    tone === "dark" ? "text-brand-white/70" : "text-brand-navy/70";
  // Coral só atinge contraste AA sobre fundos escuros; violeta é usado sobre
  // fundos claros (ver revisão de acessibilidade da Fase 10).
  const eyebrowColor = tone === "dark" ? "text-brand-coral" : "text-brand-violet";

  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-wide ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`${descriptionColor} ${center ? "max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
