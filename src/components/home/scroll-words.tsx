"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Texto em que cada palavra "acende" conforme o bloco atravessa a tela.
 * O texto completo fica disponível para leitores de tela desde o início.
 * Palavras entre *asteriscos* recebem o gradiente da marca.
 */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

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
        const value = (vh * 0.85 - rect.top) / (vh * 0.5 + rect.height * 0.5);
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
    <p ref={ref} className={className}>
      <span className="sr-only">{text.replaceAll("*", "")}</span>
      <span aria-hidden="true">
        {words.map((raw, i) => {
          const highlighted = raw.startsWith("*");
          const word = raw.replaceAll("*", "");
          const lit = progress * words.length > i;
          return (
            <span
              key={`${word}-${i}`}
              className={`transition-opacity duration-300 ${lit ? "opacity-100" : "opacity-15"} ${
                highlighted ? "text-gradient" : ""
              }`}
            >
              {word}{" "}
            </span>
          );
        })}
      </span>
    </p>
  );
}
