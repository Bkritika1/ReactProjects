import React, { useEffect, useState } from "react";

export default function FPSMeter() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let last = performance.now();
    let frames = 0;

    const loop = (now) => {
      frames++;
      if (now >= last + 1000) {
        setFps(frames);
        frames = 0;
        last = now;
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <div style={{
      background: "#000",
      color: "#0f0",
      padding: "4px 10px",
      display: "inline-block",
      borderRadius: 4,
      marginBottom: 10,
      fontSize: 14
    }}>
      FPS: {fps}
    </div>
  );
}
