"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState, smoothstep, damp } from "./state";

// Presencia del orbe por sección: se desvanece cuando la cámara entra en
// otros mundos y reaparece al volver (conversión / cta).
const ORB_PRESENCE = [1, 1, 0.35, 0.2, 0.35, 0.3, 0.35, 0.45, 0.05, 0.55, 0.85];

const EMERALD = "#059669";
const EMERALD_SOFT = "#34d399";

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ),
    );
  }
  return points;
}

function makeNodeTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(110,231,183,0.9)");
  g.addColorStop(1, "rgba(5,150,105,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function makeGlowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, "rgba(52,211,153,0.85)");
  g.addColorStop(0.4, "rgba(5,150,105,0.28)");
  g.addColorStop(1, "rgba(5,150,105,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

export default function Orb() {
  const group = useRef<THREE.Group>(null);
  const coreMat = useRef<THREE.MeshStandardMaterial>(null);
  const shellRef = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.Sprite>(null);

  const nodeCount = sceneState.isMobile ? 140 : 300;
  const presence = useRef(1);

  const { nodeGeo, lineGeo } = useMemo(() => {
    const pts = fibonacciSphere(nodeCount, 1.16);
    const nodePositions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      nodePositions[i * 3] = p.x;
      nodePositions[i * 3 + 1] = p.y;
      nodePositions[i * 3 + 2] = p.z;
    });
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));

    const threshold = 0.4;
    const edges: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceToSquared(pts[j]) < threshold * threshold) {
          edges.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(edges), 3));
    return { nodeGeo, lineGeo };
  }, [nodeCount]);

  const nodeTexture = useMemo(() => makeNodeTexture(), []);
  const glowTexture = useMemo(() => makeGlowTexture(), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const p = sceneState.progress;
    const spin = t * 0.06 + p * 2.4;

    const presTarget = ORB_PRESENCE[sceneState.section] ?? 1;
    presence.current = damp(presence.current, presTarget, 4, delta);
    const pr = presence.current;

    if (group.current) {
      group.current.rotation.y = spin;
      group.current.rotation.x = Math.sin(t * 0.14) * 0.14 + p * 0.25;
      const s = (1 + smoothstep(0.12, 0.4, p) * 0.08 + Math.sin(t * 0.8) * 0.01) * (0.5 + 0.5 * pr);
      group.current.scale.setScalar(s);
    }

    const glow = smoothstep(0.1, 0.4, p) * pr;
    const interior = smoothstep(0.34, 0.5, p) * pr;

    if (coreMat.current) {
      coreMat.current.emissiveIntensity = (0.35 + glow * 2.4 + interior * 0.8) * (0.3 + 0.7 * pr);
    }
    if (shellRef.current) {
      const m = shellRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = (0.08 + glow * 0.22) * pr;
    }
    if (nodesRef.current) {
      const m = nodesRef.current.material as THREE.PointsMaterial;
      m.opacity = (0.45 + glow * 0.55) * pr;
      m.size = (0.055 + glow * 0.02 + Math.sin(t * 2) * 0.004) * (0.4 + 0.6 * pr);
    }
    if (linesRef.current) {
      const m = linesRef.current.material as THREE.LineBasicMaterial;
      m.opacity = (0.1 + glow * 0.3) * pr;
    }
    if (glowRef.current) {
      const m = glowRef.current.material as THREE.SpriteMaterial;
      m.opacity = (0.3 + glow * 0.4 + interior * 0.2) * pr;
      const gs = 3.4 + glow * 1.2 + Math.sin(t * 1.2) * 0.2;
      glowRef.current.scale.set(gs, gs, 1);
    }
  });

  return (
    <group ref={group}>
      {/* Carcasa wireframe exterior */}
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.34, 1]} />
        <meshBasicMaterial
          color={EMERALD}
          wireframe
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Núcleo sólido */}
      <mesh>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          ref={coreMat}
          color="#03251c"
          emissive={EMERALD}
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.35}
        />
      </mesh>

      {/* Red de nodos */}
      <points ref={nodesRef} geometry={nodeGeo} frustumCulled={false}>
        <pointsMaterial
          map={nodeTexture}
          size={0.06}
          color={EMERALD_SOFT}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Conexiones entre nodos */}
      <lineSegments ref={linesRef} geometry={lineGeo} frustumCulled={false}>
        <lineBasicMaterial
          color={EMERALD}
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Halo de brillo */}
      <sprite ref={glowRef} scale={[3.6, 3.6, 1]}>
        <spriteMaterial
          map={glowTexture}
          color={EMERALD}
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </sprite>
    </group>
  );
}
