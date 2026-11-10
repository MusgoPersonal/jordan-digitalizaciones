"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function makeGlowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(103,232,249,0.8)");
  g.addColorStop(1, "rgba(103,232,249,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export default function AmbientParticles({ count = 600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const geo = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 11;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count]);

  const tex = useMemo(() => makeGlowTexture(), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    ref.current.rotation.z = Math.cos(t * 0.04) * 0.03;
  });

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        map={tex}
        size={0.07}
        color="#67e8f9"
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}
