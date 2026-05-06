import Link from "next/link";
import { Cursor } from "@/components/Cursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero/Hero";
import { Marquee } from "@/components/Marquee";
import { Servicios } from "@/components/Servicios";
import { Productos } from "@/components/Productos";
import { CoberturaV3 } from "@/components/CoberturaV3";
import { Manifiesto } from "@/components/Manifiesto";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function V3() {
  return (
    <main>
      <Cursor />
      <Link
        href="/"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] font-mono text-[0.7rem] tracking-[0.2em] uppercase text-stone hover:text-aqua transition-colors bg-void-deep/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        ← versiones
      </Link>
      <Nav />
      <Hero />
      <Marquee />
      <Servicios />
      <Productos />
      <CoberturaV3 />
      <Manifiesto />
      <Contacto />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
