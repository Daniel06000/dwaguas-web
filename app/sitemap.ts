import type { MetadataRoute } from "next";
import { PRODUCT_DETAILS } from "@/data/products-detail";
import { INDUSTRIAS } from "@/data/industrias";

const SITE_URL = "https://dwaguas.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home: MetadataRoute.Sitemap = [
    { url: SITE_URL,                 lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/#servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/#productos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/#trabajos`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/#cobertura`, lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${SITE_URL}/#contacto`,  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];
  const productos: MetadataRoute.Sitemap = PRODUCT_DETAILS.map((p) => ({
    url: `${SITE_URL}/productos/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.9 : 0.8,
  }));
  const industrias: MetadataRoute.Sitemap = INDUSTRIAS.map((i) => ({
    url: `${SITE_URL}/industrias/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
  return [...home, ...productos, ...industrias];
}
