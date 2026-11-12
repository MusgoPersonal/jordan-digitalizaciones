"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowDown, FaArrowRight } from "react-icons/fa";
import { SERVICES_DATA, formatCurrency, type ServiceCategory } from "@/data/services";

const WHATSAPP = "https://wa.me/56930973700?text=";

// Subpágina de detalle por categoría (las que no tienen, van al catálogo)
const CATEGORY_DETAIL: Record<string, string> = {
  landing: "/servicios/starter-packs",
  website: "/servicios/sitio-web-escalable",
  design: "/servicios/diseno-recurrente",
  social: "/servicios/utilidades-digitales",
  inmersive: "/servicios/ingenieria-ux-ui-web-inmersiva",
};

function wa(text: string) {
  return WHATSAPP + encodeURIComponent(text);
}

function desdePrice(cat: ServiceCategory): string {
  if (cat.fromPrice && cat.fromPrice > 0) return formatCurrency(cat.fromPrice);
  let min = Infinity;
  for (const lv of cat.levels) {
    for (const k of ["unique", "monthly", "annual"] as const) {
      const v = lv.prices[k];
      if (v > 0 && v < min) min = v;
    }
  }
  return min === Infinity ? "A cotizar" : formatCurrency(min);
}

const TOOLS_HUD = [
  { name: "n8n", role: "Tareas automáticas" },
  { name: "Chatwoot", role: "Atención al cliente" },
  { name: "Odoo", role: "Facturación y gestión" },
  { name: "Matomo", role: "Estadísticas privadas" },
  { name: "Meta Pixel", role: "Medir anuncios" },
  { name: "GA4", role: "Tráfico de la web" },
  { name: "Evolution API", role: "Conectar WhatsApp" },
  { name: "ElevenLabs", role: "Voz con IA" },
  { name: "OpenAI / LLMs", role: "Inteligencia artificial" },
  { name: "WordPress", role: "Páginas y blogs" },
];

const BENEFITS = [
  { title: "Se ve bien y vende", text: "Diseño pensado para que tus clientes confíen y compren." },
  { title: "Carga rápido", text: "Tu web abre al instante, incluso en el celular." },
  { title: "Responde solo", text: "Mensajes y reservas automáticos, todos los días." },
  { title: "Te acompaño", text: "Soporte cercano y claro, sin tecnicismos." },
];

function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            setN(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-6xl font-extrabold text-emerald-400 text-glow">
        {n}
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-slate-400">{label}</div>
    </div>
  );
}

export default function Sections() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (reduced) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    document.querySelectorAll("[data-hero] [data-reveal]")
      .forEach((el) => el.classList.add("is-visible"));

    const otherEls = els.filter((el) => !el.closest("[data-hero]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    otherEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative z-10 text-white">
      {/* 1. HERO */}
      <section data-hero data-section="0" className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-emerald-400/80 mb-5" data-reveal>
          Diseño web y automatización para PYMEs
        </p>
        <h1 className="font-display text-4xl md:text-8xl font-extrabold leading-[0.95] text-glow" data-reveal>
          Jordan
          <br />
          <span className="text-gradient">Digitalizaciones</span>
        </h1>
        <p className="mt-6 font-display text-xl md:text-3xl font-bold text-slate-100" data-reveal>
          Tu negocio, más digital, más simple.
        </p>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300" data-reveal>
          Creamos tu página web, tu tienda online y automatizamos tus mensajes para que tengas
          más clientes sin complicarte.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4" data-reveal>
          <Link
            href="/servicios"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            Ver servicios
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={wa("Hola Jordan, quiero empezar mi proyecto digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl border border-white/15 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
          >
            <FaWhatsapp /> Quiero mi proyecto
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Desliza</span>
          <FaArrowDown className="animate-bounce" />
        </div>
      </section>

      {/* 2. QUÉ HAGO */}
      <section data-section="1" className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
        <div className="max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            Lo que hago
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto" data-reveal>
            Hago que tu negocio se vea profesional en internet y trabaje por ti: una web moderna
            que carga rápido, redes activas y mensajes que se responden solos.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              ["Diseño e imagen", "Que tu negocio se vea confiable y profesional."],
              ["Página web", "Webs y tiendas online rápidas y fáciles de usar."],
              ["Automatización", "Mensajes y reservas que se responden solos, 24/7."],
              ["Redes y publicidad", "Más alcance y ventas en Instagram y Facebook."],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-6" data-reveal>
                <h3 className="font-display font-bold text-emerald-300">{t}</h3>
                <p className="mt-2 text-sm text-slate-300">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TODO CONECTADO */}
      <section data-section="2" className="flex items-center justify-center px-6 py-12 md:py-16">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            Todo conectado
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed" data-reveal>
            Tu web, tus redes y tu WhatsApp trabajando juntos. Tus clientes te encuentran, te
            escriben y tú no pierdes ningún mensaje. Todo en un solo lugar y sin enredos.
          </p>
        </div>
      </section>

      {/* 4. SERVICIOS */}
      <section data-section="3" className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          Elige lo que tu negocio necesita
        </h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl" data-reveal>
          Precios claros, sin letra chica. Paga una vez o mes a mes. Arma tu cotización al instante.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full">
          {SERVICES_DATA.map((cat) => (
            <Link
              key={cat.id}
              href={CATEGORY_DETAIL[cat.id] ?? "/servicios"}
              className="glass rounded-2xl p-6 group hover:border-emerald-500/40 transition-colors"
              data-reveal
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                {cat.badge}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-2">{cat.subtitle}</p>
              <p className="mt-3 text-sm text-slate-400">
                Desde <span className="text-emerald-400 font-bold">{desdePrice(cat)}</span>
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/servicios"
          className="mt-8 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold"
          data-reveal
        >
          Ver todos los servicios y precios <FaArrowRight />
        </Link>
      </section>

      {/* 5. CON QUÉ TRABAJO */}
      <section data-section="4" className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          Con qué trabajo
        </h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl" data-reveal>
          Uso herramientas profesionales que usan las grandes empresas, pero sin que pagues
          licencias caras. Tecnología de primera, a tu medida.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl w-full">
          {TOOLS_HUD.map((t) => (
            <div key={t.name} className="glass rounded-xl p-4 text-center" data-reveal>
              <div className="font-mono text-sm font-bold text-emerald-300">{t.name}</div>
              <div className="mt-1 text-xs text-slate-400">{t.role}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-400 max-w-2xl text-center" data-reveal>
          En el plan más completo lo dejo todo instalado en tu propio servidor, ahorrándote más
          de $230 USD al mes frente a pagar licencias comerciales.
        </p>
      </section>

      {/* 6. EXPERIENCIA */}
      <section data-section="5" className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          Por qué trabajar conmigo
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          {BENEFITS.map((b) => (
            <div key={b.title} className="glass-strong rounded-2xl p-8" data-reveal>
              <h3 className="font-display text-xl font-bold text-white">{b.title}</h3>
              <p className="mt-3 text-slate-300">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DATOS */}
      <section data-section="6" className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          Números que hablan
        </h2>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl w-full">
          <Counter value={40} suffix="+" label="Herramientas para integrar" />
          <Counter value={7} label="Tipos de servicio" />
          <Counter value={24} suffix="/7" label="Atención y monitoreo" />
          <Counter value={100} suffix="%" label="Compromiso" />
        </div>
      </section>

      {/* 8. MISIÓN */}
      <section data-section="7" className="flex items-center justify-center px-6 py-12 md:py-16">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            Mi misión
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed" data-reveal>
            Ayudar a emprendedores y PYMEs a tener las mismas herramientas que las grandes
            empresas. Con calma, con estrategia y acompañándote en cada paso.
          </p>
          <Link
            href="/sobre-mi"
            className="mt-6 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold"
            data-reveal
          >
            Conocer mi historia <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* 9. NÚMEROS */}
      <section data-section="8" className="flex flex-col items-center justify-center px-6 py-12 md:py-16">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          La ruta en números
        </h2>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl w-full">
          <Counter value={5} label="Países atendidos" />
          <Counter value={7} label="Tipos de servicio" />
          <Counter value={40} suffix="+" label="Herramientas" />
          <Counter value={100} suffix="%" label="Entrega a tiempo" />
        </div>
      </section>

      {/* 10. CONVERSIÓN */}
      <section data-section="9" className="flex items-center justify-center px-6 py-12 md:py-16">
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-3xl w-full text-center" data-reveal>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            ¿Empezamos?
          </h2>
          <p className="mt-3 text-slate-300" data-reveal>
            Arma tu cotización en tiempo real o escríbeme por WhatsApp. Respondo rápido.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center" data-reveal>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              Armar mi cotización
            </Link>
            <a
              href={wa("Hola Jordan, quiero una cotización para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl border border-white/15 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
            >
              <FaWhatsapp /> Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 11. CIERRE */}
      <section data-section="10" className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-emerald-400/80" data-reveal>
          Jordan Digitalizaciones
        </p>
        <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold text-glow" data-reveal>
          Tu negocio merece estar en internet
        </h2>
        <p className="mt-4 max-w-xl text-slate-300" data-reveal>
          Empecemos hoy. Te ayudo a tener una presencia digital que se vea bien y te traiga clientes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4" data-reveal>
          <a
            href={wa("Hola Jordan, estoy listo para empezar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            <FaWhatsapp /> Empezar ahora
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl border border-white/15 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </section>
    </div>
  );
}
