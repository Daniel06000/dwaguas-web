export type Product = {
  id: string;
  nombre: string;
  bajada: string;
  tipo: string;
  featured: boolean;
};

export const PRODUCTS: Product[] = [
  { id: "potabilizadores", nombre: "Equipos potabilizadores", bajada: "buque insignia · diseño a medida", tipo: "Industrial", featured: true },
  { id: "osmosis", nombre: "Equipos de ósmosis inversa", bajada: "agua destilada para fábricas", tipo: "Industrial · Sodería", featured: true },
  { id: "ionizadores", nombre: "Ionizadores de plata", bajada: "tecnología propia · esterilización avanzada", tipo: "Diferencial DW", featured: true },
  { id: "esterilizadores", nombre: "Esterilizadores", bajada: "UV y químicos", tipo: "Industrial · Comercial", featured: false },
  { id: "carbon", nombre: "Filtros de carbón activado", bajada: "elimina cloro, olor, químicos", tipo: "Filtración", featured: false },
  { id: "multimedia", nombre: "Filtros multimedia", bajada: "capas de retención progresiva", tipo: "Filtración", featured: false },
  { id: "zeolita", nombre: "Filtros de zeolita", bajada: "retención mineral natural", tipo: "Filtración", featured: false },
  { id: "sedimentos", nombre: "Filtros de sedimentos", bajada: "primer nivel · partículas suspendidas", tipo: "Filtración", featured: false },
  { id: "ablandadores", nombre: "Ablandadores", bajada: "elimina sarro · cuida cañerías", tipo: "Tratamiento", featured: false },
  { id: "llenadoras", nombre: "Llenadoras semiautomáticas", bajada: "envasado de bidones", tipo: "Sodería", featured: true },
  { id: "lavadoras", nombre: "Lavadoras de bidones", bajada: "sanitización completa pre-envasado", tipo: "Sodería", featured: true },
];
