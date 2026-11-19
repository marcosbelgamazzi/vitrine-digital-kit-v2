"use client";

import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { buildWhatsAppLink } from "@/config/site";
import { solutions } from "@/lib/solutions";

/**
 * Seletor de objetivos (padrão ARIA de abas, com setas do teclado).
 * Cada objetivo leva ao orçamento ou ao WhatsApp com a origem já preenchida.
 */
export function SolutionPicker() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = solutions[active];

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    let next: number | null = null;
    if (event.key in keys) next = (active + keys[event.key] + solutions.length) % solutions.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = solutions.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const Icon = current.icon;

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div
        role="tablist"
        aria-label="Objetivos"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex flex-col gap-2"
      >
        {solutions.map((solution, index) => {
          const selected = index === active;
          return (
            <button
              key={solution.slug}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                selected
                  ? "border-brand-navy bg-brand-navy text-brand-white shadow-xl shadow-brand-navy/20"
                  : "border-brand-navy/10 bg-white text-brand-navy hover:border-brand-violet/40"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  selected
                    ? "bg-gradient-to-br from-brand-violet to-brand-blue text-brand-white"
                    : "bg-brand-violet/10 text-brand-violet"
                }`}
              >
                <solution.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-medium">{solution.title}</span>
              <span
                aria-hidden="true"
                className={`ml-auto text-lg transition-all duration-300 ${
                  selected ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-50"
                }`}
              >
                →
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative isolate flex min-h-[22rem] flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-brand-navy p-8 text-brand-white sm:p-12"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-80 w-80 animate-aurora rounded-full bg-brand-violet/35 blur-[100px]" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 animate-aurora rounded-full bg-brand-blue/25 blur-[100px] [animation-delay:-8s]" />
          <div className="bg-grid absolute inset-0" />
          <Icon className="absolute -bottom-10 -right-10 h-64 w-64 text-brand-white/[0.04]" />
        </div>

        <div key={current.slug} className="flex animate-[fade-up_0.5s_ease-out] flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral">
            Objetivo {String(active + 1).padStart(2, "0")} de {String(solutions.length).padStart(2, "0")}
          </span>
          <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">{current.title}</h3>
          <p className="max-w-md text-lg font-light text-brand-white/70">{current.description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`/orcamento?origem=home-solucao-${current.slug}`} arrow>
            Quero isso para o meu negócio
          </Button>
          <TrackedLink
            event="whatsapp_click"
            eventParams={{ source: `home-solucao-${current.slug}` }}
            href={buildWhatsAppLink(
              `Olá! Vim pelo site da Vitrine Digital. Meu objetivo é: ${current.title.toLowerCase()}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-brand-white/20 bg-brand-white/5 px-6 py-3 text-sm font-medium text-brand-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Conversar no WhatsApp
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
