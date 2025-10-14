import { BiShuffle } from "react-icons/bi";
import { Palette, Sun, Moon, Dice6,Share2  } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { themeData } from "../src/themeData";
import { useUI } from "../src/context/UIContext";
import CustomThemeModal from "../src/CustomThemeModal"; 
    import { PaintbrushVertical, ExternalLink,RefreshCw,Copy  } from "lucide-react";


export default function BottomToolbar() {
   const {
    toggleTheme,
    currentTheme,
    toggleSidebar,
    changeTheme,
     applyCustomPalette,
      customPalettes
  } = useUI();
   const [showCustomModal, setShowCustomModal] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeColor, setActiveColor] = useState(null);
    const [colorValue, setColorValue] = useState("#000000");
    const [pickerPos, setPickerPos] = useState({ left: 0, top: 0 });
    const [darkMode, setDarkMode] = useState(false);
    const [toast, setToast] = useState(false);
    const [copied, setCopied] = useState(false);
   const [selectedTag, setSelectedTag] = useState("");

    const [selectedColor, setSelectedColor] = useState('');
    const [colorFilterOpen, setColorFilterOpen] = useState(false);
    const [showGradients, setShowGradients] = useState(false);
      const [showModal, setShowModal] = useState(false);
  const [currentCss, setCurrentCss] = useState("");
const themeVarss = themeData[currentTheme] || {};
const resetBackground = () => {
  const defaultBg = themeVarss["--color-bg"] || "";
  document.body.style.background = defaultBg;
};

    const [themeGradients, setThemeGradients] = useState(() => {
  // Initialize all theme gradients
  const gradients = {};
  Object.entries(themeData).forEach(([key, theme]) => {
    gradients[key] = theme["--card-bg-gradient"] || `linear-gradient(135deg, ${theme["--color-primary"]}, ${theme["--color-secondary"]})`;
  });
  return gradients;
});

// Shuffle function
const shuffleGradient = (key) => {
  const theme = themeData[key];
  const types = ["linear-gradient", "radial-gradient", "conic-gradient"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const colors = [theme["--color-primary"], theme["--color-secondary"], theme["--color-accent"]].sort(() => Math.random() - 0.5);
  const newGradient = randomType === "linear-gradient"
    ? `linear-gradient(${Math.floor(Math.random()*360)}deg, ${colors.join(", ")})`
    : `${randomType}(circle, ${colors.join(", ")})`;
  
  setThemeGradients(prev => ({ ...prev, [key]: newGradient }));
  document.body.style.background = newGradient;
};



    const pickerRef = useRef(null);
    const themeVars = themeData[currentTheme] || {};


const filterColors = [
  "#1a1a1a", "#5f6f52", "#f9e0ae", "#be3144", "#102c57", 
  "#f59e0b", "#ff7b54", "#10b981", "#f43f5e", "#4793af",
  "#22c55e", "#6366f1", "#ff7f50", "#fc819e", "#8a2be2",
  "#ffbe98", "#a79277", "#4c3f91", "#424769", "#fac213",
  "#cccccc", "#333333"
];



// const filteredThemes = Object.entries(themeData).filter(([themeKey, vars]) => {
//   // 1️⃣ If no tag & no color selected → show all
//   if (!selectedTag && !selectedColor) return true;

//   // 2️⃣ Check tag match if selected
//   const matchesTag = selectedTag
//     ? vars.themeName?.toLowerCase() === selectedTag.toLowerCase()
//     : true;

//   // 3️⃣ Check color match if selected
//   const matchesColor = selectedColor
//     ? [vars["--color-primary"], vars["--color-secondary"]]
//         .map(c => c?.toLowerCase()?.replace(/\s/g, ''))
//         .includes(selectedColor.toLowerCase())
//     : true;

//   return matchesTag && matchesColor;
// })
// Replace your existing filteredThemes with this
const filteredThemes = selectedTag === "custom"
  ? customPalettes.map((p, index) => {
      // Ensure each custom palette has an id and colors array
      return [
        p.name || `custom-${index}`, 
        {
          "--color-primary": p.colors[0] || "#000000",
          "--color-text": p.colors[1] || "#000000",
          "--color-bg": p.colors[2] || "#ffffff",
          "--color-secondary": p.colors[3] || "#000000",
          "--color-accent": p.colors[4] || "#000000"
        }
      ];
    })
  : Object.entries(themeData).filter(([themeKey, vars]) => {
      if (!selectedTag && !selectedColor) return true;

      const matchesTag = selectedTag
        ? vars.themeName?.toLowerCase() === selectedTag.toLowerCase()
        : true;

      const matchesColor = selectedColor
        ? [vars["--color-primary"], vars["--color-secondary"]]
            .map(c => c?.toLowerCase()?.replace(/\s/g, ''))
            .includes(selectedColor.toLowerCase())
        : true;

      return matchesTag && matchesColor;
    });


const toggleGradients = () => {
  setShowGradients((prev) => !prev);
};


    const colorLabels = {
        "--color-text": "Text",
        "--color-bg": "Background",
        "--color-primary": "Primary",
        "--color-secondary": "Secondary",
        "--color-accent": "Accent",
    };

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
            left: rect.left + rect.width / 2,
            top: rect.top - 10,
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

    const getContrastColor = (hex) => {
        if (!hex) return "#000";
        const c = hex.substring(1);
        const rgb = parseInt(c, 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 150 ? "#000" : "#fff";
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.style.setProperty("--color-bg", "#111111");
            document.documentElement.style.setProperty("--color-text", "#ffffff");
        } else {
            document.documentElement.style.setProperty("--color-bg", "#ffffff");
            document.documentElement.style.setProperty("--color-text", "#000000");
        }
    };

    const bgColor = getColor("--color-bg", "#ffffff");
    const iconColor = getContrastColor(bgColor);

    const copyAllCSS = () => {
        const cssText = `:root {
  --text: ${getColor("--color-text")};
  --background: ${getColor("--color-bg")};
  --primary: ${getColor("--color-primary")};
  --secondary: ${getColor("--color-secondary")};
  --accent: ${getColor("--color-accent")};
}`;
        navigator.clipboard.writeText(cssText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

  const themeNames = [
  ...new Set(
    Object.values(themeData)
      .map(t => t.themeName)
      .filter(Boolean) // remove undefined
  )
];


function filterThemesByName(name) {
  // Object.entries se hum [key, value] pairs nikalenge
  return Object.entries(themeData).filter(([key, value]) => {
    // har theme ke andar themeName property check karenge
    return value.themeName?.toLowerCase() === name.toLowerCase();
  });
}

// test
console.log("Filter pastel:");
console.log(filterThemesByName("pastel"));
    return (
        <div className="bottom-toolbar-wrapper">
            <div className="bottom-toolbar">
                {/* Theme Sidebar Toggle */}
                <button
                    className="icon-btn tooltip"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    style={{ background: "var(--gradient-text)" }}
                >
                    <Palette />
                    <span className="tooltip-text">Open Theme Sidebar</span>
                </button>

                {/* Random Theme */}
                <div className="tooltip-wrapper">
  <button
    className="random-btn"
    onClick={handleRandomTheme}
    style={{
      background: "var(--color-primary)",
      color: iconColor,
      border: "1px solid #ccc",
    }}
  >
    <Dice6 />
  </button>
  <span className="tooltip-text1">Randomize Theme</span>
</div>


                {/* Dark/Light Toggle */}
                <button
                    className="icon-btn tooltip"
                    onClick={toggleDarkMode}
                    style={{
                        background: "var(--color-secondary)",
                        color: iconColor,
                        border: "1px solid #ccc",
                    }}
                >
                    {darkMode ? <Sun /> : <Moon />}
                    <span className="tooltip-text">
                        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </span>
                </button>

                {/* Color Buttons */}
                {Object.keys(colorLabels).map((key) => (
                    <button
                        key={key}
                        className="icon-btn tooltip"
                        style={{
                            background: getColor(key),
                            color: getContrastColor(getColor(key)),
                        }}
                        onClick={(e) => openPicker(key, e)}
                    >
                        {colorLabels[key]}
                        <span className="tooltip-text">
                            Change {colorLabels[key]} Color
                        </span>
                    </button>
                ))}

                {/* Share/Export Modal Button */}
                <button
                    className="icon-btn tooltip"
                    style={{
                        background: getColor("--color-primary"),
                        color: getContrastColor(getColor("--color-text")),
                    }}
                    onClick={() => setShareOpen(true)}
                >
                    <Share2/>
                    <span className="tooltip-text">Copy Theme Colors</span>
                </button>
            </div>

            {/* Color Picker Popup */}
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

            {/* Export Modal */}
            {shareOpen && (
                <div
                    className="share-modal-overlay"
                    onClick={() => setShareOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 50,
                    }}
                >
                    <div
                        className="share-modal"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "12px",
                            width: "300px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <h2>Export Color Palette</h2>
                        <pre
                            style={{
                                background: "#1e1e2f",
                                color: "#f4f5f6",
                                padding: "10px",
                                borderRadius: "8px",
                                overflowX: "auto",
                            }}
                        >
                            {`:root {
  --text: ${getColor("--color-text")};
  --background: ${getColor("--color-bg")};
  --primary: ${getColor("--color-primary")};
  --secondary: ${getColor("--color-secondary")};
  --accent: ${getColor("--color-accent")};
}`}
                        </pre>
                        <button
                            onClick={copyAllCSS}
                            style={{
                                padding: "8px 12px",
                                borderRadius: "6px",
                                background: "#574b90",
                                color: "#fff",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {copied ? "✅" : "Copy CSS"}
                        </button>

                        <button
                            onClick={() => setShareOpen(false)}
                            style={{
                                marginTop: "5px",
                                padding: "5px 10px",
                                borderRadius: "6px",
                                background: "#eee",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {toast && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#303a52",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        zIndex: 100,
                    }}
                >
                    Copied!
                </div>
            )}

            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.4)",
                        zIndex: 90,
                    }}
                ></div>
            )}

            {/* Sidebar for Themes */}
            <div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>
                 <div style={{display:'flex',justifyContent:'space-between', fontFamily: "sans-serif",alignItems:'center',color:'#fff' }}>
     
{/* Sidebar for Themes */}
<div className={`theme-sidebar ${sidebarOpen ? "open" : ""}`}>

  {/* 🔝 Fixed Controls */}
  <div style={{ display:'flex', flexDirection:"row", gap:"1rem",alignItems:'center', color:'#fff' }}>
    <button
  onClick={() => setShowCustomModal(true)}
  style={{
    padding: "8px 12px",
    borderRadius: "8px",
    background: "#444",
    color: "#fff",
    fontSize: "13px",
    cursor: "pointer"
  }}
>
  🎨 Custom Palette
</button>


{showCustomModal && (
  <CustomThemeModal close={() => setShowCustomModal(false)} />
)}

    {/* Reset Background */}
    <button
      onClick={resetBackground}
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        background: "#2e2c2c",
        color: "#fff",
        cursor: "pointer",
        fontSize: "13px",
        border: "1px solid #555"
      }}
    >
      🔄 Reset Background
    </button>

    {/* Toggle Gradients */}
    <button
      onClick={toggleGradients}
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        background: "#2e2c2c",
        color: "#fff",
        cursor: "pointer",
        fontSize: "13px",
      }}
    >
      {showGradients ? "🎨 Hide Background Gradients" : "🎨 Show Background Gradients"}
    </button>

    {/* Filter by Tag */}
   <select
  style={{
    background:'#2e2c2c',
    color:'#fff',
    padding: '8px 12px',
    borderRadius:'8px',
    fontSize:'13px'
  }}
  id="tags"
  value={selectedTag}
  onChange={(e) => setSelectedTag(e.target.value)}
>
  <option value="">Filter by Tag</option>
  <option value="custom">My Palette</option> {/* lowercase matches filter */}
  {themeNames.map((name) => (
    <option key={name} value={name}>
      {name}
    </option>
  ))}
</select>


    {/* Filter by Color */}
    <div style={{ position: "relative" }}>
      <div
        onClick={() => setColorFilterOpen(!colorFilterOpen)}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#2e2c2c",
          color:'#fff',
          cursor: "pointer",
          fontSize:'13px',
          display: "flex",
          alignItems:'center',
          gap:"8px"
        }}
      >
        {selectedColor ? (
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: selectedColor,
              border: "1px solid #aaa",
            }}
          ></div>
        ) : (
          <span style={{display:'flex',alignItems:'center'}}><PaintbrushVertical/> Filter by Color</span>
        )}
      </div>

      {colorFilterOpen && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "#000",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 21px)",
            gap: "16px",
            zIndex: 100,
          }}
        >
          {filterColors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid #aaa",
                cursor: "pointer",
                boxShadow: selectedColor === color ? "0 0 0 3px #000" : "none",
              }}
              title={color}
              onClick={() => {
                setSelectedColor(color);
                setColorFilterOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  </div>

  {/* 🔄 Toggle Area (Palettes OR Gradients) */}
  <div style={{ marginTop: "1.5rem" }}>
    {showGradients ? (
      /* Gradients List */
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gap: "9rem",
          marginLeft:'86px'
        }}
      >
      
     {Object.entries(themeData).map(([key, theme]) => (
        <div
          key={key}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {/* Gradient Preview */}
          <div
            onClick={() => {
              document.body.style.background = themeGradients[key];
              document.documentElement.style.setProperty("--color-primary", theme["--color-primary"]);
              document.documentElement.style.setProperty("--color-secondary", theme["--color-secondary"]);
              document.documentElement.style.setProperty("--color-accent", theme["--color-accent"]);
            }}
            style={{
              width: "230px",
              height: "230px",
              borderRadius: "8px",
              background: themeGradients[key],
              cursor: "pointer",
              border: "2px solid #444",
            }}
          />

          {/* 🔘 Shuffle & Copy Buttons Side by Side */}
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              onClick={() => shuffleGradient(key)}
              style={{
                fontSize: "10px",
                padding: "2px 6px",
                borderRadius: "4px",
                cursor: "pointer",
                background: "#222",
                color: "#fff",
              }}
            >
             <RefreshCw width="18px"/>
            </button>

            <button
              onClick={() => {
                const css = `background: ${themeGradients[key]};`;
                setCurrentCss(css);     // save css
                setShowModal(true);     // open modal
              }}
              style={{
                fontSize: "10px",
                padding: "2px 6px",
                borderRadius: "4px",
                cursor: "pointer",
                background: "#444",
                color: "#fff",
              }}
            >
              <Copy width="18px"/>
            </button>
          </div>
        </div>
      ))}

      {/* 🪟 Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#1e1e1e",
              color: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "500px",
              maxWidth: "90%",
              boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
              position: "relative",
              right:'317px',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "18px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ❌
            </button>

            <h3 style={{ marginBottom: "10px" }}>CSS Code</h3>

            <pre
              style={{
                background: "#2d2d2d",
                padding: "10px",
                borderRadius: "8px",
                fontSize: "13px",
                overflowX: "auto",
              }}
            >
              {currentCss}
            </pre>

            <button
              onClick={() => navigator.clipboard.writeText(currentCss)}
              style={{
                marginTop: "15px",
                background: "#4CAF50",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      )}
    
      </div>
    ) : (
      /* Palettes List */
     <div className="theme-palettes">
  {filteredThemes.map(([themeKey, vars]) => (
    <div
      key={themeKey}
      className="palette-block"
      onClick={() => {
        // Agar custom palette hai to applyCustomPalette
        if (selectedTag === "custom") {
          applyCustomPalette(vars); // UIContext ka function
        } else {
          changeTheme(themeKey);
        }
        setSidebarOpen(false);
      console.log(applyCustomPalette)

      }}
    >
      <div className="color-square" style={{ background: vars["--color-primary"] }} />
      <div className="color-square" style={{ background: vars["--color-text"] }} />
      <div className="color-square" style={{ background: vars["--color-bg"] }} />
      <div className="color-square" style={{ background: vars["--color-secondary"] }} />
      <div className="color-square" style={{ background: vars["--color-accent"] }} />
    </div>
  ))}
</div>

    )}
  </div>
</div>




 <div style={{display:'flex',gap:'.5rem'}}>


      
          <select
          style={{background:'#2e2c2c',display:'flex',alignItems:'center',color:'#fff',padding: '8px 12px',borderRadius:'8px',fontSize:'13px'}}
        id="tags"
        value={selectedTag}
        onChange={(e) => {
          setselectedTag(e.target.value);
          console.log("Selected:", e.target.value);
        }}
      >
        <option value="">Filter by Tag</option>
         <option value="Custom">My Palatte</option>
        {themeNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
   
<div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: "8px" }}>
  
  {/* Main Button */}
  <div
    className="filter-by-color-toggle"
    onClick={() => setColorFilterOpen(!colorFilterOpen)}
    style={{
      padding: "8px 12px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#2e2c2c",
      color:'#fff',
      cursor: "pointer",
      fontWeight: "500",
      display: "flex",
      alignItems:'center',
justifyContent:'center',
      gap: "8px",
      fontSize:'13px'
    }}
  >
    {selectedColor ? (
      <>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: selectedColor,
            border: "1px solid #aaa",
          }}
        ></div>
      
      </>
    ) : (
      <span style={{display:'flex',alignItems:'center'}}><PaintbrushVertical/> Filter by Color</span>
    )}
  </div>

  {/* Reset Button - only show if a color is selected */}
  {selectedColor && (
    <button
      onClick={() => setSelectedColor("")}
      style={{
        padding: "6px 10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        background: "#eee",
        cursor: "pointer",
        fontSize: "0.9rem",
      }}
    >
      Reset
    </button>
  )}

  {/* Popup with color swatches */}
  {colorFilterOpen && (
    <div
      className="color-swatch-popup"
      style={{
        position: "absolute",
        top: "110%",
        left: "-50px",
        background: "#000",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 21px)",
        gap: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        zIndex: 100,
      }}
    >
      {filterColors.map((color) => (
        <div
          key={color}
          className={`color-swatch ${selectedColor === color ? "active" : ""}`}
          style={{
            backgroundColor: color,
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid #aaa",
            cursor: "pointer",
            boxShadow: selectedColor === color ? "0 0 0 3px #000" : "none",
          }}
          title={color}
          onClick={() => {
            setSelectedColor(color);
            setColorFilterOpen(false); // close popup immediately
          }}
        />
      ))}
    </div>
  )}
</div>



     </div>
    </div>

<div className="theme-palettes">
{filteredThemes.map(([themeKey, vars]) => (
  <div
    key={themeKey}
    className="palette-block"
    onClick={() => {
      if (selectedTag === "custom") {
        // Apply the custom palette colors to document
        applyCustomPalette([
          vars["--color-primary"],
          vars["--color-text"],
          vars["--color-bg"],
          vars["--color-secondary"],
          vars["--color-accent"]
        ]);
      } else {
        changeTheme(themeKey);
      }
      setSidebarOpen(false);
    }}
  >
    <div className="color-square" style={{ background: vars["--color-primary"] }} />
    <div className="color-square" style={{ background: vars["--color-text"] }} />
    <div className="color-square" style={{ background: vars["--color-bg"] }} />
    <div className="color-square" style={{ background: vars["--color-secondary"] }} />
    <div className="color-square" style={{ background: vars["--color-accent"] }} />
  </div>
))}

</div>


            </div>
        </div>
    );
}


