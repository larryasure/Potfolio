import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import Loader from "../Loader";


function Computers() {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const meshRef = useRef();
  const isMobile = window.innerWidth < 760;

  return (
    <group ref={meshRef} scale={isMobile ? 0.6 : 1} position={[-1.0, 0, 0]}>
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.8} groundColor="gray" />
      <pointLight intensity={0.4} position={[-2, 0, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.8}
        position={isMobile ? [2.0, -0.5, -1] : [2, -3.5, -0.9]}
        rotation={[0, -1.5, -0.1]}
      />
    </group>
  );
}

export default function ComputersCanvas() {
  const [hovered, setHovered] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/android/i.test(navigator.userAgent));
  }, []);

  if (isAndroid) {
    return (
      <div
        style={{
          width: "100%",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          boxShadow: hovered
            ? "0 20px 40px rgba(100, 200, 255, 0.3)"
            : "0 10px 20px rgba(0, 0, 0, 0.3)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/desktop_pc/fallback.png"
          alt="Gaming Desktop"
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            opacity: hovered ? 0.9 : 1,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
    );
  }

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
      dpr={window.innerWidth < 760 ? 1 : [1, 0.8]}
      performance={{ min: 0.1, max: 0.5 }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}