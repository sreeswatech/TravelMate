"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Load textures (using placeholder colors for now if textures aren't available, but we'll use a basic shader approach for a premium stylized globe)
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = t * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = t * 0.06;
      cloudsRef.current.rotation.z = t * 0.01;
    }
  });

  return (
    <group>
      {/* Earth Base */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshStandardMaterial 
          color="#0ea5e9" // Tailwind sky-500
          roughness={0.4}
          metalness={0.1}
          wireframe={true} // Stylized wireframe globe for a modern tech look
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Solid Inner Core for contrast */}
      <Sphere args={[1.98, 32, 32]}>
         <meshBasicMaterial color="#020617" />
      </Sphere>

      {/* Floating Particles/Locations */}
      {Array.from({ length: 20 }).map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 20);
        const theta = Math.sqrt(20 * Math.PI) * phi;
        const x = 2.1 * Math.cos(theta) * Math.sin(phi);
        const y = 2.1 * Math.sin(theta) * Math.sin(phi);
        const z = 2.1 * Math.cos(phi);
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#f59e0b" />
          </mesh>
        );
      })}
    </group>
  );
}

export function Globe() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0ea5e9" />
        <Earth />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
