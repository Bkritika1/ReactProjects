import { createContext, useContext, useState, useEffect } from "react";
import { applyTheme } from "../themeManager";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);
const [customPalettes, setCustomPalettes] = useState(() => {
  const saved = localStorage.getItem("customPalettes");
  return saved ? JSON.parse(saved) : [];
});

// Save to localStorage whenever updated
useEffect(() => {
  localStorage.setItem("customPalettes", JSON.stringify(customPalettes));
}, [customPalettes]);

// Add function to save new palette
const saveCustomPalette = (newPalette) => {
  setCustomPalettes((prev) => {
    const updated = [...prev, newPalette];
    localStorage.setItem("customPalettes", JSON.stringify(updated));
    return updated;
  });
};


  // 🌈 on mount — load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  // 🌓 toggle theme
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // 🎨 change to any theme (custom palette or pre-made)
  const changeTheme = (theme) => {
    applyTheme(theme);
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };
    useEffect(() => {
    localStorage.setItem("customPalettes", JSON.stringify(customPalettes));
  }, [customPalettes]);

  // Apply a custom palette (array of colors)
  const applyCustomPalette = (colors) => {
    if (!Array.isArray(colors)) {
      console.error("applyCustomPalette expects an array of colors", colors);
      return;
    }

    const keys = [
      "--color-primary",
      "--color-text",
      "--color-bg",
      "--color-secondary",
      "--color-accent"
    ];

    colors.forEach((color, i) => {
      if (color) {
        document.documentElement.style.setProperty(keys[i], color);
      }
    });
  };

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <UIContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        closeSidebar,
        toggleTheme,
        changeTheme,
         customPalettes,
        applyCustomPalette,
         saveCustomPalette
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

// 🔹 custom hook for easy access
export const useUI = () => useContext(UIContext);
