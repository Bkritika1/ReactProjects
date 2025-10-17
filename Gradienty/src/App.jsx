

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandPage from "./Page/LandPage";
// import PaletteGenerator from "./Page/PalleteGen";

// export default function App() {
//    const [sidebarOpen, setSidebarOpen] = useState(false);
//      const [currentTheme, setCurrentTheme] = useState("light");
//    // ✅ new

//   const toggleTheme = () => {
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     applyTheme(newTheme);
//     setCurrentTheme(newTheme);
//   };

//   const changeTheme = (theme) => {
//     applyTheme(theme);
//     setCurrentTheme(theme);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandPage />} />
//         <Route path="/palette-generator" element={<PaletteGenerator  sidebarOpen={sidebarOpen}        // ✅ pass state
//           setSidebarOpen={setSidebarOpen}   toggleTheme={toggleTheme}
//           darkMode={currentTheme === "light"}
//           changeTheme={changeTheme} />} />
//       </Routes>
//     </Router>
//   );
// }



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UIProvider } from "../src/context/UIContext";
import LandPage from "../src/Page/LandPage";
import PaletteGenerator from "../src/Page/PalleteGen";
import BottomToolbar from "../src/BottomToolbar";
import Features from "./Page/Features";
import EcommerceLanding from "./Page/EcommerceLanding";
import ModernLanding from "./Page/ModernLanding";
import ModeranLanding1 from "./Page/ModernLanding1";
import Modern from "./Page/Modern";

export default function App() {
  return (
    <UIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/palette-generator" element={<PaletteGenerator />} />
          <Route path="/features" element={<Features/>} />
           <Route path="/ecommerce" element={<EcommerceLanding />} /> 
           <Route path="/moderan" element={<ModernLanding />} /> 
           <Route path="/moderan1" element={<ModeranLanding1 />} /> 
           <Route path="/moderan2" element={<Modern />} /> 





        </Routes>

        {/* 🔥 BottomToolbar will always work now */}
        <BottomToolbar />
      </Router>
    </UIProvider>
  );
}


///KITTU@844558
///KITTUu@123# ColourMesh databas passward--//


    