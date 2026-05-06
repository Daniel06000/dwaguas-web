"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { MapaArgentina } from "@/components/shared/MapaArgentina";
import { PRODUCTS } from "@/data/products";

export default function V2() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-milk relative">
      {/* Grid pattern background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-stone hover:text-milk">← versiones</Link>
        <div className="font-display font-bold tracking-wider">DW AGUAS</div>
        <a href="https://wa.me/5493513127782" target="_blank" rel="noopener" className="font-mono text-xs uppercase tracking-widest hover:text-aqua">contacto →</a>
      </nav>

      {/* HERO Stripe-style: text left, dashboard-grid right */}
      <header className="relative px-6 py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full font-mono text-[0.7rem] tracking-widest uppercase text-stone mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
              Operación activa · 23 provincias
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.05] mb-8 text-balance"
            >
              Equipos potabilizadores<br />
              <span className="text-aqua">diseñados para tu proceso.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-stone text-lg leading-relaxed max-w-xl mb-12"
            >
              Fabricación, asesoramiento técnico y mantenimiento integral. Para fábricas que producen agua destilada, soderías que envasan, plantas industriales y comercios. <span className="text-milk">+20 años en Argentina.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web"
                target="_blank"
                rel="noopener"
                className="px-6 py-3 bg-milk text-void font-medium text-sm rounded-md hover:bg-aqua transition-colors"
              >
                Iniciar conversación →
              </a>
              <a href="#productos" className="px-6 py-3 border border-white/15 text-milk font-medium text-sm rounded-md hover:border-white/40 transition-colors">
                Ver catálogo
              </a>
            </motion.div>
          </div>

          {/* Dashboard-style stats grid (Stripe vibe) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden"
          >
            {[
              { label: "Años de operación", value: "20+", sub: "desde 2005" },
              { label: "Obras realizadas", value: "500+", sub: "todo el país" },
              { label: "Productos fabricados", value: "11", sub: "línea propia" },
              { label: "Tiempo de respuesta", value: "<24h", sub: "consultas" },
            ].map((s, i) => (
              <div key={i} className="bg-[#0A0A0F] p-6">
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-stone">{s.label}</div>
                <div className="font-display font-bold text-4xl md:text-5xl mt-3 text-milk">{s.value}</div>
                <div className="font-mono text-xs text-stone mt-2">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* SERVICIOS — tabla técnica */}
      <section className="px-6 py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16">
          <div className="lg:sticky lg:top-24 self-start">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ servicios</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">Tres pilares operativos.</h2>
            <p className="text-stone text-sm">Cada uno con responsabilidades claras y entregables definidos.</p>
          </div>
          <div className="space-y-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {[
              { n: "01", t: "Fabricación de equipos", d: "Diseño y producción a medida según especificaciones del cliente. Equipos potabilizadores, ósmosis inversa, ionizadores, esterilizadores y filtros multimedia." },
              { n: "02", t: "Asesoramiento técnico", d: "Análisis de agua, diagnóstico, recomendación de solución óptima. Sin compromiso de compra. Es lo que más valoramos." },
              { n: "03", t: "Mantenimiento e insumos", d: "Servicio post-venta nacional. Cartuchos, sales, carbón, repuestos. Visitas programadas y de emergencia." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0A0A0F] p-8 hover:bg-[#14141B] transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua">{s.n}</span>
                  <h3 className="font-display font-bold text-xl">{s.t}</h3>
                </div>
                <p className="text-stone leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS — tabla catalogo Linear-style */}
      <section id="productos" className="px-6 py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-12">
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ productos · línea propia DW</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">Catálogo de equipos</h2>
        </div>
        <div className="border border-white/10 rounded-xl overflow-hidden bg-[#0A0A0F]">
          {/* Header */}
          <div className="grid grid-cols-[60px_1fr_2fr_120px] gap-4 px-6 py-4 bg-white/[0.02] border-b border-white/5 font-mono text-[0.65rem] uppercase tracking-widest text-stone">
            <div>#</div><div>Producto</div><div>Especificación</div><div className="text-right">Tipo</div>
          </div>
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
              className={`grid grid-cols-[60px_1fr_2fr_120px] gap-4 px-6 py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors ${p.featured ? "bg-gradient-to-r from-aqua/[0.04] to-transparent" : ""}`}
            >
              <div className="font-mono text-sm text-stone">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display font-semibold flex items-center gap-2">
                {p.nombre}
                {p.featured && <span className="text-gold text-xs">★</span>}
              </div>
              <div className="text-stone text-sm">{p.bajada}</div>
              <div className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua text-right">{p.tipo.split(" · ")[0]}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COBERTURA con mapa */}
      <section className="px-6 py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ cobertura nacional</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
              Operación en todo el<br />territorio argentino.
            </h2>
            <p className="text-stone text-lg leading-relaxed mb-8 max-w-md">
              Base operativa en Córdoba. Mantenimientos industriales y obras en curso desde Salta hasta Tierra del Fuego.
            </p>
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden max-w-md">
              <div className="bg-[#0A0A0F] p-5">
                <div className="font-display font-bold text-3xl">23</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-stone mt-1">provincias</div>
              </div>
              <div className="bg-[#0A0A0F] p-5">
                <div className="font-display font-bold text-3xl">∞</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-widest text-stone mt-1">distancia</div>
              </div>
            </div>
          </div>
          <div style={{ color: "#F0F4F8" }}>
            <MapaArgentina className="max-w-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="px-6 py-32 max-w-4xl mx-auto border-t border-white/5 text-center">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-12">/ filosofía</p>
        <blockquote className="font-display text-3xl md:text-5xl font-medium leading-tight tracking-tight">
          &ldquo;Antes de venderte un equipo, <span className="text-aqua">tenemos que entender</span> qué necesita tu agua.&rdquo;
        </blockquote>
        <div className="mt-10 font-mono text-xs uppercase tracking-widest text-stone">— Dario Domínguez · Fundador</div>
      </section>

      {/* CONTACTO */}
      <section className="px-6 py-32 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ contacto</p>
            <h2 className="font-display font-bold text-4xl md:text-7xl tracking-tight leading-[0.95] mb-8">
              ¿Tu obra necesita<br />
              <span className="text-aqua">un equipo a medida?</span>
            </h2>
            <a
              href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web%20y%20quiero%20consultar"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 px-8 py-4 bg-aqua text-void font-medium rounded-md hover:bg-milk transition-colors"
            >
              Iniciar conversación
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
          </div>
          <div className="grid gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {[
              { l: "WhatsApp", v: "+54 9 351 312-7782" },
              { l: "Base operativa", v: "Córdoba, Argentina" },
              { l: "Cobertura", v: "Todo el país" },
              { l: "Atención", v: "A demanda" },
            ].map((r, i) => (
              <div key={i} className="bg-[#0A0A0F] p-5">
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mb-2">{r.l}</div>
                <div className="font-display font-semibold">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-white/5 max-w-7xl mx-auto flex flex-wrap gap-4 justify-between font-mono text-[0.65rem] uppercase tracking-widest text-stone">
        <span className="text-milk">DW Aguas © 2026</span>
        <span>Dario Domínguez · Fabricación de equipos</span>
        <span>dwaguas.com.ar</span>
      </footer>
    </main>
  );
}
