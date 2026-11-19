"use client";

import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Rocket, LifeBuoy } from "lucide-react";

/**
 * Versão resumida (4 macroetapas) das 7 etapas de src/lib/process.ts,
 * só para a Home. A página /como-trabalhamos mantém as 7 etapas completas.
 */
const macroSteps = [
  {
    title: "Descoberta e planejamento",
    description: "Entendemos seu negócio, objetivos e público, e definimos escopo e prazos.",
    icon: Search,
  },
  {
    title: "Estrutura, design e desenvolvimento",
    description: "Organizamos o conteúdo e construímos a interface e o site.",
    icon: PenTool,
  },
  {
    title: "Revisão e publicação",
    description: "Testamos, ajustamos e colocamos o site no ar.",
    icon: Rocket,
  },
  {
    title: "Suporte e evolução",
    description: "Acompanhamos e evoluímos o site depois do lançamento.",
    icon: LifeBuoy,
  },
];

/** Linha do tempo que se preenche conforme a seção atravessa a tela. */
export function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(frame);
    }
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.35;
        const value = (start - rect.top) / (start - end + rect.height * 0.6);
        setProgress(Math.max(0, Math.min(1, value)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ol ref={ref} className="relative grid gap-10 pl-14 lg:grid-cols-4 lg:gap-8 lg:pl-0 lg:pt-16">
      {/* Trilho e preenchimento — vertical no celular, horizontal no desktop */}
      <div aria-hidden="true" className="absolute bottom-2 left-[1.375rem] top-2 w-px bg-brand-navy/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.375rem] lg:h-px lg:w-auto">
        <div
          className="h-full w-full origin-top bg-gradient-to-b from-brand-violet to-brand-blue lg:hidden"
          style={{ transform: `scaleY(${progress})` }}
        />
        <div
          className="hidden h-full w-full origin-left bg-gradient-to-r from-brand-violet to-brand-blue lg:block"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {macroSteps.map((step, index) => {
        const reached = progress >= (index + 0.15) / macroSteps.length;
        return (
          <li key={step.title} className="relative flex flex-col gap-3">
            <span
              className={`absolute -left-14 top-0 flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-500 lg:-top-16 lg:left-0 ${
                reached
                  ? "scale-100 border-transparent bg-gradient-to-br from-brand-violet to-brand-blue text-brand-white shadow-lg shadow-brand-violet/30"
                  : "scale-90 border-brand-navy/15 bg-white text-brand-navy/40"
              }`}
            >
              <step.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span
              className={`text-sm font-semibold tabular-nums transition-colors duration-500 lg:mt-4 ${
                reached ? "text-brand-violet" : "text-brand-navy/30"
              }`}
            >
              Etapa {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
            <p className="text-sm leading-relaxed text-brand-navy/65">{step.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
