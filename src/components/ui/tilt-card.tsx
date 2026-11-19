"use client";

import { useRef, type ReactNode } from "react";

/**
 * Inclina o conteúdo em 3D conforme a posição do mouse e desenha um reflexo
 * de luz. Sem efeito em toque ou com movimento reduzido.
 */
export function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function onMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `rotateY(${(x - 0.5) * max * 2}deg) rotateX(${(0.5 - y) * max * 2}deg)`;
      el.style.setProperty("--glare-x", `${x * 100}%`);
      el.style.setProperty("--glare-y", `${y * 100}%`);
    });
  }

  function onLeave() {
    cancelAnimationFrame(frame.current);
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <div className="[perspective:1400px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div
        ref={ref}
        className={`group/tilt relative transition-transform duration-500 ease-out [transform-style:preserve-3d] ${className}`}
      >
        {children}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--glare-x, 50%) var(--glare-y, 50%), rgb(255 255 255 / 0.12), transparent 40%)",
          }}
        />
      </div>
    </div>
  );
}
