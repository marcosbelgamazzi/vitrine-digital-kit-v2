"use client";

import { useRef, type ReactNode } from "react";

/**
 * Atualiza --mx/--my em cada `.spotlight-card` filho conforme o cursor se
 * move sobre o grupo, criando o brilho de borda definido em globals.css.
 * Um único listener por grupo, com requestAnimationFrame.
 */
export function SpotlightGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const cards = ref.current?.querySelectorAll<HTMLElement>(".spotlight-card");
      cards?.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${clientX - rect.left}px`);
        card.style.setProperty("--my", `${clientY - rect.top}px`);
      });
    });
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={className}>
      {children}
    </div>
  );
}
