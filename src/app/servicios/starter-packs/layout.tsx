import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Landing Pages (Starter Packs) | Jordan Digitalizaciones" },
  description:
    "Landing pages de alta conversión para lanzar tu negocio, con planes de pago único, suscripción mensual y anual. Dominio, branding y mantenimiento incluidos.",
};

export default function StarterPacksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
