import type { FaqItem } from "@/lib/faq";

/** Acordeão acessível baseado em <details>; a animação de abertura está em globals.css. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="faq-item group rounded-2xl border border-brand-navy/10 bg-white transition-all duration-300 open:border-brand-violet/30 open:shadow-xl open:shadow-brand-violet/5 hover:border-brand-navy/20"
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl p-5 font-medium text-brand-navy marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:p-6 [&::-webkit-details-marker]:hidden">
            <span className="text-sm tabular-nums text-brand-navy/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">{item.question}</span>
            <span
              aria-hidden="true"
              className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy/5 text-brand-violet transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-brand-violet group-open:to-brand-blue group-open:text-brand-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-6 pl-14 text-sm leading-relaxed text-brand-navy/70 sm:px-6 sm:pl-[3.75rem]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
