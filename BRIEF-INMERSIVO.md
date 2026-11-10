# BRIEF — Web Inmersiva "Jordan Digitalizaciones"

Construye una **web inmersiva 3D scroll-driven** para el portafolio de Jordan Digitalizaciones (agencia de servicios digitales para PYMEs). Nivel Awwwards.

## Proyecto actual (contexto)

- Next.js 16 (App Router) + React 19 + Tailwind CSS 4 (`src/app`, `src/components`).
- Ya existe contenido real que **debes preservar e integrar**:
  - `src/data/services.ts` → 7 categorías de servicios con 4 niveles y precios en CLP (Landing, Sitios Web, E-Commerce, RRSS, UX/UI Inmersiva, Diseño, Utilidad Digital).
  - Cotizador en tiempo real (`src/app/servicios/page.tsx`).
  - Botón de WhatsApp (`+56930973700`).
  - Páginas: `/`, `/servicios`, `/proyectos`, `/sobre-mi`, `/contacto`.
- No borres el contenido ni las rutas existentes. Intégralo en la narrativa 3D.

## Dirección de arte

- Protagonista 3D: **orbe digital luminoso** (esfera procedural con red de nodos + partículas, materiales PBR, luces de acento esmeralda). NO hay modelo GLB → constrúyelo procedural.
- Paleta: negro profundo, esmeralda (#059669), cian suave, blanco, gris grafito.
- Estética: Apple/Porsche/Nothing. Glassmorphism sutil, bloom, partículas flotantes, neblina volumétrica, tipografía editorial (Plus Jakarta Sans + Inter ya están cargadas).

## Estructura narrativa (scroll controla todo, una sola página continua)

1. **Hero** — oscuridad total, partículas, orbe suspendido, título "Jordan Digitalizaciones" + tagline "La Ruta Hacia tu Éxito Digital" + CTA.
2. **Arranque** — el orbe se enciende, flujo de datos, líneas de velocidad → "qué hago" (los servicios).
3. **Interior** — cámara atraviesa el orbe, red de servicios.
4. **Catálogo** — nodos = las 7 categorías de servicios; paneles flotantes con precios.
5. **Detalle técnico** — HUD con especificaciones (las herramientas: n8n, Chatwoot, IA, etc.).
6. **Experiencia** — beneficios en glassmorphism.
7. **Datos vivos** — hologramas/gráficos (métricas simuladas).
8. **Valores** — calma, misión.
9. **Estadísticas** — túnel de datos + contadores animados.
10. **Conversión** — panel cristal → cotizador / WhatsApp.
11. **CTA final** — mensaje de cierre + transición a negro.

## Tecnología (instala lo que falte)

- `three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `lenis`, `@types/three`.
- Post-processing: bloom, depth of field (drei).
- ScrollTrigger + Lenis para el scroll suave.
- Canvas fijo detrás de todo + overlay de secciones (patrón "canvas único continuo").

## Reglas

1. **Un solo canvas** detrás de toda la página; el scroll controla la cámara/orbe.
2. Máquina de estados pura (`useFrame` + `derive*`) para el progreso, sin lógica en React.
3. Preservar el cotizador, los precios de `services.ts` y el WhatsApp.
4. Responsive: en móvil simplificar (menos partículas, cámara adaptada). Respetar `prefers-reduced-motion`.
5. 60 FPS: instanced meshes, frustum culling, lazy loading de la escena 3D.
6. No romper las rutas existentes. La home `/` se convierte en la experiencia inmersiva; las demás rutas siguen funcionando.
7. Probar `npm run build` debe pasar sin errores.

## Prioridad

1. WOW visual → 2. Narrativa → 3. Fluidez → 4. Calidad 3D → 5. Rendimiento.

Construye la experiencia completa y funcional. No entregues placeholders vacíos.
