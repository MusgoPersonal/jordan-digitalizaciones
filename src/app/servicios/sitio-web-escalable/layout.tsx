import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Sitios Web Escalables | Jordan Digitalizaciones" },
  description:
    "Sitios web multi-sección con gestor de contenido, branding, SEO y analítica. Planes desde web fundacional hasta infraestructura dedicada (VPS).",
};

export default function SitioWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
