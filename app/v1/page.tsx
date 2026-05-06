"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { MapaArgentina } from "@/components/shared/MapaArgentina";
import { PRODUCTS } from "@/data/products";

export default function V1() {
  return (
    <main className="min-h-screen bg-paper text-stone-warm" style={{ color: "var(--color-stone-warm)" }}>
      {/* Nav minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between bg-paper/80 backdrop-blur-sm border-b border-black/5">
        <Link href="/" className="font-serif italic text-xl text-black">← versiones</Link>
        <div className="font-serif italic text-2xl text-black">DW Aguas</div>
        <a href="https://wa.me/5493513127782" target="_blank" rel="noopener" className="font-serif italic text-sm hover:text-black">WhatsApp →</a>
      </nav>

      {/* HERO editorial minimal */}
      <header className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="font-serif italic text-sm tracking-wide mb-12"
        >
          № 01 — Fabricación de equipos de tratamiento de agua
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-balance"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "clamp(3rem, 9vw, 9rem)",
            lineHeight: "0.95",
            letterSpacing: "-0.04em",
            color: "#1a1a1a",
            fontWeight: 300,
          }}
        >
          El agua,<br />
          <em className="italic" style={{ fontWeight: 300 }}>en su forma</em><br />
          más exacta.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 max-w-2xl font-serif text-xl leading-relaxed"
          style={{ color: "var(--color-stone-warm)" }}
        >
          Diseñamos y fabricamos equipos potabilizadores para fábricas, soderías y procesos industriales. Veinte años. Argentina entera. Y antes que todo, asesoramiento.
        </motion.div>

        <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl border-t border-black/10 pt-8">
          {[
            { n: "20+", l: "años de oficio" },
            { n: "500+", l: "obras realizadas" },
            { n: "AR", l: "cobertura nacional" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
            >
              <div className="font-serif text-5xl text-black" style={{ fontWeight: 300 }}>{s.n}</div>
              <div className="text-xs uppercase tracking-widest mt-2 font-mono" style={{ color: "var(--color-stone-warm)" }}>{s.l}</div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://wa.me/5493513127782"
          target="_blank"
          rel="noopener"
          className="mt-16 inline-block font-serif italic text-2xl text-black border-b border-black pb-2 hover:tracking-wider transition-all duration-500 self-start"
        >
          Hablar con Dario →
        </a>
      </header>

      {/* SERVICIOS minimal */}
      <section className="px-8 md:px-20 py-32 border-t border-black/10">
        <p className="font-mono text-xs tracking-widest uppercase mb-16">№ 02 — Servicios</p>
        <div className="space-y-20 max-w-5xl">
          {[
            { n: "01", t: "Fabricación a medida", d: "Cada equipo nace pensado para el agua y el proceso del cliente. No vendemos catálogo, diseñamos solución." },
            { n: "02", t: "Asesoramiento", d: "Antes de cualquier propuesta, entendemos qué necesita tu agua. Análisis, diagnóstico, recomendación honesta." },
            { n: "03", t: "Insumos y mantenimiento", d: "Servicio post-venta en todo el país. Cartuchos, sales, carbón, repuestos. Cuando un equipo nuestro deja de andar, vamos." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-[80px_1fr] gap-8"
            >
              <div className="font-mono text-sm" style={{ color: "var(--color-stone-warm)" }}>{s.n}</div>
              <div>
                <h3 className="font-serif text-3xl md:text-5xl text-black mb-4" style={{ fontWeight: 300, fontFamily: "var(--font-fraunces)" }}>{s.t}</h3>
                <p className="text-lg leading-relaxed max-w-2xl">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS minimal: lista editorial */}
      <section className="px-8 md:px-20 py-32 border-t border-black/10">
        <p className="font-mono text-xs tracking-widest uppercase mb-4">№ 03 — Productos propios</p>
        <h2 className="font-fraunces text-5xl md:text-7xl text-black mb-16" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, lineHeight: 0.95 }}>
          Once equipos.<br /><em>Una</em> filosofía.
        </h2>
        <div className="space-y-px bg-black/10 max-w-4xl">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-paper py-6 grid grid-cols-[60px_1fr_auto] gap-8 items-baseline"
            >
              <div className="font-mono text-sm">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="font-fraunces text-2xl md:text-3xl text-black" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 400 }}>{p.nombre}</h3>
                <p className="font-serif italic text-sm mt-1">{p.bajada}</p>
              </div>
              <div className="font-mono text-[0.65rem] tracking-widest uppercase">{p.tipo}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COBERTURA con mapa real */}
      <section className="px-8 md:px-20 py-32 border-t border-black/10">
        <p className="font-mono text-xs tracking-widest uppercase mb-4">№ 04 — Cobertura</p>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-fraunces text-5xl md:text-7xl text-black mb-8" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, lineHeight: 0.95 }}>
              Donde haya agua<br />que tratar, <em>vamos</em>.
            </h2>
            <p className="text-lg leading-relaxed max-w-md">
              Base operativa en Córdoba, instalaciones desde el norte de Salta hasta el extremo sur. La distancia no es problema, es parte del oficio.
            </p>
          </div>
          <div style={{ color: "#1a1a1a" }}>
            <MapaArgentina className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="px-8 md:px-20 py-32 border-t border-black/10 text-center">
        <blockquote className="font-fraunces text-3xl md:text-6xl text-black max-w-3xl mx-auto leading-tight" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300, fontStyle: "italic" }}>
          &ldquo;Antes de venderte un equipo,<br />tenemos que entender<br />qué necesita tu agua.&rdquo;
        </blockquote>
        <div className="mt-12 font-mono text-xs tracking-widest uppercase">— Dario Domínguez · Fundador</div>
      </section>

      {/* CONTACTO */}
      <section className="px-8 md:px-20 py-32 border-t border-black/10">
        <p className="font-mono text-xs tracking-widest uppercase mb-4">№ 05 — Empezar</p>
        <h2 className="font-fraunces text-5xl md:text-8xl text-black mb-16 leading-[0.9]" style={{ fontFamily: "var(--font-fraunces)", fontWeight: 300 }}>
          Hablemos del agua<br /><em>de tu obra.</em>
        </h2>
        <a
          href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web"
          target="_blank"
          rel="noopener"
          className="inline-block font-serif italic text-3xl md:text-5xl text-black border-b-2 border-black pb-3 hover:tracking-wider transition-all duration-500"
        >
          +54 9 351 312-7782 →
        </a>
      </section>

      <footer className="px-8 md:px-20 py-8 border-t border-black/10 flex flex-wrap gap-4 justify-between font-mono text-xs uppercase tracking-widest">
        <span>DW Aguas © 2026</span>
        <span>Dario Domínguez</span>
        <span>dwaguas.com.ar</span>
      </footer>
    </main>
  );
}
