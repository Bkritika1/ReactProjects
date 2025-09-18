
import { useState, useEffect } from "react";
import { settings } from "./setting";

export default function SidebarSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("theme");

  const [selectedThemeKey, setSelectedThemeKey] = useState("default");
  const [selectedGradientKey, setSelectedGradientKey] = useState("sunset");
  const [selectedFontKey, setSelectedFontKey] = useState("sans");
  const [useGradient, setUseGradient] = useState(false);

  const handleThemeChange = (themeKey) => {
    setSelectedThemeKey(themeKey);
    setUseGradient(false);
  };

  const handleGradientChange = (gradientKey) => {
    setSelectedGradientKey(gradientKey);
    setUseGradient(true);
  };

  const handleFontChange = (fontKey) => {
    setSelectedFontKey(fontKey);
  };

  const applySettings = (useGradientMode) => {
    const theme = settings.theme[selectedThemeKey];
    const gradient = settings.gradients[selectedGradientKey];
    const font = settings.fonts[selectedFontKey];

    if (theme) {
      Object.keys(theme).forEach((property) => {
        document.documentElement.style.setProperty(property, theme[property]);
      });

      document.documentElement.style.setProperty("--background", theme["--primary-bg-color"]);
    }

    if (font) {
      document.documentElement.style.setProperty("--font-family", font);
    }

    if (useGradientMode && gradient) {
      document.documentElement.style.setProperty("--gradient-bg", gradient);
      document.documentElement.style.setProperty("--background", gradient);

      const gradientTextColor = settings.gradientTextColors[selectedGradientKey] || "#000";
      document.documentElement.style.setProperty("--primary-text-color", gradientTextColor);
    }

  };

  useEffect(() => {
    applySettings(useGradient);
  }, [selectedThemeKey, selectedGradientKey, selectedFontKey, useGradient]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "20px",
          padding: "10px 15px",
          zIndex: 1001,
          cursor: "pointer",
          right: '0px'
        }}
      >
        ☰ Customize
      </button>

      <div className="sidebar"
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-367px",
          width: "300px",
          height: "100%",
          background: "#fff",
          color: "#000",
          boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
          padding: "20px",
          overflowY: "auto",
          transition: "left 0.3s ease",
          zIndex: 1000,

        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            marginTop: "52px",
          }}
        >
          <button
            onClick={() => setActiveTab("theme")}
            style={{
              flex: 1,
              marginRight: "5px",
              padding: "8px",
              background: activeTab === "theme" ? "#3b82f6" : "#e5e7eb",
              color: activeTab === "theme" ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Theme
          </button>
          <button
            onClick={() => setActiveTab("gradient")}
            style={{
              flex: 1,
              marginRight: "5px",
              padding: "8px",
              background: activeTab === "gradient" ? "#3b82f6" : "#e5e7eb",
              color: activeTab === "gradient" ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Gradient
          </button>
          <button
            onClick={() => setActiveTab("font")}
            style={{
              flex: 1,
              padding: "8px",
              background: activeTab === "font" ? "#3b82f6" : "#e5e7eb",
              color: activeTab === "font" ? "#fff" : "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Font
          </button>
        </div>

        {/* {activeTab === "theme" &&
          Object.keys(settings.theme || {}).map((themeKey) => {
            const theme = settings.theme[themeKey];
            return (
              <div
                key={themeKey}
                onClick={() => handleThemeChange(themeKey)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  padding: "8px",
                  cursor: "pointer",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                }}
              >
                <div style={{ display: "flex", gap: "5px" }}>
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      background: theme["--primary-bg-color"],
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      background: theme["--secondary-bg-color"],
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      background: theme["--button-text-color"],
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <span
                  style={{ marginLeft: "10px", fontWeight: "500", textTransform: "capitalize" }}
                >
                  {themeKey}
                </span>
              </div>
            );
          })} */}
{activeTab === "theme" &&
  Object.keys(settings.theme || {}).map((themeKey) => {
    const theme = settings.theme[themeKey];
    const isActive = selectedThemeKey === themeKey;
    return (
      <div
        key={themeKey}
        onClick={() => handleThemeChange(themeKey)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
          padding: "10px",
          cursor: "pointer",
          border: isActive ? "2px solid #3b82f6" : "1px solid #ddd",
          borderRadius: "10px",
          background: isActive ? "#f0f9ff" : "#fff",
          transition: "all 0.3s ease"
        }}
      >
        {/* Color Swatches */}
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{
            width: "28px", height: "28px",
            background: theme["--primary-bg-color"],
            borderRadius: "50%", border: "1px solid #ccc"
          }} />
          <div style={{
            width: "28px", height: "28px",
            background: theme["--secondary-bg-color"],
            borderRadius: "50%", border: "1px solid #ccc"
          }} />
          <div style={{
            width: "28px", height: "28px",
            background: theme["--button-text-color"],
            borderRadius: "50%", border: "1px solid #ccc"
          }} />
          <div style={{
            width: "28px", height: "28px",
            background: theme["--gradient-bg"],
            borderRadius: "50%", border: "1px solid #ccc"
          }} />
        </div>

        {/* Theme Name */}
        <span style={{
          marginLeft: "10px",
          fontWeight: "600",
          textTransform: "capitalize",
          flex: 1
        }}>
          {themeKey}
        </span>
      </div>
    );
  })}

        {activeTab === "gradient" &&
          Object.keys(settings.gradients || {}).map((gradientKey) => {
            const gradient = settings.gradients[gradientKey];
            return (
              <div
                key={gradientKey}
                onClick={() => handleGradientChange(gradientKey)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  padding: "8px",
                  cursor: "pointer",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "25px",
                    background: gradient,
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <span
                  style={{ marginLeft: "10px", fontWeight: "500", textTransform: "capitalize" }}
                >
                  {gradientKey}
                </span>
              </div>
            );
          })}

        {activeTab === "font" &&
          Object.keys(settings.fonts || {}).map((fontKey) => {
            const font = settings.fonts[fontKey];
            return (
              <div
                key={fontKey}
                onClick={() => handleFontChange(fontKey)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                  padding: "8px",
                  cursor: "pointer",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                }}
              >
                <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                  {fontKey}
                </span>
                <span style={{ fontFamily: font, fontSize: "1.1rem", marginTop: "4px" }}>
                  The quick brown fox jumps over the lazy dog
                </span>
              </div>
            );
          })}

        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '20px',
            padding: "10px",
            background: "rgb(31 26 26 / 40%)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px",
          }}
        >
          ×
        </button>
      </div>
    </>
  );
}
