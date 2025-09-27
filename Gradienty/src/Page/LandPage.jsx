
// import { useState,useEffect } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import Hero from "./Hero";
// import HeroSection from "./HeroSection";
// import PaletteGuide from "./PaletteGuide";
// import { applyTheme } from "./themeManager";
// import BottomToolbar from "./BottomToolbar";


// export default function LandPage(){

//     const [currentTheme, setCurrentTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     applyTheme(savedTheme);
//     setCurrentTheme(savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     applyTheme(newTheme);
//     setCurrentTheme(newTheme);
//   };

//   const changeTheme = (theme) => {
//     applyTheme(theme);
//     setCurrentTheme(theme);
//   };

//     return(
//       <>
//       <div style={{width:'100%'}}>
//         <Header/>
//          <BottomToolbar     toggleTheme={toggleTheme}
//         darkMode={currentTheme === 'dark'}
//         changeTheme={changeTheme}/>
//         <Hero/>
//         <HeroSection/>
//         <PaletteGuide/>
//         <Footer/>
//       </div>
       
//       </>
//     )
// }

// LandPage.jsx
import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import HeroSection from "../HeroSection";
import PaletteGuide from "../PaletteGuide";
import { applyTheme } from "../themeManager";
import BottomToolbar from "../BottomToolbar";
// import PaletteGenerator from "./PalleteGen";

export default function LandPage() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ new

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const changeTheme = (theme) => {
    applyTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
        <BottomToolbar
          toggleTheme={toggleTheme}
          darkMode={currentTheme === "dark"}
          changeTheme={changeTheme}
          sidebarOpen={sidebarOpen}        // ✅ pass state
          setSidebarOpen={setSidebarOpen}  // ✅ pass setter
        />
        <Hero setSidebarOpen={setSidebarOpen} /> {/* ✅ pass function */}
        <HeroSection />
        <PaletteGuide />
        {/* <PaletteGenerator/> */}
        <Footer />
      </div>
    </>
  );
}
