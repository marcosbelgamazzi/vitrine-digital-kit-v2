/**
 * Faixa contínua com o que já entregamos em projetos reais (ver
 * src/lib/portfolio.ts) e as tecnologias usadas. Só CSS; pausa no hover.
 */
const capabilities = [
  "Sites institucionais",
  "Landing pages",
  "Checkout com PIX",
  "Painéis administrativos",
  "Plataformas SaaS",
  "Aplicativo Android",
  "Assistente com IA",
  "Área do cliente",
  "Integração com WhatsApp",
  "SEO técnico",
  "Next.js",
  "TypeScript",
];

export function CapabilitiesMarquee() {
  const loop = [...capabilities, ...capabilities];

  return (
    <section
      aria-label="O que já entregamos"
      className="relative overflow-hidden border-y border-brand-white/10 bg-brand-navy py-6"
    >
      <ul className="sr-only">
        {capabilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div
        aria-hidden="true"
        className="group flex [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap text-lg font-medium text-brand-white/50 transition-colors hover:text-brand-white sm:text-xl"
            >
              {item}
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-violet" fill="currentColor">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
