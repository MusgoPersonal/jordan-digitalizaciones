import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jordan-digitalizaciones.pages.dev/sitemap.xml",
    host: "https://jordan-digitalizaciones.pages.dev",
  };
}
