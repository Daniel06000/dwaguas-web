"use client";
import { motion } from "motion/react";

export function Manifiesto() {
  return (
    <section className="relative py-32 px-6 bg-void-deep text-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,209,255,0.08), transparent 60%)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <p className="font-light italic text-3xl md:text-6xl leading-tight max-w-[22ch] mx-auto">
          &ldquo;Antes de venderte un equipo,<br />
          <span className="text-aqua">tenemos que entender</span><br />
          qué necesita tu agua.&rdquo;
        </p>
        <div className="mt-12 inline-block font-mono text-xs tracking-[0.25em] uppercase text-stone">
          — Dario Domínguez · Fundador, DW Aguas
        </div>
      </motion.div>
    </section>
  );
}
