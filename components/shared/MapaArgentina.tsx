"use client";

import { COUNTRIES, CITIES, MAP_VIEW } from "@/data/argentina-map";

// Mapa con la silueta REAL de Argentina + Chile, Bolivia, Paraguay,
// Brasil, Uruguay y Malvinas, derivado del TopoJSON de Natural Earth
// (paquete world-atlas, escala 50m). Argentina destacada, limítrofes
// más sutiles, ciudades como puntos pulsantes.

type Props = { className?: string };

const NEIGHBOR_LABELS: Array<{ code: keyof typeof COUNTRIES; name: string; x: number; y: number }> = [
  { code: "CL", name: "CHILE", x: 28, y: 400 },
  { code: "BO", name: "BOLIVIA", x: 120, y: 65 },
  { code: "PY", name: "PARAGUAY", x: 215, y: 105 },
  { code: "BR", name: "BRASIL", x: 295, y: 90 },
  { code: "UY", name: "URUGUAY", x: 290, y: 320 },
];

export function MapaArgentina({ className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox={MAP_VIEW}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="ar-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4FD1FF" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#4FD1FF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#4FD1FF" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="ar-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4FD1FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4FD1FF" stopOpacity="0.55" />
          </linearGradient>
          <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.18" />
          </pattern>
        </defs>

        {/* Limítrofes (sutiles, hatch pattern) */}
        <g style={{ color: "#ffffff" }}>
          {(["CL", "BO", "PY", "BR", "UY"] as const).map((code) => (
            <path
              key={code}
              d={COUNTRIES[code]}
              fill="url(#hatch)"
              stroke="currentColor"
              strokeOpacity="0.22"
              strokeWidth="0.6"
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* Malvinas (con asterisco visual) */}
        <path
          d={COUNTRIES.FK}
          fill="url(#hatch)"
          stroke="#4FD1FF"
          strokeOpacity="0.45"
          strokeWidth="0.7"
          strokeDasharray="2 1"
          style={{ color: "#4FD1FF" }}
        />

        {/* Argentina (protagonista) */}
        <path
          d={COUNTRIES.AR}
          fill="url(#ar-fill)"
          stroke="url(#ar-stroke)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Etiquetas de países limítrofes */}
        {NEIGHBOR_LABELS.map((l) => (
          <text
            key={l.code}
            x={l.x}
            y={l.y}
            fill="currentColor"
            opacity="0.32"
            fontSize="9"
            fontFamily="var(--font-mono-jb), ui-monospace, monospace"
            style={{ letterSpacing: "0.18em", fontWeight: 500 }}
          >
            {l.name}
          </text>
        ))}

        {/* Etiqueta Malvinas */}
        <text
          x={300}
          y={510}
          fill="#4FD1FF"
          opacity="0.7"
          fontSize="7.5"
          fontFamily="var(--font-mono-jb), ui-monospace, monospace"
          style={{ letterSpacing: "0.14em", fontWeight: 600 }}
        >
          MALVINAS ★
        </text>

        {/* Ciudades */}
        {CITIES.map((c, i) => {
          const color = c.ember ? "#FF6B35" : "#4FD1FF";
          return (
            <g key={c.name}>
              <circle
                cx={c.x}
                cy={c.y}
                r="2.5"
                fill={color}
                opacity="0.5"
                style={{
                  transformOrigin: `${c.x}px ${c.y}px`,
                  animation: `mapPulse 2.8s ease-out ${i * 0.22}s infinite`,
                }}
              />
              <circle cx={c.x} cy={c.y} r={c.primary ? 3.6 : 2.4} fill={color} />
              {c.primary && (
                <circle
                  cx={c.x}
                  cy={c.y}
                  r="8"
                  fill="none"
                  stroke={color}
                  strokeWidth="0.8"
                  opacity="0.6"
                />
              )}
              <text
                x={c.x + 8}
                y={c.y + 3}
                fill="currentColor"
                opacity={c.primary ? 1 : 0.78}
                fontSize="8.5"
                fontFamily="var(--font-mono-jb), ui-monospace, monospace"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: c.primary ? 600 : 400,
                  paintOrder: "stroke",
                  stroke: "#0A0A0F",
                  strokeWidth: "2.5",
                  strokeOpacity: 0.7,
                }}
              >
                {c.name}{c.primary ? " ★" : ""}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Leyenda */}
      <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-3 rounded-md border border-white/10 bg-[#0A0A0F]/85 px-2.5 py-1.5 backdrop-blur">
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4FD1FF]" /> Cobertura
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" /> Mantenimiento activo
        </span>
      </div>

      <style jsx>{`
        @keyframes mapPulse {
          0% { r: 2.5; opacity: 0.7; }
          70% { r: 14; opacity: 0; }
          100% { r: 14; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
