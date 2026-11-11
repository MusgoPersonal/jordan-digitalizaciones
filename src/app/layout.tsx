import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import WhatsAppButton from "@/components/WhatsAppButton"; // Import the new component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jordan Digitalizaciones — La Ruta Hacia tu Éxito Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Digitalizaciones",
    description: "Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <body suppressHydrationWarning={true} className="font-body">
        <Layout>
          {children}
        </Layout>
        <WhatsAppButton />
      </body>
    </html>
  );
}
