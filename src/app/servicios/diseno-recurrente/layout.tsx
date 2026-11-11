import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Diseño Gráfico Recurrente | Jordan Digitalizaciones" },
  description:
    "Diseño gráfico bajo demanda con tarifa plana mensual: piezas para redes, carruseles, videos cortos y mockups. Delega tu contenido a un estudio de diseño.",
};

export default function DisenoRecurrenteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
