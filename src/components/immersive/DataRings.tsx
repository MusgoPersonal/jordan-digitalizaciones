"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState, smoothstep } from "./state";

const RINGS = [1.55, 2.05, 2.6] as const;

export default function DataRings() {
  const group = useRef<THREE.Group>(null);
  const ringsRef = useRef<(THREE.Mesh | null)[]>([]);

  const tilt = useMemo(() => [0.9, 1.3, 0.5], []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const p = sceneState.progress;
    // Aparecen en el "arranque" y se atenúan al final.
    const intensity = smoothstep(0.14, 0.42, p) * (1 - smoothstep(0.72, 0.9, p));

    if (group.current) {
      group.current.rotation.y = t * 0.1 + p * 1.2;
      group.current.rotation.z = Math.sin(t * 0.1) * 0.1;
    }
    ringsRef.current.forEach((m, i) => {
      if (!m) return;
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = (0.15 + intensity * 0.4) * (0.6 + 0.4 * Math.sin(t * 1.5 + i * 2));
      m.rotation.x = tilt[i] + Math.sin(t * 0.4 + i) * 0.15;
      m.rotation.y = i * 0.5 + t * 0.3;
    });
  });

  return (
    <group ref={group}>
      {RINGS.map((r, i) => (
        <mesh
          key={r}
          ref={(el) => {
            ringsRef.current[i] = el;
          }}
          rotation={[tilt[i], 0, 0]}
        >
          <torusGeometry args={[r, 0.008, 12, 160]} />
          <meshBasicMaterial
            color={i === 1 ? "#059669" : "#22d3ee"}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
