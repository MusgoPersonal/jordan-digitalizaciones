// Estado mutable compartido entre el sistema de scroll (DOM) y la escena 3D.
// Vive fuera de React para evitar re-renders por frame. Es la "máquina de
// estados pura" que consume useFrame.
export const sceneState = {
  progress: 0, // 0..1 progreso total de scroll
  velocity: 0, // velocidad normalizada de scroll (lenis)
  reducedMotion: false,
  isMobile: false,
};

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
