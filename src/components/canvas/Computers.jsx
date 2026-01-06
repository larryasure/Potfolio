import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Loader from "../Loader";

function Computers() {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const meshRef = useRef();
  const isMobile = innerWidth < 760;

  return (
    <group ref={meshRef} scale={isMobile ? 0.8: 1 } position={[-1.0, 0, 0]}>
      {/* ONLY lights fixed for weaker GPUs */}
      <hemisphereLight intensity={1} groundColor="gray" />
      <pointLight intensity={1} position={[-2, 0, 0]} />

      <primitive
        object={computer.scene}
        scale={isMobile? 0.55: 0.80}
        position={isMobile? [2.0, -0.5, -1]:[2, -3.5, -0.9]}
        rotation={[0, -1.5, -0.1]}
      />
    </group>
  );
}

export default function ComputersCanvas() {
  const [hovered, setHovered] = useState(false);
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [1, 7, 24], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: false }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: hovered ? "grab" : "auto" }}
      dpr={[1, 1]}
      performance={{ min: 0.5, max: 1 }}
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
