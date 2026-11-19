"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type ShowcaseItem = {
  slug: string;
  name: string;
  category: string;
  cover: string;
  mobile?: string;
  domain?: string;
  highlights: string[];
};

const INTERVAL = 5000;

/**
 * Vitrine 3D do Hero: navegador + celular com capturas reais do portfólio,
 * alternando automaticamente. Inclina conforme o mouse; pausa no hover,
 * quando a aba está oculta e com movimento reduzido.
 */
export function HeroShowcase({ items }: { items: ShowcaseItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    if (paused || items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % items.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, items.length]);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !stage.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = stage.current;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--ry", `${-14 + x * 12}deg`);
      el.style.setProperty("--rx", `${6 - y * 10}deg`);
    });
  }

  function handleLeave() {
    setPaused(false);
    stage.current?.style.removeProperty("--ry");
    stage.current?.style.removeProperty("--rx");
  }

  const active = items[index];
  if (!active) return null;

  return (
    <div
      className="relative [perspective:1600px]"
      onPointerMove={handleMove}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={handleLeave}
    >
      <div
        ref={stage}
        className="relative transition-transform duration-700 ease-out [transform-style:preserve-3d] lg:[transform:rotateY(var(--ry,-14deg))_rotateX(var(--rx,6deg))]"
      >
        {/* Navegador */}
        <Link
          href={`/portfolio/${active.slug}`}
          className="group block overflow-hidden rounded-2xl border border-brand-white/15 bg-brand-graphite shadow-[0_40px_120px_-20px_rgb(108_60_255/0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
          aria-label={`Ver o case ${active.name}`}
        >
          <div className="flex items-center gap-3 border-b border-brand-white/10 bg-brand-navy/80 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-coral/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            </div>
            <div className="flex flex-1 items-center gap-2 truncate rounded-md bg-brand-white/5 px-3 py-1 text-xs text-brand-white/60">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 shrink-0 fill-current">
                <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 1 1 6 0v3H9z" />
              </svg>
              <span className="truncate">{active.domain}</span>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            {items.map((item, i) => (
              <Image
                key={item.slug}
                src={item.cover}
                alt={i === index ? `Captura de tela do projeto ${item.name}` : ""}
                aria-hidden={i !== index}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                preload={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                className={`object-cover object-top transition-all duration-1000 ease-out group-hover:scale-[1.03] ${
                  i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
          </div>
        </Link>

        {/* Celular */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -right-3 w-[27%] min-w-[110px] rounded-[1.6rem] border border-brand-white/20 bg-brand-navy p-1.5 shadow-2xl shadow-brand-navy/60 sm:-right-8 lg:[transform:translateZ(80px)]"
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-brand-graphite">
            {items.map((item, i) =>
              item.mobile ? (
                <Image
                  key={item.slug}
                  src={item.mobile}
                  alt=""
                  fill
                  sizes="180px"
                  className={`object-cover object-top transition-opacity duration-1000 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : null,
            )}
            <span className="absolute left-1/2 top-1.5 h-1.5 w-12 -translate-x-1/2 rounded-full bg-brand-navy" />
          </div>
        </div>

        {/* Destaques flutuantes */}
        <div
          aria-hidden="true"
          className="absolute -left-4 top-1/3 hidden flex-col gap-2 sm:flex lg:-left-10 lg:[transform:translateZ(120px)]"
        >
          {active.highlights.slice(0, 2).map((highlight, i) => (
            <span
              key={`${active.slug}-${highlight}`}
              style={{ animationDelay: `${i * -2}s` }}
              className="w-fit animate-float rounded-full border border-brand-white/15 bg-brand-navy/80 px-3 py-1.5 text-xs font-medium text-brand-white shadow-xl backdrop-blur-md"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-violet to-brand-blue align-middle" />
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="mt-16 flex items-center justify-between gap-4 sm:mt-14">
        <div aria-live="polite" className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-coral">
            Projeto real · {active.category}
          </p>
          <p className="truncate text-sm text-brand-white/70">{active.name}</p>
        </div>
        <div className="flex shrink-0 gap-2" role="tablist" aria-label="Projetos em destaque">
          {items.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={item.name}
              onClick={() => setIndex(i)}
              className="relative h-1.5 w-8 overflow-hidden rounded-full bg-brand-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            >
              <span
                className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-violet to-brand-blue ${
                  i === index ? "w-full" : "w-0"
                }`}
                style={
                  i === index && !paused
                    ? { transition: `width ${INTERVAL}ms linear` }
                    : undefined
                }
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
