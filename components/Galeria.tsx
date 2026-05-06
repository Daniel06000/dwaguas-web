"use client";

import { useEffect, useState } from "react";
import { GALERIA, type Slot } from "@/data/galeria";

const TAGS = ["Todos", "Industrial", "Producto", "Residencial", "Trabajo"] as const;

export function Galeria() {
  const [filtro, setFiltro] = useState<(typeof TAGS)[number]>("Todos");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = filtro === "Todos" ? GALERIA : GALERIA.filter((s) => s.tag === filtro);

  return (
    <section
      id="trabajos"
      className="relative border-t border-white/5 bg-[#0A0A0F] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1FF]" />
              Galería · trabajos reales
            </div>
            <h2 className="text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl">
              Cada equipo tiene historia.
              <br />
              <span className="text-white/55">Estas son algunas.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
              Plantas industriales, comercios, obras puntuales. La mayoría siguen
              andando hace años con servicio nuestro. Click en cada foto para ampliar.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setFiltro(t)}
                className={`rounded-full border px-3.5 py-1.5 text-[12px] uppercase tracking-[0.12em] transition ${
                  filtro === t
                    ? "border-[#4FD1FF]/40 bg-[#4FD1FF]/[0.08] text-[#4FD1FF]"
                    : "border-white/10 bg-transparent text-white/55 hover:border-white/20 hover:text-white/80"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
          style={{ gridAutoRows: "180px" }}
        >
          {items.map((slot, i) => (
            <Tile key={slot.src} slot={slot} onClick={() => setOpenIdx(i)} />
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
          + 500 instalaciones documentadas · disponibles a pedido
        </p>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <Lightbox
          slot={items[openIdx]}
          index={openIdx}
          total={items.length}
          onClose={() => setOpenIdx(null)}
          onPrev={() => setOpenIdx((openIdx - 1 + items.length) % items.length)}
          onNext={() => setOpenIdx((openIdx + 1) % items.length)}
        />
      )}
    </section>
  );
}

function Tile({ slot, onClick }: { slot: Slot; onClick: () => void }) {
  const [error, setError] = useState(false);

  const rowSpan = slot.span === "tall" ? "row-span-2" : "row-span-1";
  const colSpan = slot.span === "wide" ? "col-span-2" : "col-span-1";

  return (
    <button
      onClick={onClick}
      className={`group relative cursor-zoom-in overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] text-left ${rowSpan} ${colSpan}`}
    >
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slot.src}
          alt={slot.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: "center 30%" }}
          onError={() => setError(true)}
        />
      ) : (
        <Placeholder slot={slot} />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/30 to-transparent opacity-90" />

      {/* Zoom hint */}
      <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#0A0A0F]/70 opacity-0 backdrop-blur transition group-hover:opacity-100">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="white" strokeWidth="1.4" />
          <path d="M9.5 9.5L13 13M6 4V8M4 6H8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4FD1FF]/85">
            {slot.tag}
          </div>
          <div className="mt-0.5 text-[13px] leading-tight text-white">
            {slot.caption}
          </div>
        </div>
      </figcaption>
    </button>
  );
}

function Placeholder({ slot }: { slot: Slot }) {
  const grad =
    slot.tag === "Industrial"
      ? "linear-gradient(135deg, #1a2a3a 0%, #0d1825 60%, #0a0f1a 100%)"
      : slot.tag === "Producto"
      ? "linear-gradient(135deg, #1a3340 0%, #0d2030 60%, #0a1520 100%)"
      : slot.tag === "Residencial"
      ? "linear-gradient(135deg, #1f2a3a 0%, #131a28 60%, #0a0f18 100%)"
      : "linear-gradient(135deg, #2a1f1a 0%, #1a1310 60%, #100a08 100%)";

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: grad }}>
      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#4FD1FF]/30 bg-[#4FD1FF]/10">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M12 2.5C12 2.5 5.5 9 5.5 14.5C5.5 18.5 8.5 21.5 12 21.5C15.5 21.5 18.5 18.5 18.5 14.5C18.5 9 12 2.5 12 2.5Z" stroke="#4FD1FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function Lightbox({
  slot, index, total, onClose, onPrev, onNext,
}: {
  slot: Slot; index: number; total: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0F]/95 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: "fadeIn 0.25s ease-out" }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Anterior"
        className="absolute left-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white md:h-14 md:w-14"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Siguiente"
        className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white md:h-14 md:w-14"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative max-h-[90vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slot.src}
          alt={slot.alt}
          className="max-h-[80vh] max-w-[92vw] rounded-xl object-contain"
          style={{ animation: "lbZoom 0.35s cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
        <div className="mt-4 flex items-center justify-between gap-6 px-1">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4FD1FF]/85">
              {slot.tag}
            </div>
            <div className="mt-1 text-[15px] text-white">{slot.caption}</div>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbZoom {
        @keyframes lbZoom {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
