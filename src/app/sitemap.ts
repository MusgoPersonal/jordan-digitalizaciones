import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://jordan-digitalizaciones.pages.dev";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/servicios/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/servicios/starter-packs/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/servicios/sitio-web-escalable/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/servicios/diseno-recurrente/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/servicios/utilidades-digitales/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/servicios/ingenieria-ux-ui-web-inmersiva/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/servicios/servicios-puntuales/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/proyectos/", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sobre-mi/", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/contacto/", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
