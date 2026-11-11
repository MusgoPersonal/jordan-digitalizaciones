import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios y Precios",
  description:
    "Catálogo de landing pages, sitios web, e-commerce, manejo de RRSS, diseño y automatización para PYMEs en Chile. Precios transparentes en CLP y cotizador en línea.",
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
