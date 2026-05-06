"use client";
import { motion } from "motion/react";
import { PRODUCTS } from "@/data/products";
import { SectionHead } from "./Servicios";
import { cn } from "@/lib/utils";

export function Productos() {
  return (
    <section id="productos" className="py-32 px-6 bg-void-deep">
      <div className="max-w-[1400px] mx-auto">
        <SectionHead num="02 — Productos propios" title="No solo instalamos." titleAccent="diseñamos." />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-light italic text-xl md:text-2xl text-milk max-w-[50ch] leading-relaxed mb-20"
        >
          Las marcas líderes ya están en nuestras manos. Cuando ninguna alcanza, fabricamos la nuestra.
          <span className="ml-3 not-italic font-mono text-xs uppercase tracking-widest text-ember align-middle">★ Línea propia DW</span>
        </motion.p>

        <div>
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.5) }}
              className={cn(
                "grid grid-cols-[auto_1fr_2fr_1fr] md:gap-8 gap-4 py-10 border-t border-white/10 items-center",
                p.featured && "bg-gradient-to-r from-aqua/[0.04] to-transparent"
              )}
              data-cursor
            >
              <div className="font-mono text-xs text-stone tracking-widest">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-aqua hidden md:block">
                {p.tipo}
                {p.featured && <span className="text-gold ml-1">★</span>}
              </div>
              <div>
                <h3 className="font-display font-black text-xl md:text-3xl uppercase tracking-tight leading-none">
                  {p.nombre}
                </h3>
                <p className="mt-2 italic font-light text-stone text-sm md:text-base">{p.bajada}</p>
              </div>
              <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-white/15 to-transparent self-center" />
            </motion.div>
          ))}
          <div className="border-b border-white/10" />
        </div>
      </div>
    </section>
  );
}
