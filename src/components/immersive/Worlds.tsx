"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState, S, damp } from "./state";

const EMERALD = "#059669";
const EMERALD_SOFT = "#34d399";
const CYAN = "#22d3ee";

// Cada "mundo" vive en una sección y se desvanece fuera de ella.
// La cámara vuela entre ellos; el orbe es el portal.

/* ---------------------------------------------------------------- */
/* Catálogo: 7 nodos instanced = las categorías de servicio          */
/* ---------------------------------------------------------------- */
function makeGlowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(52,211,153,0.85)");
  g.addColorStop(1, "rgba(5,150,105,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function CatalogNodes() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const nodes = useMemo(() => {
    const count = 7;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const r = 2.4 + (i % 2) * 0.7;
      pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a * 2) * 0.8, Math.sin(a) * r * 0.6));
    }
    return pts;
  }, []);

  const tex = useMemo(() => makeGlowTexture(), []);

  useFrame((state, dt) => {
    const target = sceneState.section === S.CATALOGO ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.y = t * 0.08;
    }
    nodes.forEach((p, i) => {
      const el = group.current?.children[i];
      if (!el) return;
      el.position.y = p.y + Math.sin(t * 0.8 + i) * 0.15;
      const s = 0.7 + Math.sin(t * 1.2 + i * 1.7) * 0.12;
      el.scale.setScalar(s * (0.4 + fade.current * 0.6));
      const m = (el as THREE.Mesh).material as THREE.PointsMaterial;
      if (m) m.opacity = fade.current * 0.85;
    });
  });

  return (
    <group ref={group} visible={false}>
      {nodes.map((p, i) => (
        <points key={i} position={[p.x, p.y, p.z]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([0, 0, 0]), 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            map={tex}
            size={0.9}
            color={i % 2 ? EMERALD_SOFT : CYAN}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      ))}
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Datos vivos: holograma de barras 3D                               */
/* ---------------------------------------------------------------- */
function HologramBars() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const bars = useMemo(() => {
    // valores simulados
    return [0.35, 0.6, 0.45, 0.85, 0.55, 0.95, 0.7, 0.5];
  }, []);

  useFrame((state, dt) => {
    const target = sceneState.section === S.DATOS ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.y = Math.sin(t * 0.1) * 0.2;
    }
    bars.forEach((h, i) => {
      const el = group.current?.children[i] as THREE.Mesh | undefined;
      if (!el) return;
      const rise = fade.current * (0.3 + 0.7 * h) * (0.85 + 0.15 * Math.sin(t * 1.5 + i));
      el.scale.set(1, Math.max(0.001, rise), 1);
      const m = el.material as THREE.MeshBasicMaterial;
      if (m) m.opacity = fade.current * 0.6;
    });
  });

  return (
    <group ref={group} visible={false} position={[0, -0.6, 0]}>
      {bars.map((h, i) => {
        const x = (i - (bars.length - 1) / 2) * 0.6;
        return (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.34, 2.4, 0.34]} />
            <meshBasicMaterial
              color={i % 3 === 0 ? CYAN : EMERALD}
              transparent
              opacity={0}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Estadísticas: túnel de datos (anillos que la cámara atraviesa)    */
/* ---------------------------------------------------------------- */
function DataTunnel() {
  const fade = useRef(0);
  const shared = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: EMERALD,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  const rings = useMemo(() => {
    const count = sceneState.isMobile ? 24 : 44;
    const zs: number[] = [];
    for (let i = 0; i < count; i++) zs.push(3.5 - i * 0.4);
    return zs;
  }, []);

  useFrame((_, dt) => {
    const target = sceneState.section === S.STATS ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    shared.opacity = fade.current * 0.5;
  });

  return (
    <group>
      {rings.map((z) => (
        <mesh key={z} position={[0, 0, z]} material={shared}>
          <torusGeometry args={[1.7, 0.012, 8, 64]} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Conversión: panel de cristal (aristas emisivas)                   */
/* ---------------------------------------------------------------- */
function CrystalPanel() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);
  const faceMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: EMERALD,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  );
  const edgeMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: EMERALD_SOFT,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.4, 3, 0.1)), []);

  useFrame((state, dt) => {
    const target = sceneState.section === S.CONVERSION ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.y = Math.sin(t * 0.4) * 0.12;
      group.current.position.z = (1 - fade.current) * -2;
    }
    faceMat.opacity = fade.current * 0.06;
    edgeMat.opacity = fade.current * 0.9;
  });

  return (
    <group ref={group} visible={false}>
      <mesh material={faceMat}>
        <boxGeometry args={[2.4, 3, 0.1]} />
      </mesh>
      <lineSegments geometry={edges} material={edgeMat} />
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Interior: cáscara celular dentro del orbe                         */
/* ---------------------------------------------------------------- */
function InteriorShell() {
  const fade = useRef(0);
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: EMERALD,
        wireframe: true,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  useFrame((_, dt) => {
    const target = sceneState.section === S.INTERIOR ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    mat.opacity = fade.current * 0.35;
  });

  return (
    <mesh material={mat} scale={1.15}>
      <icosahedronGeometry args={[1, 2]} />
    </mesh>
  );
}

export default function Worlds() {
  return (
    <group>
      <CatalogNodes />
      <HologramBars />
      <DataTunnel />
      <CrystalPanel />
      <InteriorShell />
    </group>
  );
}
