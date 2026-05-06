"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function Counter({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    let start: number;
    const dur = 1800;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <span className="text-aqua">{prefix}{n}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.8, ease: [0.2, 1, 0.3, 1] as const } }),
};

export function HeroContent() {
  const lines = ["Diseñamos", "el agua", "que tu obra", "necesita."];

  return (
    <div className="relative z-10 max-w-[1400px] mx-auto w-full">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex items-center gap-4 mb-8 text-stone font-mono text-xs tracking-[0.15em] uppercase"
      >
        <span className="w-12 h-px bg-stone" />
        Fabricación de equipos potabilizadores
      </motion.div>

      {/* Title */}
      <h1 className="font-display text-[clamp(3rem,12vw,11rem)] font-black leading-[0.88] tracking-[-0.04em] text-balance mb-12">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              custom={i}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className={`inline-block ${i === 1 || i === 3 ? "italic font-light text-aqua" : ""}`}
              style={i === 1 || i === 3 ? { fontFamily: "var(--font-mono)", fontStyle: "italic" } : undefined}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="grid lg:grid-cols-[1fr_auto_auto] gap-12 items-end">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-stone text-lg leading-relaxed max-w-xl"
        >
          <span className="text-aqua font-medium uppercase tracking-wide text-sm mr-2">Veinte años</span>
          fabricando equipos potabilizadores para fábricas, soderías y procesos industriales donde la calidad del agua define el resultado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="flex gap-10"
        >
          <div>
            <div className="font-display font-black text-5xl leading-none">
              +<Counter value={20} />
            </div>
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-stone mt-2">años</div>
          </div>
          <div>
            <div className="font-display font-black text-5xl leading-none">
              +<Counter value={500} />
            </div>
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-stone mt-2">obras</div>
          </div>
          <div>
            <div className="font-display font-black text-5xl leading-none text-milk">AR</div>
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-stone mt-2">cobertura</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <a
            href="https://wa.me/5493513127782?text=Hola%20Dario,%20vi%20su%20web"
            target="_blank"
            rel="noopener"
            className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-aqua text-void font-medium uppercase tracking-wider text-sm transition-colors"
          >
            <span className="relative z-10">Hablar con Dario</span>
            <svg className="relative z-10 w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <a
            href="#productos"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-milk/30 text-milk font-medium uppercase tracking-wider text-sm hover:border-milk transition-colors"
          >
            <span>Ver equipos</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
