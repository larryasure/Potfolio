import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Loader from "../Loader";
import Fallback from "./Fallback";

function Computers() {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const meshRef = useRef();
  const isMobile = window.innerWidth < 760;

  return (
    <group ref={meshRef} scale={isMobile ? 0.6 : 1} position={[-1.0, 0, 0]}>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={3.8} groundColor="indigo" />
      <pointLight intensity={0.8} position={[-2, 0, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2.7 : 3.3}
        position={isMobile ? [2.0, -2.5, -1] : [-2, -4.5, 0.9]}
        rotation={[0, -1.5, -0.1]}
      />
    </group>
  );
}

export default function ComputersCanvas() {
  const [hovered, setHovered] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  React.useEffect(() => {
    setIsAndroid(/android/i.test(navigator.userAgent));
  }, []);

  if (isAndroid) return <Fallback />;

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
      dpr={window.innerWidth < 760 ? 3 : [1, 4.8]}
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
