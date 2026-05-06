// Galería: fotos reales del Drive de Dario, captions con sus nombres reales.

export type Slot = {
  src: string;
  alt: string;
  caption: string;
  tag: "Industrial" | "Residencial" | "Producto" | "Trabajo";
  span?: "tall" | "wide" | "normal";
};

export const GALERIA: Slot[] = [
  { src: "/img/productos/puna-litio-planta.jpg",          alt: "Planta de ósmosis para extracción de litio en la Puna",  caption: "Planta de ósmosis · Puna · extracción de litio",  tag: "Industrial",  span: "wide"  },
  { src: "/img/galeria/industrial-1.jpg",                 alt: "Ionizador de plata DW Aguas",                            caption: "Ionizador de plata (Ag)",                         tag: "Producto",    span: "tall"  },
  { src: "/img/galeria/industrial-2.jpg",                 alt: "Equipo de ósmosis inversa 500 L/h",                      caption: "Ósmosis inversa · 500 L/h",                       tag: "Producto"                  },
  { src: "/img/productos/puna-litio-tecnicos.jpg",        alt: "Técnicos de DW Aguas en puesta en marcha · Puna",        caption: "Puesta en marcha · técnicos en obra",             tag: "Trabajo"                   },
  { src: "/img/productos/planta-carlos-paz.jpg",          alt: "Planta potabilizadora completa Aguas Carlos Paz",        caption: "Planta potabilizadora · Aguas Carlos Paz",        tag: "Industrial"                },
  { src: "/img/galeria/industrial-4.jpg",                 alt: "Llenadora semiautomática 60 bidones/hora",               caption: "Llenadora semiautomática · 60 bidones/h",         tag: "Producto"                  },
  { src: "/img/productos/puna-litio-equipo.jpg",          alt: "Equipo de DW Aguas en obra · Puna · mina de litio",      caption: "Equipo DW · puesta en marcha mina de litio",      tag: "Trabajo",     span: "wide"  },
  { src: "/img/productos/planta-salta.jpg",               alt: "Planta potabilizadora completa instalada en Salta",      caption: "Planta potabilizadora · Salta",                   tag: "Industrial",  span: "tall"  },
  { src: "/img/galeria/instalacion-3.jpg",                alt: "Ósmosis 250-300L línea Eco Cristalcord",                 caption: "Ósmosis 250-300 L · Eco · Cristalcord",           tag: "Producto"                  },
  { src: "/img/productos/lavadora-llenadora-eco.jpg",     alt: "Lavadora llenadora línea Eco DW Aguas",                  caption: "Lavadora llenadora · línea Eco",                  tag: "Producto"                  },
  { src: "/img/productos/filtro-domiciliario-instalado.jpg", alt: "Filtro domiciliario instalado",                       caption: "Filtro domiciliario instalado",                   tag: "Residencial", span: "tall"  },
  { src: "/img/productos/planta-cosquin-600lh.jpg",       alt: "Planta potabilizadora 600 L/h en Cosquín",               caption: "Planta potabilizadora 600 L/h · Cosquín",         tag: "Industrial"                },
  { src: "/img/productos/taller-fabrica.jpg",             alt: "Taller de fabricación DW Aguas",                         caption: "Foto en fábrica",                                 tag: "Trabajo"                   },
  { src: "/img/galeria/producto-1.jpg",                   alt: "Servicio de limpieza química de membranas",              caption: "Limpieza química de membranas",                   tag: "Trabajo"                   },
  { src: "/img/galeria/instalacion-2.jpg",                alt: "Filtro de carbón domiciliario",                          caption: "Filtro de carbón domiciliario",                   tag: "Residencial"               },
  { src: "/img/galeria/instalacion-1.jpg",                alt: "Ósmosis 500 litros/hora",                                caption: "Ósmosis inversa · 500 L/h",                       tag: "Producto"                  },
];
