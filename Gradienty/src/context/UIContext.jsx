import { createContext, useContext, useState, useEffect } from "react";
import { applyTheme } from "../themeManager";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const [customPalette, setCustomPalette] = useState([]);


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
    setCustomPalette(colors);
    localStorage.setItem("customPalette", JSON.stringify(colors));
    colors.forEach((c, i) => {
      const varName = ["--color-primary","--color-secondary","--color-accent","--color-bg","--color-text"][i];
      document.documentElement.style.setProperty(varName, c);
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
         customPalette,
        applyCustomPalette
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

// 🔹 custom hook for easy access
export const useUI = () => useContext(UIContext);
