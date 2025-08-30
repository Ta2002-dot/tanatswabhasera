import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.x = x;
      mouse.current.y = y;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    const target = new THREE.Vector3(mouse.current.x * 0.6, mouse.current.y * 0.4, 8);
    camera.position.lerp(target, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Orbs() {
  const group = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[-3, 0.5, -6]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#52b6ff" emissive="#143e66" emissiveIntensity={1.2} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[3.5, -0.4, -7]}>
          <torusKnotGeometry args={[0.9, 0.25, 120, 16]} />
          <meshStandardMaterial color="#ffb857" emissive="#5a3b08" emissiveIntensity={0.9} metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[0, 1.2, -5]}>
          <dodecahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#a78bfa" emissive="#2a1f4a" emissiveIntensity={1} metalness={0.4} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z -= delta * 0.05;
  });
  return (
    <group ref={ref} position={[0, 0, -12]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.02, 16, 200]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[9, 0.02, 16, 200]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.08} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[12, 0.02, 16, 200]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#0b1220"]} />
        <fog attach="fog" args={["#0b1220", 10, 50]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#52b6ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#ffb857" />

        <CameraRig />
        <Rings />
        <Orbs />

        <Stars radius={80} depth={50} count={1200} factor={4} saturation={0} fade speed={0.6} />
        <Sparkles count={80} color="#52b6ff" size={2} scale={[30, 30, 30]} speed={0.3} />
      </Canvas>
    </div>
  );
}
