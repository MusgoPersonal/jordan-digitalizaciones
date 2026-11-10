import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full py-24 md:py-40 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kinpaku/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-champagne mb-2 text-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Jordan Digitalizaciones
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gradient mb-6 text-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
          La Ruta Hacia tu Éxito Digital
        </h1>
        <p className="max-w-2xl text-lg text-text-muted text-center mb-10 animate-slideUp" style={{ animationDelay: '0.6s' }}>
          Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs.
          <strong className="text-champagne"> Soluciones que venden.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.8s' }}>
          <Link
            href="/servicios"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white rounded-xl overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-kinpaku group-hover:opacity-90 transition-opacity duration-300" />
            <span className="relative z-10">Ver Los Servicios</span>
          </Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-text-muted rounded-xl border border-gold-hairline-strong hover:border-kinpaku hover:text-champagne transition-all duration-300"
          >
            Conoce Mi Trabajo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


