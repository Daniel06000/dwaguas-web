import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INDUSTRIA_BY_SLUG, INDUSTRIAS } from "@/data/industrias";
import { PRODUCT_BY_ID } from "@/data/products-detail";

const SITE_URL = "https://dwaguas.com.ar";
const WA = "https://wa.me/5493513127782?text=";

export async function generateStaticParams() {
  return INDUSTRIAS.map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const i = INDUSTRIA_BY_SLUG[slug];
  if (!i) return { title: "Industria no encontrada" };
  return {
    title: i.titleSEO,
    description: i.descripcionMeta,
    alternates: { canonical: `/industrias/${i.slug}` },
    openGraph: {
      type: "article",
      title: i.titleSEO,
      description: i.descripcionMeta,
      url: `${SITE_URL}/industrias/${i.slug}`,
      images: [{ url: "/img/hero.jpg", width: 1920, height: 864, alt: i.nombre }],
    },
    twitter: { card: "summary_large_image", title: i.titleSEO, description: i.descripcionMeta, images: ["/img/hero.jpg"] },
  };
}

export default async function IndustriaPage({ params }: Props) {
  const { slug } = await params;
  const i = INDUSTRIA_BY_SLUG[slug];
  if (!i) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: i.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Industrias", item: `${SITE_URL}/#productos` },
      { "@type": "ListItem", position: 3, name: i.nombre, item: `${SITE_URL}/industrias/${i.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Tratamiento de agua para ${i.nombre.toLowerCase()}`,
    provider: { "@type": "Organization", name: "DW Aguas", url: SITE_URL },
    areaServed: { "@type": "Country", name: "Argentina" },
    description: i.descripcionMeta,
    url: `${SITE_URL}/industrias/${i.slug}`,
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  };

  const waMsg = encodeURIComponent(`Hola Dario, vi la página de ${i.nombre} y quiero pedir presupuesto.`);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0A0A0F]/90 px-5 md:px-6 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center gap-2 font-display font-bold tracking-wider">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt="DW Aguas" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(79,209,255,0.5)]" />
            <span>AGUAS</span>
          </Link>
          <Link href="/" className="text-[12px] uppercase tracking-[0.18em] text-white/60 hover:text-white">← Volver al inicio</Link>
        </div>
      </header>

      <nav aria-label="breadcrumb" className="px-5 md:px-6 pt-6 max-w-5xl mx-auto">
        <ol className="flex flex-wrap gap-2 text-[12px] uppercase tracking-[0.16em] text-white/50">
          <li><Link href="/" className="hover:text-white">Inicio</Link></li>
          <li className="text-white/30">/</li>
          <li>Industrias</li>
          <li className="text-white/30">/</li>
          <li className="text-[#4FD1FF]">{i.nombre}</li>
        </ol>
      </nav>

      <section className="px-5 md:px-6 pt-10 pb-14 md:pt-14 md:pb-20 max-w-5xl mx-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
          Industria · {i.nombre}
        </div>
        <h1 className="font-display font-bold text-[2.5rem] sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6">{i.hero}</h1>
        <p className="text-stone text-lg leading-relaxed max-w-3xl mb-8">{i.intro}</p>
        <div className="flex flex-wrap gap-3">
          <a href={WA + waMsg} target="_blank" rel="noopener" className="px-6 py-3 bg-[#4FD1FF] text-void font-medium text-sm rounded-md hover:bg-white transition-colors">
            Pedir cotización
          </a>
          <Link href="/#trabajos" className="px-6 py-3 border border-white/15 font-medium text-sm rounded-md hover:border-white/40 transition-colors">
            Ver instalaciones
          </Link>
        </div>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">Los desafíos del rubro</h2>
        <p className="text-stone text-[15px] mb-8 max-w-2xl">Conocemos el rubro porque hace +20 años fabricamos para él. Estos son los problemas típicos que resolvemos.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {i.desafios.map((d, idx) => (
            <div key={idx} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF6B35]/85">Problema {String(idx + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-[16px] font-medium text-white">{d.t}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-white/65">{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-3">Nuestra solución para {i.nombre.toLowerCase()}</h2>
        <p className="text-stone text-[15px] mb-8 max-w-2xl">Un sistema integrado, no equipos sueltos. Cada etapa pensada para tu rubro.</p>
        <ul className="grid gap-3 md:grid-cols-2">
          {i.solucion.map((s, idx) => (
            <li key={idx} className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="mt-0.5 h-5 w-5 shrink-0 rounded-md border border-[#4FD1FF]/30 bg-[#4FD1FF]/10 p-1">
                <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
                  <path d="M5 13L9 17L19 7" stroke="#4FD1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[14px] leading-relaxed text-white/80">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Productos típicos para esta industria</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {i.productosRecomendados.map((pid) => {
            const p = PRODUCT_BY_ID[pid];
            if (!p) return null;
            return (
              <Link key={pid} href={`/productos/${p.slug}`} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#4FD1FF]/30 hover:bg-white/[0.04]">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4FD1FF]/85">{p.tipo}</div>
                <div className="mt-2 text-[16px] font-medium text-white group-hover:text-[#4FD1FF]">{p.nombre}</div>
                <p className="mt-1 text-[13px] text-white/55">{p.bajada}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Beneficios concretos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {i.beneficios.map((b, idx) => (
            <div key={idx} className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">
              <div className="text-[15px] font-medium text-white">{b.t}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-3xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-6">Caso real</h2>
        <div className="rounded-2xl border border-[#4FD1FF]/20 bg-gradient-to-br from-[#4FD1FF]/[0.05] to-transparent p-6 md:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4FD1FF]/85 mb-3">Caso de éxito</div>
          <p className="text-[15px] leading-relaxed text-white/85 italic">{i.casoEjemplo}</p>
        </div>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-3xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Preguntas frecuentes · {i.nombre}</h2>
        <div className="space-y-4">
          {i.faqs.map((f, idx) => (
            <details key={idx} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 open:border-[#4FD1FF]/30">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[15px] font-medium text-white">
                {f.q}
                <span className="text-[#4FD1FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-6 py-16 md:py-24 max-w-5xl mx-auto border-t border-white/5">
        <div className="rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#4FD1FF]/[0.05] to-transparent p-8 md:p-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight leading-tight mb-4">Hablamos de tu {i.nombre.toLowerCase()} ahora.</h2>
          <p className="text-stone text-[15px] leading-relaxed max-w-xl mb-6">Contanos volumen, calidad del agua de entrada y objetivo. Te diseñamos el sistema y te pasamos cotización.</p>
          <a href={WA + waMsg} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4FD1FF] text-void font-medium rounded-md hover:bg-white transition-colors">
            Iniciar conversación por WhatsApp
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>
      </section>

      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-6">Otras industrias que atendemos</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {INDUSTRIAS.filter((x) => x.slug !== i.slug).slice(0, 4).map((o) => (
            <Link key={o.slug} href={`/industrias/${o.slug}`} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 hover:border-[#4FD1FF]/30 hover:bg-white/[0.04] transition">
              <div className="text-[14px] font-medium text-white">{o.nombre}</div>
              <div className="mt-1 text-[12px] text-white/55">{o.descripcionMeta.slice(0, 80)}...</div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/5 px-5 md:px-6 py-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          <Link href="/" className="hover:text-white">© DW Aguas — dwaguas.com.ar</Link>
          <a href={WA + encodeURIComponent("Hola Dario")} target="_blank" rel="noopener" className="hover:text-[#4FD1FF]">+54 9 351 312-7782</a>
        </div>
      </footer>
    </main>
  );
}
