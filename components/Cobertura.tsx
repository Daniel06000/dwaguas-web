"use client";
import { motion } from "motion/react";
import { SectionHead } from "./Servicios";

const DOTS = [
  { left: "39%", top: "30%", label: "salta", color: "ember" },
  { left: "42%", top: "50%", label: "córdoba ★", color: "aqua" },
  { left: "48%", top: "62%", label: "buenos aires", color: "aqua" },
  { left: "35%", top: "58%", label: "mendoza", color: "ember" },
  { left: "42%", top: "80%", label: "patagonia", color: "aqua" },
];

export function Cobertura() {
  return (
    <section id="cobertura" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHead num="03 — Cobertura" title="El país" titleAccent="entero," titleEnd={<><br />sin distancia.</> as never} />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-light italic text-2xl md:text-4xl leading-tight text-milk max-w-[26ch]">
              Desde Córdoba operamos a <strong className="not-italic font-display font-black text-aqua uppercase">todo el territorio</strong> argentino. Mantenimientos en Salta, instalaciones en Buenos Aires, asesorías en Cuyo y NEA.
            </p>
            <div className="mt-12 flex gap-12">
              <div>
                <div className="font-display font-black text-4xl md:text-5xl">23</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-stone mt-2">provincias</div>
              </div>
              <div>
                <div className="font-display font-black text-4xl md:text-5xl">∞</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-stone mt-2">distancia</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[0.8] max-w-[500px] mx-auto w-full"
          >
            <svg viewBox="0 0 200 280" className="w-full h-full" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
              <path d="M 100 10 L 115 30 L 125 55 L 130 80 L 135 110 L 130 140 L 125 165 L 115 190 L 105 215 L 90 235 L 75 250 L 65 260 L 55 265 L 50 255 L 55 235 L 60 210 L 60 185 L 55 160 L 50 135 L 50 110 L 55 85 L 65 60 L 75 35 L 85 18 Z" />
            </svg>
            {DOTS.map((d, i) => (
              <span
                key={i}
                className={`absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 ${d.color === "ember" ? "bg-ember" : "bg-aqua"}`}
                style={{
                  left: d.left,
                  top: d.top,
                  boxShadow: `0 0 0 0 ${d.color === "ember" ? "rgba(255,107,53,0.7)" : "rgba(79,209,255,0.7)"}`,
                  animation: `pulse-${d.color} 2s infinite ${i * 0.3}s`,
                }}
              >
                <span className="absolute left-3.5 -top-0.5 font-mono text-[0.6rem] tracking-widest uppercase whitespace-nowrap text-milk">
                  {d.label}
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
