export interface PriceLevel {
  name: string;
  prices: { unique: number; monthly: number; annual: number };
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  /** Precio "desde" real (ítem más barato) cuando es un menú a la carta. */
  fromPrice?: number;
  levels: PriceLevel[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "landing",
    title: "Landing Pages",
    subtitle: "Ideal para lanzar ideas o campañas de conversión rápidas",
    badge: "Conversión",
    levels: [
      {
        name: "Nivel Básico (Starter Pack)",
        prices: { unique: 150000, monthly: 99000, annual: 990000 },
        features: ["Landing page básica (Static One Page)", "Dominio gratis por 1 año y 1 correo (solo en suscripción)", "Branding básico (colores y tipografía)", "Mantenimiento 24/7 y monitoreo (solo en suscripción)"]
      },
      {
        name: "Nivel Pro (Plan Profesional)",
        prices: { unique: 350000, monthly: 129000, annual: 1299000 },
        features: ["Landing page básica (Static One Page)", "Logo vectorizado + Mockups y editables", "Integración de leads (Pop-up y Email Marketing)", "Dominio y Mantenimiento todo incluido (suscripción)", "Optimización SEO inicial", "Workshop estratégico anual (2h) (solo en suscripción anual)"]
      },
      {
        name: "Nivel Premium (Alto Rendimiento)",
        prices: { unique: 499000, monthly: 159000, annual: 1599000 },
        features: ["Branding completo (voz, tono y diseño avanzado)", "WPO (Velocidad) y SEO optimizado", "Pixel de Meta + Seguimiento de comportamiento", "Chatbot básico y conexión con CRM (HubSpot/ActiveCampaign)", "Reporte de leads mensual (solo en suscripción)", "2 Workshops estratégicos anuales (solo en suscripción anual)"]
      },
      {
        name: "Nivel VIP (Infraestructura Dedicada)",
        prices: { unique: 999000, monthly: 199000, annual: 1999000 },
        features: ["Servidor VPS dedicado incluido (suscripción)", "Instalación de Odoo, n8n, Chatwoot y Matomo", "Funnel a la medida y paneles personalizados", "Hasta 5 contenidos promocionales mensuales", "Soporte prioritario 24h", "Cupón de descuento en automatizaciones adicionales"]
      }
    ]
  },
  {
    id: "website",
    title: "Sitios Web Escalables",
    subtitle: "Páginas multi-sección dinámicas con gestor de contenido",
    badge: "Escalable",
    levels: [
      {
        name: "Nivel Básico (Web Fundacional)",
        prices: { unique: 499000, monthly: 79000, annual: 799000 },
        features: ["Sitio web de 3 a 5 secciones (Home, Nosotros, Servicios, Contacto)", "Dominio gratis por 1 año y 3 correos (suscripción)", "Branding básico de colores y tipografía", "Mantenimiento básico y seguridad", "Panel de administración (CMS) básico"]
      },
      {
        name: "Nivel Pro (Web Crecimiento y Marca)",
        prices: { unique: 999000, monthly: 129000, annual: 1299000 },
        features: ["Sitio web de 5 a 8 secciones + Blog", "Logo vectorizado + Mockups y editables", "Pop-up y formularios en secciones clave", "Auditoría SEO inicial", "Reporte mensual de tráfico y conversión (suscripción)", "Workshop estratégico anual (2h) (suscripción anual)"]
      },
      {
        name: "Nivel Premium (Alto Rendimiento)",
        prices: { unique: 1499000, monthly: 199000, annual: 1999000 },
        features: ["Sitio web ilimitado y estructura de contenidos a la medida", "Branding completo y diseño avanzado", "WPO avanzado y Certificado SSL dedicado", "Pixel de Meta y seguimiento de comportamiento avanzado", "Bot de FAQ y conexión con CRM (multiformularios)", "Reporte mensual + 2 Workshops anuales (suscripción anual)"]
      },
      {
        name: "Nivel VIP (Servidor Dedicado)",
        prices: { unique: 2999000, monthly: 399000, annual: 3999000 },
        features: ["Servidor VPS dedicado incluido (suscripción)", "Instalación y mantenimiento de Odoo, n8n, Chatwoot y Matomo", "Funnel a la medida y paneles personalizados multi-página", "Hasta 10 contenidos promocionales mensuales para RRSS", "Soporte prioritario (12h en mensual, 4h crítico en anual)", "Auditoría de conversión trimestral con sesión estratégica"]
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "Tiendas online profesionales preparadas para vender",
    badge: "Ventas",
    levels: [
      {
        name: "Nivel Básico (Tienda Funcional)",
        prices: { unique: 799000, monthly: 149000, annual: 1499000 },
        features: ["Tienda online para hasta 20 productos", "1 pasarela de pago (PayPal/Webpay) + Envíos básicos", "Dominio gratis + 3 correos + Branding básico (suscripción)", "Mantenimiento transaccional y seguridad nivel 1", "Capacitación inicial en manejo de inventario (4h)"]
      },
      {
        name: "Nivel Pro (Marca y Conversión)",
        prices: { unique: 1799000, monthly: 249000, annual: 2499000 },
        features: ["Tienda para hasta 100 productos + Filtros y búsqueda avanzada", "Logo vectorizado + Mockups y editables", "Configuración de recuperación de carrito abandonado", "SEO de productos y categorías clave", "Reporte de tasa de conversión mensual (suscripción)", "2 Workshops estratégicos anuales (suscripción anual)"]
      },
      {
        name: "Nivel Premium (Alto Rendimiento)",
        prices: { unique: 2999000, monthly: 399000, annual: 3999000 },
        features: ["Tienda ilimitada (productos y categorías)", "Branding completo + Guía de estilo de producto", "WPO específico para E-commerce (Checkout rápido)", "Pixel de Meta (Conversión) + Catálogo de productos", "Bot de FAQs y conexión con CRM + Email Marketing", "Cupón 20% en automatizaciones de stock"]
      },
      {
        name: "Nivel VIP (ERP y Escalabilidad)",
        prices: { unique: 4999000, monthly: 799000, annual: 7999000 },
        features: ["Servidor VPS dedicado + Integración total Odoo ERP", "Instalación de Odoo, n8n y Chatwoot", "Funnel de venta y fidelización a la medida", "Integración avanzada con hasta 3 sistemas de logística", "Hasta 15 contenidos promocionales mensuales para RRSS", "Soporte de emergencia 24/7 (Soporte transaccional)"]
      }
    ]
  },
  {
    id: "rrss",
    title: "Manejo de RRSS para PYMEs",
    subtitle: "Gestión estratégica de tus redes sociales para aumentar tu comunidad y ventas",
    badge: "Redes Sociales",
    levels: [
      {
        name: "Nivel Básico (Plan Emprendedor)",
        prices: { unique: 0, monthly: 150000, annual: 1500000 },
        features: ["12 publicaciones estáticas o carruseles al mes", "Planificación de contenido mensual", "Copywriting persuasivo y hashtags optimizados", "Optimización visual de perfiles (Instagram/Facebook)", "Reporte básico de métricas a fin de mes", "Creación y optimización de perfiles", "Programación de contenido"]
      },
      {
        name: "Nivel Pro (Plan Crecimiento)",
        prices: { unique: 0, monthly: 280000, annual: 2800000 },
        features: ["20 publicaciones totales al mes (incluye 4 Reels/videos cortos)", "Gestión e interacción de comentarios y mensajes (Lunes a Viernes)", "1 campaña publicitaria básica al mes (pauta no incluida)", "Monitoreo de competencia mensual", "Reporte detallado de crecimiento y conversiones"]
      },
      {
        name: "Nivel Premium (Plan Liderazgo)",
        prices: { unique: 0, monthly: 400000, annual: 4000000 },
        features: ["Publicación diaria o 30 piezas al mes (incluye 8 Reels/videos)", "Gestión e interacción de comunidad 24/7 (Soporte de guardia)", "Configuración e inversión estratégica en Meta/Google Ads", "Sesión quincenal de brainstorming de contenido (30 min)", "Reporte analítico estratégico profundo de retorno de inversión"]
      }
    ]
  },
  {
    id: "inmersive",
    title: "Ingeniería UX/UI y Web Inmersiva",
    subtitle: "Efectos en 3D, scroll cinemático y neuromarketing",
    badge: "Innovación",
    fromPrice: 350000,
    levels: [
      {
        name: "Nivel 1: Diseño Psicológico",
        prices: { unique: 0, monthly: 0, annual: 0 },
        features: ["Auditoría UX/Neuromarketing (5 puntos de fricción)", "Codificación de 5 microinteracciones clave (hover sutil, feedback de clicks)", "Efecto de partículas en sección clave de la página", "Documentación técnica básica incluida"]
      },
      {
        name: "Nivel 2: Scroll Inmersivo",
        prices: { unique: 0, monthly: 0, annual: 0 },
        features: ["Efecto Parallax Scroll avanzado en hasta 3 secciones", "Integración de animación compleja vectorial (Lottie/JSON) en Hero", "Diseño de cursor personalizado animado", "WPO Nivel 3 (Optimización de carga para activos multimedia)", "Mantenimiento y QA de compatibilidad opcional ($150.000/mes)"]
      },
      {
        name: "Nivel 3: Experiencia 3D y AR",
        prices: { unique: 0, monthly: 0, annual: 0 },
        features: ["Modelado e integración de un objeto 3D interactivo simple (Three.js)", "Generación de entorno 3D simple interactivo de fondo", "Integración de filtro de Realidad Aumentada (AR) para Instagram/Meta", "Documentación detallada de API, librerías y optimización multimedia"]
      }
    ]
  },
  {
    id: "design",
    title: "Asistente de Diseño Recurrente",
    subtitle: "Diseño gráfico bajo demanda con tarifa plana mensual",
    badge: "Diseño",
    levels: [
      {
        name: "Nivel 1: Kit de Inicio",
        prices: { unique: 79000, monthly: 150000, annual: 1500000 },
        features: ["4 piezas gráficas estáticas mensuales (posts, flyers o banners)", "1 ronda de revisiones por diseño", "Acceso a entregables en JPG y PNG", "Se utiliza el logotipo y paleta de colores del cliente"]
      },
      {
        name: "Nivel 2: Pack Profesional",
        prices: { unique: 149000, monthly: 280000, annual: 2800000 },
        features: ["8 piezas totales al mes (carruseles, posts estáticos o animaciones sencillas)", "Consistencia de marca PRO (tipografías y diseño adaptado)", "Acceso a banco de imágenes premium limitado", "Entregables optimizados para múltiples plataformas"]
      },
      {
        name: "Nivel 3: Estudio Contenido VIP",
        prices: { unique: 299000, monthly: 400000, annual: 4000000 },
        features: ["15 piezas totales al mes (carruseles, reels, videos cortos, mockups)", "Soporte prioritario y brainstorming quincenal de contenido (30 min)", "Creación de mockups de productos bajo demanda", "Consistencia de marca y diseño de identidad de contenido avanzado"]
      }
    ]
  },
  {
    id: "social",
    title: "Utilidad Digital y Pruebas Sociales",
    subtitle: "Instalación de utilidades clave para generar confianza y automatizar",
    badge: "Utilidad",
    fromPrice: 45000,
    levels: [
      {
        name: "Nivel 1: Activación Básica",
        prices: { unique: 0, monthly: 0, annual: 0 },
        features: ["Diseño de firma de email profesional (HTML/Imagen)", "Configuración y optimización de ficha Google My Business / Maps", "Creación de Landing Page de enlaces (estilo Linktree, hasta 7 links)"]
      },
      {
        name: "Nivel 2: Herramientas Confianza",
        prices: { unique: 0, monthly: 0, annual: 0 },
        features: ["Instalación de píxeles clave (Meta Pixel + Google Analytics 4)", "Widget flotante de WhatsApp con mensajes preconfigurados", "Integración de widget de reviews/testimonios externos (Google/Trustpilot)"]
      },
      {
        name: "Nivel 3: Automatización Básica",
        prices: { unique: 0, monthly: 0, annual: 0 },
        features: ["Configuración de botón de pago rápido directo (Stripe/PayPal/Webpay)", "Flujo de email marketing automatizado básico (bienvenida + recordatorio)", "Creación de 10 plantillas de respuesta rápida para CRM/Chatwoot"]
      }
    ]
  }
];

export const TOOLS_COST = [
  { name: "Hostinger VPS", purpose: "Servidor privado virtual dedicado para hosting de aplicaciones", cost: "$20 USD" },
  { name: "n8n Cloud (Starter/Pro)", purpose: "Automatización visual y configuración del chatbot", cost: "$50 USD" },
  { name: "Evolution API Cloud", purpose: "Conector y API para integración de mensajería (WhatsApp)", cost: "$60 USD" },
  { name: "Base de Datos Vectorial", purpose: "Memoria a largo plazo para contexto del bot/asistente de IA", cost: "$15 USD" },
  { name: "Chatwoot Cloud", purpose: "CRM principal de comunicación omnicanal y chat en vivo", cost: "$20 USD" },
  { name: "Segundo CRM / Odoo", purpose: "Gestión interna de proyectos y facturación de la empresa", cost: "$100 USD" },
  { name: "WordPress + Elementor Pro", purpose: "Base de diseño web y maquetación de landings y popups", cost: "$30 USD" },
  { name: "ElevenLabs API", purpose: "Recepcionista de voz automatizada y síntesis de voz hiperrealista", cost: "$20 USD" },
  { name: "OpenAI API / LLMs", purpose: "Interpretación de intenciones (procesamiento de textos, audios e imágenes)", cost: "$30 USD" },
  { name: "Proton VPN + Google AI Pro", purpose: "Entorno de desarrollo internacional y pruebas avanzadas de QA", cost: "$40 USD" },
];

export const formatCurrency = (amount: number) => {
  if (amount === 0) return "No disponible";
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(amount);
};
