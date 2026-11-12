import ImmersiveServiceCard from '@/components/ImmersiveServiceCard';

export default function WebInmersiva() {
  const nivel1Services = [
    {
      title: "Auditoría UX/Neuromarketing",
      description: "Análisis de la web existente para identificar 5 puntos de fricción y sugerir microinteracciones basadas en psicología del consumidor.",
      price: "$499.000",
    },
    {
      title: "Implementación de Microinteracciones",
      description: "Codificación e implementación de 5 microinteracciones clave (ej. efectos hover sutiles, feedback visual al hacer clic, animaciones de carga).",
      price: "$799.000",
    },
    {
      title: "Efectos de Partículas",
      description: "Implementación de un efecto de partículas (ej. estrellas, humo, gotas) en una sección clave de la página para generar un ambiente inmersivo.",
      price: "$550.000",
    },
  ];

  const nivel2Services = [
    {
      title: "Efecto Parallax Scroll",
      description: "Implementación de efecto Parallax (diferentes velocidades de desplazamiento de capas) en hasta 3 secciones de la web.",
      price: "$1,200.000",
    },
    {
      title: "Diseño Cinético (Lottie/JSON)",
      description: "Integración de una animación compleja vectorial (Lottie/JSON) en el hero section de la web para comunicar un concepto sofisticado.",
      price: "$950.000",
    },
    {
      title: "Diseño de Cursor Personalizado",
      description: "Sustitución del cursor estándar por uno animado o con branding que responde a microinteracciones.",
      price: "$350.000",
    },
  ];

  const nivel3Services = [
    {
      title: "Integración de Objeto 3D (Visor)",
      description: "Modelado e integración de un Objeto 3D interactivo simple (ej. producto, logo) en un visor 3D en la web (usando Three.js o similar).",
      price: "$2,500.000",
    },
    {
      title: "Generación de Entorno 3D Simple",
      description: "Creación de un fondo o un pequeño entorno 3D que reacciona a la interacción del usuario.",
      price: "$3,500.000",
    },
    {
      title: "Integración de Filtro AR (Social)",
      description: "Diseño de un filtro simple de Realidad Aumentada (AR) para Instagram/Meta que enlaza con la web del cliente.",
      price: "$1,800.000",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-lacquer text-champagne">
      <h1 className="text-3xl md:text-5xl font-extrabold text-champagne mb-4 text-center font-display">Ingeniería UX/UI y Web Inmersiva</h1>
      <p className="text-lg text-text-warm text-center mb-10 max-w-4xl mx-auto">
        Haz que tu web se sienta única: animaciones, efectos y diseño que sorprenden a tus clientes y los invitan a quedarse.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Nivel 1 */}
        <section id="nivel-1" className="mb-16">
          <h2 className="text-3xl font-bold text-kinpaku mb-2 text-center font-display">
            Nivel 1: Neuromarketing y Microinteracciones
          </h2>
          <p className="text-center text-text-muted mb-8">
            Optimizar la web existente con principios de neuromarketing y pequeños toques de experiencia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nivel1Services.map((service, index) => (
              <ImmersiveServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel 2 */}
        <section id="nivel-2" className="mb-16">
          <h2 className="text-3xl font-bold text-verdigris mb-2 text-center font-display">
            Nivel 2: Desarrollo de Scroll Inmersivo
          </h2>
          <p className="text-center text-text-muted mb-8">
            Implementar efectos de scroll avanzados para narrar una historia de marca de forma cinemática y memorable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nivel2Services.map((service, index) => (
              <ImmersiveServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Nivel 3 */}
        <section id="nivel-3" className="mb-16">
          <h2 className="text-3xl font-bold text-kinpaku mb-2 text-center font-display">
            Nivel 3: Experiencia 3D y Realidad Aumentada (AR)
          </h2>
          <p className="text-center text-text-muted mb-8">
            Integrar objetos 3D interactivos y tecnología inmersiva para diferenciar la marca radicalmente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nivel3Services.map((service, index) => (
              <ImmersiveServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
