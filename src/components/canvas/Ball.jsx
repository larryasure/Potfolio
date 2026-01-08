import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  if (!decal) return null;

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhongMaterial color="#fff8eb" flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setIsAndroid(/android/i.test(navigator.userAgent));
  }, []);

  if (isAndroid) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          boxShadow: hovered
            ? "0 15px 30px rgba(102, 126, 234, 0.4)"
            : "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={icon}
          alt="tech"
          style={{
            width: "60%",
            height: "60%",
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
      dpr={window.innerWidth < 760 ? 1 : [1, 0.9]}
      performance={{ min: 0.1, max: 0.4 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        version: 1,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
