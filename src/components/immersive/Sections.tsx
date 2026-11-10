"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowDown, FaArrowRight } from "react-icons/fa";
import { SERVICES_DATA, formatCurrency, type ServiceCategory } from "@/data/services";

const WHATSAPP = "https://wa.me/56930973700?text=";

function wa(text: string) {
  return WHATSAPP + encodeURIComponent(text);
}

function desdePrice(cat: ServiceCategory): string {
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
  { name: "n8n", role: "Automatización visual" },
  { name: "Chatwoot", role: "CRM omnicanal" },
  { name: "Odoo", role: "ERP y facturación" },
  { name: "Matomo", role: "Analítica privada" },
  { name: "Meta Pixel", role: "Conversión publicitaria" },
  { name: "GA4", role: "Medición de tráfico" },
  { name: "Evolution API", role: "Conector WhatsApp" },
  { name: "ElevenLabs", role: "Voz con IA" },
  { name: "OpenAI / LLMs", role: "Intención e IA" },
  { name: "WordPress", role: "Maquetación y landings" },
];

const BENEFITS = [
  { title: "Diseño que vende", text: "Cada píxel está pensado para convertir visitantes en clientes." },
  { title: "Velocidad y SEO", text: "WPO optimizado para cargar rápido y posicionar en Google." },
  { title: "Automatización 24/7", text: "Chatbots y flujos que trabajan mientras tú descansas." },
  { title: "Acompañamiento real", text: "Soporte cercano y estrategia, no solo entregables." },
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

    // Hero siempre visible desde el primer frame
    document.querySelectorAll("[data-hero] [data-reveal]")
      .forEach((el) => el.classList.add("is-visible"));

    // El resto se activa con scroll
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
      <section data-hero className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-emerald-400/80 mb-6" data-reveal>
          Agencia digital · PYMEs
        </p>
        <h1 className="font-display text-4xl md:text-8xl font-extrabold leading-[0.95] text-glow" data-reveal>
          Jordan
          <br />
          <span className="text-gradient">Digitalizaciones</span>
        </h1>
        <p className="mt-8 font-display text-xl md:text-3xl font-bold text-slate-200" data-reveal>
          La Ruta Hacia tu Éxito Digital
        </p>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-400" data-reveal>
          Landing Pages, Sitios Web, E-Commerce, UX/UI Inmersivo y Automatización para PYMEs.
          <span className="text-white font-semibold"> Soluciones que venden.</span>
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4" data-reveal>
          <Link
            href="/servicios"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            Ver los servicios
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={wa("Hola Jordan, quiero iniciar un proyecto digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white rounded-xl border border-white/15 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors"
          >
            <FaWhatsapp /> Iniciar un proyecto
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <FaArrowDown className="animate-bounce" />
        </div>
      </section>

      {/* 2. ARRANQUE */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            Lo que hago
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto" data-reveal>
            Convierto negocios tradicionales en ecosistemas digitales que trabajan solos:
            diseño, desarrollo, automatización y marketing en una sola ruta.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              ["Diseño & Branding", "Identidad visual y UX/UI que genera confianza."],
              ["Desarrollo Web", "Landings, sitios y e-commerce escalables."],
              ["Automatización", "Workflows con n8n, chatbots y CRM 24/7."],
              ["Marketing Digital", "RRSS, pauta y neuromarketing para vender."],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-6" data-reveal>
                <h3 className="font-display font-bold text-emerald-300">{t}</h3>
                <p className="mt-2 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERIOR */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            Un ecosistema conectado
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed" data-reveal>
            No entrego piezas sueltas. Construyo una red de servicios que se conectan entre sí:
            tu web captura, tu CRM gestiona, tus automatizaciones responden y tus métricas
            te muestran el camino. Todo integrado, todo medible.
          </p>
        </div>
      </section>

      {/* 4. CATÁLOGO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          7 categorías de servicio
        </h2>
        <p className="mt-4 text-slate-400 text-center max-w-2xl" data-reveal>
          Cada una con niveles y precios transparentes en CLP. Arma tu cotización en tiempo real.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full">
          {SERVICES_DATA.map((cat) => (
            <Link
              key={cat.id}
              href="/servicios"
              className="glass rounded-2xl p-6 group hover:border-emerald-500/40 transition-colors"
              data-reveal
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wide text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                {cat.badge}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">{cat.subtitle}</p>
              <p className="mt-4 text-sm text-slate-500">
                Desde <span className="text-emerald-400 font-bold">{desdePrice(cat)}</span>
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/servicios"
          className="mt-10 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold"
          data-reveal
        >
          Ver catálogo completo y cotizar <FaArrowRight />
        </Link>
      </section>

      {/* 5. DETALLE TÉCNICO (HUD) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          Stack técnico
        </h2>
        <p className="mt-4 text-slate-400 text-center max-w-2xl" data-reveal>
          Herramientas open-source de nivel empresarial, configuradas para que no pagues licencias de más.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl w-full">
          {TOOLS_HUD.map((t) => (
            <div key={t.name} className="glass rounded-xl p-4 text-center" data-reveal>
              <div className="font-mono text-sm font-bold text-emerald-300">{t.name}</div>
              <div className="mt-1 text-xs text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500 max-w-2xl text-center" data-reveal>
          Con el plan VIP instalas n8n, Chatwoot, Odoo y Matomo en tu propio VPS dedicado,
          ahorrando más de $230 USD/mes frente a las licencias comerciales.
        </p>
      </section>

      {/* 6. EXPERIENCIA (beneficios) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          La experiencia
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          {BENEFITS.map((b) => (
            <div key={b.title} className="glass-strong rounded-2xl p-8" data-reveal>
              <h3 className="font-display text-xl font-bold text-white">{b.title}</h3>
              <p className="mt-3 text-slate-400">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DATOS VIVOS */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          Datos vivos
        </h2>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl w-full">
          <Counter value={40} suffix="+" label="Herramientas integrables" />
          <Counter value={7} label="Categorías de servicio" />
          <Counter value={24} suffix="/7" label="Soporte y monitoreo" />
          <Counter value={100} suffix="%" label="Compromiso" />
        </div>
      </section>

      {/* 8. VALORES */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            Calma y misión
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed" data-reveal>
            Mi misión es digitalizar negocios y abarcar a la gran minoría: esos emprendedores y
            PYMEs que merecen las mismas herramientas que las grandes empresas. Con calma, con
            estrategia y con un acompañamiento real en cada paso.
          </p>
          <Link
            href="/sobre-mi"
            className="mt-8 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold"
            data-reveal
          >
            Conocer mi historia <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* 9. ESTADÍSTICAS */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-center" data-reveal>
          La ruta en números
        </h2>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl w-full">
          <Counter value={5} label="Países atendidos" />
          <Counter value={7} label="Categorías de servicio" />
          <Counter value={40} suffix="+" label="Herramientas open-source" />
          <Counter value={100} suffix="%" label="Entrega a tiempo" />
        </div>
      </section>

      {/* 10. CONVERSIÓN */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="glass-strong rounded-3xl p-8 md:p-14 max-w-3xl w-full text-center" data-reveal>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold" data-reveal>
            ¿Listo para digitalizar tu negocio?
          </h2>
          <p className="mt-4 text-slate-400" data-reveal>
            Arma tu cotización en tiempo real o escríbeme directo por WhatsApp. Respondo rápido.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" data-reveal>
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

      {/* 11. CTA FINAL */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-emerald-400/80" data-reveal>
          Jordan Digitalizaciones
        </p>
        <h2 className="mt-6 font-display text-4xl md:text-6xl font-extrabold text-glow" data-reveal>
          La ruta hacia tu éxito digital
        </h2>
        <p className="mt-6 max-w-xl text-slate-400" data-reveal>
          Empecemos hoy. Tu negocio merece estar en el mundo digital con las mismas
          herramientas que las grandes empresas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4" data-reveal>
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
