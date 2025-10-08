// // import { useState } from "react";


// // export default function PaletteGenerator() {
// //   const Palettes = {
// //     1: [
// //       { id: "warm-001", colors: ["#7B4019", "#FF7D29", "#FFBF78", "#FFEEA9"] },
// //       { id: "warm-002", colors: ["#FCEF91", "#FB9E3A", "#E6521F", "#EA2F14"] }
// //     ],
// //     2: [
// //       { id: "rainbow-020", colors: ["#FCEF91", "#FB9E3A", "#E6521F", "#EA2F14"] },
// //       { id: "rainbow-021", colors: ["#FBDB93", "#BE5B50", "#8A2D3B", "#641B2E"] }
// //     ]
    
// //   };


// //   const [selectedCategory, setSelectedCategory] = useState("1");

// // const categories = Object.keys(Palettes); // ["1", "2"]

// // const palettesToShow = selectedCategory === "1" 
// //   ? Palettes 
// //   : { [selectedCategory]: Palettes[selectedCategory] };
// //   return (
// //     <div style={{ padding: "20px" }}>
// //       {Object.entries(Palettes).map(([categoryId, palettes]) => (
// //         <div key={categoryId} style={{ marginBottom: "40px" }}>
// //           <h2>Category {categoryId}</h2>
// //           <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
// //             {palettes.map((p) => (
// //               <div key={p.id} style={{ textAlign: "center" }}>
// //                 <div style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
// //                   {p.colors.map((color, i) => (
// //                     <div
// //                       key={i}
// //                       style={{
// //                         width: "50px",
// //                         height: "50px",
// //                         backgroundColor: color,
// //                         borderRadius: "6px",
// //                       }}
// //                     />
// //                   ))}
// //                 </div>
// //                 <p>{p.id}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// import Palettes from '../Data';
// import { useState } from "react";
// import { FaPaw } from "react-icons/fa";

// // const Palettes = {
// //   warm: [
// //     { id: "warm-001", colors: ["#7B4019", "#FF7D29", "#FFBF78", "#FFEEA9"] },
// //     { id: "warm-002", colors: ["#FCEF91", "#FB9E3A", "#E6521F", "#EA2F14"] }
// //   ],
// //   pastel: [
// //     { id: "pastel-001", colors: ["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9"] },
// //     { id: "pastel-002", colors: ["#BAE1FF", "#D5BAFF", "#FFC4E1", "#FFD6A5"] }
// //   ],
// //   cool: [
// //     { id: "cool-001", colors: ["#003F5C", "#2F4B7C", "#665191", "#A05195"] },
// //     { id: "cool-002", colors: ["#70A9A1", "#40798C", "#133C55", "#BFD7EA"] }
// //   ],
// //     happy: [
// //     { id: "cool-001", colors: ["#003F5C", "#2F4B7C", "#665191", "#A05195"] },
// //     { id: "cool-002", colors: ["#70A9A1", "#40798C", "#133C55", "#BFD7EA"] }
// //   ]
// // };

// export default function PaletteGenerator() {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // Decide what to render (all or one category)
//   const palettesToShow =
//     selectedCategory === "all"
//       ? Object.values(Palettes).flat()
//       : Palettes[selectedCategory];

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       {/* Category Tabs */}
//       <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
//         <button
//           onClick={() => setSelectedCategory("all")}
//           style={{
//             padding: "6px 12px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             background: selectedCategory === "all" ? "#000" : "#fff",
//             color: selectedCategory === "all" ? "#fff" : "#000",
//             cursor: "pointer"
//           }}
//         >
//           All
//         </button>
//         {Object.keys(Palettes).map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               padding: "6px 12px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//               background: selectedCategory === cat ? "#000" : "#fff",
//               color: selectedCategory === cat ? "#fff" : "#000",
//               cursor: "pointer"
//             }}
//           >
//             {cat.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* Palette Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
//           gap: "1rem"
//         }}
//       >
//         {palettesToShow.map((palette) => (
//           <div
//             key={palette.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "12px",
//               overflow: "hidden",
//               display: "flex",
//               flexDirection: "column",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//               background: "#fff",
//               padding: "8px"
//             }}
//           >
//             {/* Color Bars */}
//             <div style={{ display: "flex", height: "60px", marginBottom: "6px" }}>
//               {palette.colors.map((c, index) => (
//                 <div key={index} style={{ flex: 1, background: c, borderRadius: "4px" }} />
//               ))}
//             </div>

//             {/* Paw Icons */}
//             <div style={{ display: "flex", justifyContent: "center", gap: "27px" }}>
//               {palette.colors.map((_, index) => (
//                 <FaPaw key={index} style={{ color: palette.colors[index], fontSize: "14px" }} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// // https://chatgpt.com/c/68d7ea8c-4d70-8322-a2c9-12eb9f27fa05



// import React, { useState } from "react";
// import Palettes from "../Data";
// import { FaPaw } from "react-icons/fa";
// import "./PaletteGenerator.css";

// export default function PaletteGenerator() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedPalette, setSelectedPalette] = useState(null);
//   const [selectedColorIndex, setSelectedColorIndex] = useState(0);
//   const [colorWheelValue, setColorWheelValue] = useState("#ffffff");
//   const [gradient, setGradient] = useState({ color1: "#ffffff", color2: "#000000" });

//   const palettesToShow =
//     selectedCategory === "all"
//       ? Object.values(Palettes).flat()
//       : Palettes[selectedCategory];

//   const handleColorWheelChange = (e) => {
//     const newColor = e.target.value;
//     setColorWheelValue(newColor);

//     if (selectedPalette) {
//       const updatedPalette = { ...selectedPalette };
//       updatedPalette.colors[selectedColorIndex] = newColor;
//       setSelectedPalette(updatedPalette);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Color Mesh Palette Generator</h1>

//       {/* Category Tabs */}
//       <div className="categories">
//         <button
//           className={selectedCategory === "all" ? "active" : ""}
//           onClick={() => setSelectedCategory("all")}
//         >
//           All
//         </button>
//         {Object.keys(Palettes).map((cat) => (
//           <button
//             key={cat}
//             className={selectedCategory === cat ? "active" : ""}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* Palette Grid */}
//       <div className="palette-grid">
//         {palettesToShow.map((palette) => (
//           <div
//             key={palette.id}
//             className={`palette-card ${
//               selectedPalette?.id === palette.id ? "selected" : ""
//             }`}
//             onClick={() => {
//               setSelectedPalette(palette);
//               setSelectedColorIndex(0);
//               setColorWheelValue(palette.colors[0]);
//               setGradient({ color1: palette.colors[0], color2: palette.colors[1] || palette.colors[0] });
//             }}
//           >
//             <div className="color-bars">
//               {palette.colors.map((c, index) => (
//                 <div
//                   key={index}
//                   className="color-block"
//                   style={{ background: c }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setSelectedColorIndex(index);
//                     setColorWheelValue(c);
//                   }}
//                 />
//               ))}
//             </div>

//             <div className="paw-icons">
//               {palette.colors.map((c, index) => (
//                 <FaPaw key={index} style={{ color: c, fontSize: "14px" }} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedPalette && (
//         <div className="editor-section">
//           {/* Color Wheel */}
//           <div className="color-wheel">
//             <h3>Tweak Color: {selectedPalette.colors[selectedColorIndex]}</h3>
//             <input
//               type="color"
//               value={colorWheelValue}
//               onChange={handleColorWheelChange}
//             />
//           </div>

//           {/* Gradient Sliders */}
//           <div className="gradient-editor">
//             <h3>Gradient Editor</h3>
//             <div className="gradient-inputs">
//               <div>
//                 <label>Color 1:</label>
//                 <input
//                   type="color"
//                   value={gradient.color1}
//                   onChange={(e) =>
//                     setGradient({ ...gradient, color1: e.target.value })
//                   }
//                 />
//               </div>
//               <div>
//                 <label>Color 2:</label>
//                 <input
//                   type="color"
//                   value={gradient.color2}
//                   onChange={(e) =>
//                     setGradient({ ...gradient, color2: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Live Preview */}
//           <div
//             className="live-preview"
//             style={{
//               background: `linear-gradient(90deg, ${gradient.color1}, ${gradient.color2})`,
//             }}
//           >
//             <h2>Live Preview</h2>
//             <button style={{ background: selectedPalette.colors[0] }}>Button</button>
//             <button style={{ background: selectedPalette.colors[1] || selectedPalette.colors[0] }}>Button</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import Palettes from "../data.js";
import { FaPaw, FaEllipsisV } from "react-icons/fa";
import "./PaletteGenerator.css";
import ColorExtractor from "../ColorExtractor";
import Header from '../Header.jsx';

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

  const copyPaletteColors = (palette) => {
    navigator.clipboard.writeText(palette.colors.join(", "));
    alert("Palette colors copied!");
  };
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
              <FaEllipsisV />
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
            <button onClick={() => copyPaletteColors(modalPalette)}>Copy All Colors</button>
            <button onClick={() => setModalPalette(null)}>Close</button>
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
