
import React, { useState, useEffect } from "react";

function ComputersSVGFallback() {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: "500px" }}
    >
      <defs>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .monitor { animation: float 3s ease-in-out infinite; }
          .keyboard { animation: float 3s ease-in-out infinite 0.2s; }
          .glow-circle { animation: glow 2s ease-in-out infinite; }
          .orbiting { animation: rotate 8s linear infinite; }
        `}</style>
        <radialGradient id="screenGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#0099ff" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="#0f0f1e" />

      {/* Orbiting circles background */}
      <g className="orbiting" style={{ transformOrigin: "200px 150px" }}>
        <circle cx="200" cy="80" r="3" fill="#00d4ff" opacity="0.4" />
      </g>

      {/* Monitor */}
      <g className="monitor">
        {/* Monitor stand */}
        <rect x="150" y="200" width="100" height="15" fill="#1a1a2e" rx="3" />
        <rect x="195" y="215" width="10" height="25" fill="#1a1a2e" />

        {/* Monitor back */}
        <rect x="80" y="80" width="240" height="130" fill="#1a1a2e" rx="8" />

        {/* Screen bezel */}
        <rect x="95" y="95" width="210" height="100" fill="#0a0a14" rx="5" />

        {/* Screen glow */}
        <rect
          x="95"
          y="95"
          width="210"
          height="100"
          fill="url(#screenGradient)"
          rx="5"
          opacity="0.15"
        />

        {/* Screen content - animated lines */}
        <line x1="110" y1="110" x2="270" y2="110" stroke="#00d4ff" strokeWidth="2" />
        <line x1="110" y1="125" x2="250" y2="125" stroke="#00d4ff" strokeWidth="1.5" opacity="0.7" />
        <line x1="110" y1="140" x2="240" y2="140" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
        <line x1="110" y1="155" x2="260" y2="155" stroke="#00d4ff" strokeWidth="1.5" opacity="0.7" />
        <line x1="110" y1="170" x2="230" y2="170" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />

        {/* Glowing circle on screen */}
        <circle
          cx="200"
          cy="145"
          r="15"
          fill="none"
          stroke="#64c8ff"
          strokeWidth="2"
          className="glow-circle"
        />
      </g>

      {/* Keyboard */}
      <g className="keyboard">
        <rect x="70" y="240" width="260" height="40" fill="#1a1a2e" rx="4" />

        {/* Keys pattern */}
        <g fill="#0a0a14" opacity="0.6">
          <rect x="80" y="250" width="8" height="8" rx="1" />
          <rect x="95" y="250" width="8" height="8" rx="1" />
          <rect x="110" y="250" width="8" height="8" rx="1" />
          <rect x="125" y="250" width="8" height="8" rx="1" />
          <rect x="305" y="250" width="8" height="8" rx="1" />

          <rect x="80" y="265" width="8" height="8" rx="1" />
          <rect x="95" y="265" width="8" height="8" rx="1" />
          <rect x="110" y="265" width="8" height="8" rx="1" />
          <rect x="305" y="265" width="8" height="8" rx="1" />
        </g>

        {/* Glow effect on keyboard */}
        <rect
          x="70"
          y="240"
          width="260"
          height="40"
          fill="#00d4ff"
          rx="4"
          opacity="0.05"
        />
      </g>

      {/* Accent lights */}
      <circle cx="60" cy="150" r="8" fill="#00d4ff" opacity="0.3" />
      <circle cx="340" cy="150" r="8" fill="#00d4ff" opacity="0.3" />
    </svg>
  );
}

export default function ComputersCanvasFallback() {
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
          cursor: hovered ? "pointer" : "auto",
          transition: "all 0.3s ease",
          transform: hovered ? "scale(1.02)" : "scale(1)",
          boxShadow: hovered
            ? "0 20px 40px rgba(100, 200, 255, 0.3)"
            : "0 10px 20px rgba(0, 0, 0, 0.3)",
          padding: "20px",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ComputersSVGFallback />
      </div>
    );
  }

  // Return your original 3D Canvas here - unchanged
  return null;
}