
// import './Hero.css';
// import { useUI } from "../src/context/UIContext";

// import { Link } from "react-router-dom";
// export default function Hero() {
//   const {
//     toggleTheme,
//     currentTheme,
//     toggleSidebar,
//     changeTheme,
//     applyCustomPalette
//   } = useUI();

//   return (
//     <section className="hero-sectionmain">
//       <div className="container hero-inner">
//         <div className="hero-left">
//           <h1 className="hero-titlemain">
//             Choose  Your Website
//             <br />
//             <strong className='primarycolor'>Theme</strong>
//           </h1>
//           <div className="eyebrow">This website helps you pick the perfect color palette for your design Save and share your favorite palettes with one click..</div>

//           {/* <p className="hero-sub">Save and share your favorite palettes with one click..</p> */}

//           <div className="hero-ctas">
//             <button className='btn btn-primary' onClick={() => setSidebarOpen(true)}>Get Started</button>

//             <Link className="login-link" to="/palette-generator">
//               Generate Your Own Palettes ➜
//             </Link>
//           </div>
//         </div>

//         <div className="hero-right">
//           <div className="mockup-browser">
//             <div className="browser-top">
//               <div className="dots">
//                 <span className="dot red"></span>
//                 <span className="dot yellow"></span>
//                 <span className="dot green"></span>
//               </div>
//               <div className="address-bar">www.yourwebsite.com</div>
//             </div>

//             <div
//               className="browser-content"

//             >
//               <h3 >Your Website Preview</h3>
//               <p >
//                 Change colors & theme in real-time
//               </p>
//               {/* <button
          
//           >
//             Try Now
//           </button> */}
//             </div>
//           </div>

//           {/* Animated Background Shapes */}
//           <div className="shapes">
//             <div className="shape shape-yellow"></div>
//             <div className="shape shape-green"></div>
//             <div className="shape shape-red"></div>
//             <div className="shape shape-blue"></div>
//             <div className="shape shape-blue"></div>

//           </div>
//         </div>
//       </div>

//     </section>
//   )
// }


import { motion, AnimatePresence } from "framer-motion";
import './Hero.css';
import { useUI } from "../src/context/UIContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const {
    currentTheme,
    customPalette,
    themes,
    toggleSidebar
  } = useUI();

  // ✅ Step 1: Pull colors directly from the current theme or custom palette
  const activePalette =
    customPalette?.colors ||
    themes?.[currentTheme]?.colors ||
    [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
      "var(--color-text)",
      "var(--color-bg)"
    ];

  return (
    <section className="hero-sectionmain">
      <div className="container hero-inner">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-titlemain">
            Craft stunning color palettes with
            <br />
            <strong className="primarycolor">AI</strong>
          </h1>

          <p className="eyebrow">
            Unlock your creative potential. Generate, visualize, and export harmonious color schemes in seconds.
          </p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => toggleSidebar(true)}>
              Start Generating
            </button>
            <Link className="login-link" to="/palette-generator">
              Explore Palettes ➜
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="palette-card">
            <h4 className="palette-title">PALETTE</h4>
         <AnimatePresence mode="wait">
  <motion.div
    key={activePalette.join('')}
    className="palette-preview"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {activePalette.map((color, i) => (
      <motion.div
        key={i}
        className="palette-color"
        style={{ backgroundColor: color }}
        whileHover={{ scale: 1.05 }}
      >
        <span>{color}</span>
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>

            <p className="palette-instruction">Press space to generate</p>
          </div>

          {/* Decorative blobs (optional for background effect) */}
          <div className="color-blobs">
            <div
              className="blob blob-1"
              style={{ backgroundColor: activePalette[0] }}
            ></div>
            <div
              className="blob blob-2"
              style={{ backgroundColor: activePalette[3] }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
