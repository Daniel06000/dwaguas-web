"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "5493513127782";
const WA_MSG = "Hola Dario, vi su web y quiero consultar";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

export function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      {/* Burbuja */}
      {showBubble && !dismissed && (
        <div
          className="relative flex max-w-[280px] items-start gap-2.5 rounded-2xl rounded-br-sm bg-white px-4 py-3 text-[13.5px] leading-snug text-[#0A0A0F] shadow-2xl"
          style={{
            animation: "waPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            transformOrigin: "bottom right",
          }}
        >
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar"
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#0A0A0F] text-white/70 ring-1 ring-white/20 transition hover:text-white"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="white">
              <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.04 20.15h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.16.83.84-3.08-.2-.31a8.26 8.26 0 01-1.26-4.34c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.15 8.23z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold">¿Necesitás presupuesto?</div>
            <div className="mt-0.5 text-[12.5px] text-[#0A0A0F]/70">Hablamos por WhatsApp ahora.</div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#0d6e3e] underline-offset-2 hover:underline"
            >
              Iniciar chat
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2.5 8.5L8.5 2.5M8.5 2.5H4.5M8.5 2.5V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          <div className="absolute -bottom-1.5 right-3 h-3 w-3 rotate-45 bg-white" />
        </div>
      )}

      {/* Botón flotante */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Dario DW Aguas"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 md:h-16 md:w-16"
      >
        <span className="absolute inset-0 -z-0 animate-ping rounded-full bg-[#25D366]/40" />
        <svg viewBox="0 0 24 24" className="relative z-10 h-7 w-7 md:h-8 md:w-8" fill="white">
          <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.04 20.15h-.01c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.16.83.84-3.08-.2-.31a8.26 8.26 0 01-1.26-4.34c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.15 8.23z" />
          <path d="M16.56 13.86c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.21-.49-.42-.43-.57-.43-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.81 2.76 4.39 3.87.61.26 1.09.42 1.46.54.61.19 1.17.17 1.62.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.3z" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes waPop {
          from { opacity: 0; transform: scale(0.8) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
