"use client";

import Link from 'next/link';

export default function ServiciosPuntuales() {
  return (
    <div className="min-h-screen bg-lacquer text-champagne flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-lacquer-raised rounded-lg border border-gold-hairline p-6 sm:p-8 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-champagne mb-4 font-display">
          Catálogo de Servicios Puntuales
        </h1>
        <p className="text-lg text-text-muted leading-relaxed mb-6">
          Adquiere activos digitales de alto valor con una única inversión, sin suscripciones. Ideal para necesidades específicas y resultados rápidos.
        </p>
        <div className="mt-8">
          <Link href="/servicios" className="inline-block bg-kinpaku text-lacquer-deep hover:opacity-90 font-bold py-3 px-8 rounded-lg transition-opacity duration-300">
            &larr; Volver a Servicios
          </Link>
        </div>
      </div>

      {/* Aquí podrías añadir más secciones con los servicios puntuales específicos */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-champagne mb-6 font-display">Próximamente: Detalles de los Servicios</h2>
        <p className="text-lg text-text-muted">
          En esta sección podrás describir cada servicio puntual, sus beneficios, proceso y precios.
        </p>
      </div>
    </div>
  );
}