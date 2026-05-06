"use client";
import { motion } from "motion/react";

export function Contacto() {
  const rows = [
    { label: "WhatsApp", value: "+54 9 351 312-7782", href: "https://wa.me/5493513127782" },
    { label: "Base operativa", value: "Córdoba, Argentina" },
    { label: "Cobertura", value: "Todo el país" },
    { label: "Atención", value: "A demanda" },
  ];
  return (
    <section id="contacto" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-aqua flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-aqua" />
              04 — Empezar
            </div>
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase leading-[0.9] tracking-tight mb-8">
              Hablemos del<br />agua de <em className="not-italic text-aqua font-light italic" style={{ fontFamily: "var(--font-mono)", textTransform: "lowercase" }}>tu</em> obra.
            </h2>
            <a
              href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web%20y%20quiero%20consultar"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-aqua text-void font-medium uppercase tracking-wider text-base"
              data-cursor
            >
              Iniciar conversación
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {rows.map((r) => (
              <div key={r.label} className="border-t border-white/10 pt-4">
                <div className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-stone mb-2">{r.label}</div>
                <div className="font-display font-black text-xl md:text-2xl uppercase tracking-tight">
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener" className="hover:text-aqua transition-colors">{r.value}</a>
                  ) : (
                    r.value
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
