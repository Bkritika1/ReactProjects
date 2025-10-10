
import { useState, useEffect } from "react";
import { useUI } from "../src/context/UIContext";

export default function CustomThemeModal({ close }) {
  const { applyCustomPalette,saveCustomPalette } = useUI();

  const [paletteName, setPaletteName] = useState("");
  const [inputValue, setInputValue] = useState(""); // user paste input
  const [colors, setColors] = useState(["", "", "", "", ""]);

  // Helper: Contrast color
  const getContrast = (hex) => {
    if (!hex) return "#000";
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "#000" : "#fff";
  };

  // Handle paste/input
  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);

    let arr = val
      .split(/[\s,]+/)
      .filter(Boolean)
      .map((c) => (c.startsWith("#") ? c : "#" + c))
      .slice(0, 5);

    // Auto fill 5th color intelligently
    while (arr.length < 5) {
      arr.push(arr[arr.length - 1] ? getContrast(arr[arr.length - 1]) : "#000");
    }

    setColors(arr);
  };

  // Shuffle colors
  const shuffleColors = () => {
    setColors((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  // Drag & Drop handlers
  const [dragIndex, setDragIndex] = useState(null);
  const handleDragStart = (index) => setDragIndex(index);
  const handleDrop = (index) => {
    if (dragIndex === null) return;
    const newColors = [...colors];
    const [moved] = newColors.splice(dragIndex, 1);
    newColors.splice(index, 0, moved);
    setColors(newColors);
    setDragIndex(null);
  };

  // Validation
  const isValidHex = (hex) => /^#[0-9a-fA-F]{6}$/.test(hex);

  // Copy CSS
  const copyCSS = () => {
    const cssText = `:root {
  --color-primary: ${colors[0]};
  --color-text: ${colors[1]};
  --color-bg: ${colors[2]};
  --color-secondary: ${colors[3]};
  --color-accent: ${colors[4]};
}`;
    navigator.clipboard.writeText(cssText);
    // alert("CSS Copied!");
  };

  // Apply palette
const handleApply = () => {
  if (colors.every(isValidHex)) {
    const newPalette = { name: paletteName || "Untitled Palette", colors };
    saveCustomPalette(newPalette);
    applyCustomPalette(colors);
    close();
  } else {
    alert("Please enter 5 valid hex colors!");
  }
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
          borderRadius: "12px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
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

        <h3>Custom Palette Builder</h3>

        {/* Palette Name */}
        <input
          type="text"
          placeholder="Palette Name (optional)"
          value={paletteName}
          onChange={(e) => setPaletteName(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />

        {/* Paste Colors */}
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          placeholder="#ff0000, #00ff00, #0000ff, #ffff00, #ff00ff"
          style={{
            padding: "10px",
            borderRadius: "6px",
            fontSize: "14px",
            height: "50px",
          }}
        />

        {/* Color Preview / Gradient Preview */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {colors.map((c, i) => (
            <div
              key={i}
              draggable
              onDragStart={() => handleDragStart(i)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(i)}
              style={{
                width: "50px",
                height: "50px",
                background: c,
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: getContrast(c),
                fontSize: "12px",
                border: isValidHex(c) ? "2px solid #444" : "2px solid red",
                cursor: "grab",
              }}
              title={c}
            >
              {c || "--"}
            </div>
          ))}
        </div>

        {/* Gradient Preview Bar */}
        <div
          style={{
            height: "25px",
            borderRadius: "6px",
            background: `linear-gradient(90deg, ${colors.join(",")})`,
            border: "1px solid #333",
            marginTop: "5px",
          }}
        />

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <button
            onClick={() => setColors(["", "", "", "", ""])}
            style={{
              padding: "8px",
              borderRadius: "6px",
              background: "#444",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
          <button
            onClick={shuffleColors}
            style={{
              padding: "8px",
              borderRadius: "6px",
              background: "#555",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Shuffle
          </button>
          <button
            onClick={copyCSS}
            style={{
              padding: "8px",
              borderRadius: "6px",
              background: "#2d8cff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Copy CSS
          </button>
          <button
            onClick={handleApply}
            style={{
              padding: "8px",
              borderRadius: "6px",
              background: "#4CAF50",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Apply
          </button>
        </div>

        {/* How it works info */}
        <p style={{ fontSize: "12px", color: "#aaa", marginTop: "8px" }}>
          Tip: Paste 5 hex colors separated by comma or space.  
          If you enter fewer than 5, the remaining colors will be generated automatically to maintain contrast.  
          Drag & Drop squares to reorder. The gradient below shows the palette preview.
        </p>
      </div>
    </div>
  );
}
