"use client";

const ITEMS = [
  "Equipos potabilizadores",
  "Ósmosis inversa",
  "Ionizadores de plata",
  "Asesoramiento técnico",
];

export function Marquee() {
  const allItems = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-white/5 bg-void-deep py-12 overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-16 animate-marquee">
        {allItems.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-16 font-display font-black text-3xl md:text-5xl uppercase tracking-tight">
            {it}
            <span className="inline-block w-2.5 h-2.5 bg-ember rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
