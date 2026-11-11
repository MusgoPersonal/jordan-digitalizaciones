import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton"; // Import the new component

export const metadata: Metadata = {
  metadataBase: new URL("https://jordan-digitalizaciones.pages.dev"),
  title: {
    default: "Jordan Digitalizaciones",
    template: "%s | Jordan Digitalizaciones",
  },
  description: "Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs. Soluciones que venden.",
  keywords: ["digitalización", "landing pages", "sitios web", "e-commerce", "UX/UI", "automatización", "PYMEs", "Chile"],
  openGraph: {
    title: "Jordan Digitalizaciones",
    description: "Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs. Soluciones que venden.",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary",
    title: "Jordan Digitalizaciones",
    description: "Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true} className="font-body">
        <Layout>
          {children}
        </Layout>
        <WhatsAppButton />
      </body>
    </html>
  );
}
