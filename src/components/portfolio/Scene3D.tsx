import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, OrbitControls, Sphere, MeshDistortMaterial, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Planet() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#6d28d9"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingShape({ position, color, geometry }: { position: [number, number, number]; color: string; geometry: "torus" | "ico" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.5;
      ref.current.rotation.y = s.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {geometry === "torus" ? (
        <Torus ref={ref} args={[0.4, 0.15, 16, 100]} position={position}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} metalness={0.7} />
        </Torus>
      ) : (
        <Icosahedron ref={ref} args={[0.5, 0]} position={position}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.8} wireframe />
        </Icosahedron>
      )}
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a78bfa" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
        <pointLight position={[0, 5, 5]} intensity={0.8} color="#ec4899" />

        <Stars radius={120} depth={60} count={7000} factor={4.5} saturation={0} fade speed={1.2} />
        <Planet />
        <OrbitingShape position={[3, 1.5, 0]} color="#06b6d4" geometry="torus" />
        <OrbitingShape position={[-3, -1, 1]} color="#ec4899" geometry="ico" />
        <OrbitingShape position={[2.5, -2, -1]} color="#a78bfa" geometry="ico" />
        <OrbitingShape position={[-2.8, 2, -1]} color="#fbbf24" geometry="torus" />
        <OrbitingShape position={[3.5, -1.8, 1.5]} color="#34d399" geometry="ico" />
        <OrbitingShape position={[-3.6, 1.8, 0.5]} color="#f472b6" geometry="torus" />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} makeDefault />
      </Suspense>
    </Canvas>
  );
}
