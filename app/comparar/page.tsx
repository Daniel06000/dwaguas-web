import Link from "next/link";

const VERSIONS = [
  { href: "/v1", num: "01", name: "Minimal", sub: "Editorial · Whitespace · Sin 3D", desc: "Tipografía serif elegante. Mucha respiración. Animaciones sutiles.", color: "from-stone/20 to-transparent" },
  { href: "/", num: "02", name: "Profesional", sub: "Stripe / Linear · Dashboard ★ ELEGIDA", desc: "Clean enterprise oscuro. Datos técnicos en grids precisos. La actual.", color: "from-aqua/20 to-transparent" },
  { href: "/v3", num: "03", name: "Premium 3D", sub: "Awwwards · Three.js · Inmersivo", desc: "Gota de agua 3D. Cursor custom. Marquees. Animaciones premium.", color: "from-ember/20 to-transparent" },
];

export default function Comparar() {
  return (
    <main className="min-h-screen bg-void text-milk px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <Link href="/" className="font-mono text-xs tracking-widest uppercase text-stone hover:text-aqua">← volver a la web</Link>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-stone mt-8 mb-4">DW Aguas · Versiones de diseño</p>
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight">Tres caminos.<br /><span className="text-aqua">Vos elegiste el 02.</span></h1>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {VERSIONS.map((v) => (
            <Link key={v.href} href={v.href} className="group relative bg-void p-10 hover:bg-void-deep transition-colors duration-500 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative">
                <div className="font-mono text-xs tracking-[0.2em] uppercase text-stone mb-12">{v.num} / versión</div>
                <h2 className="font-display text-3xl md:text-4xl font-black uppercase mb-2 tracking-tight">{v.name}</h2>
                <p className="font-mono text-[0.7rem] tracking-widest uppercase text-aqua mb-8">{v.sub}</p>
                <p className="text-stone leading-relaxed mb-12">{v.desc}</p>
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-milk group-hover:text-aqua transition-colors">
                  Ver versión
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
