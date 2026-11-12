"use client";
import { useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import * as THREE from "three";
import Orb from "./Orb";
import AmbientParticles from "./AmbientParticles";
import DataRings from "./DataRings";
import Worlds from "./Worlds";
import { sceneState, lerp, damp } from "./state";

// Poses de cámara por sección (posición + hacia dónde mira).
// La cámara "vuela" entre estos mundos interpolando.
const POSES: { pos: [number, number, number]; tgt: [number, number, number] }[] = [
  { pos: [0, 0.4, 9], tgt: [0, 0, 0] }, // 0 hero — oscuridad, orbe lejano
  { pos: [2, 1.2, 6.5], tgt: [0, 0, 0] }, // 1 arranque — se enciende
  { pos: [0, 0.1, 1.0], tgt: [0, 0, -4] }, // 2 interior — dentro del orbe (sin atravesar el núcleo)
  { pos: [0, 1.6, 5.5], tgt: [0, 0, 0] }, // 3 catálogo — nodos alrededor
  { pos: [4.5, 0.6, 4.5], tgt: [0, 0, 0] }, // 4 stack — orbitando anillos
  { pos: [-3.5, 1, 4.5], tgt: [0, 0, 0] }, // 5 experiencia — amplio
  { pos: [0, 0.9, 4.8], tgt: [0, 0.3, 0] }, // 6 datos — frente al holograma
  { pos: [0, 1, 7], tgt: [0, 0, 0] }, // 7 valores — calma
  { pos: [0, 0, 2.5], tgt: [0, 0, -4] }, // 8 stats — entrada del túnel
  { pos: [0, 0, 2.2], tgt: [0, 0, 0] }, // 9 conversión — panel cristal
  { pos: [0, 0.4, 8], tgt: [0, 0, 0] }, // 10 cta — regreso a negro
];

function CameraRig() {
  const { camera } = useThree();

  const pos = useMemo(() => new THREE.Vector3(), []);
  const tgt = useMemo(() => new THREE.Vector3(), []);
  // Posición/objetivo actuales suavizados (evita saltos y "zooms" bruscos).
  const curPos = useMemo(() => new THREE.Vector3(0, 0.4, 9), []);
  const curTgt = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05); // evita saltos al volver a la pestaña
    // Sección continua: section + sectionProgress (0..10)
    let s = sceneState.section + sceneState.sectionProgress;
    s = Math.min(s, POSES.length - 1);

    const i = Math.floor(s);
    const f = s - i;
    const a = POSES[Math.min(i, POSES.length - 1)];
    const b = POSES[Math.min(i + 1, POSES.length - 1)];

    pos.set(
      lerp(a.pos[0], b.pos[0], f),
      lerp(a.pos[1], b.pos[1], f),
      lerp(a.pos[2], b.pos[2], f),
    );
    tgt.set(
      lerp(a.tgt[0], b.tgt[0], f),
      lerp(a.tgt[1], b.tgt[1], f),
      lerp(a.tgt[2], b.tgt[2], f),
    );

    // Viaje por el túnel en la sección de estadísticas
    if (sceneState.section === 8) {
      const travel = sceneState.sectionProgress * 8;
      pos.z -= travel;
      tgt.z -= travel;
    }

    const m = sceneState.isMobile ? 1.35 : 1;
    // Parallax sutil con el mouse (desactivado en móvil/reduced-motion).
    const px = sceneState.reducedMotion ? 0 : sceneState.pointerX * 0.45;
    const py = sceneState.reducedMotion ? 0 : sceneState.pointerY * 0.3;
    const tx = pos.x * m + px;
    const ty = pos.y * m - py;
    const tz = pos.z * m;

    // Suavizado exponencial: la cámara alcanza el objetivo sin tirones.
    const k = 6;
    curPos.x = damp(curPos.x, tx, k, dt);
    curPos.y = damp(curPos.y, ty, k, dt);
    curPos.z = damp(curPos.z, tz, k, dt);
    curTgt.x = damp(curTgt.x, tgt.x, k, dt);
    curTgt.y = damp(curTgt.y, tgt.y, k, dt);
    curTgt.z = damp(curTgt.z, tgt.z, k, dt);

    camera.position.copy(curPos);
    camera.lookAt(curTgt);
  });

  return null;
}

export default function Scene() {
  const reduced = sceneState.reducedMotion;
  const particleCount = reduced ? 80 : sceneState.isMobile ? 200 : 450;

  return (
    <Canvas
      dpr={[1, sceneState.isMobile ? 1.5 : 1.75]}
      camera={{ fov: 50, near: 0.1, far: 100, position: [0, 0.4, 9] }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#02040a"]} />
      <fog attach="fog" args={["#02040a", 6, 24]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 6, 4]} intensity={0.7} color="#c7f9e8" />
      <pointLight position={[-5, -2, 3]} intensity={1.4} color="#059669" decay={0} />
      <pointLight position={[4, 3, -4]} intensity={1.1} color="#22d3ee" decay={0} />

      <CameraRig />
      <Orb />
      <Worlds />
      <DataRings />
      <AmbientParticles count={particleCount} />

      {!reduced && (
        <EffectComposer multisampling={0}>
          <Bloom
            intensity={1.15}
            luminanceThreshold={0.18}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          {!sceneState.isMobile && (
            <DepthOfField focusDistance={0.0} focalLength={0.02} bokehScale={2} target={[0, 0, 0]} />
          )}
          <Vignette eskil={false} offset={0.2} darkness={0.85} />
          <Noise opacity={0.04} />
        </EffectComposer>
      )}
    </Canvas>
  );
}
