"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MapaArgentina } from "@/components/shared/MapaArgentina";
import { Galeria } from "@/components/Galeria";
import { SobreDario } from "@/components/SobreDario";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_BY_ID } from "@/data/products-detail";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-milk relative overflow-x-hidden">
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

      <NavBar />
      <Hero />
      <BrandStrip />
      <SobreDario />
      <Servicios />
      <Productos />
      <Galeria />
      <Proceso />
      <Industrias />
      <Cobertura />
      <Manifiesto />
      <Contacto />
      <Footer />
    </main>
  );
}

/* ============ NAVBAR ============ */
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { h: "#servicios", t: "Servicios" },
    { h: "#historia",  t: "Historia"  },
    { h: "#productos", t: "Productos" },
    { h: "#trabajos",  t: "Galería"   },
    { h: "#proceso",   t: "Proceso"   },
    { h: "#cobertura", t: "Cobertura" },
  ];
  return (
    <nav className={`sticky top-0 z-50 px-4 md:px-6 transition-all duration-300 ${scrolled || open ? "bg-[#0A0A0F]/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 md:py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-wider text-base">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="DW Aguas" className="h-11 w-11 object-contain drop-shadow-[0_0_8px_rgba(79,209,255,0.5)]" />
          <span>AGUAS</span>
        </a>
        <ul className="hidden md:flex gap-7 text-sm text-stone font-medium">
          {links.slice(0, 4).map((l) => (
            <li key={l.h}><a href={l.h} className="hover:text-milk transition-colors">{l.t}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web"
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-milk text-void font-medium text-xs rounded-md hover:bg-aqua transition-colors uppercase tracking-wider"
          >
            Consultar →
          </a>
          {/* Hamburguesa mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-milk hover:border-white/30 transition"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              {open ? (
                <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 4H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M2 8H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M2 12H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-white/5 pb-4">
          <ul className="flex flex-col py-3">
            {links.map((l) => (
              <li key={l.h}>
                <a
                  href={l.h}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] text-milk/80 hover:text-aqua transition-colors"
                >
                  {l.t}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web"
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-aqua text-void font-medium text-xs rounded-md uppercase tracking-wider"
              >
                Consultar por WhatsApp →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* Background photo with overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <picture>
          <source srcSet="/img/hero.webp" type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/hero.jpg"
            alt="Planta industrial de tratamiento de agua DW Aguas"
            fetchPriority="high"
            className="h-full w-full object-cover opacity-[0.55]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/40 via-[#0A0A0F]/70 to-[#0A0A0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/95 via-[#0A0A0F]/50 to-[#0A0A0F]/30" />
      </div>

      <div className="relative z-10 px-5 md:px-6 pt-12 md:pt-20 pb-20 md:pb-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 lg:gap-20 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full font-mono text-[0.7rem] tracking-widest uppercase text-stone mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-aqua animate-pulse" />
            Operación activa · 23 provincias
          </div>
          <h1
            className="font-display font-bold text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6 md:mb-8 text-balance"
          >
            Equipos potabilizadores<br />
            <span className="text-aqua">diseñados para tu proceso.</span>
          </h1>
          <p
            className="text-stone text-lg leading-relaxed max-w-xl mb-12"
          >
            Fabricación, asesoramiento técnico y mantenimiento integral. Para fábricas que producen agua destilada, soderías que envasan, plantas industriales y comercios. <span className="text-milk">+20 años en Argentina.</span>
          </p>
          <div
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web"
              target="_blank"
              rel="noopener"
              className="px-6 py-3 bg-milk text-void font-medium text-sm rounded-md hover:bg-aqua transition-colors flex items-center gap-2"
            >
              Iniciar conversación
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10"/></svg>
            </a>
            <a href="#productos" className="px-6 py-3 border border-white/15 text-milk font-medium text-sm rounded-md hover:border-white/40 transition-colors">
              Ver catálogo
            </a>
          </div>
        </div>

        {/* Stats grid Stripe-style */}
        <div
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
        </div>
      </div>
      </div>
    </header>
  );
}

/* ============ BRAND STRIP (carrusel infinito) ============ */
function BrandStrip() {
  const items = [
    "Industria alimenticia", "Soderías", "Farmacéutica", "Agropecuaria",
    "Hotelería", "Edificios y consorcios", "Comercio", "Residencial",
    "Plantas potabilizadoras", "Industria automotriz", "Lavaderos industriales", "Procesos químicos",
  ];
  // Duplicamos para loop infinito sin saltos
  const loop = [...items, ...items];
  return (
    <section className="border-y border-white/5 bg-white/[0.015] py-10 overflow-hidden">
      <p className="font-mono text-[0.65rem] uppercase tracking-widest text-stone text-center mb-6">/ industrias que atendemos</p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent" />
        <div
          className="flex gap-12 whitespace-nowrap text-stone font-display font-medium text-base md:text-lg"
          style={{ animation: "marqueeX 38s linear infinite", width: "max-content" }}
        >
          {loop.map((it, i) => (
            <span key={i} className="inline-flex items-center gap-12 hover:text-aqua transition-colors">
              {it}
              <span className="text-aqua/30 select-none">◆</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marqueeX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ============ SERVICIOS ============ */
function Servicios() {
  const items = [
    { n: "01", t: "Fabricación de equipos", d: "Diseño y producción a medida según especificaciones del cliente. Equipos potabilizadores, ósmosis inversa, ionizadores, esterilizadores y filtros multimedia." },
    { n: "02", t: "Asesoramiento técnico", d: "Análisis de agua, diagnóstico, recomendación de solución óptima. Sin compromiso de compra. Es lo que más valoramos." },
    { n: "03", t: "Mantenimiento e insumos", d: "Servicio post-venta nacional. Cartuchos, sales, carbón, repuestos. Visitas programadas y de emergencia." },
  ];
  return (
    <section id="servicios" className="px-5 md:px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[280px_1fr] gap-16">
        <div className="lg:sticky lg:top-24 self-start">
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ servicios</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">Tres pilares operativos.</h2>
          <p className="text-stone text-sm">Cada uno con responsabilidades claras y entregables definidos.</p>
        </div>
        <div className="space-y-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
          {items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0A0A0F] p-8 hover:bg-[#14141B] transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua">{s.n}</span>
                <h3 className="font-display font-bold text-xl group-hover:text-aqua transition-colors">{s.t}</h3>
              </div>
              <p className="text-stone leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PRODUCTOS (tabla catálogo) ============ */
function Productos() {
  const [filter, setFilter] = useState<string>("todos");
  const filtered = filter === "todos" ? PRODUCTS : PRODUCTS.filter(p => p.tipo.toLowerCase().includes(filter));

  return (
    <section id="productos" className="px-5 md:px-6 py-20 md:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ productos · línea propia DW</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">Catálogo de equipos</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["todos", "industrial", "filtración", "sodería"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest rounded-md border transition-colors ${
                filter === f ? "bg-aqua text-void border-aqua" : "border-white/15 text-stone hover:border-white/40 hover:text-milk"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="border border-white/10 rounded-xl overflow-hidden bg-[#0A0A0F]">
        <div className="grid grid-cols-[44px_1fr_90px] md:grid-cols-[60px_1fr_2fr_120px] gap-3 md:gap-4 px-4 md:px-6 py-4 bg-white/[0.02] border-b border-white/5 font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-stone">
          <div>#</div>
          <div>Producto</div>
          <div className="hidden md:block">Especificación</div>
          <div className="text-right">Tipo</div>
        </div>
        {filtered.map((p, i) => {
          const detail = PRODUCT_BY_ID[p.id];
          const slug = detail?.slug;
          const Wrapper = slug ? "a" : "div";
          const wrapperProps: { href?: string; className: string } = {
            className: `grid grid-cols-[44px_1fr_90px] md:grid-cols-[60px_1fr_2fr_120px] gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 border-b border-white/5 last:border-0 hover:bg-white/[0.04] transition-colors ${p.featured ? "bg-gradient-to-r from-aqua/[0.04] to-transparent" : ""}`,
          };
          if (slug) wrapperProps.href = `/productos/${slug}`;
          return (
            <Wrapper key={p.id} {...wrapperProps}>
              <div className="font-mono text-xs md:text-sm text-stone">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-display font-semibold flex flex-col gap-1 text-sm md:text-base">
                <span className="flex items-center gap-2 group">
                  {p.nombre}
                  {p.featured && <span className="text-gold text-xs">★</span>}
                  {slug && <span className="text-aqua/60 text-[10px] opacity-0 group-hover:opacity-100 transition">→</span>}
                </span>
                <span className="md:hidden text-stone text-[12px] font-normal leading-snug">{p.bajada}</span>
              </div>
              <div className="hidden md:block text-stone text-sm">{p.bajada}</div>
              <div className="font-mono text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-aqua text-right self-start">{p.tipo.split(" · ")[0]}</div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}

/* ============ PROCESO ============ */
function Proceso() {
  const steps = [
    { n: "01", t: "Consulta", d: "Nos escribís por WhatsApp con tu necesidad. Te respondemos en menos de 24 horas." },
    { n: "02", t: "Diagnóstico", d: "Analizamos el agua. Entendemos el proceso. Identificamos qué necesita resolverse." },
    { n: "03", t: "Diseño", d: "Diseñamos el equipo a medida. Te mostramos esquemas, capacidades, tiempos." },
    { n: "04", t: "Fabricación", d: "Producimos en taller propio. Vos ves el progreso. Cero sorpresas." },
    { n: "05", t: "Instalación", d: "Vamos hasta donde estés. Salta, Buenos Aires, Mendoza, Patagonia. Lo dejamos andando." },
    { n: "06", t: "Mantenimiento", d: "Servicio post-venta de por vida. Cartuchos, repuestos, visitas programadas." },
  ];
  return (
    <section id="proceso" className="px-5 md:px-6 py-20 md:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ proceso · de la consulta a la operación</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-2xl">
          Seis pasos. Sin atajos. <span className="text-aqua">Sin promesas vacías.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-[#0A0A0F] p-8 hover:bg-[#14141B] transition-colors relative"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-6">paso {s.n}</div>
            <h3 className="font-display font-bold text-2xl mb-3">{s.t}</h3>
            <p className="text-stone leading-relaxed text-sm">{s.d}</p>
            {i < steps.length - 1 && (
              <div className="absolute top-8 right-8 text-stone/30 hidden lg:block">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ INDUSTRIAS / aplicaciones ============ */
function Industrias() {
  const apps = [
    { slug: "soderias", t: "Soderías", d: "Línea completa de envasado: ósmosis inversa, ionizador de plata, llenadora semiautomática y lavadora de bidones. Llave en mano." },
    { slug: "industria-alimenticia", t: "Industria alimenticia", d: "Agua tratada con la pureza exigida por SENASA. Esterilizadores UV, filtros multimedia, control de cloruros." },
    { slug: "farmaceutica", t: "Industria farmacéutica", d: "Agua purificada (PW) para procesos. Sistemas multipasos certificables ANMAT/USP, validables IQ/OQ/PQ." },
    { slug: "hoteleria-y-consorcios", t: "Hotelería y consorcios", d: "Ablandadores duplex, filtración central, tratamiento de tanques. Cuidamos cañerías y calefones." },
    { slug: "agropecuaria", t: "Agropecuaria y agro", d: "Pozos con arsénico, hierro o sales convertidos en agua apta. Servicio nacional, equipos robustos para condiciones rurales." },
  ];
  return (
    <section id="industrias" className="px-5 md:px-6 py-20 md:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ industrias que atendemos</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight max-w-3xl">Soluciones diseñadas por rubro.</h2>
        <p className="text-stone mt-4 max-w-2xl text-[15px] leading-relaxed">Cada industria tiene un agua distinta y un cliente distinto. Por eso fabricamos sistemas específicos, no equipos genéricos.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {apps.map((a, i) => (
          <a
            key={a.slug}
            href={`/industrias/${a.slug}`}
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 hover:border-aqua/30 hover:bg-white/[0.04] transition"
          >
            <h3 className="font-display font-bold text-xl mb-3 text-aqua group-hover:text-milk transition-colors">
              {a.t}
              <span className="ml-2 text-[12px] opacity-0 group-hover:opacity-100 transition">→</span>
            </h3>
            <p className="text-stone leading-relaxed text-[14px]">{a.d}</p>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-aqua/60">Ver landing</div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============ COBERTURA ============ */
function Cobertura() {
  return (
    <section id="cobertura" className="px-5 md:px-6 py-20 md:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ cobertura nacional</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
            Operación en todo el<br />territorio argentino.
          </h2>
          <p className="text-stone text-lg leading-relaxed mb-8 max-w-md">
            Base operativa en Córdoba. Mantenimientos industriales y obras en curso desde Salta hasta Tierra del Fuego. <span className="text-milk">La distancia no es problema.</span>
          </p>
          <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden max-w-lg">
            <div className="bg-[#0A0A0F] p-5">
              <div className="font-display font-bold text-3xl">23</div>
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mt-1">provincias</div>
            </div>
            <div className="bg-[#0A0A0F] p-5">
              <div className="font-display font-bold text-3xl">10+</div>
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mt-1">ciudades</div>
            </div>
            <div className="bg-[#0A0A0F] p-5">
              <div className="font-display font-bold text-3xl">∞</div>
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mt-1">distancia</div>
            </div>
          </div>
        </div>
        <div style={{ color: "#F0F4F8" }}>
          <MapaArgentina className="max-w-lg mx-auto" />
        </div>
      </div>
    </section>
  );
}

/* ============ MANIFIESTO ============ */
function Manifiesto() {
  return (
    <section className="px-5 md:px-6 py-20 md:py-32 max-w-4xl mx-auto border-t border-white/5 text-center">
      <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-12">/ filosofía</p>
      <blockquote className="font-display text-2xl md:text-5xl font-medium leading-tight tracking-tight">
        &ldquo;Antes de venderte un equipo, <span className="text-aqua">tenemos que entender</span> qué necesita tu agua.&rdquo;
      </blockquote>
      <div className="mt-10 font-mono text-xs uppercase tracking-widest text-stone">— Dario Domínguez · Fundador, DW Aguas · 20 años en el oficio</div>
    </section>
  );
}

/* ============ CONTACTO ============ */
function Contacto() {
  return (
    <section id="contacto" className="px-5 md:px-6 py-20 md:py-32 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-aqua mb-4">/ contacto</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6 md:mb-8">
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
            { l: "WhatsApp", v: "+54 9 351 312-7782", href: "https://wa.me/5493513127782" },
            { l: "Base operativa", v: "Córdoba, Argentina" },
            { l: "Cobertura", v: "Todo el país" },
            { l: "Atención", v: "A demanda" },
          ].map((r, i) => (
            <div key={i} className="bg-[#0A0A0F] p-5">
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mb-2">{r.l}</div>
              <div className="font-display font-semibold">
                {r.href ? <a href={r.href} target="_blank" rel="noopener" className="hover:text-aqua transition-colors">{r.v}</a> : r.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 md:px-6 py-10 md:py-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="font-display font-bold tracking-wider mb-4">DW <span className="text-aqua">/</span> AGUAS</div>
          <p className="text-stone text-sm leading-relaxed">Fabricación de equipos potabilizadores. +20 años en Argentina.</p>
        </div>
        <div>
          <h4 className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mb-4">Productos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/productos/equipos-potabilizadores" className="hover:text-aqua transition-colors">Equipos potabilizadores</a></li>
            <li><a href="/productos/osmosis-inversa-industrial" className="hover:text-aqua transition-colors">Ósmosis inversa</a></li>
            <li><a href="/productos/ionizadores-de-plata" className="hover:text-aqua transition-colors">Ionizadores de plata</a></li>
            <li><a href="/productos/ablandadores-de-agua" className="hover:text-aqua transition-colors">Ablandadores</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mb-4">Aplicaciones</h4>
          <ul className="space-y-2 text-sm">
            <li>Soderías</li>
            <li>Industria alimenticia</li>
            <li>Farmacéutica</li>
            <li>Hotelería · Consorcios</li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[0.6rem] uppercase tracking-widest text-stone mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://wa.me/5493513127782" target="_blank" rel="noopener" className="hover:text-aqua transition-colors">+54 9 351 312-7782</a></li>
            <li>Córdoba, Argentina</li>
            <li>dwaguas.com.ar</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-6 flex flex-wrap gap-4 justify-between font-mono text-[0.6rem] uppercase tracking-widest text-stone">
        <span className="text-milk">© 2026 DW Aguas — Dario Domínguez</span>
        <span>Fabricación de equipos de tratamiento de agua</span>
      </div>
    </footer>
  );
}
