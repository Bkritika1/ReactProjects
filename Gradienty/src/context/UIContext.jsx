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
    const applyCustomPalette = (colors) => {
  // Apply to CSS variables
  const vars = [
    "--color-primary",
    "--color-text",
    "--color-bg",
    "--color-secondary",
    "--color-accent"
  ];

  colors.forEach((c, i) => {
    document.documentElement.style.setProperty(vars[i], c);
  });

  // Save last used palette to localStorage
  localStorage.setItem("activeCustomPalette", JSON.stringify(colors));
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
