export interface Project {
  title: string;
  description: string;
  services: string[];
  /** Demo en vivo (URL pública). */
  demo?: string;
  /** Repositorio (opcional; los repos de estos proyectos son privados). */
  repo?: string;
  /** Color de acento para la miniatura. */
  accent: "emerald" | "teal" | "cyan" | "indigo" | "violet" | "amber" | "rose" | "slate";
}

export const PROJECTS: Project[] = [
  {
    title: "SAM Conecta — Red de Rescate de Alimentos",
    description:
      "Plataforma comunitaria que conecta vecinos para rescatar alimentos y construir una economía circular local. Next.js, Supabase, pagos en línea, mapas y autenticación completa.",
    services: ["Next.js", "Supabase", "Pagos Online", "Mapas"],
    demo: "https://sam-conecta-web.vercel.app",
    accent: "teal",
  },
  {
    title: "AxisBot — Interfaz de Chatbot IA",
    description:
      "Interfaz de chatbot con inteligencia artificial, diseño modular y componentes accesibles, con tema oscuro y foco en usabilidad.",
    services: ["Next.js", "TypeScript", "Radix UI", "Tailwind"],
    demo: "https://axisbot-interface.vercel.app",
    accent: "cyan",
  },
  {
    title: "Wallet Inmersys — Billetera Digital",
    description:
      "Billetera digital con IA (Genkit), autenticación Firebase y visualización de datos. Stack moderno con Radix UI y shadcn.",
    services: ["Next.js", "Firebase", "Genkit AI", "Recharts"],
    demo: "https://wallet-inmersys.vercel.app",
    accent: "indigo",
  },
  {
    title: "Snap2Code — Captura a Código con IA",
    description:
      "Convierte capturas de pantalla en código funcional usando la API de Gemini. Ideal para prototipado rápido y aprendizaje visual.",
    services: ["Vite + React", "Gemini API", "IA Generativa"],
    demo: "https://snap2code-screenshot-generate.vercel.app",
    accent: "violet",
  },
  {
    title: "Super Alpha Market — Marketplace",
    description:
      "Marketplace para ayudar a emprendedores y negocios a digitalizarse: identidad de negocio, catálogo y venta en línea.",
    services: ["Vite + React", "E-commerce", "Branding"],
    demo: "https://super-alpha-marlet-sam.vercel.app",
    accent: "amber",
  },
  {
    title: "Slither Clone — Juego Web",
    description:
      "Clon moderno del clásico Snake con efectos visuales y controles fluidos, construido con React y Canvas.",
    services: ["Vite + React", "Canvas", "Game Dev"],
    demo: "https://slither-clone-lime.vercel.app",
    accent: "rose",
  },
  {
    title: "@laputamadrejordan — Marca Personal",
    description:
      "Mi perfil personal donde comparto mi día a día como desarrollador, proyectos freelance y reflexiones sobre tecnología y emprendimiento en Santiago.",
    services: ["Marca Personal", "Contenido"],
    demo: "https://www.instagram.com/laputamadrejordan/",
    accent: "emerald",
  },
];
