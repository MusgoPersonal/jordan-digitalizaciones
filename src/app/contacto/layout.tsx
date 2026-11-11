import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos de tu proyecto digital. Escríbeme por WhatsApp o correo y te respondo rápido con una propuesta para tu negocio.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
