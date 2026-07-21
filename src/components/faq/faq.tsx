import type { FaqItem } from "@/lib/faq";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-navy marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-brand-violet transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-brand-navy/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
