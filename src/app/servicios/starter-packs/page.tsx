import ServiceCard from '@/components/ServiceCard';

export default function StarterPacks() {
  const basicServices = [
    {
      title: "Compra Puntual",
      price: "$150.000",
      description: "Lanza tu idea o negocio de forma rápida y profesional con pago único.",
      features: [
        { label: "Landing Page BASIC STATIC ONE PAGE", included: true },
        { label: "Dominio y Correo", included: false },
        { label: "Branding Básico (Colores y Tipografía)", included: false },
        { label: "Mantenimiento 24/7 y Monitoreo", included: false },
      ],
      actionText: "Comprar Ahora",
    },
    {
      title: "Suscripción Mensual",
      price: "$99.000/mes",
      description: "Flexibilidad y soporte continuo para tu emprendimiento digital.",
      features: [
        { label: "Landing Page BASIC STATIC ONE PAGE", included: true },
        { label: "1 Dominio Gratis + 1 Correo", included: true },
        { label: "Branding Básico (Colores y Tipografía)", included: true },
        { label: "Mantenimiento 24/7 y Monitoreo", included: true },
        { label: "Beneficio Exclusivo: Optimización SEO Inicial", included: true },
      ],
      actionText: "Suscribirse Mensual",
      highlight: true,
    },
    {
      title: "Suscripción Anual",
      price: "$990.000/año",
      description: "Ahorra y asegura el éxito digital de tu negocio por un año.",
      features: [
        { label: "Landing Page BASIC STATIC ONE PAGE", included: true },
        { label: "1 Dominio Gratis + 1 Correo", included: true },
        { label: "Branding Básico (Colores y Tipografía)", included: true },
        { label: "Mantenimiento 24/7 y Monitoreo", included: true },
        { label: "Beneficio Exclusivo: Workshop Estratégico Anual (2h)", included: true },
      ],
      actionText: "Suscribirse Anual",
    },
  ];

  const proServices = [
    {
      title: "Pago Único PRO",
      price: "$350.000",
      description: "Configuración profesional para elevar tu imagen y captar leads.",
      features: [
        { label: "Landing Page BASIC STATIC ONE PAGE", included: true },
        { label: "Branding Pro (Logo Vectorizado, Mockups y Editables)", included: true },
        { label: "Integración de Leads (Pop-up y Email Mkt)", included: true },
        { label: "Dominio y Mantenimiento", included: false },
      ],
      actionText: "Comprar Ahora PRO",
    },
    {
      title: "Suscripción Mensual PRO",
      price: "$129.000/mes",
      description: "Solución completa para crecimiento y gestión de leads con pago mensual.",
      features: [
        { label: "Landing Page BASIC STATIC ONE PAGE", included: true },
        { label: "Branding Pro (Logo Vectorizado, Mockups y Editables)", included: true },
        { label: "Integración de Leads (Pop-up y Email Mkt)", included: true },
        { label: "Dominio y Mantenimiento Todo Incluido", included: true },
        { label: "Beneficio Exclusivo: Reporte de Leads Mensual", included: true },
      ],
      actionText: "Suscribirse Mensual PRO",
      highlight: true,
    },
    {
      title: "Suscripción Anual PRO",
      price: "$1.299.000/año",
      description: "Maximiza tu inversión y crecimiento anual con todas las ventajas Pro.",
      features: [
        { label: "Landing Page BASIC STATIC ONE PAGE", included: true },
        { label: "Branding Pro (Logo Vectorizado, Mockups y Editables)", included: true },
        { label: "Integración de Leads (Pop-up y Email Mkt)", included: true },
        { label: "Dominio y Mantenimiento Todo Incluido", included: true },
        { label: "Beneficio Exclusivo: 2 Workshops Estratégicos Anuales", included: true },
      ],
      actionText: "Suscribirse Anual PRO",
    },
  ];

  const premiumServices = [
    {
      title: "Pago Único PREMIUM",
      price: "$499.000",
      description: "Configuración inicial de alto rendimiento para optimizar tu inversión publicitaria.",
      features: [
        { label: "Branding Completo (Voz, Tono, Diseño Avanzado)", included: true },
        { label: "Rendimiento y SEO (WPO, Análisis PageSpeed y SEO Optimizado)", included: true },
        { label: "Marketing Avanzado (Pixel de Meta + Seguimiento de Comportamiento)", included: true },
        { label: "Automatización (Bot Básico y Conexión con CRM)", included: true },
      ],
      actionText: "Comprar Ahora PREMIUM",
    },
    {
      title: "Suscripción Mensual PREMIUM",
      price: "$159.000/mes",
      description: "El control total y la automatización que tu negocio necesita cada mes.",
      features: [
        { label: "Branding Completo (Voz, Tono, Diseño Avanzado)", included: true },
        { label: "Rendimiento y SEO (WPO, Análisis PageSpeed y SEO Optimizado)", included: true },
        { label: "Marketing Avanzado (Pixel de Meta + Seguimiento de Comportamiento)", included: true },
        { label: "Automatización (Bot Básico y Conexión con CRM)", included: true },
        { label: "Incentivo Exclusivo: Cupón 20% OFF en Automatizaciones", included: true },
      ],
      actionText: "Suscribirse Mensual PREMIUM",
      highlight: true,
    },
    {
      title: "Suscripción Anual PREMIUM",
      price: "$1.599.000/año",
      description: "Asegura el máximo rendimiento y automatización de tu negocio por un año, ahorrando.",
      features: [
        { label: "Branding Completo (Voz, Tono, Diseño Avanzado)", included: true },
        { label: "Rendimiento y SEO (WPO, Análisis PageSpeed y SEO Optimizado)", included: true },
        { label: "Marketing Avanzado (Pixel de Meta + Seguimiento de Comportamiento)", included: true },
        { label: "Automatización (Bot Básico y Conexión con CRM)", included: true },
        { label: "Incentivo Exclusivo: Cupón 30% OFF en Automatizaciones", included: true },
      ],
      actionText: "Suscribirse Anual PREMIUM",
    },
  ];

  const vipServices = [
    {
      title: "Pago Único VIP",
      price: "$999.000",
      description: "Infraestructura dedicada y control total para empresas con grandes requerimientos.",
      features: [
        { label: "VPS DEDICADO Incluido", included: false },
        { label: "Instalación de Odoo, n8n, Chatwoot, Matomo", included: false },
        { label: "Funnel a la Medida y Paneles Personalizados", included: true },
        { label: "Marketing Activo", included: false },
      ],
      actionText: "Comprar Ahora VIP",
    },
    {
      title: "Suscripción Mensual VIP",
      price: "$199.000/mes",
      description: "Escalabilidad, control total y soporte prioritario mes a mes.",
      features: [
        { label: "VPS DEDICADO Incluido", included: true },
        { label: "Instalación de Odoo, n8n, Chatwoot, Matomo", included: true },
        { label: "Funnel a la Medida y Paneles Personalizados", included: true },
        { label: "3 Contenidos Promocionales Mensuales", included: true },
        { label: "Beneficio Exclusivo: Soporte Prioritario 24h", included: true },
      ],
      actionText: "Suscribirse Mensual VIP",
      highlight: true,
    },
    {
      title: "Suscripción Anual VIP",
      price: "$1.999.000/año",
      description: "La experiencia VIP completa por un año, con beneficios exclusivos y ahorro.",
      features: [
        { label: "VPS DEDICADO Incluido", included: true },
        { label: "Instalación de Odoo, n8n, Chatwoot, Matomo", included: true },
        { label: "Funnel a la Medida y Paneles Personalizados", included: true },
        { label: "5 Contenidos Promocionales Mensuales", included: true },
        { label: "Beneficio Exclusivo: Implementación GRATIS de 1 herramienta extra en el VPS", included: true },
      ],
      actionText: "Suscribirse Anual VIP",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-5xl font-extrabold text-champagne mb-4 text-center font-display">Emprendedor Digital Starter Packs</h1>
      <p className="text-lg text-text-warm text-center mb-10 max-w-4xl mx-auto">
        Planes claros, de pago único o mes a mes, para lanzar y hacer crecer tu negocio de forma rápida y profesional.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Nivel Básico */}
        <section id="nivel-basico" className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">
            🥇 NIVEL BÁSICO: Emprendedor Digital Starter Pack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basicServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel Pro */}
        <section id="nivel-pro" className="mb-12">
          <h2 className="text-3xl font-bold text-verdigris mb-6 text-center font-display">
            🥈 NIVEL PRO: Plan Profesional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel Premium */}
        <section id="nivel-premium" className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">
            🥉 NIVEL PREMIUM: Alto Rendimiento y Automatización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premiumServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel VIP */}
        <section id="nivel-vip" className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">
            👑 NIVEL VIP: VIP EXPERIENCE (Infraestructura Dedicada)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Términos de Servicio y Tarifas de Exportación */}
        <section id="terminos-y-tarifas" className="mt-16">
          <h2 className="text-3xl font-bold text-champagne mb-8 text-center font-display">Términos Clave y Tarifas de Exportación (Starter Packs)</h2>
          <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8 mb-8">
            <h3 className="text-2xl font-bold text-kinpaku mb-4">1. Dominio y Propiedad</h3>
            <ul className="list-disc list-inside text-text-warm space-y-2">
              <li>
                <strong className="text-champagne">Pago Único (Todos los niveles):</strong> Dominio no incluido. El cliente debe comprarlo y gestionarlo. La responsabilidad total del dominio (renovación y costes) recae en el cliente.
              </li>
              <li>
                <strong className="text-champagne">Suscripciones (Básico, Pro, Premium, VIP):</strong> Dominio GRATIS por el Primer Año. El dominio se compra a nombre del cliente. Al final del primer año, la renovación anual es responsabilidad del cliente y tiene un costo estándar de mercado.
              </li>
              <li>
                <strong className="text-champagne">Transferencia de Propiedad:</strong> El cliente es el titular registral del dominio y de la landing page. Si el cliente decide dejar la suscripción, puede llevarse su dominio y los archivos de la web (se aplica una tarifa de exportación y empaquetado de archivos).
              </li>
            </ul>
          </div>

          <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8 mb-8">
            <h3 className="text-2xl font-bold text-verdigris mb-4">2. Mantenimiento y Soporte</h3>
            <ul className="list-disc list-inside text-text-warm space-y-2">
              <li>
                <strong className="text-champagne">BÁSICO ($99/mes):</strong> Mantenimiento Básico (Monitoreo 24/7, Manejo de Errores y Actualizaciones de herramientas). No incluye soporte para cambios de contenido o diseño (solo técnicos).
              </li>
              <li>
                <strong className="text-champagne">PRO ($129/mes):</strong> Todo lo anterior + Reporte de Leads Mensual. Incluye consultas limitadas sobre el rendimiento de la captación de leads.
              </li>
              <li>
                <strong className="text-champagne">PREMIUM ($159/mes):</strong> Mantenimiento Avanzado (WPO, Analítica y Pixel de Meta). El mantenimiento asegura la funcionalidad de las herramientas avanzadas y la velocidad de carga.
              </li>
              <li>
                <strong className="text-champagne">VIP EXPERIENCE ($199/mes):</strong> Mantenimiento y Soporte DEDICADO para el VPS y las herramientas (Odoo, n8n, etc.). Soporte Prioritario 24h. Se enfoca en garantizar el uptime y la correcta ejecución de las automatizaciones críticas.
              </li>
            </ul>
          </div>

          <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8 mb-8">
            <h3 className="text-2xl font-bold text-kinpaku mb-4">3. Cancelación de Suscripciones</h3>
            <ul className="list-disc list-inside text-text-warm space-y-2">
              <li>
                <strong className="text-champagne">Mensual (Todos los niveles):</strong> Flexibilidad Total. Cancelación en cualquier momento sin penalizaciones. El servicio se mantiene activo hasta el final del mes ya pagado. No se realizan reembolsos por pagos parciales.
              </li>
              <li>
                <strong className="text-champagne">Anual (Todos los niveles):</strong> Pago No Reembolsable. El pago anual cubre el servicio por 12 meses. No hay reembolso parcial por meses no utilizados. El servicio se mantiene activo hasta el final del período de 12 meses pagado.
              </li>
              <li>
                <strong className="text-champagne">Retención de Activos:</strong> Al cancelar, el cliente pierde el acceso al dominio y al alojamiento (hosting) provisto. Si el cliente desea conservar los archivos del sitio web y/o su configuración, se aplicará una tarifa única de exportación.
              </li>
            </ul>
          </div>

          <div className="bg-lacquer-raised rounded-lg border border-gold-hairline p-8 mb-8">
            <h3 className="text-2xl font-bold text-kinpaku mb-4">
              📦 Tarifa de Exportación de Activos Digitales
            </h3>
            <p className="text-text-warm mb-4">
              Cubre el tiempo y la mano de obra para organizar, documentar y empaquetar todos los activos digitales para la transferencia.
            </p>
            <ul className="list-disc list-inside text-text-warm space-y-2">
              <li>
                <strong className="text-champagne">NIVEL BÁSICO:</strong> <span className="font-bold text-kinpaku">$75.000 USD/CLP</span>
              </li>
              <li>
                <strong className="text-champagne">NIVEL PRO:</strong> <span className="font-bold text-verdigris">$150.000 USD/CLP</span>
              </li>
              <li>
                <strong className="text-champagne">NIVEL PREMIUM:</strong> <span className="font-bold text-kinpaku">$250.000 USD/CLP</span>
              </li>
              <li>
                <strong className="text-champagne">VIP EXPERIENCE:</strong> <span className="font-bold text-kinpaku">$450.000 USD/CLP</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
