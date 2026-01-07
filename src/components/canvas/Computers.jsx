import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Loader from "../Loader";

// function Computers() {
//   const computer = useGLTF("/desktop_pc/scene.gltf");
//   const meshRef = useRef();
//   const isMobile = window.innerWidth < 760;

//   return (
//     <group ref={meshRef} scale={isMobile ? 0.6 : 1} position={[-1.0, 0, 0]}>
//       <ambientLight intensity={0.3} />
//       <hemisphereLight intensity={3.8} groundColor="gray" />
//       <pointLight intensity={0.8} position={[-2, 0, 0]} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.4 : 0.8}
//         position={isMobile ? [2.0, -0.5, -1] : [2, -3.5, -0.9]}
//         rotation={[0, -1.5, -0.1]}
//       />
//     </group>
//   );
// }

function Computers() {
  const meshRef = useRef();
  const isMobile = window.innerWidth < 760;

  return (
    <group ref={meshRef} scale={isMobile ? 0.6 : 1} position={[-1.0, 0, 0]}>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.8} groundColor="gray" />
      <pointLight intensity={0.4} position={[-2, 0, 0]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  );
}

export default function ComputersCanvas() {
  const [hovered, setHovered] = useState(false);

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [1, 7, 24], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        version: 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: hovered ? "grab" : "auto" }}
      dpr={window.innerWidth < 760 ? 1 : [1, 1.8]}
      performance={{ min: 0.1, max: 0.5 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
