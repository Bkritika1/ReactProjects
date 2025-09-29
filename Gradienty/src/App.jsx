// import React, { useState, useEffect } from 'react';
// import PaletteToolbar from './PaletteToolbar';
// import palettes from './palettes.json';

// export default function App(){
//   const [activePalette, setActivePalette] = useState(palettes[0]);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     applyPalette(activePalette);
//   }, [activePalette]);

//   function applyPalette(p){
//     // Set CSS variables on :root for live theming
//     const root = document.documentElement;
//     root.style.setProperty('--bg', p.colors[0]);
//     root.style.setProperty('--primary', p.colors[1]);
//     root.style.setProperty('--secondary', p.colors[2]);
//     root.style.setProperty('--muted', p.colors[3] || '#f2f2f2');
//     root.style.setProperty('--accent', p.colors[4] || '#000');
//   }

//   return (
//     <div className="app">
//       <header className="hero">
//         <h1>Palette Visualizer — Clone</h1>
//         <p>Click any palette in the toolbar to apply it. Toolbar is fixed and opens the palette drawer from the right.</p>
//         <div className="cards">
//           <div className="card">Primary text on primary color</div>
//           <div className="card">Secondary card</div>
//           <div className="card">Accent & muted examples</div>
//         </div>
//       </header>

//       <PaletteToolbar
//         palettes={palettes}
//         onApply={(p)=>{ setActivePalette(p); setSidebarOpen(false); }}
//         onOpen={()=>setSidebarOpen(true)}
//         sidebarOpen={sidebarOpen}
//         onClose={()=>setSidebarOpen(false)}
//       />

//       <footer className="footer">
//         <div>Current palette: <strong>{activePalette.name}</strong></div>
//       </footer>
//     </div>
//   );
// }



// import LandPage from './LandPage'
// export default function App(){
//   return(
//     <>
//       <LandPage/>
//     </>
//   )
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./Page/LandPage";
import PaletteGenerator from "./Page/PalleteGen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/palette-generator" element={<PaletteGenerator />} />
      </Routes>
    </Router>
  );
}






    