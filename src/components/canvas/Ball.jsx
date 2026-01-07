import React, { Suspense } from "react";
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
    <Float speed={9} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.25]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhongMaterial color="#fff8eb" flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 8.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={window.innerWidth < 760 ? 1.2 : [1, 1.9]}
      performance={{ min: 0.1, max: 0.7 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        version: 1,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
