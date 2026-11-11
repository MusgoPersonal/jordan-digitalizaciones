import ImmersiveServiceCard from "@/components/ImmersiveServiceCard";
import Link from "next/link";

type Item = { title: string; description: string; price: string };

const grupos: { titulo: string; descripcion: string; items: Item[] }[] = [
  {
    titulo: "Diseño y contenido",
    descripcion: "Piezas gráficas puntuales para tu marca, sin contratar un plan mensual.",
    items: [
      { title: "Diseño de Mockup por Producto", description: "Imagen visual de alta calidad que muestra tu producto o servicio en un entorno realista.", price: "$40.000" },
      { title: "Flyer de Alto Impacto", description: "Diseño de un flyer publicitario complejo, con diseño avanzado y 2 rondas de revisiones.", price: "$75.000" },
      { title: "Plantilla de Email", description: "Plantilla HTML/CSS para email marketing, compatible con Mailchimp o similar.", price: "$120.000" },
    ],
  },
  {
    titulo: "Utilidades digitales y confianza",
    descripcion: "Instala las herramientas clave para captar, medir y dar confianza a tus clientes.",
    items: [
      { title: "Firma de Email Profesional", description: "Firma de correo con logo, enlaces a RRSS y foto (HTML/imagen).", price: "$45.000" },
      { title: "Google My Business", description: "Creación, optimización y verificación de tu ficha en Google Maps con horario, servicios y fotos.", price: "$85.000" },
      { title: "Landing Page de Enlaces", description: "Página de enlaces (tipo Linktree) con tu branding y hasta 7 enlaces.", price: "$60.000" },
      { title: "Píxeles de Conversión (Meta + GA4)", description: "Instalación de Pixel de Meta y Google Analytics 4 en tu sitio web.", price: "$120.000" },
      { title: "Widget de WhatsApp", description: "Botón flotante de chat directo a WhatsApp con mensaje de bienvenida personalizado.", price: "$65.000" },
      { title: "Widget de Reviews / Testimonios", description: "Integración de opiniones de clientes (Google o Trustpilot) en tu web.", price: "$90.000" },
      { title: "Botón de Pago Rápido", description: "Configuración de un botón de pago directo (Stripe/PayPal) para un producto o servicio.", price: "$75.000" },
      { title: "Automatización de Email Básica", description: "Flujo simple de email: bienvenida + recordatorio.", price: "$150.000" },
      { title: "Plantillas de Respuesta (CRM/Chat)", description: "10 plantillas de respuesta rápida para preguntas frecuentes en Chatwoot o tu CRM.", price: "$100.000" },
    ],
  },
  {
    titulo: "Experiencia e inmersivo",
    descripcion: "Detalles de UX/UI, animación y 3D que diferencian tu web.",
    items: [
      { title: "Auditoría UX / Neuromarketing", description: "Análisis de tu web con 5 puntos de fricción y recomendaciones de microinteracciones.", price: "$499.000" },
      { title: "Implementación de Microinteracciones", description: "5 microinteracciones clave (hover, feedback de clic, animaciones de carga).", price: "$799.000" },
      { title: "Efecto de Partículas", description: "Efecto de partículas en una sección clave para un ambiente inmersivo.", price: "$550.000" },
      { title: "Efecto Parallax Scroll", description: "Parallax en hasta 3 secciones con distintas velocidades de desplazamiento.", price: "$1.200.000" },
      { title: "Diseño Cinético (Lottie/JSON)", description: "Animación vectorial compleja en el hero para comunicar un concepto sofisticado.", price: "$950.000" },
      { title: "Diseño de Cursor Personalizado", description: "Cursor animado con branding que responde a microinteracciones.", price: "$350.000" },
      { title: "Integración de Objeto 3D", description: "Modelado e integración de un objeto 3D interactivo en un visor web (Three.js).", price: "$2.500.000" },
      { title: "Generación de Entorno 3D", description: "Fondo o pequeño entorno 3D que reacciona a la interacción del usuario.", price: "$3.500.000" },
      { title: "Filtro AR para Redes", description: "Filtro de Realidad Aumentada para Instagram/Meta que enlaza con tu web.", price: "$1.800.000" },
    ],
  },
];

export default function ServiciosPuntuales() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-champagne mb-4 text-center font-display">
          Servicios Puntuales
        </h1>
        <p className="text-lg text-text-warm text-center mb-12 max-w-3xl mx-auto">
          Activos digitales de alto valor con una sola inversión, sin suscripciones. Ideal para
          necesidades específicas y resultados rápidos.
        </p>

        {grupos.map((g) => (
          <section key={g.titulo} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-kinpaku mb-2 text-center font-display">
              {g.titulo}
            </h2>
            <p className="text-center text-text-muted mb-8">{g.descripcion}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {g.items.map((item) => (
                <ImmersiveServiceCard key={item.title} {...item} />
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-4">
          <Link
            href="/servicios"
            className="inline-block bg-kinpaku text-lacquer-deep hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-opacity"
          >
            Ver planes completos
          </Link>
        </div>
      </div>
    </div>
  );
}
