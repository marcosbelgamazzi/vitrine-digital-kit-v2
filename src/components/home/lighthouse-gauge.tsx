"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Medidor circular que se preenche (e conta até o valor) ao entrar na tela. */
export function LighthouseGauge({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(() => setShown(value));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(eased * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  const offset = CIRCUMFERENCE * (1 - shown / 100);

  return (
    <div ref={ref} className="relative h-36 w-36 shrink-0">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="gauge-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6c3cff" />
            <stop offset="100%" stopColor="#2a6bff" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="rgb(243 244 248 / 0.1)" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke="url(#gauge-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-semibold tabular-nums text-brand-white" aria-hidden="true">
          {shown}
        </span>
        <span className="sr-only">{value} de 100</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-white/50">
          {label}
        </span>
      </div>
    </div>
  );
}
