import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p style={{
        fontSize: 15,
        color: "#f1f2f2",
        fontWeight: 900,
        marginTop: 40,
      }}>{progress.toFixed(2)}%</p>
    </Html>
  );
}