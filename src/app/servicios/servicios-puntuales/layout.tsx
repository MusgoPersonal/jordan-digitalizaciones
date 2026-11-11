import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Servicios Puntuales | Jordan Digitalizaciones" },
  description:
    "Activos digitales de alto valor con una sola inversión y sin suscripciones: ideales para necesidades específicas y resultados rápidos.",
};

export default function ServiciosPuntualesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
