

import React, { useState } from "react";
import Palettes from "../data.js";
import { FaPaw, FaEllipsisV, } from "react-icons/fa";
import {Copy, Cross, RemoveFormatting, X} from 'lucide-react';
import "./PaletteGenerator.css";
import ColorExtractor from "../ColorExtractor";
import Header from '../Header.jsx';
import { BiCloset } from "react-icons/bi";

export default function PaletteGenerator() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [colorWheelValue, setColorWheelValue] = useState("#ffffff");
  const [gradient, setGradient] = useState({ color1: "#ffffff", color2: "#000000" });
  const [modalPalette, setModalPalette] = useState(null); // modal state

  const palettesToShow =
    selectedCategory === "all"
      ? Object.values(Palettes).flat()
      : Palettes[selectedCategory];

  const handleColorWheelChange = (e) => {
    const newColor = e.target.value;
    setColorWheelValue(newColor);

    if (selectedPalette) {
      const updatedPalette = { ...selectedPalette };
      updatedPalette.colors[selectedColorIndex] = newColor;
      setSelectedPalette(updatedPalette);
    }
  };

  // const copyPaletteColors = (palette) => {
  //   navigator.clipboard.writeText(palette.colors.join(", "));
  //   alert("Palette colors copied!");
  // };
console.log("Extracted colors:", palettesToShow);
  return (
<>
<Header/>
 <div className="container">

      <ColorExtractor/>
      <h1>Color Mesh Palette Generator</h1>

      {/* Category Tabs */}
      <div className="categories">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        {Object.keys(Palettes).map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Palette Grid */}
      <div className="palette-grid">
        {palettesToShow.map((palette) => (
          <div
            key={palette.id}
            className={`palette-card ${
              selectedPalette?.id === palette.id ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedPalette(palette);
              setSelectedColorIndex(0);
              setColorWheelValue(palette.colors[0]);
              setGradient({ color1: palette.colors[0], color2: palette.colors[1] || palette.colors[0] });
            }}
          >
            {/* Three-dot menu */}
            <div
              className="menu-dot"
              onClick={(e) => {
                e.stopPropagation();
                setModalPalette(palette);
              }}
            >
              <Copy style={{width:'20px'}}/>
            </div>

            <div className="color-bars">
              {palette.colors.map((c, index) => (
                <div
                  key={index}
                  className="color-block"
                  style={{ background: c }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColorIndex(index);
                    setColorWheelValue(c);
                  }}
                />
              ))}
            </div>

            <div className="paw-icons">
              {palette.colors.map((c, index) => (
                <FaPaw key={index} style={{ color: c, fontSize: "14px" }} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalPalette && (
        <div className="modal-overlay" onClick={() => setModalPalette(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalPalette.id}</h2>
            <div className="modal-colors">
              {modalPalette.colors.map((c, i) => (
                <div key={i} className="modal-color-block" style={{ background: c }}>
                  {c}
                </div>
              ))}
            </div>
            <button className="btnn" onClick={() => copyPaletteColors(modalPalette)}>Copy All Colors</button>
            <button onClick={() => setModalPalette(null)} style={{position:'relative', top:'-8rem',left:'5rem',background:'transparent',border:'none'}}><X style={{background:'transparent', border:'none'}}/></button>
          </div>
        </div>
      )}

      {/* Editor Section (Color Wheel + Gradient) */}
      {selectedPalette && (
        <div className="editor-section">
          <div className="color-wheel">
            <h3>Tweak Color: {selectedPalette.colors[selectedColorIndex]}</h3>
            <input
              type="color"
              value={colorWheelValue}
              onChange={handleColorWheelChange}
            />
          </div>

          <div className="gradient-editor">
            <h3>Gradient Editor</h3>
            <div className="gradient-inputs">
              <div>
                <label>Color 1:</label>
                <input
                  type="color"
                  value={gradient.color1}
                  onChange={(e) =>
                    setGradient({ ...gradient, color1: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Color 2:</label>
                <input
                  type="color"
                  value={gradient.color2}
                  onChange={(e) =>
                    setGradient({ ...gradient, color2: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div
            className="live-preview"
            style={{
              background: `linear-gradient(90deg, ${gradient.color1}, ${gradient.color2})`,
            }}
          >
            <h2>Live Preview</h2>
            <button style={{ background: selectedPalette.colors[0] }}>Button</button>
            <button style={{ background: selectedPalette.colors[1] || selectedPalette.colors[0] }}>Button</button>
          </div>
        </div>
      )}
    </div>
</>
   
  );
}
