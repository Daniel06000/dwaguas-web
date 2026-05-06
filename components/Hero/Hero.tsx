"use client";
import { WaterDrop } from "./WaterDrop";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <header id="top" className="relative min-h-screen overflow-hidden flex flex-col justify-end pt-32 pb-16 px-6">
      {/* Gradient mesh background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 30% 30%, rgba(79,209,255,0.18), transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 70%, rgba(255,107,53,0.06), transparent 60%),
            radial-gradient(ellipse 40% 30% at 50% 95%, rgba(79,209,255,0.10), transparent 70%)
          `,
          filter: "blur(20px)",
        }}
      />

      {/* 3D Water Drop background */}
      <WaterDrop />

      {/* Meta info top-left */}
      <div className="absolute top-32 left-6 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-stone z-10 hidden md:block">
        <div>N° 001 / dw aguas</div>
        <div>fabricación de equipos <span className="text-aqua">→ argentina</span></div>
        <div>desde 2005</div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-stone flex flex-col items-center gap-2 z-10">
        scroll
        <span className="block w-px h-10 bg-gradient-to-b from-stone to-transparent" />
      </div>

      <HeroContent />
    </header>
  );
}
