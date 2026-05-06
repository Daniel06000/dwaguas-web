"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { MeshDistortMaterial } from "@react-three/drei";

function Drop() {
  const meshRef = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    target.current.x = mouse.x * 0.25;
    target.current.y = mouse.y * 0.2;
    current.current.x += (target.current.x - current.current.x) * 0.05;
    current.current.y += (target.current.y - current.current.y) * 0.05;

    meshRef.current.rotation.y = clock.elapsedTime * 0.1;
    meshRef.current.rotation.x = current.current.y;
    meshRef.current.position.x = current.current.x;
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <mesh ref={meshRef} scale={1.6}>
      <icosahedronGeometry args={[1, 16]} />
      <MeshDistortMaterial
        color="#4FD1FF"
        distort={0.3}
        speed={1.2}
        roughness={0.15}
        metalness={0.7}
        emissive="#0EA5E9"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

export function WaterDrop() {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 5]} intensity={0.8} color="#4FD1FF" />
          <directionalLight position={[-3, -2, 2]} intensity={0.4} color="#FF6B35" />
          <Drop />
        </Suspense>
      </Canvas>
    </div>
  );
}
