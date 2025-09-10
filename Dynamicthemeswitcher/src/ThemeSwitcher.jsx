// import { themes } from "./themes";
// import { useState } from "react";

// export default function ThemeSwitcher() {
//   const [currentTheme, setCurrentTheme] = useState("default");

//   const handleThemeChange = (themeKey) => {
//     const theme = themes[themeKey];
//     Object.keys(theme).forEach((property) => {
//       document.documentElement.style.setProperty(property, theme[property]);
//     });
//     setCurrentTheme(themeKey);
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       {Object.keys(themes).map((themeKey) => (
//         <button
//           key={themeKey}
//           onClick={() => handleThemeChange(themeKey)}
//           style={{
//             marginRight: "10px",
//             padding: "8px 16px",
//             cursor: "pointer"
//           }}
//         >
//           {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}
//         </button>
//       ))}
//     </div>
//   );
// }

