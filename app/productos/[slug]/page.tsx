import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCT_BY_SLUG, PRODUCT_DETAILS } from "@/data/products-detail";

const SITE_URL = "https://dwaguas.com.ar";
const WA = "https://wa.me/5493513127782?text=";

export async function generateStaticParams() {
  return PRODUCT_DETAILS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCT_BY_SLUG[slug];
  if (!p) return { title: "Producto no encontrado" };
  return {
    title: p.titleSEO,
    description: p.descripcionMeta,
    alternates: { canonical: `/productos/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.titleSEO,
      description: p.descripcionMeta,
      url: `${SITE_URL}/productos/${p.slug}`,
      images: [{ url: "/img/hero.jpg", width: 1920, height: 864, alt: p.nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.titleSEO,
      description: p.descripcionMeta,
      images: ["/img/hero.jpg"],
    },
  };
}

export default async function ProductoPage({ params }: Props) {
  const { slug } = await params;
  const p = PRODUCT_BY_SLUG[slug];
  if (!p) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nombre,
    description: p.descripcionMeta,
    brand: { "@type": "Brand", name: "DW Aguas" },
    manufacturer: { "@type": "Organization", name: "DW Aguas", url: SITE_URL },
    category: p.tipo,
    image: `${SITE_URL}/img/hero.jpg`,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/productos/${p.slug}`,
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "ARS",
        price: "0",
        valueAddedTaxIncluded: true,
        description: "A medida según especificaciones del cliente",
      },
      seller: { "@type": "Organization", name: "DW Aguas" },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Productos", item: `${SITE_URL}/#productos` },
      { "@type": "ListItem", position: 3, name: p.nombre, item: `${SITE_URL}/productos/${p.slug}` },
    ],
  };

  const waMsg = encodeURIComponent(`Hola Dario, me interesa el producto ${p.nombre}. Quiero pedir presupuesto.`);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0A0A0F]/90 px-5 md:px-6 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center gap-2 font-display font-bold tracking-wider">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt="DW Aguas" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(79,209,255,0.5)]" />
            <span>AGUAS</span>
          </Link>
          <Link href="/" className="text-[12px] uppercase tracking-[0.18em] text-white/60 hover:text-white">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      {/* Breadcrumbs visibles */}
      <nav aria-label="breadcrumb" className="px-5 md:px-6 pt-6 max-w-5xl mx-auto">
        <ol className="flex flex-wrap gap-2 text-[12px] uppercase tracking-[0.16em] text-white/50">
          <li><Link href="/" className="hover:text-white">Inicio</Link></li>
          <li className="text-white/30">/</li>
          <li><Link href="/#productos" className="hover:text-white">Productos</Link></li>
          <li className="text-white/30">/</li>
          <li className="text-[#4FD1FF]">{p.nombre}</li>
        </ol>
      </nav>

      {/* Hero del producto */}
      <section className="px-5 md:px-6 pt-10 pb-14 md:pt-14 md:pb-20 max-w-5xl mx-auto">
        <div className={p.imagen ? "grid lg:grid-cols-2 gap-10 items-center" : ""}>
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1FF]" />
              {p.tipo}
            </div>
            <h1 className="font-display font-bold text-[2.5rem] sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-6">
              {p.nombre}
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-2xl mb-8">{p.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a href={WA + waMsg} target="_blank" rel="noopener" className="px-6 py-3 bg-[#4FD1FF] text-void font-medium text-sm rounded-md hover:bg-white transition-colors">
                Pedir presupuesto
              </a>
              <Link href="/#trabajos" className="px-6 py-3 border border-white/15 font-medium text-sm rounded-md hover:border-white/40 transition-colors">
                Ver instalaciones
              </Link>
            </div>
          </div>
          {p.imagen && (
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.imagen}
                alt={p.nombre}
                className="max-h-full max-w-full rounded-xl object-contain"
                fetchPriority="high"
              />
            </div>
          )}
        </div>
      </section>

      {/* Características */}
      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Características técnicas</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {p.caracteristicas.map((c, i) => (
            <li key={i} className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="mt-0.5 h-5 w-5 shrink-0 rounded-md border border-[#4FD1FF]/30 bg-[#4FD1FF]/10 p-1">
                <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
                  <path d="M5 13L9 17L19 7" stroke="#4FD1FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[14px] leading-relaxed text-white/80">{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Aplicaciones */}
      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Aplicaciones típicas</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {p.aplicaciones.map((a, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-[14px] text-white/75">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4FD1FF]/85">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1.5">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Por qué elegirnos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {p.beneficios.map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">
              <div className="text-[15px] font-medium text-white">{b.t}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-white/55">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-6 py-14 md:py-20 max-w-3xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {p.faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 open:border-[#4FD1FF]/30">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[15px] font-medium text-white">
                {f.q}
                <span className="text-[#4FD1FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Productos relacionados */}
      <section className="px-5 md:px-6 py-14 md:py-20 max-w-5xl mx-auto border-t border-white/5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-8">Productos relacionados</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {p.relacionados.map((rid) => {
            const r = PRODUCT_DETAILS.find((x) => x.id === rid);
            if (!r) return null;
            return (
              <Link key={rid} href={`/productos/${r.slug}`} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-[#4FD1FF]/30 hover:bg-white/[0.04]">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4FD1FF]/85">{r.tipo}</div>
                <div className="mt-2 text-[16px] font-medium text-white group-hover:text-[#4FD1FF]">{r.nombre}</div>
                <p className="mt-1 text-[13px] text-white/55">{r.bajada}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 md:px-6 py-16 md:py-24 max-w-5xl mx-auto border-t border-white/5">
        <div className="rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#4FD1FF]/[0.05] to-transparent p-8 md:p-12">
          <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight leading-tight mb-4">
            ¿Necesitás un {p.nombre.toLowerCase()}?
          </h2>
          <p className="text-stone text-[15px] leading-relaxed max-w-xl mb-6">
            Contanos tu proceso y el análisis de agua. Te diseñamos el equipo a medida y te pasamos presupuesto.
          </p>
          <a href={WA + waMsg} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4FD1FF] text-void font-medium rounded-md hover:bg-white transition-colors">
            Iniciar conversación
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
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
