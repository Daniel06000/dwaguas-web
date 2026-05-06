import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Newsreader, Fraunces } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans-inter", display: "swap" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap", weight: ["300", "400", "500", "600"], style: ["normal", "italic"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

const SITE_URL = "https://dwaguas.com.ar";
const SITE_NAME = "DW Aguas";
const TITLE = "DW Aguas | Equipos potabilizadores y ósmosis inversa industrial · Córdoba, Argentina";
const DESCRIPTION = "Fabricamos equipos potabilizadores, ósmosis inversa, filtros y ablandadores para industrias, soderías y comercios. +20 años en Córdoba, cobertura nacional. Pedí presupuesto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | DW Aguas",
  },
  description: DESCRIPTION,
  keywords: [
    "equipos potabilizadores",
    "ósmosis inversa industrial",
    "fabricante equipos tratamiento de agua",
    "ósmosis inversa Córdoba",
    "filtros para sodería",
    "ablandador de agua industrial",
    "ionizador de plata",
    "esterilizador UV agua",
    "lavadora de bidones",
    "llenadora semiautomática",
    "tratamiento de agua Argentina",
    "DW Aguas",
  ],
  authors: [{ name: "Dario Domínguez" }],
  creator: "DW Aguas",
  publisher: "DW Aguas",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DW Aguas — Equipos potabilizadores · Córdoba, Argentina",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Industria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${jbMono.variable} ${newsreader.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
