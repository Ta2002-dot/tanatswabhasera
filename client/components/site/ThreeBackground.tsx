import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#0b1220"]} />
        <fog attach="fog" args={["#0b1220", 10, 50]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#52b6ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#ffb857" />
        <Stars radius={80} depth={50} count={1200} factor={4} saturation={0} fade speed={0.6} />
        <Sparkles count={80} color="#52b6ff" size={2} scale={[30, 30, 30]} speed={0.3} />
      </Canvas>
    </div>
  );
}
