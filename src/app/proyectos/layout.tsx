import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio de proyectos de desarrollo web, plataformas y automatización: AxisPanel, SAM Conecta, wallets digitales, apps con IA y más.",
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
