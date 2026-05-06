"use client";
import { useEffect, useState } from "react";

export function Nav() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const upd = () => {
      const t = new Date();
      setTime(`AR · ${t.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit", hour12: false })}`);
    };
    upd();
    const i = setInterval(upd, 30000);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearInterval(i); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav
      className={`fixed top-6 left-6 right-6 z-50 flex items-center justify-between font-sans transition-all duration-300 px-6 py-3 rounded-2xl border ${
        scrolled ? "bg-void-deep/80 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
      }`}
    >
      <a href="#top" className="font-display text-sm md:text-base tracking-[0.18em] uppercase text-milk font-bold">
        DW AGUAS
        <span className="ml-2 font-mono font-normal text-[0.7em] tracking-normal opacity-60">est. 2005</span>
      </a>
      <ul className="hidden md:flex gap-8 text-sm text-milk/80 font-medium">
        <li><a href="#servicios" className="hover:text-aqua transition-colors">Servicios</a></li>
        <li><a href="#productos" className="hover:text-aqua transition-colors">Productos</a></li>
        <li><a href="#cobertura" className="hover:text-aqua transition-colors">Cobertura</a></li>
        <li><a href="#contacto" className="hover:text-aqua transition-colors">Contacto</a></li>
      </ul>
      <div className="hidden md:block font-mono text-xs tracking-widest text-milk/60">{time}</div>
    </nav>
  );
}
