import { useState } from "react";
import { useUI } from "../src/context/UIContext";

export default function CustomThemeModal({ close }) {
  const { applyCustomPalette } = useUI();
  const [colors, setColors] = useState(["", "", "", "", ""]);

  const handleChange = (index, value) => {
    const newColors = [...colors];
    newColors[index] = value;
    setColors(newColors);
  };

  const handleApply = () => {
    applyCustomPalette(colors);
    close();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#1e1e1e",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          position: "relative",
        }}
      >
        <button
          onClick={close}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ❌
        </button>

        <h3>Enter 5 Hex Colors</h3>
        {colors.map((c, i) => (
          <input
            key={i}
            type="text"
            value={c}
            placeholder="#HEX"
            onChange={(e) => handleChange(i, e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        ))}

        <button
          onClick={handleApply}
          style={{
            marginTop: "10px",
            padding: "8px",
            borderRadius: "6px",
            border: "none",
            background: "#4CAF50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Apply Palette
        </button>
      </div>
    </div>
  );
}
