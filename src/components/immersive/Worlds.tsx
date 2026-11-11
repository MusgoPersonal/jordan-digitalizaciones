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

function makeGlowTexture(inner = "rgba(52,211,153,0.85)") {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, inner);
  g.addColorStop(1, "rgba(5,150,105,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

/* ---------------------------------------------------------------- */
/* Catálogo: constelación de 7 nodos = las categorías de servicio    */
/* ---------------------------------------------------------------- */
function CatalogNodes() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const { nodes, nodeGeo, lineGeo } = useMemo(() => {
    const count = 7;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const r = 2.4 + (i % 2) * 0.55;
      nodes.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a * 2) * 0.7, Math.sin(a) * r * 0.62));
    }
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(nodes.length * 3), 3));
    // conexiones: anillo entre vecinos + radios al centro
    const ed: number[] = [];
    for (let i = 0; i < count; i++) {
      const a = nodes[i];
      const b = nodes[(i + 1) % count];
      ed.push(a.x, a.y, a.z, b.x, b.y, b.z);
      ed.push(0, 0, 0, a.x, a.y, a.z);
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(ed), 3));
    return { nodes, nodeGeo, lineGeo };
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
    const geo = nodeGeo.getAttribute("position") as THREE.BufferAttribute;
    nodes.forEach((p, i) => {
      geo.setXYZ(i, p.x, p.y + Math.sin(t * 0.8 + i) * 0.12, p.z);
    });
    geo.needsUpdate = true;

    const pts = group.current?.getObjectByName("cat-nodes") as THREE.Points | undefined;
    if (pts) {
      const m = pts.material as THREE.PointsMaterial;
      m.opacity = fade.current * 0.9;
      m.size = 0.85 * (0.4 + fade.current * 0.6);
    }
    const lines = group.current?.getObjectByName("cat-lines") as THREE.LineSegments | undefined;
    if (lines) (lines.material as THREE.LineBasicMaterial).opacity = fade.current * 0.22;
  });

  return (
    <group ref={group} visible={false}>
      <points name="cat-nodes" geometry={nodeGeo} frustumCulled={false}>
        <pointsMaterial
          map={tex}
          size={0.85}
          color={EMERALD_SOFT}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
      <lineSegments name="cat-lines" geometry={lineGeo} frustumCulled={false}>
        <lineBasicMaterial
          color={CYAN}
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Arranque: estelas de energía que se encienden desde el centro     */
/* ---------------------------------------------------------------- */
function IgnitionStreaks() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const { geo, dirs } = useMemo(() => {
    const count = sceneState.isMobile ? 28 : 56;
    const pos = new Float32Array(count * 2 * 3);
    const dirs: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
      ).normalize();
      dirs.push(v);
      pos[i * 6] = v.x * 1.8;
      pos[i * 6 + 1] = v.y * 1.8;
      pos[i * 6 + 2] = v.z * 1.8;
      pos[i * 6 + 3] = v.x * 1.8;
      pos[i * 6 + 4] = v.y * 1.8;
      pos[i * 6 + 5] = v.z * 1.8;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { geo, dirs };
  }, []);

  const mat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  );

  useFrame((state, dt) => {
    const target = sceneState.section === S.ARRANQUE ? 1 : 0;
    fade.current = damp(fade.current, target, 4, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.y = t * 0.15;
    }
    mat.opacity = fade.current * 0.5;
    const attr = geo.getAttribute("position") as THREE.BufferAttribute;
    dirs.forEach((v, i) => {
      const inner = 1.8 + Math.sin(t * 2 + i) * 0.15;
      const outer = 2.2 + fade.current * 2.4 + ((t * 1.5 + i * 0.3) % 1) * 1.4;
      attr.setXYZ(i * 2, v.x * inner, v.y * inner, v.z * inner);
      attr.setXYZ(i * 2 + 1, v.x * outer, v.y * outer, v.z * outer);
    });
    attr.needsUpdate = true;
  });

  return (
    <group ref={group} visible={false}>
      <lineSegments geometry={geo} material={mat} frustumCulled={false} />
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Stack: cubos-herramienta orbitando una esfera                     */
/* ---------------------------------------------------------------- */
function ToolCubes() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const items = useMemo(() => {
    const count = sceneState.isMobile ? 8 : 12;
    const arr: { pos: THREE.Vector3; size: number; color: string }[] = [];
    for (let i = 0; i < count; i++) {
      const golden = Math.PI * (3 - Math.sqrt(5));
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const R = 2.2;
      arr.push({
        pos: new THREE.Vector3(Math.cos(theta) * r * R, y * R * 0.8, Math.sin(theta) * r * R),
        size: 0.14 + (i % 3) * 0.05,
        color: i % 3 === 0 ? CYAN : EMERALD_SOFT,
      });
    }
    return arr;
  }, []);

  useFrame((state, dt) => {
    const target = sceneState.section === S.STACK ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.y = t * 0.18;
      group.current.rotation.x = Math.sin(t * 0.2) * 0.15;
      group.current.children.forEach((c, i) => {
        c.rotation.x = t * 0.6 + i;
        c.rotation.y = t * 0.4 + i;
        const m = (c as THREE.Mesh).material as THREE.MeshBasicMaterial;
        if (m) m.opacity = fade.current * 0.85;
      });
    }
  });

  return (
    <group ref={group} visible={false}>
      {items.map((it, i) => (
        <mesh key={i} position={it.pos}>
          <boxGeometry args={[it.size, it.size, it.size]} />
          <meshBasicMaterial
            color={it.color}
            transparent
            opacity={0}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Experiencia: placas de cristal flotantes                         */
/* ---------------------------------------------------------------- */
function GlassShards() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const shards = useMemo(() => {
    const count = sceneState.isMobile ? 5 : 8;
    const arr: { pos: THREE.Vector3; rot: THREE.Euler; s: [number, number] }[] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const R = 2.6;
      arr.push({
        pos: new THREE.Vector3(Math.cos(a) * R, Math.sin(a * 1.5) * 0.9, Math.sin(a) * R * 0.7),
        rot: new THREE.Euler(0.1, a, Math.sin(a) * 0.2),
        s: [0.9, 1.3 + (i % 2) * 0.4],
      });
    }
    return arr;
  }, []);

  useFrame((state, dt) => {
    const target = sceneState.section === S.EXPERIENCIA ? 1 : 0;
    fade.current = damp(fade.current, target, 5, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.y = t * 0.05;
      group.current.children.forEach((c, i) => {
        c.position.y += Math.sin(t * 0.7 + i) * 0.0018;
        const m = ((c as THREE.Mesh).material as THREE.MeshBasicMaterial);
        if (m) m.opacity = fade.current * 0.12;
      });
    }
  });

  return (
    <group ref={group} visible={false}>
      {shards.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot}>
          <planeGeometry args={s.s} />
          <meshBasicMaterial
            color={EMERALD_SOFT}
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ---------------------------------------------------------------- */
/* Valores: anillos que respiran (calma)                            */
/* ---------------------------------------------------------------- */
function BreathingRings() {
  const group = useRef<THREE.Group>(null);
  const fade = useRef(0);

  const mat = useMemo(
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

  useFrame((state, dt) => {
    const target = sceneState.section === S.VALORES ? 1 : 0;
    fade.current = damp(fade.current, target, 3.5, dt);
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.visible = fade.current > 0.01;
      group.current.rotation.x = Math.PI / 2.4;
      group.current.children.forEach((c, i) => {
        const phase = (t * 0.18 + i * 0.33) % 1;
        const sc = 1 + phase * 1.6;
        c.scale.setScalar(sc);
        const m = (c as THREE.Mesh).material as THREE.MeshBasicMaterial;
        if (m) m.opacity = fade.current * (1 - phase) * 0.35;
      });
    }
  });

  return (
    <group ref={group} visible={false}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} material={mat}>
          <torusGeometry args={[1.6, 0.01, 8, 96]} />
        </mesh>
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
      <IgnitionStreaks />
      <CatalogNodes />
      <ToolCubes />
      <GlassShards />
      <BreathingRings />
      <HologramBars />
      <DataTunnel />
      <CrystalPanel />
      <InteriorShell />
    </group>
  );
}
