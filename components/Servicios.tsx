"use client";
import { motion } from "motion/react";

const SERVICIOS = [
  {
    n: "01",
    titulo: "Fabricación de equipos",
    sub: "línea propia DW",
    desc: "Diseñamos y fabricamos equipos potabilizadores a medida. Para fábricas que producen agua destilada, soderías que envasan, plantas industriales, comercios y hogares.",
  },
  {
    n: "02",
    titulo: "Asesoramiento",
    sub: "★ lo más importante",
    desc: "Antes de vender un equipo, entendemos el agua. Análisis, diagnóstico, recomendación de la solución correcta — no la más cara. Es el servicio que más valoramos.",
  },
  {
    n: "03",
    titulo: "Insumos y mantenimiento",
    sub: "servicio post-venta",
    desc: "Venta de cartuchos, repuestos, sales, carbón, zeolita y todos los insumos. Servicio post-venta en todo el país: cuando un equipo nuestro deja de andar, vamos.",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHead num="01 — Servicios" title="Tres frentes," titleAccent="una sola" titleEnd=" mano." />

        <div className="border-t border-white/10">
          {SERVICIOS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group grid grid-cols-[auto_1fr_auto] gap-8 py-12 border-b border-white/10 items-center hover:pl-8 transition-[padding] duration-700 ease-out relative"
              data-cursor
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aqua/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="font-mono text-sm text-stone">{s.n}</div>
              <div>
                <h3 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tight leading-none">
                  {s.titulo}
                  <span className="ml-4 text-stone text-lg italic font-light tracking-normal">{s.sub}</span>
                </h3>
                <p className="mt-4 italic font-light text-stone max-w-2xl text-base md:text-lg leading-relaxed pl-0">
                  {s.desc}
                </p>
              </div>
              <div className="hidden md:flex w-14 h-14 rounded-full border border-white/15 items-center justify-center transition-all duration-500 group-hover:bg-aqua group-hover:border-aqua group-hover:rotate-[-45deg] group-hover:scale-110">
                <svg className="w-5 h-5 text-milk group-hover:text-void" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ num, title, titleAccent, titleEnd }: { num: string; title: string; titleAccent?: string; titleEnd?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 mb-20 items-end"
    >
      <div className="font-mono text-xs tracking-[0.2em] uppercase text-aqua flex items-center gap-4">
        <span className="w-8 h-px bg-aqua" />
        {num}
      </div>
      <h2 className="font-display font-black text-4xl md:text-7xl uppercase leading-[0.95] tracking-tight max-w-[18ch]">
        {title}{titleAccent && <em className="not-italic text-aqua font-light italic" style={{ fontFamily: "var(--font-mono)", textTransform: "lowercase" }}> {titleAccent}</em>}{titleEnd}
      </h2>
    </motion.div>
  );
}
