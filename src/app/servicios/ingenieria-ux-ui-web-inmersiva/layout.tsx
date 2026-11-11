import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ingeniería UX/UI y Web Inmersiva | Jordan Digitalizaciones" },
  description:
    "Experiencias web inmersivas con 3D, scroll cinemático, microinteracciones y neuromarketing. Diseño UX/UI que diferencia tu marca y convierte.",
};

export default function IngenieriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
