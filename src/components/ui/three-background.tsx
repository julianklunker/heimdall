import { Canvas } from "@react-three/fiber"
import { ShaderPlane, EnergyRing } from "./background-paper-shaders"

function Scene() {
  return (
    <>
      {/* Central atmospheric glow */}
      <ShaderPlane
        position={[0, 0.3, 0] as [number, number, number]}
        color1="#010101"
        color2="#FF5722"
      />
      {/* Bottom-left deep glow */}
      <ShaderPlane
        position={[-1.8, -1.4, -0.4] as [number, number, number]}
        color1="#000000"
        color2="#cc3300"
      />
      {/* Top-right accent */}
      <ShaderPlane
        position={[1.8, 1.2, -0.4] as [number, number, number]}
        color1="#000000"
        color2="#FF5722"
      />
      {/* Rotating energy rings */}
      <EnergyRing radius={0.5} position={[1.1, 0.5, 0.1] as [number, number, number]} />
      <EnergyRing radius={0.75} position={[-1.1, -0.5, -0.2] as [number, number, number]} />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black" />
      <Canvas
        camera={{ position: [0, 0, 3] as [number, number, number], fov: 50 }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1.5]}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <Scene />
      </Canvas>
      {/* Overlay to keep effect atmospheric, not overwhelming */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    </div>
  )
}
