export type FAQ = { q: string; a: string };

export type Industria = {
  slug: string;
  nombre: string;
  titleSEO: string;
  descripcionMeta: string;
  hero: string;
  intro: string;
  desafios: { t: string; d: string }[];
  solucion: string[];
  productosRecomendados: string[];
  beneficios: { t: string; d: string }[];
  casoEjemplo: string;
  faqs: FAQ[];
};

export const INDUSTRIAS: Industria[] = [
  {
    slug: "soderias",
    nombre: "Soderías",
    titleSEO: "Equipos para soderías · Tratamiento de agua para envasado",
    descripcionMeta: "Equipos completos para soderías: ósmosis inversa, ionización de plata, llenadoras y lavadoras de bidones. Línea llave en mano fabricada en Córdoba. +20 años.",
    hero: "Equipo completo de envasado para soderías",
    intro: "Una sodería necesita una línea de tratamiento + envasado + sanitización integrada. Diseñamos y fabricamos la línea entera —desde el agua de pozo o red hasta el bidón cerrado y etiquetado— para que arranques tu envasado con todo en regla.",
    desafios: [
      { t: "Calidad del agua estable", d: "El cliente final espera el mismo sabor en cada bidón. Variaciones de pH, dureza o sales arruinan tu marca." },
      { t: "Cumplimiento bromatológico", d: "Bromatología provincial exige análisis periódicos y trazabilidad. Sin equipos certificables, no hay habilitación." },
      { t: "Productividad operario", d: "Con envasado manual no llegás al volumen para ser rentable. Necesitás semi-automatización." },
      { t: "Vida útil de los bidones", d: "Los bidones retornables son tu activo. Sin sanitización correcta, se contaminan y los perdés." },
    ],
    solucion: [
      "Pre-tratamiento: filtros de sedimentos + carbón activado + ablandador",
      "Tratamiento principal: ósmosis inversa industrial con membranas premium",
      "Esterilización: lámparas UV + ionizador de plata para acción residual",
      "Lavadora rotativa de bidones con detergente alcalino + sanitizante",
      "Llenadora semiautomática con volumen exacto",
      "Mantenimiento programado: cartuchos, sales, repuestos, visitas técnicas",
    ],
    productosRecomendados: ["osmosis", "ionizadores", "llenadoras", "lavadoras", "esterilizadores"],
    beneficios: [
      { t: "Sabor estable, marca sólida", d: "Tus clientes vuelven porque saben qué esperar." },
      { t: "Habilitable", d: "Equipos certificables para bromatología provincial." },
      { t: "Producción semi-industrial", d: "Pasás de envasar 50 bidones/día a 300+ con un solo operario." },
    ],
    casoEjemplo: "Sodería en interior de Córdoba: arrancaron con 80 bidones/día manualmente. Instalamos línea completa OI + UV + Ag + llenadora + lavadora. Ahora envasan 350 bidones/día con un operario y dos colaboradores eventuales.",
    faqs: [
      { q: "¿Qué necesito para empezar una sodería?", a: "Habilitación municipal y bromatológica, agua de calidad (red o pozo), espacio mínimo de 30 m² para la línea, y inversión inicial en equipos. Te acompañamos en el cálculo del retorno." },
      { q: "¿Puedo arrancar con equipos chicos y crecer?", a: "Sí. Diseñamos modular: la ósmosis y los pre-filtros se dimensionan para el volumen actual y se escalan a futuro." },
      { q: "¿Cuánto cuesta la línea completa?", a: "Depende del volumen objetivo y de la calidad del agua de entrada. Pedinos un análisis y te pasamos cotización a medida." },
    ],
  },
  {
    slug: "industria-alimenticia",
    nombre: "Industria alimenticia",
    titleSEO: "Tratamiento de agua para industria alimenticia · SENASA",
    descripcionMeta: "Sistemas de tratamiento de agua para industria alimenticia bajo norma SENASA. Ósmosis inversa, esterilización UV, ablandadores. Fabricación argentina.",
    hero: "Agua de proceso para industria alimenticia",
    intro: "La industria alimenticia exige agua bajo norma SENASA: sin patógenos, con dureza controlada y conductividad estable. Diseñamos sistemas certificables que cumplen tanto agua de proceso como agua de enjuague final.",
    desafios: [
      { t: "Cumplimiento SENASA", d: "Análisis periódicos exigidos por norma. Sin trazabilidad documentada, paran la planta." },
      { t: "Variabilidad del agua de red", d: "Cloraciones excesivas, picos de turbidez, cambios de dureza. Tu producto final lo nota." },
      { t: "Continuidad operativa", d: "Una falla en el agua = línea de producción parada. Necesitás backup y monitoreo." },
      { t: "Costo energético", d: "Caldera con sarro consume hasta 30% más combustible. Multiplicado por una planta grande es plata real." },
    ],
    solucion: [
      "Análisis previo del agua y del proceso productivo",
      "Filtración multietapa (sedimentos + carbón + multimedia)",
      "Ablandadores duplex (alterancia automática para no parar)",
      "Ósmosis inversa para agua de proceso",
      "Esterilización UV en última etapa",
      "Monitoreo en tiempo real: conductividad, pH, cloro residual",
      "Documentación técnica para auditorías SENASA",
    ],
    productosRecomendados: ["potabilizadores", "ablandadores", "osmosis", "esterilizadores", "carbon"],
    beneficios: [
      { t: "Calidad documentada", d: "Reportes y certificados listos para auditoría." },
      { t: "Sin paradas por agua", d: "Equipos duplex y monitoreo continuo." },
      { t: "ROI tangible", d: "Menos energía en caldera, menos defectos en producto." },
    ],
    casoEjemplo: "Frigorífico en Córdoba: dureza del agua de pozo arruinaba calderas cada 8 meses. Instalamos ablandador duplex + UV. La caldera lleva 4 años sin servicio mayor.",
    faqs: [
      { q: "¿Hacen documentación para SENASA?", a: "Sí. Entregamos planos, especificaciones técnicas, hojas de seguridad de químicos y registros de mantenimiento." },
      { q: "¿Mi planta tiene que parar para instalar?", a: "Coordinamos parada mínima. En la mayoría de los casos hacemos pre-instalación y conectamos en 24-48 hs." },
    ],
  },
  {
    slug: "farmaceutica",
    nombre: "Industria farmacéutica",
    titleSEO: "Agua purificada para industria farmacéutica · ANMAT",
    descripcionMeta: "Sistemas de agua purificada y agua para inyectables para industria farmacéutica. Doble paso, certificable ANMAT/USP. +20 años.",
    hero: "Agua purificada para procesos farmacéuticos",
    intro: "Farma exige el agua más pura del mercado: agua purificada (PW) o agua para inyectables (WFI). Construimos sistemas multipasos con ósmosis inversa, electrodesionización opcional y esterilización UV redundante.",
    desafios: [
      { t: "Cumplir ANMAT y USP", d: "Sin certificación de proveedor + procedimientos validados, no hay autorización de planta." },
      { t: "Endotoxinas y biofilm", d: "El agua tiene que estar libre de endotoxinas. Las cañerías mal diseñadas generan biofilm." },
      { t: "Validación del sistema", d: "Cada equipo necesita IQ, OQ, PQ documentados. Sin eso, auditoría te pone en suspenso." },
      { t: "Trazabilidad continua", d: "Conductividad, TOC, microbiología registrados 24/7." },
    ],
    solucion: [
      "Pre-tratamiento: sedimentos + carbón + ablandador + filtros 1 micrón",
      "Ósmosis inversa primer paso (98% rechazo de sales)",
      "Ósmosis inversa segundo paso (>99% rechazo, agua purificada USP)",
      "Esterilización UV 254 nm en línea",
      "Bucle de distribución sanitario en acero inoxidable AISI 316L sanitary",
      "Sensores de conductividad, TOC, temperatura con datalogger",
      "Documentación IQ/OQ/PQ + procedimientos de validación",
    ],
    productosRecomendados: ["osmosis", "esterilizadores", "ablandadores", "carbon"],
    beneficios: [
      { t: "Cumple USP y ANMAT", d: "Sistema validable y auditable." },
      { t: "Materiales sanitarios", d: "AISI 316L sanitary en partes en contacto con el agua purificada." },
      { t: "Documentación completa", d: "IQ/OQ/PQ + manuales operativos en español." },
    ],
    casoEjemplo: "Laboratorio en Córdoba: tenían agua bidestilada en bidones, costoso e insostenible. Instalamos sistema PW multipasos. Producen su propia agua purificada in-situ con costo operativo 70% menor.",
    faqs: [
      { q: "¿Hacen agua para inyectables (WFI)?", a: "Sí, con destilación o ultrafiltración después del segundo paso de ósmosis. Es lo más exigente en términos de validación." },
      { q: "¿Cuánto tiempo lleva la validación?", a: "Tres a seis meses depende de la complejidad. Acompañamos a tu equipo de calidad durante toda la validación." },
    ],
  },
  {
    slug: "hoteleria-y-consorcios",
    nombre: "Hotelería y consorcios",
    titleSEO: "Tratamiento de agua para hoteles, edificios y consorcios",
    descripcionMeta: "Ablandadores, filtración y desinfección para hoteles, edificios y consorcios. Cuida calderas, calefones, cañerías. +20 años en Argentina.",
    hero: "Agua tratada para hoteles, edificios y consorcios",
    intro: "Un edificio con agua dura pierde plata. Cañerías obstruidas, calefones cortos de vida, lavarropas comunes que rompen, manchas en azulejos, huéspedes que se quejan. Diseñamos sistemas centrales que tratan toda el agua del edificio.",
    desafios: [
      { t: "Sarro destruye instalaciones", d: "Cañerías, calefones y calderas duran un tercio de lo normal con agua dura." },
      { t: "Quejas de huéspedes", d: "Manchas en duchas, sabor raro, mal espumado de jabón. Mala review = menos ocupación." },
      { t: "Costos de mantenimiento", d: "Cambio de calefón cada 3 años cuando deberían durar 10. Multiplicado por toda la torre." },
      { t: "Espacio limitado", d: "El sótano es chico. Los equipos tienen que ser compactos." },
    ],
    solucion: [
      "Análisis del agua de la cisterna",
      "Ablandador central duplex con regeneración automática",
      "Filtración multimedia de pre-tratamiento",
      "Esterilización UV en línea de consumo",
      "Tablero de control con monitoreo de consumo de sales",
      "Mantenimiento programado mensual o trimestral",
    ],
    productosRecomendados: ["ablandadores", "esterilizadores", "multimedia", "carbon"],
    beneficios: [
      { t: "Vida útil multiplicada", d: "Calefones, lavarropas y cañerías duran 3-5 veces más." },
      { t: "Huésped feliz", d: "Sin manchas, agua suave, mejor experiencia de ducha." },
      { t: "Costos predecibles", d: "Plan de mantenimiento mensual fijo." },
    ],
    casoEjemplo: "Hotel boutique en Villa Carlos Paz: cambiaban un calefón al año por sarro. Instalamos ablandador central duplex. Cuatro años después no han cambiado ningún calefón.",
    faqs: [
      { q: "¿Funciona para edificios de departamentos?", a: "Sí. Tratamos toda el agua de cisterna o tanque elevado. Cada departamento recibe agua blanda automáticamente." },
      { q: "¿Hace falta cambiar las cañerías?", a: "No. El ablandador previene sarro nuevo. El sarro existente se va disolviendo con el tiempo." },
    ],
  },
  {
    slug: "agropecuaria",
    nombre: "Agropecuaria y agroindustria",
    titleSEO: "Tratamiento de agua para campo y agroindustria",
    descripcionMeta: "Equipos de potabilización para tambos, feedlots, agroindustria. Convertimos agua de pozo en agua apta para consumo y proceso. Cobertura nacional.",
    hero: "Agua potable y de proceso para el campo",
    intro: "El agua de pozo del campo puede tener arsénico, sales, hierro, materia orgánica y patógenos. Diseñamos sistemas que la convierten en agua apta para consumo humano, animal o procesos productivos rurales.",
    desafios: [
      { t: "Pozos con sales y arsénico", d: "Mucha agua del centro y norte argentino tiene arsénico fuera de norma OMS. Riesgo a la salud + descalificación de productos." },
      { t: "Hierro y manganeso", d: "Manchan ropa, oxidan equipos, dan sabor metálico." },
      { t: "Distancia a Córdoba", d: "Si tu equipo se rompe estás solo. Necesitás un proveedor que te llegue donde sea." },
      { t: "Robustez en condiciones duras", d: "Polvo, calor, fluctuaciones de tensión. El equipo tiene que aguantar." },
    ],
    solucion: [
      "Análisis del agua del pozo (gratis al solicitar presupuesto)",
      "Filtración multimedia para hierro y manganeso",
      "Ósmosis inversa para arsénico y sales",
      "Esterilización UV anti-patógenos",
      "Tableros eléctricos con protección de sobre/baja tensión",
      "Repuestos en stock + servicio nacional",
    ],
    productosRecomendados: ["potabilizadores", "osmosis", "multimedia", "esterilizadores"],
    beneficios: [
      { t: "Agua apta consumo humano", d: "Pozo cumpliendo OMS y código alimentario argentino." },
      { t: "Robustez probada", d: "Equipos pensados para condiciones rurales (calor, polvo, tensión)." },
      { t: "Servicio remoto", d: "Vamos a obra en cualquier provincia. Tenemos clientes desde Salta hasta Tierra del Fuego." },
    ],
    casoEjemplo: "Establecimiento agropecuario en Salta: pozo con arsénico 4× sobre norma. Instalamos sistema de ósmosis inversa robusto. El campo tiene agua apta para consumo + animales sin tener que comprar agua envasada.",
    faqs: [
      { q: "¿Resuelven el problema del arsénico?", a: "Sí. La ósmosis inversa retiene >95% del arsénico. Más esterilización UV te deja agua apta para consumo." },
      { q: "¿Tienen equipos sin electricidad permanente?", a: "Sí. Trabajamos con paneles solares + bombeo a presión por gravedad para campos sin red estable." },
    ],
  },
];

export const INDUSTRIA_BY_SLUG: Record<string, Industria> = Object.fromEntries(
  INDUSTRIAS.map((i) => [i.slug, i])
);
