// // CoolorsLikePicker.jsx
// import React, { useState, useRef, useEffect } from "react";

// // npm install color-thief-browser
// import ColorThief from "color-thief-browser";

// const placeholderImages = [
//   "https://th.bing.com/th/id/OIP.-pvkaJtFqFA8AT8j7icKYAHaE7?w=209&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",

// ];

// export default function CoolorsLikePicker() {
//   const [image, setImage] = useState("");
//   const [colors, setColors] = useState([]);
//   const imgRef = useRef(null);

//   // Randomly pick an image from placeholders on mount/refresh
//   useEffect(() => {
//     const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
//     setImage(randomImage);
//   }, []);

//   // Extract top colors when image loads
//   const handleImageLoad = () => {
//     if (imgRef.current) {
//       const colorThief = new ColorThief();
//       // getPalette returns array of RGB arrays
//       const palette = colorThief.getPalette(imgRef.current, 10); // max 10
//       // Convert to CSS rgb() string
//       const paletteColors = palette.map(c => `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
//       // Take only top 5 initially
//       setColors(paletteColors.slice(0, 5));
//     }
//   };

//   // User adds a color (next in extracted palette)
//   const addColor = () => {
//     const colorThief = new ColorThief();
//     const fullPalette = colorThief.getPalette(imgRef.current, 10).map(c => `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
//     if (colors.length < fullPalette.length) {
//       setColors([...colors, fullPalette[colors.length]]);
//     }
//   };

//   // User removes last color
//   const removeColor = () => {
//     if (colors.length > 0) setColors(colors.slice(0, -1));
//   };

//   // Handle user image upload
//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const url = URL.createObjectURL(file);
//     setImage(url);
//     setColors([]); // reset colors
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h2>Coolors-Like Image Picker</h2>

//       <input type="file" accept="image/*" onChange={handleUpload} style={{ marginBottom: "20px" }} />

//       <div style={{ position: "relative", display: "inline-block" }}>
//         <img
//           crossOrigin="anonymous"
//           ref={imgRef}
//           src={image}
//           alt="palette"
//           onLoad={handleImageLoad}
//           style={{ width: "400px", height: "auto", borderRadius: "8px" }}
//         />

//         {/* Plus/Minus buttons */}
//         <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: "5px" }}>
//           <button onClick={addColor} style={{ padding: "5px 10px" }}>+</button>
//           <button onClick={removeColor} style={{ padding: "5px 10px" }}>−</button>
//         </div>
//       </div>

//       {/* Palette display */}
//       {colors.length > 0 && (
//         <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
//           {colors.map((color, idx) => (
//             <div key={idx} style={{ width: "50px", height: "50px", backgroundColor: color, borderRadius: "4px", border: "1px solid #000" }} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import ColorThief from 'colorthief';



// function rgbToHex(r, g, b) {
//   return (
//     '#' +
//     [r, g, b].map((x) =>
//       x.toString(16).padStart(2, '0')
//     ).join('')
//   );
// }
// const dummyImage =
// ''
// export default function ColorExtractor() {
//   const navigate = useNavigate();
//   const { state: initialItem } = useLocation();

//   const [history, setHistory] = useState(() => {
//     const saved = localStorage.getItem('colorHistory');
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [imageSrc, setImageSrc] = useState(initialItem?.src || dummyImage);
//   const [colors, setColors] = useState(initialItem?.palette || []);

//   // Only load history once on mount
//   useEffect(() => {
//     if (initialItem) {
//       setImageSrc(initialItem.src);
//       setColors(initialItem.palette);
//     }
//   }, [initialItem]);

//   // Save to localStorage whenever history updates and isn't empty
//   useEffect(() => {
//     if (history.length > 0) {
//       localStorage.setItem('colorHistory', JSON.stringify(history));
//     }
//   }, [history]);

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       setImageSrc(ev.target.result);
//       setColors([]);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImgLoad = (e) => {
//     const img = e.target;
//     if (img.complete && img.naturalWidth > 0) {
//       try {
//         const palette = new ColorThief().getPalette(img, 5);
//         setColors(palette);
//         setHistory((prev) => {
//           const dup = prev.some(
//             (it) =>
//               it.src === imageSrc &&
//               JSON.stringify(it.palette) === JSON.stringify(palette)
//           );
//           if (dup) return prev;
//           return [{ src: imageSrc, palette }, ...prev];
//         });
//       } catch (err) {
//         console.error('Color extraction failed:', err);
//       }
//     }
//   };

//   return (
//     <div className="forDivieded">
//       {/* {history.length > 0 && (
//         <button 
//           onClick={() => navigate('/history')}
//           className="nav-link history-btn"
//         >
//           View History
//         </button>
//       )} */}
//       <div className="mainContainer">
//         <div className="leftPanel">
//           <div className="file-input">
//             <h1 className="title">Upload an Image</h1>
//             <h2 className="subtitle">
//               The easiest place to get colors from your photos
//             </h2>
//             <label htmlFor="file">Select Image</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="fileInput file"
//               id="file"
//             />
//           </div>
//         </div>

//         <div className="rightPanel">
//           {imageSrc && (
//             <>
//               <img
//                 src={imageSrc}
//                 alt="Uploaded"
//                 crossOrigin="anonymous"
//                 onLoad={handleImgLoad}
//                 className="imagePreview"
//               />
//               <div className="colorGrid">
//                 {colors.map((col, i) => {
//                   const hex = rgbToHex(...col);
//                   return (
//                     <div key={i} className="colorSwatch">
//                       <div
//                         className="colorBox"
//                         style={{ backgroundColor: hex }}
//                       />
//                       <span className="hexCode">{hex}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
// {/*        
//       <div>
//         <PaletteGrid />
//         <BottomFooter />
//       </div> */}
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import ColorThief from "colorthief";

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
  );
}
console.log('chgvbj')
export default function ColorExtractor() {
  const [imageSrc, setImageSrc] = useState("");
  const [colors, setColors] = useState([]);
  const [lockedColors, setLockedColors] = useState([]);
  const [numColors, setNumColors] = useState(5);

  const imgRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImageSrc(ev.target.result);
      setColors([]);
      setLockedColors([]);
    };
    reader.readAsDataURL(file);
  };

  const extractColors = () => {
    if (!imgRef.current) return;
    const img = imgRef.current;

    // Ensure image is fully loaded
    if (img.complete && img.naturalWidth > 0) {
      try {
        const palette = new ColorThief().getPalette(img, numColors);
        const newPalette = palette.map((col, i) =>
          lockedColors[i] ? lockedColors[i] : rgbToHex(...col)
        );
        setColors(newPalette);
      } catch (err) {
        console.error("Color extraction failed:", err);
      }
    }
  };

  // Re-extract colors whenever numColors changes or image changes
  useEffect(() => {
    extractColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numColors, imageSrc, lockedColors]);

  const toggleLock = (index, hex) => {
    setLockedColors((prev) => {
      const updated = [...prev];
      updated[index] = updated[index] ? null : hex;
      return updated;
    });
  };

  return (
    <div className="forDivided">
      <div className="mainContainer">
        {/* Left Panel */}
        <div className="leftPanel">
          <h1>Upload an Image</h1>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        {/* Right Panel */}
        <div className="rightPanel">
          {imageSrc && (
            <>
              <img
                ref={imgRef}
                src={imageSrc}
                alt="Uploaded"
                crossOrigin="anonymous"
                onLoad={extractColors}
                className="imagePreview"
              />

              {/* Controls near palette */}
              {colors.length > 0 && (
                <div className="paletteControls">
                  <button
                    onClick={() =>
                      setNumColors((prev) => Math.max(5, prev - 1))
                    }
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{numColors} Colors</span>
                  <button
                    onClick={() =>
                      setNumColors((prev) => Math.min(10, prev + 1))
                    }
                  >
                    +
                  </button>
                </div>
              )}

              {/* Color Palette */}
              <div className="colorGrid">
                {colors.map((hex, i) => (
                  <div key={i} className="colorSwatch">
                    <div
                      className="colorBox"
                      style={{ backgroundColor: hex }}
                    />
                    <button
                      className="lockBtn"
                      onClick={() => toggleLock(i, hex)}
                    >
                      {lockedColors[i] ? "🔒" : "🔓"}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
