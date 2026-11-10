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
import { sceneState } from "./state";

function CameraRig() {
  const { camera } = useThree();

  const camCurve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.4, 9),
        new THREE.Vector3(2, 1.4, 7),
        new THREE.Vector3(4, 0.6, 4.8),
        new THREE.Vector3(3.2, -1.2, 2.6),
        new THREE.Vector3(0, -0.4, 1.1),
        new THREE.Vector3(-3.2, 0.6, 3.2),
        new THREE.Vector3(-3, 1.6, 6),
        new THREE.Vector3(-0.8, 0.9, 7.2),
        new THREE.Vector3(0, 0.4, 8),
      ]),
    [],
  );

  useFrame(() => {
    const p = Math.min(0.999, Math.max(0.001, sceneState.progress));
    const pos = camCurve.getPointAt(p);
    const m = sceneState.isMobile ? 1.35 : 1;
    camera.position.set(pos.x * m, pos.y * m, pos.z * m);
    camera.lookAt(0, 0, 0);
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
