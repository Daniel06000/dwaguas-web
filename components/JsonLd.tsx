const SITE_URL = "https://dwaguas.com.ar";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "DW Aguas",
    legalName: "DW Aguas - Dario Domínguez",
    url: SITE_URL,
    logo: `${SITE_URL}/img/logo.png`,
    image: `${SITE_URL}/img/hero.jpg`,
    description: "Fabricamos equipos potabilizadores, ósmosis inversa, filtros y ablandadores para industrias, soderías y comercios. +20 años en Córdoba.",
    foundingDate: "2003",
    founder: { "@type": "Person", name: "Dario Domínguez" },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-351-312-7782",
      contactType: "sales",
      areaServed: "AR",
      availableLanguage: "Spanish",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: "DW Aguas",
    image: `${SITE_URL}/img/hero.jpg`,
    url: SITE_URL,
    telephone: "+54-9-351-312-7782",
    priceRange: "$$",
    description: "Fabricación de equipos de tratamiento de agua. +20 años en Córdoba, cobertura nacional.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.4201,
      longitude: -64.1888,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "DW Aguas",
    description: "Fabricación de equipos potabilizadores y tratamiento de agua",
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  const faqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué equipos de tratamiento de agua fabrican?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fabricamos equipos potabilizadores, ósmosis inversa, ionizadores de plata, esterilizadores UV, filtros (zeolita, carbón activado, multimedia, sedimentos), ablandadores, llenadoras semiautomáticas y lavadoras de bidones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hacen instalaciones en todo el país?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Tenemos base operativa en Córdoba y cobertura nacional. Hemos hecho mantenimientos industriales y obras desde Salta hasta Tierra del Fuego.",
        },
      },
      {
        "@type": "Question",
        name: "¿A qué industrias atienden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Industria alimenticia, soderías, farmacéutica, agropecuaria, hotelería, edificios y consorcios, comercios y residencial. También plantas potabilizadoras, industria automotriz, lavaderos industriales y procesos químicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo lleva fabricar un equipo a medida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende de la complejidad. El proceso es: consulta → diagnóstico (análisis del agua) → diseño → fabricación en taller → instalación → mantenimiento. Cada equipo se diseña para el proceso específico del cliente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Hacen mantenimiento posterior?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Servicio post-venta nacional con cartuchos, sales, carbón y repuestos. Visitas programadas y de emergencia para todos los equipos que fabricamos e instalamos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta un equipo de ósmosis inversa industrial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El precio depende del caudal, calidad del agua de entrada y el uso final. Cada cotización se hace a medida tras analizar el agua y el proceso. Pedinos presupuesto por WhatsApp al +54 9 351 312-7782.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
    </>
  );
}
