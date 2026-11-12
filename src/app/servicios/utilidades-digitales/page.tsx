import ImmersiveServiceCard from '@/components/ImmersiveServiceCard';

export default function UtilidadesDigitales() {
  const nivel1Services = [
    {
      title: "Firma de Email Profesional",
      description: "Diseño de una firma de correo electrónico profesional con logotipo, enlaces a RRSS y foto (en HTML/imagen).",
      price: "$45.000",
    },
    {
      title: "Configuración de Google My Business",
      description: "Creación, optimización y verificación de la ficha (Google Maps) con horario, servicios y fotos.",
      price: "$85.000",
    },
    {
      title: "Creación de Landing Page de Enlaces",
      description: "Diseño de una simple página de enlaces (tipo Linktree) con branding y hasta 7 enlaces.",
      price: "$60.000",
    },
  ];

  const nivel2Services = [
    {
      title: "Instalación de Píxeles Clave",
      description: "Configuración e instalación de Pixel de Meta (Facebook/Instagram) y Google Analytics 4 (GA4) en su sitio web.",
      price: "$120.000",
    },
    {
      title: "Widget de WhatsApp",
      description: "Instalación de un botón flotante de chat directo a WhatsApp en su sitio web (personalización de mensaje de bienvenida).",
      price: "$65.000",
    },
    {
      title: "Integración de Reviews/Testimonios",
      description: "Instalación y configuración de un widget (ej. de Google o Trustpilot) para mostrar opiniones de clientes en el sitio web.",
      price: "$90.000",
    },
  ];

  const nivel3Services = [
    {
      title: "Botón de Pago Rápido",
      description: "Configuración de un botón de pago directo (ej. PayPal o Stripe) para un producto o servicio específico en su web.",
      price: "$75.000",
    },
    {
      title: "Automatización de Email Básico",
      description: "Configuración de un flujo de email simple (ej. un correo de 'Gracias por la Suscripción' y uno de 'Recordatorio').",
      price: "$150.000",
    },
    {
      title: "Plantilla de Respuesta Rápida (CRM/Chat)",
      description: "Creación de 10 plantillas de respuesta para preguntas frecuentes (FAQs) para uso en Chatwoot o el CRM del cliente.",
      price: "$100.000",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-5xl font-extrabold text-champagne mb-4 text-center font-display">Utilidad Digital y Pruebas Sociales</h1>
      <p className="text-lg text-text-warm text-center mb-10 max-w-4xl mx-auto">
        Herramientas simples para captar datos, responder más rápido y dar confianza a tus clientes.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Nivel 1 */}
        <section id="nivel-1" className="mb-16">
          <h2 className="text-3xl font-bold text-kinpaku mb-2 text-center font-display">
            Nivel 1: Activación Básica (La Base del Contacto)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {nivel1Services.map((service, index) => (
              <ImmersiveServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel 2 */}
        <section id="nivel-2" className="mb-16">
          <h2 className="text-3xl font-bold text-verdigris mb-2 text-center font-display">
            Nivel 2: Herramientas de Confianza (Prueba Social y Datos)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {nivel2Services.map((service, index) => (
              <ImmersiveServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel 3 */}
        <section id="nivel-3" className="mb-16">
          <h2 className="text-3xl font-bold text-kinpaku mb-2 text-center font-display">
            Nivel 3: Comunicación y Automatización (Ahorro de Tiempo)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {nivel3Services.map((service, index) => (
              <ImmersiveServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
