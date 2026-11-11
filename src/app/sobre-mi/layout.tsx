import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mí",
  description:
    "Jordan, desarrollador y especialista en digitalización de PYMEs en Santiago de Chile. Desarrollo web, automatización, neuromarketing y herramientas open-source.",
};

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
