import ServiceCard from '@/components/ServiceCard';

export default function DisenoRecurrente() {
  const nivel1Services = [
    {
      title: "Setup Puntual",
      price: "$79.000",
      description: "Diseño inicial de una pieza gráfica estática para empezar con buen pie.",
      features: [
        { label: "1 Pieza Gráfica Estática", included: true },
        { label: "Uso de logo y colores del cliente", included: true },
      ],
      actionText: "Comprar Setup",
    },
    {
      title: "Suscripción Mensual",
      price: "$150.000/mes",
      description: "Contenido básico y presencia constante en redes cada mes.",
      features: [
        { label: "4 Piezas Estáticas Mensuales", included: true },
        { label: "Consistencia de Marca Básica", included: true },
        { label: "1 Ronda de Revisiones por diseño", included: true },
        { label: "Archivos JPG/PNG de las piezas", included: true },
      ],
      actionText: "Suscribirse Mensual",
      highlight: true,
    },
    {
      title: "Suscripción Anual",
      price: "$1.500.000/año",
      description: "Asegura tu contenido por un año y ahorra en el proceso.",
      features: [
        { label: "4 Piezas Estáticas Mensuales", included: true },
        { label: "Consistencia de Marca Básica", included: true },
        { label: "1 Ronda de Revisiones por diseño", included: true },
        { label: "Archivos JPG/PNG de las piezas", included: true },
      ],
      actionText: "Suscribirse Anual",
    },
  ];

  const nivel2Services = [
    {
      title: "Setup Puntual PRO",
      price: "$149.000",
      description: "Setup inicial con contenido más avanzado como carruseles o animaciones.",
      features: [
        { label: "2 Carruseles o 2 Animaciones", included: true },
        { label: "Uso de logo y colores del cliente", included: true },
      ],
      actionText: "Comprar Setup PRO",
    },
    {
      title: "Suscripción Mensual PRO",
      price: "$280.000/mes",
      description: "Mayor volumen y variedad de contenido para tus redes sociales.",
      features: [
        { label: "8 Piezas Totales / mes", included: true },
        { label: "Consistencia de Marca PRO", included: true },
        { label: "Acceso a Banco de Imágenes Premium", included: true },
      ],
      actionText: "Suscribirse Mensual PRO",
      highlight: true,
    },
    {
      title: "Suscripción Anual PRO",
      price: "$2.800.000/año",
      description: "El plan anual para un flujo de contenido profesional y versátil.",
      features: [
        { label: "8 Piezas Totales / mes", included: true },
        { label: "Consistencia de Marca PRO", included: true },
        { label: "Acceso a Banco de Imágenes Premium", included: true },
      ],
      actionText: "Suscribirse Anual PRO",
    },
  ];

  const nivel3Services = [
    {
      title: "Setup Puntual VIP",
      price: "$299.000",
      description: "Setup de alta calidad con videos cortos o mockups de producto.",
      features: [
        { label: "4 Videos Cortos o 4 Mockups de Producto", included: true },
        { label: "Uso de logo y colores del cliente", included: true },
      ],
      actionText: "Comprar Setup VIP",
    },
    {
      title: "Suscripción Mensual VIP",
      price: "$400.000/mes",
      description: "Externaliza casi toda la producción de contenido con calidad superior.",
      features: [
        { label: "15 Piezas Totales / mes", included: true },
        { label: "Soporte Prioritario y Brainstorming de Contenido", included: true },
        { label: "Creación de Mockups de Producto / Servicio", included: true },
      ],
      actionText: "Suscribirse Mensual VIP",
      highlight: true,
    },
    {
      title: "Suscripción Anual VIP",
      price: "$4.000.000/año",
      description: "El servicio de contenido definitivo para una marca que busca destacar.",
      features: [
        { label: "15 Piezas Totales / mes", included: true },
        { label: "Soporte Prioritario y Brainstorming de Contenido", included: true },
        { label: "Creación de Mockups de Producto / Servicio", included: true },
      ],
      actionText: "Suscribirse Anual VIP",
    },
  ];

  const serviciosPuntuales = [
      { title: "Diseño de Mockup por Producto", description: "Creación de una imagen visual de alta calidad que muestre el producto/servicio en un entorno realista.", price: "$40.000"},
      { title: "Diseño de Flyer de Alto Impacto", description: "Diseño de un flyer publicitario complejo, con diseño avanzado y 2 rondas de revisiones.", price: "$75.000"},
      { title: "Diseño de Plantilla de Email", description: "Diseño de 1 plantilla HTML/CSS básica para email marketing (compatible con Mailchimp o similar).", price: "$120.000"},
  ]

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-5xl font-extrabold text-champagne mb-4 text-center font-display">Diseño Recurrente</h1>
      <p className="text-lg text-text-warm text-center mb-10 max-w-4xl mx-auto">
        Deja el diseño en mis manos con un precio fijo al mes, y dedica tu tiempo a tu negocio.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Nivel 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">Nivel 1: Kit de Inicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nivel1Services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-verdigris mb-6 text-center font-display">Nivel 2: Pack Profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nivel2Services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-kinpaku mb-6 text-center font-display">Nivel 3: Estudio de Contenido VIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nivel3Services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
        
        {/* Servicios Puntuales Adicionales */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-champagne mb-8 text-center font-display">Opciones de Servicios Puntuales Adicionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviciosPuntuales.map((service, index) => (
                <div key={index} className="bg-lacquer-raised rounded-lg border border-gold-hairline p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-kinpaku mb-2">{service.title}</h3>
                        <p className="text-text-warm mb-4">{service.description}</p>
                    </div>
                    <p className="text-3xl font-extrabold text-kinpaku mt-4">{service.price}</p>
                </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
