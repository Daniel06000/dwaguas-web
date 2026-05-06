"use client";
import { motion } from "motion/react";
import { SectionHead } from "./Servicios";
import { MapaArgentina } from "./shared/MapaArgentina";

export function CoberturaV3() {
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
            style={{ color: "#F0F4F8" }}
          >
            <MapaArgentina className="max-w-md mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
