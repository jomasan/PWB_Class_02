import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const ACCENT = '#3dcc7a'
const BG_CANVAS = '#0a0a0a'

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ACCENT} metalness={0.15} roughness={0.45} />
    </mesh>
  )
}

export default function ThreeCanvas() {
  return (
    <Canvas
      className="three-canvas"
      camera={{ position: [3, 2, 4], fov: 50 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={[BG_CANVAS]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} color="#f5f5f0" />
      <directionalLight position={[-4, 2, -3]} intensity={0.25} color="#e8e8e8" />
      <Cube />
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={12}
      />
    </Canvas>
  )
}
