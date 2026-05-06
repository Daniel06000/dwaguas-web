import type { MetadataRoute } from "next";

const SITE_URL = "https://dwaguas.com.ar";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/", "/v1", "/v3", "/comparar"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
