"use client";
import { useEffect, useRef, useState } from "react";
import { sceneState } from "./state";

const SECTIONS = [
  { id: 0, label: "Inicio" },
  { id: 1, label: "Qué hago" },
  { id: 2, label: "Ecosistema" },
  { id: 3, label: "Servicios" },
  { id: 4, label: "Stack" },
  { id: 5, label: "Experiencia" },
  { id: 6, label: "Datos" },
  { id: 7, label: "Valores" },
  { id: 8, label: "Números" },
  { id: 9, label: "Cotiza" },
  { id: 10, label: "Cierre" },
];

export default function SectionNav() {
  const [active, setActive] = useState(0);
  const last = useRef(-1);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const s = sceneState.section;
      if (s !== last.current) {
        last.current = s;
        setActive(s);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const goTo = (idx: number) => {
    const el = document.querySelector(`[data-section="${idx}"]`) as HTMLElement | null;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Secciones de la página"
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-none"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => goTo(s.id)}
            aria-label={s.label}
            aria-current={isActive ? "true" : undefined}
            className="group pointer-events-auto flex items-center gap-2"
          >
            <span
              className={`text-[11px] font-medium tracking-wide transition-all duration-300 ${
                isActive
                  ? "opacity-100 text-emerald-300"
                  : "opacity-0 translate-x-1 text-slate-400 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-6 h-[3px] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  : "w-2.5 h-[3px] bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}
