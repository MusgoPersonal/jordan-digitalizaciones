"use client";

export default function SobreMi() {
  return (
    <div className="py-12 px-4 bg-lacquer">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-champagne mb-8 text-center font-display">Sobre Mí</h1>

        <div className="bg-lacquer-raised rounded-lg p-8 mb-8 border border-gold-hairline">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-24 h-24 rounded-full bg-kinpaku/20 border border-kinpaku/40 flex items-center justify-center text-3xl font-bold text-kinpaku shrink-0">
              J
            </div>
            <div className="space-y-4">
              <p className="text-lg text-text-warm leading-relaxed">
                Soy <strong className="text-champagne">Jordan</strong>, tengo 24 años y vivo en Santiago de Chile. 
                Desde niño me gustó programar — mi primer sitio web lo hice para ayudar a mi mamá con su negocio, 
                y desde entonces supe que esto era lo mío.
              </p>
              <p className="text-lg text-text-warm leading-relaxed">
                Antes de los 18 ya estaba trabajando desde mi casa para clientes en <strong className="text-champagne">Italia, 
                Estados Unidos, Noruega, Perú y Argentina</strong>. Autodidacta por naturaleza, he complementado 
                mi formación con cursos de neurociencia en Biia Lab, neuromarketing con Jürgen Clarick, 
                ventas con Alex Day y Brian Tracy, SEO con Romuald Fonts, y sigo formándome
                cada día en programación y negocios.
              </p>
              <p className="text-lg text-text-warm leading-relaxed">
                También tengo vasta experiencia en herramientas open-source y automatización de procesos 
                — desde integraciones con n8n, Docker y CI/CD, hasta workflows complejos que eliminan 
                tareas manuales y optimizan operaciones completas.
              </p>
              <p className="text-lg text-text-warm leading-relaxed">
                Mi misión es <strong className="text-kinpaku">digitalizar negocios</strong> y ayudar a 
                emprendedores y PYMEs que merecen las mismas herramientas que las grandes empresas. 
                Por eso creé <strong className="text-champagne">Jordan Digitalizaciones</strong> y tengo como meta 
                a largo plazo mi propio <strong className="text-kinpaku">marketplace (SAM)</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gold-hairline rounded-lg p-8">
          <h2 className="text-2xl font-bold text-champagne mb-8 text-center font-display">Áreas de Conocimiento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-2 border-kinpaku/60 pl-4">
              <h3 className="font-semibold text-champagne mb-3 text-lg font-display">Desarrollo Web</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>Landing Pages y Sitios Web</li>
                <li>E-Commerce y Plataformas</li>
                <li>APIs y Backend</li>
                <li>Bases de Datos</li>
                <li>SEO y WPO</li>
              </ul>
            </div>
            <div className="border-l-2 border-verdigris/60 pl-4">
              <h3 className="font-semibold text-champagne mb-3 text-lg font-display">Automatización</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>Workflows con n8n y Make</li>
                <li>Docker y Contenedores</li>
                <li>CI/CD y Despliegue</li>
                <li>Chatbots y CRM</li>
                <li>Herramientas Open-Source</li>
              </ul>
            </div>
            <div className="border-l-2 border-kinpaku/60 pl-4">
              <h3 className="font-semibold text-champagne mb-3 text-lg font-display">Marketing Digital</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>Publicidad Digital (Meta/Google)</li>
                <li>Gestión de Redes Sociales</li>
                <li>Neuromarketing</li>
                <li>Estrategia de Marca</li>
                <li>Email Marketing</li>
              </ul>
            </div>
            <div className="border-l-2 border-verdigris/60 pl-4">
              <h3 className="font-semibold text-champagne mb-3 text-lg font-display">Diseño y Creatividad</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>Identidad Visual y Branding</li>
                <li>Diseño UX/UI</li>
                <li>Edición de Video con IA</li>
                <li>Creación de Contenido</li>
                <li>Experiencias Web Inmersivas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
