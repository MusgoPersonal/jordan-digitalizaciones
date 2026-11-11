import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Utilidades Digitales y Pruebas Sociales | Jordan Digitalizaciones" },
  description:
    "Firma de email, Google My Business, píxeles de Meta y GA4, widgets de WhatsApp y testimonios, botones de pago y automatización básica para tu negocio.",
};

export default function UtilidadesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
