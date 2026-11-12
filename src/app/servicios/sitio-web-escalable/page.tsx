import ServiceCard from '@/components/ServiceCard';

export default function SitioWebEscalable() {
  const basicServices = [
    {
      title: "Compra Puntual",
      price: "$499.000",
      description: "Configuración inicial de un sitio web profesional y funcional de 3 a 5 secciones.",
      features: [
        { label: "Sitio Web de 3 a 5 Secciones", included: true },
        { label: "Dominio y Correo", included: false },
        { label: "Branding", included: false },
        { label: "Mantenimiento", included: false },
      ],
      actionText: "Comprar Ahora",
    },
    {
      title: "Suscripción Mensual",
      price: "$79.000/mes",
      description: "Presencia online continua con soporte y mantenimiento básico.",
      features: [
        { label: "Sitio Web de 3 a 5 Secciones", included: true },
        { label: "1 Dominio Gratis + 3 Correos", included: true },
        { label: "Branding Básico", included: true },
        { label: "Mantenimiento Básico y Seguridad", included: true },
        { label: "Panel de Administración (CMS) Básico", included: true },
      ],
      actionText: "Suscribirse Mensual",
      highlight: true,
    },
    {
      title: "Suscripción Anual",
      price: "$799.000/año",
      description: "Asegura tu presencia online por un año con beneficios adicionales.",
      features: [
        { label: "Sitio Web de 3 a 5 Secciones", included: true },
        { label: "1 Dominio Gratis + 3 Correos", included: true },
        { label: "Branding Básico", included: true },
        { label: "Mantenimiento Básico y Seguridad", included: true },
        { label: "Workshop Estratégico Anual (2h)", included: true },
      ],
      actionText: "Suscribirse Anual",
    },
  ];

  const proServices = [
    {
      title: "Pago Único PRO",
      price: "$999.000",
      description: "Configuración profesional para un sitio de 5 a 8 secciones y captura de leads.",
      features: [
        { label: "Sitio Web de 5 a 8 Secciones + Blog", included: true },
        { label: "Branding Pro (Logo Vectorizado, Mockups y Editables)", included: true },
        { label: "Integración de Leads (Pop-up y Formularios)", included: true },
        { label: "Auditoría SEO Inicial", included: true },
      ],
      actionText: "Comprar Ahora PRO",
    },
    {
      title: "Suscripción Mensual PRO",
      price: "$129.000/mes",
      description: "Crecimiento continuo con soporte Pro y reportes mensuales.",
      features: [
        { label: "Sitio Web de 5 a 8 Secciones + Blog", included: true },
        { label: "Branding Pro (Logo Vectorizado, Mockups y Editables)", included: true },
        { label: "Integración de Leads (Pop-up y Formularios)", included: true },
        { label: "Auditoría SEO Inicial", included: true },
        { label: "Reporte Mensual de Tráfico y Conversión", included: true },
      ],
      actionText: "Suscribirse Mensual PRO",
      highlight: true,
    },
    {
      title: "Suscripción Anual PRO",
      price: "$1,299.000/año",
      description: "Plan anual Pro con workshops estratégicos para maximizar tu crecimiento.",
      features: [
        { label: "Sitio Web de 5 a 8 Secciones + Blog", included: true },
        { label: "Branding Pro (Logo Vectorizado, Mockups y Editables)", included: true },
        { label: "Integración de Leads (Pop-up y Formularios)", included: true },
        { label: "Auditoría SEO Inicial", included: true },
        { label: "2 Workshops Estratégicos Anuales", included: true },
      ],
      actionText: "Suscribirse Anual PRO",
    },
  ];

  const premiumServices = [
    {
        title: "Pago Único PREMIUM",
        price: "$1,499.000",
        description: "Sitio web ilimitado con rendimiento optimizado y analítica avanzada.",
        features: [
            { label: "Sitio Web Personalizado (Ilimitado)", included: true },
            { label: "Branding Completo (Voz, Tono, Diseño Avanzado)", included: true },
            { label: "WPO Avanzado + Certificado SSL Dedicado", included: true },
            { label: "Pixel de Meta + Seguimiento de Comportamiento", included: true },
            { label: "Bot Básico y Conexión con CRM (multi-formularios)", included: true },
        ],
        actionText: "Comprar Ahora PREMIUM",
    },
    {
        title: "Suscripción Mensual PREMIUM",
        price: "$199.000/mes",
        description: "Máximo rendimiento y soporte continuo para tu sitio web.",
        features: [
            { label: "Sitio Web Personalizado (Ilimitado)", included: true },
            { label: "Branding Completo", included: true },
            { label: "WPO Avanzado + Certificado SSL Dedicado", included: true },
            { label: "Pixel de Meta + Seguimiento", included: true },
            { label: "Bot Básico y Conexión con CRM", included: true },
            { label: "Cupón 20% OFF en Automatizaciones de Funnel", included: true },
        ],
        actionText: "Suscribirse Mensual PREMIUM",
        highlight: true,
    },
    {
        title: "Suscripción Anual PREMIUM",
        price: "$1,999.000/año",
        description: "La mejor solución anual para un sitio de alto rendimiento.",
        features: [
            { label: "Sitio Web Personalizado (Ilimitado)", included: true },
            { label: "Branding Completo", included: true },
            { label: "WPO Avanzado + Certificado SSL Dedicado", included: true },
            { label: "Pixel de Meta + Seguimiento", included: true },
            { label: "Bot Básico y Conexión con CRM", included: true },
            { label: "Cupón 30% OFF en Automatizaciones de Funnel", included: true },
        ],
        actionText: "Suscribirse Anual PREMIUM",
    },
  ];

  const vipServices = [
    {
        title: "Pago Único VIP",
        price: "$2,999.000",
        description: "Infraestructura dedicada y estrategia a medida para máxima autoridad.",
        features: [
            { label: "Funnel a la Medida y Paneles Personalizados", included: true },
            { label: "Implementación de Odoo, n8n, etc.", included: false },
            { label: "VPS DEDICADO Incluido", included: false },
        ],
        actionText: "Comprar Ahora VIP",
    },
    {
        title: "Suscripción Mensual VIP",
        price: "$399.000/mes",
        description: "Servidor dedicado y marketing activo para un crecimiento sin precedentes.",
        features: [
            { label: "VPS DEDICADO Incluido", included: true },
            { label: "Instalación y Mantenimiento de Odoo, n8n, etc.", included: true },
            { label: "Funnel a la Medida y Paneles Personalizados", included: true },
            { label: "5 Contenidos Promocionales Mensuales", included: true },
            { label: "Soporte Prioritario 12h", included: true },
        ],
        actionText: "Suscribirse Mensual VIP",
        highlight: true,
    },
    {
        title: "Suscripción Anual VIP",
        price: "$3,999.000/año",
        description: "El paquete definitivo para una dominación total del mercado digital.",
        features: [
            { label: "VPS DEDICADO Incluido", included: true },
            { label: "Instalación y Mantenimiento de Odoo, n8n, etc.", included: true },
            { label: "Funnel a la Medida y Paneles Personalizados", included: true },
            { label: "10 Contenidos Promocionales Mensuales", included: true },
            { label: "Soporte Prioritario 4h (Respuesta Crítica)", included: true },
        ],
        actionText: "Suscribirse Anual VIP",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-5xl font-extrabold text-champagne mb-4 text-center font-display">Sitio Web Escalable</h1>
      <p className="text-lg text-text-warm text-center mb-10">
        Una web completa y profesional, con varias secciones que puedes actualizar tú mismo.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Nivel Básico */}
        <section id="nivel-basico" className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">
            🥇 NIVEL BÁSICO: Web Fundacional
          </h2>
          <p className="text-center text-text-warm mb-8">
            Ofrecer un sitio web profesional y funcional con las secciones clave para establecer presencia online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basicServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel Pro */}
        <section id="nivel-pro" className="mb-12">
          <h2 className="text-3xl font-bold text-verdigris mb-6 text-center font-display">
            🥈 NIVEL PRO: Web de Crecimiento y Marca
          </h2>
          <p className="text-center text-text-warm mb-8">
            Escalar la imagen de marca con diseño avanzado y preparar el sitio para la captura de leads a través de sus múltiples páginas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel Premium */}
        <section id="nivel-premium" className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">
            🥉 NIVEL PREMIUM: Web de Alto Rendimiento y Analítica
          </h2>
          <p className="text-center text-text-warm mb-8">
            Optimizar el sitio completo para campañas de publicidad, garantizar la máxima velocidad en todas las subpáginas (WPO) y tener analítica avanzada instalada para la toma de decisiones.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel VIP */}
        <section id="nivel-vip" className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">
            👑 NIVEL VIP: VIP EXPERIENCE (Web con Infraestructura Dedicada)
          </h2>
          <p className="text-center text-text-warm mb-8">
            Máxima autoridad digital. Se entrega la capacidad de un servidor privado virtual (VPS) para alojar sistemas complejos (CRM/ERP) que interactúan con el sitio web a gran escala.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
        
        {/* Términos de Servicio y Tarifas de Exportación */}
        <section id="terminos-y-tarifas" className="mt-16">
          <h2 className="text-3xl font-bold text-champagne mb-8 text-center font-display">Términos Clave y Tarifas de Exportación</h2>
          <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8 mb-8">
            <h3 className="text-2xl font-bold text-kinpaku mb-4">
              📦 Tarifa de Exportación de Activos Digitales (Sitio Web Escalable)
            </h3>
            <p className="text-text-warm mb-4">
              Esta tarifa cubre la descarga, organización, documentación y empaquetado de todos los archivos del sitio, el contenido de texto, las imágenes optimizadas y todas las configuraciones técnicas asociadas al sitio web de múltiples páginas.
            </p>
            <ul className="list-disc list-inside text-text-warm space-y-2">
              <li>
                <strong className="text-champagne">NIVEL BÁSICO:</strong> Archivos del Sitio Web de 3-5 páginas, archivos básicos de template, Tipografía y Paleta de Colores. <span className="font-bold text-kinpaku">$150.000 USD/CLP</span>
              </li>
              <li>
                <strong className="text-champagne">NIVEL PRO:</strong> Todo lo Básico + Archivos Editables de Logotipo + Copia de seguridad de la base de datos de los leads + Configuración de Blog. <span className="font-bold text-verdigris">$300.000 USD/CLP</span>
              </li>
              <li>
                <strong className="text-champagne">NIVEL PREMIUM:</strong> Todo lo PRO + Documentación de configuraciones avanzadas de WPO y Analítica + Archivos de Branding Completo y multimedia asociada. <span className="font-bold text-kinpaku">$500.000 USD/CLP</span>
              </li>
              <li>
                <strong className="text-champagne">VIP EXPERIENCE:</strong> Todo lo PREMIUM + Backup Completo del VPS (archivos, base de datos de Odoo/n8n/Chatwoot), junto con documentación detallada de la infraestructura. <span className="font-bold text-kinpaku">$900.000 USD/CLP</span>
              </li>
            </ul>
          </div>
          <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8">
            <h3 className="text-2xl font-bold text-champagne mb-4">🚨 Término Clave de la Salida</h3>
            <p className="text-text-warm italic">
              &ldquo;Debido a la complejidad y la gestión de bases de datos de un Sitio Web Escalable, la Tarifa de Exportación varía según el nivel. Esta tarifa es obligatoria si el cliente desea llevarse sus activos digitales y la propiedad del código/configuración técnica al cancelar su suscripción (Mensual o Anual).&rdquo;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}