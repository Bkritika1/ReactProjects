
// import { useState } from "react";
// import { themeData } from "../src/themeData";
// export default function BottomToolbar({changeTheme}) {
//      const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleRandomTheme = () => {
//     const themes = Object.keys(themeData);
//     const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//     changeTheme(randomTheme);
//   };
//     return (
//         <>
//             <div className="navbar-actions">
//                 <button
//                     className="customize-btn"
//                     onClick={() => setSidebarOpen(!sidebarOpen)}
//                 >
//                     Customize 🎨
//                 </button>
//             </div>

//             <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
//                 <button className="random-btn" onClick={handleRandomTheme}>
//                     🎲 Randomize Theme
//                 </button>

//                 <div className="theme-palettes">
//                     {Object.entries(themeData).map(([themeKey, themeVars]) => (
//                         <div
//                             key={themeKey}
//                             className="palette-block"
//                             onClick={() => changeTheme(themeKey)}
//                         >
//                             <div
//                                 className="color-square"
//                                 style={{ background: themeVars['--color-primary'] }}
//                             ></div>
//                             <div
//                                 className="color-square"
//                                 style={{ background: themeVars['--color-text'] }}
//                             ></div>
//                             <div
//                                 className="color-square"
//                                 style={{ background: themeVars['--color-bg'] }}
//                             ></div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </>
//     )
// }

// import { useState } from "react";
// import { themeData } from "../src/themeData";

// export default function BottomToolbar({ changeTheme }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleRandomTheme = () => {
//     const themes = Object.keys(themeData);
//     const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//     changeTheme(randomTheme);
//   };

//   return (
//     <>
//       {/* Fixed Bottom Toolbar */}
//       <div className="bottom-toolbar">
//         <button
//           className="customize-btn"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           🎨 Customize
//         </button>
//       </div>

//       {/* Theme Sidebar */}
//       <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
//         <button className="random-btn" onClick={handleRandomTheme}>
//           🎲 Randomize Theme
//         </button>

//         <div className="theme-palettes">
//           {Object.entries(themeData).map(([themeKey, themeVars]) => (
//             <div
//               key={themeKey}
//               className="palette-block"
//               onClick={() => changeTheme(themeKey)}
//             >
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-primary'] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-text'] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-bg'] }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }



// import { useState } from "react";
// import { themeData } from "../src/themeData";

// export default function BottomToolbar({ changeTheme }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleRandomTheme = () => {
//     const themes = Object.keys(themeData);
//     const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//     changeTheme(randomTheme);
//   };

//   return (
//     <>
//       <div className="bottom-toolbar">
//         <button
//           className="icon-btn"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           🎨
//         </button>
//         <button className="random-btn" onClick={handleRandomTheme}>
//        🔲
//         </button>
//         <button className="icon-btn">🌙</button>
//         <button className="icon-btn">Text</button>
//         <button className="icon-btn">Background</button>
//         <button className="icon-btn">Primary</button>
//         <button className="icon-btn">Secondary</button>
//         <button className="icon-btn">Accent</button>
//         <button className="icon-btn">🔗</button>
//       </div>

//       <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
       

//         <div className="theme-palettes">
//           {Object.entries(themeData).map(([themeKey, themeVars]) => (
//             <div
//               key={themeKey}
//               className="palette-block"
//               onClick={() => changeTheme(themeKey)}
//             >
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-primary'] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-text'] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-bg'] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: themeVars['--color-secondary'] }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// import { useState } from "react";
// import { themeData } from "../src/themeData";

// export default function BottomToolbar({ changeTheme, currentTheme }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeColor, setActiveColor] = useState(null);

//   // Safe fallback if themeVars is undefined
//   const themeVars = themeData[currentTheme] || {};

//   const handleRandomTheme = () => {
//     const themes = Object.keys(themeData);
//     const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//     changeTheme(randomTheme);
//   };

//   const handleColorChange = (e) => {
//     const newColor = e.target.value;
//     if (activeColor) {
//       document.documentElement.style.setProperty(activeColor, newColor);
//     }
//   };

//   // Helper to avoid errors if key missing
//   const getColor = (key, fallback = "#000000") =>
//     themeVars[key] || fallback;

//   return (
//     <>
//       <div className="bottom-toolbar">
//         {/* Sidebar toggle */}
//         <button
//           className="icon-btn"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//         >
//           🎨
//         </button>

//         {/* Random theme */}
//         <button className="random-btn" onClick={handleRandomTheme}>
//           🔲
//         </button>

//         {/* Dark/Light toggle placeholder */}
//         <button className="icon-btn">🌙</button>

//         {/* Text */}
//         <button
//           className="icon-btn"
//           style={{ color: getColor("--color-text", "#000") }}
//           onClick={() => setActiveColor("--color-text")}
//         >
//           Text
//         </button>

//         {/* Background */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-bg", "#ffffff"),
//             color: "#fff",
//           }}
//           onClick={() => setActiveColor("--color-bg")}
//         >
//           Background
//         </button>

//         {/* Primary */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-primary", "#4f46e5"),
//             color: "#fff",
//           }}
//           onClick={() => setActiveColor("--color-primary")}
//         >
//           Primary
//         </button>

//         {/* Secondary */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-secondary", "#10b981"),
//             color: "#fff",
//           }}
//           onClick={() => setActiveColor("--color-secondary")}
//         >
//           Secondary
//         </button>

//         {/* Accent */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-accent", "#f43f5e"),
//             color: "#fff",
//           }}
//           onClick={() => setActiveColor("--color-accent")}
//         >
//           Accent
//         </button>

//         <button className="icon-btn">🔗</button>
//       </div>

//       {/* Color Picker Popup */}
//       {activeColor && (
//         <div className="color-picker-popup">
//           <input
//             type="color"
//             defaultValue={getColor(activeColor, "#000000")}
//             onChange={handleColorChange}
//           />
//           <span>{getColor(activeColor)}</span>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
//         <div className="theme-palettes">
//           {Object.entries(themeData).map(([themeKey, vars]) => (
//             <div
//               key={themeKey}
//               className="palette-block"
//               onClick={() => changeTheme(themeKey)}
//             >
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-primary"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-text"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-bg"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-secondary"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-accent"] }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }



// import { useState, useRef, useEffect } from "react";
// import { HexColorPicker } from "react-colorful";
// import { themeData } from "../src/themeData";

// export default function BottomToolbar({ changeTheme, currentTheme }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeColor, setActiveColor] = useState(null);
//   const [colorValue, setColorValue] = useState("#000000");
//   const [pickerPos, setPickerPos] = useState({ left: 0, top: 0 });

//   const pickerRef = useRef(null);
//   const themeVars = themeData[currentTheme] || {};

//   // Close picker if clicked outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (pickerRef.current && !pickerRef.current.contains(e.target)) {
//         setActiveColor(null);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleRandomTheme = () => {
//     const themes = Object.keys(themeData);
//     const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//     changeTheme(randomTheme);
//   };

//   const openPicker = (colorVar, e) => {
//     const rect = e.target.getBoundingClientRect();
//     setPickerPos({
//       left: rect.left + rect.width / 2, // button center X
//       top: rect.top - 10, // just above button
//     });

//     setActiveColor(colorVar);
//     // pick current color
//     const current = getColor(colorVar);
//     setColorValue(current);
//   };

//   const handleColorChange = (newColor) => {
//     setColorValue(newColor);
//     if (activeColor) {
//       // Update CSS var instantly
//       document.documentElement.style.setProperty(activeColor, newColor);
//     }
//   };

//   const getColor = (key, fallback = "#000000") => {
//     // priority: live CSS var → themeData fallback
//     return (
//       getComputedStyle(document.documentElement).getPropertyValue(key).trim() ||
//       themeVars[key] ||
//       fallback
//     );
//   };

//   return (
//     <div className="bottom-toolbar-wrapper">
//       <div className="bottom-toolbar">
//         <button className="icon-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
//           🎨
//         </button>
//         <button className="random-btn" onClick={handleRandomTheme}>
//           🔲
//         </button>
//         <button className="icon-btn">🌙</button>

//         {/* TEXT COLOR */}
//         <button
//           className="icon-btn"
//           style={{ color: getColor("--color-text") }}
//           onClick={(e) => openPicker("--color-text", e)}
//         >
//           Text
//         </button>

//         {/* BG COLOR */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-bg"),
//             color: "#fff",
//           }}
//           onClick={(e) => openPicker("--color-bg", e)}
//         >
//           Background
//         </button>

//         {/* PRIMARY */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-primary"),
//             color: "#fff",
//           }}
//           onClick={(e) => openPicker("--color-primary", e)}
//         >
//           Primary
//         </button>

//         {/* SECONDARY */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-secondary"),
//             color: "#fff",
//           }}
//           onClick={(e) => openPicker("--color-secondary", e)}
//         >
//           Secondary
//         </button>

//         {/* ACCENT */}
//         <button
//           className="icon-btn"
//           style={{
//             background: getColor("--color-accent"),
//             color: "#fff",
//           }}
//           onClick={(e) => openPicker("--color-accent", e)}
//         >
//           Accent
//         </button>

//       </div>

//       {/* Floating Color Picker */}
//       {activeColor && (
//         <div
//           className="color-picker-popup"
//           ref={pickerRef}
//           style={{
//             position: "fixed",
//             left: pickerPos.left,
//             top: pickerPos.top,
//             transform: "translate(-50%, -100%)", // above button
//             background: "#fff",
//             padding: "10px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//           }}
//         >
//           <HexColorPicker color={colorValue} onChange={handleColorChange} />
//           <input
//             type="text"
//             className="hex-input"
//             value={colorValue}
//             onChange={(e) => handleColorChange(e.target.value)}
//           />
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
//         <div className="theme-palettes">
//           {Object.entries(themeData).map(([themeKey, vars]) => (
//             <div
//               key={themeKey}
//               className="palette-block"
//               onClick={() => changeTheme(themeKey)}
//             >
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-primary"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-text"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-bg"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-secondary"] }}
//               ></div>
//               <div
//                 className="color-square"
//                 style={{ background: vars["--color-accent"] }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { BiShuffle } from "react-icons/bi";
import { RiStarSmileLine } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { themeData } from "../src/themeData";

export default function BottomToolbar({ changeTheme, currentTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const [colorValue, setColorValue] = useState("#000000");
  const [pickerPos, setPickerPos] = useState({ left: 0, top: 0 });
  const [darkMode, setDarkMode] = useState(false);

  const pickerRef = useRef(null);
  const themeVars = themeData[currentTheme] || {};

  // Close picker if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setActiveColor(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRandomTheme = () => {
    const themes = Object.keys(themeData);
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    changeTheme(randomTheme);
  };

  const openPicker = (colorVar, e) => {
    const rect = e.target.getBoundingClientRect();
    setPickerPos({
      left: rect.left + rect.width / 2, // button center X
      top: rect.top - 10, // just above button
    });

    setActiveColor(colorVar);
    const current = getColor(colorVar);
    setColorValue(current);
  };

  const handleColorChange = (newColor) => {
    setColorValue(newColor);
    if (activeColor) {
      document.documentElement.style.setProperty(activeColor, newColor);
    }
  };

  const getColor = (key, fallback = "#000000") => {
    return (
      getComputedStyle(document.documentElement).getPropertyValue(key).trim() ||
      themeVars[key] ||
      fallback
    );
  };

  // Utility: check brightness to decide text color
  const getContrastColor = (hex) => {
    if (!hex) return "#000";
    const c = hex.substring(1); // remove #
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "#000" : "#fff"; // light bg → black text, dark bg → white text
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      // Apply dark mode overrides
      document.documentElement.style.setProperty("--color-bg", "#111111");
      document.documentElement.style.setProperty("--color-text", "#ffffff");
    } else {
      // Back to light mode defaults
      document.documentElement.style.setProperty("--color-bg", "#ffffff");
      document.documentElement.style.setProperty("--color-text", "#000000");
    }
  };

  const bgColor = getColor("--color-bg", "#ffffff");
  const iconColor = getContrastColor(bgColor);

  return (
    <div className="bottom-toolbar-wrapper">
      <div className="bottom-toolbar">
        <button className="icon-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          🎨
        </button>
        <button className="random-btn" onClick={handleRandomTheme}>
            <BiShuffle size={20} />
        </button>

        {/* DARK/LIGHT TOGGLE */}
        <button
          className="icon-btn"
          onClick={toggleDarkMode}
          style={{
            background: bgColor,
            color: iconColor,
            border: "1px solid #ccc",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* TEXT COLOR */}
        <button
          className="icon-btn"
          style={{ background: getColor("--color-bg"),
            color: getContrastColor(getColor("--color-bg")) }}
          onClick={(e) => openPicker("--color-text", e)}
        >
          Text
        </button>

        {/* BG COLOR */}
        <button
          className="icon-btn"
          style={{
            background: getColor("--color-bg"),
            color: getContrastColor(getColor("--color-bg")),
          }}
          onClick={(e) => openPicker("--color-bg", e)}
        >
          Background
        </button>

        {/* PRIMARY */}
        <button
          className="icon-btn"
          style={{
            background: getColor("--color-primary"),
            color: getContrastColor(getColor("--color-primary")),
          }}
          onClick={(e) => openPicker("--color-primary", e)}
        >
          Primary
        </button>

        {/* SECONDARY */}
        <button
          className="icon-btn"
          style={{
            background: getColor("--color-secondary"),
            color: getContrastColor(getColor("--color-secondary")),
          }}
          onClick={(e) => openPicker("--color-secondary", e)}
        >
          Secondary
        </button>

        {/* ACCENT */}
        <button
          className="icon-btn"
          style={{
            background: getColor("--color-accent"),
            color: getContrastColor(getColor("--color-accent")),
          }}
          onClick={(e) => openPicker("--color-accent", e)}
        >
          Accent
        </button>

      </div>

      {activeColor && (
        <div
          className="color-picker-popup"
          ref={pickerRef}
          style={{
            position: "fixed",
            left: pickerPos.left,
            top: pickerPos.top,
            transform: "translate(-50%, -100%)",
            background: "#fff",
            padding: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <HexColorPicker color={colorValue} onChange={handleColorChange} />
          <input
            type="text"
            className="hex-input"
            value={colorValue}
            onChange={(e) => handleColorChange(e.target.value)}
          />
        </div>
      )}

      <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="theme-palettes">
          {Object.entries(themeData).map(([themeKey, vars]) => (
            <div
              key={themeKey}
              className="palette-block"
              onClick={() => changeTheme(themeKey)}
            >
              <div
                className="color-square"
                style={{ background: vars["--color-primary"] }}
              ></div>
              <div
                className="color-square"
                style={{ background: vars["--color-text"] }}
              ></div>
              <div
                className="color-square"
                style={{ background: vars["--color-bg"] }}
              ></div>
              <div
                className="color-square"
                style={{ background: vars["--color-secondary"] }}
              ></div>
              <div
                className="color-square"
                style={{ background: vars["--color-accent"] }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
