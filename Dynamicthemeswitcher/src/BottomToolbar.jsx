// import { useState, useEffect } from "react";
// import { settings } from "./setting";
// import { FaPalette } from "react-icons/fa";

// export default function BottomToolbar() {
//   const [openPanel, setOpenPanel] = useState(false);
//   const [selectedThemeKey, setSelectedThemeKey] = useState("default");

//   const handleThemeChange = (themeKey) => {
//     setSelectedThemeKey(themeKey);
//     const theme = settings.theme[themeKey];
//     if (theme) {
//       Object.keys(theme).forEach((property) => {
//         document.documentElement.style.setProperty(property, theme[property]);
//       });
//     }
//     setOpenPanel(false);
//   };

//   const theme = settings.theme[selectedThemeKey] || {};

//   return (
//     <>
//       {/* Toolbar */}
//       <div className="bottom-toolbar">
//         {/* Palette button */}
//         <button
//           className="toolbar-btn"
//           onClick={() => setOpenPanel(!openPanel)}
//         >
//           <FaPalette />
//         </button>

//         {/* Current theme color buttons */}
//         <button
//           className="color-btn"
//           style={{ background: theme["--primary-bg-color"] }}
//         >
//           Primary
//         </button>
//         <button
//           className="color-btn"
//           style={{ background: theme["--secondary-bg-color"] }}
//         >
//           Secondary
//         </button>
//         <button
//           className="color-btn"
//           style={{ background: theme["--button-text-color"], color: "#fff" }}
//         >
//           Text
//         </button>
//         <button
//           className="color-btn"
//           style={{ background: theme["--gradient-bg"] }}
//         >
//           Accent
//         </button>
//       </div>

//       {/* Floating theme palettes */}
//       {openPanel && (
//         <div className="palette-panel">
//           {Object.keys(settings.theme || {}).map((themeKey) => {
//             const t = settings.theme[themeKey];
//             return (
//               <div
//                 key={themeKey}
//                 className={`palette-card ${selectedThemeKey === themeKey ? "active" : ""}`}
//                 onClick={() => handleThemeChange(themeKey)}
//               >
//                 <p style={{ marginBottom: "6px", fontWeight: "600" }}>
//                   {themeKey}
//                 </p>
//                 <div className="swatches">
//                   <div>
//                     <span style={{ background: t["--primary-bg-color"] }} />
//                     <p>Primary</p>
//                   </div>
//                   <div>
//                     <span style={{ background: t["--secondary-bg-color"] }} />
//                     <p>Secondary</p>
//                   </div>
//                   <div>
//                     <span style={{ background: t["--button-text-color"] }} />
//                     <p>Text</p>
//                   </div>
//                   <div>
//                     <span style={{ background: t["--gradient-bg"] }} />
//                     <p>Accent</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// }


import { useState, useEffect } from "react";
import { settings } from "./setting";
import { FaPalette } from "react-icons/fa";

export default function BottomToolbar() {
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedThemeKey, setSelectedThemeKey] = useState("default");

  // color state for direct editing
  const [colors, setColors] = useState({
    background: "#ffffff",
    primary: "#000000",
    secondary: "#888888",
    text: "#000000",
    accent: "#dcd8d8ff",
  });

  // apply a theme (predefined palette)
  const handleThemeChange = (themeKey) => {
    setSelectedThemeKey(themeKey);
    const theme = settings.theme[themeKey];
    if (theme) {
      const updatedColors = {
        background: theme["--background"] || theme["--primary-bg-color"],
        primary: theme["--primary-bg-color"],
        secondary: theme["--secondary-bg-color"],
        text: theme["--button-text-color"],
        accent: theme["--gradient-bg"],
      };
      setColors(updatedColors);
      applyColors(updatedColors);
    }
    setOpenPanel(false);
  };

  // apply to document root
  const applyColors = (colorObj) => {
    document.documentElement.style.setProperty("--background", colorObj.background);
    document.documentElement.style.setProperty("--primary-bg-color", colorObj.primary);
    document.documentElement.style.setProperty("--secondary-bg-color", colorObj.secondary);
    document.documentElement.style.setProperty("--button-text-color", colorObj.text);
    // document.documentElement.style.setProperty("--gradient-bg", colorObj.accent);
  };

  // when user picks custom color
  const handleCustomColor = (key, value) => {
    const updated = { ...colors, [key]: value };
    setColors(updated);
    applyColors(updated);
  };

  // load default theme initially
  useEffect(() => {
    handleThemeChange(selectedThemeKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Toolbar */}
      <div className="bottom-toolbar">
        {/* Palette button */}
        <button className="toolbar-btn" onClick={() => setOpenPanel(!openPanel)}>
          <FaPalette />
        </button>

        {/* Editable color buttons */}
       <div className="color-picker-container">
  <label className="color-btn" style={{ background: colors.background }}>
    Background
    <input
      type="color"
      value={colors.background}
      onChange={(e) => handleCustomColor("background", e.target.value)}
    />
  </label>
</div>

      <div className="color-picker-container">
          <label className="color-btn" style={{ background: colors.primary }}>
          Primary
          <input
            type="color"
            value={colors.primary}
            onChange={(e) => handleCustomColor("primary", e.target.value)}
          />
        </label>
      </div>

      <div className="color-picker-container">
          <label className="color-btn" style={{ background: colors.secondary }}>
          Secondary
          <input
            type="color"
            value={colors.secondary}
            onChange={(e) => handleCustomColor("secondary", e.target.value)}
          />
        </label>
      </div>

       <div className="color-picker-container">
           <label
          className="color-btn"
          style={{ background: colors.text, color: "#fff" }}
        >
          Text
          <input
            type="color"
            value={colors.text}
            onChange={(e) => handleCustomColor("text", e.target.value)}
          />
        </label>
       </div>

      </div>

      {/* Floating theme palettes */}
      {openPanel && (
        <div className="palette-panel">
          {Object.keys(settings.theme || {}).map((themeKey) => {
            const t = settings.theme[themeKey];
            return (
              <div
                key={themeKey}
                className={`palette-card ${selectedThemeKey === themeKey ? "active" : ""}`}
                onClick={() => handleThemeChange(themeKey)}
              >
                <p style={{ marginBottom: "6px", fontWeight: "600" }}>
                  {themeKey}
                </p>
                <div className="swatches">
                  <div>
                    <span style={{ background: t["--background"] || t["--primary-bg-color"] }} />
                    <p>Background</p>
                  </div>
                  <div>
                    <span style={{ background: t["--primary-bg-color"] }} />
                    <p>Primary</p>
                  </div>
                  <div>
                    <span style={{ background: t["--secondary-bg-color"] }} />
                    <p>Secondary</p>
                  </div>
                  <div>
                    <span style={{ background: t["--button-text-color"] }} />
                    <p>Text</p>
                  </div>
                  <div>
                    <span style={{ background: t["--gradient-bg"] }} />
                    <p>Accent</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

// import { useState } from "react";
// import { FaPalette } from "react-icons/fa";

// // Palettes (rows of colors)
// const palettes = [
//   ["#9b1d4a", "#d94a38", "#f28c38", "#f7d488"],
//   ["#1a237e", "#ffffff", "#f50057", "#311b92"],
//   ["#d32f2f", "#f57c00", "#fbc02d", "#7cb342"],
//   ["#4caf50", "#ffffff", "#81c784", "#388e3c"],
//   ["#ffffff", "#ff9800", "#ff5722", "#4caf50"],
//   ["#607d8b", "#eceff1", "#ff7043", "#3e2723"],
//   ["#673ab7", "#9575cd", "#ede7f6", "#311b92"],
// ];

// export default function BottomToolbar() {
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const applyPalette = (colors) => {
//     document.documentElement.style.setProperty("--background", colors[0]);
//     document.documentElement.style.setProperty("--primary-bg-color", colors[1]);
//     document.documentElement.style.setProperty("--secondary-bg-color", colors[2]);
//     document.documentElement.style.setProperty("--button-text-color", colors[3]);
//     setOpenDrawer(false);
//   };

//   return (
//     <>
//       {/* Floating toolbar at bottom */}
//       <div className="bottom-toolbar">
//         <button
//           className="toolbar-btn"
//           onClick={() => setOpenDrawer(true)}
//         >
//           <FaPalette />
//         </button>
//       </div>

//       {/* Right side drawer with palette grid */}
//       <div className={`palette-drawer ${openDrawer ? "open" : ""}`}>
//         <div className="drawer-header">
//           <h3>Choose a Palette</h3>
//           <button className="close-btn" onClick={() => setOpenDrawer(false)}>✖</button>
//         </div>

//         <div className="palette-grid">
//           {palettes.map((row, i) => (
//             <div
//               key={i}
//               className="palette-row"
//               onClick={() => applyPalette(row)}
//             >
//               {row.map((color, j) => (
//                 <span key={j} style={{ background: color }} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
