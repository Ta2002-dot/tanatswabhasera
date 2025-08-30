import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Sparkles, Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function hslToHex(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x: number) => Math.round(255 * x).toString(16).padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

function readHslVar(name: string): { h: number; s: number; l: number } | null {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!raw) return null;
  const [hStr, sStr, lStr] = raw.split(" ");
  const h = parseFloat(hStr);
  const s = parseFloat(sStr.replace("%", ""));
  const l = parseFloat(lStr.replace("%", ""));
  if (Number.isFinite(h) && Number.isFinite(s) && Number.isFinite(l)) return { h, s, l };
  return null;
}

function useThemeColors() {
  const [colors, setColors] = useState(() => ({
    primary: "#52b6ff",
    secondary: "#f59e0b",
    accent: "#60a5fa",
  }));

  useEffect(() => {
    try {
      const p = readHslVar("--primary");
      const s = readHslVar("--secondary");
      const a = readHslVar("--accent");
      setColors({
        primary: p ? hslToHex(p.h, p.s, p.l) : colors.primary,
        secondary: s ? hslToHex(s.h, s.s, s.l) : colors.secondary,
        accent: a ? hslToHex(a.h, a.s, a.l) : colors.accent,
      });
    } catch {}
  }, []);

  return colors;
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
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

function Orbs({ primary, secondary, accent }: { primary: string; secondary: string; accent: string }) {
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
          <meshStandardMaterial color={primary} emissive={new THREE.Color(primary).multiplyScalar(0.35)} emissiveIntensity={1.2} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[3.5, -0.4, -7]}>
          <torusKnotGeometry args={[0.9, 0.25, 120, 16]} />
          <meshStandardMaterial color={secondary} emissive={new THREE.Color(secondary).multiplyScalar(0.28)} emissiveIntensity={0.9} metalness={0.5} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[0, 1.2, -5]}>
          <dodecahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color={accent} emissive={new THREE.Color(accent).multiplyScalar(0.3)} emissiveIntensity={1} metalness={0.4} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function Rings({ primary, secondary }: { primary: string; secondary: string }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z -= delta * 0.05;
  });
  return (
    <group ref={ref} position={[0, 0, -12]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.02, 16, 200]} />
        <meshBasicMaterial color={primary} transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[9, 0.02, 16, 200]} />
        <meshBasicMaterial color={secondary} transparent opacity={0.08} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[12, 0.02, 16, 200]} />
        <meshBasicMaterial color={primary} transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function ThreeBackground() {
  const colors = useThemeColors();
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#0b1220"]} />
        <fog attach="fog" args={["#0b1220", 10, 50]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color={colors.primary} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color={colors.secondary} />

        <CameraRig />
        <Rings primary={colors.primary} secondary={colors.secondary} />
        <Orbs primary={colors.primary} secondary={colors.secondary} accent={colors.accent} />

        <Stars radius={80} depth={50} count={1000} factor={4} saturation={0} fade speed={0.4} />
        <Sparkles count={70} color={colors.primary} size={2} scale={[30, 30, 30]} speed={0.25} />
      </Canvas>
    </div>
  );
}
