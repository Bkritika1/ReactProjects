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
//     [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')
//   );
// }

// const dummyImage = '';

// export default function ColorExtractor() {
//   const navigate = useNavigate();
//   const { state: initialItem } = useLocation();

//   const [history, setHistory] = useState(() => {
//     const saved = localStorage.getItem('colorHistory');
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [imageSrc, setImageSrc] = useState(initialItem?.src || dummyImage);
//   const [colors, setColors] = useState(initialItem?.palette || []);

//   useEffect(() => {
//     if (initialItem) {
//       setImageSrc(initialItem.src);
//       setColors(initialItem.palette);
//     }
//   }, [initialItem]);

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
//         const palette = new ColorThief().getPalette(img, 6);
//         // convert palette into hex once here
//         const hexPalette = palette.map((col) => rgbToHex(...col));
//         setColors(hexPalette);

//         setHistory((prev) => {
//           const dup = prev.some(
//             (it) =>
//               it.src === imageSrc &&
//               JSON.stringify(it.palette) === JSON.stringify(hexPalette)
//           );
//           if (dup) return prev;
//           return [{ src: imageSrc, palette: hexPalette }, ...prev];
//         });
//       } catch (err) {
//         console.error('Color extraction failed:', err);
//       }
//     }
//   };

//   return (
//     <div className="forDivieded">
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
//                 onLoad={handleImgLoad}
//                 className="imagePreview"
//               />

//               {/* <div className="colorGrid">
//                 {colors.map((hex, i) => (
//                   <div key={i} className="colorSwatch">
//                     <div
//                       className="colorBox"
//                       style={{ backgroundColor: hex }}
//                     />
//                     <span className="hexCode">{hex}</span>
//                   </div>
//                 ))}
//               </div> */}
//               <div className="colorGrid">
//   {colors.map((hex, i) => (
//     <div
//       key={i}
//       className="colorBox"
//       style={{
//         backgroundColor: hex,
//         width: "60px",
//         height: "60px",
//         borderRadius: "8px"
//       }}
//     />
//   ))}
// </div>

//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect, useRef } from "react";
// import ColorThief from "colorthief";
// import './ColorExtractor.css';

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   );
// }
// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [colors, setColors] = useState([]);
//   const [lockedColors, setLockedColors] = useState([]);
//   const [numColors, setNumColors] = useState(5);

//   const imgRef = useRef(null);

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       setImageSrc(ev.target.result);
//       setColors([]);
//       setLockedColors([]);
//     };
//     reader.readAsDataURL(file);
//   };

//   const extractColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     // Ensure image is fully loaded
//     if (img.complete && img.naturalWidth > 0) {
//       try {
//         const palette = new ColorThief().getPalette(img, numColors);
//         const newPalette = palette.map((col, i) =>
//           lockedColors[i] ? lockedColors[i] : rgbToHex(...col)
//         );
//         setColors(newPalette);
//       } catch (err) {
//         console.error("Color extraction failed:", err);
//       }
//     }
//   };

//   // Re-extract colors whenever numColors changes or image changes
//   useEffect(() => {
//     extractColors();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [numColors, imageSrc, lockedColors]);

//   const toggleLock = (index, hex) => {
//     setLockedColors((prev) => {
//       const updated = [...prev];
//       updated[index] = updated[index] ? null : hex;
//       return updated;
//     });
//   };

//   return (
//     <div className="forDivided">
//       <div className="mainContainer">
//         {/* Left Panel */}
//         <div className="leftPanel">
//           <h1>Upload an Image</h1>
//           <input type="file" accept="image/*" onChange={handleImageUpload} />
//         </div>

//         {/* Right Panel */}
//         <div className="rightPanel" style={{display:'flex'}}>
//           {imageSrc && (
//             <>
//               <img
//                 ref={imgRef}
//                 src={imageSrc}
//                 alt="Uploaded"
//                 crossOrigin="anonymous"
//                 onLoad={extractColors}
//                 className="imagePreview"
//                 width="400px"
//                 height="auto"
//               />

//               {/* Controls near palette */}
//               {colors.length > 0 && (
//                 <div className="paletteControls">
//                   <button
//                     onClick={() =>
//                       setNumColors((prev) => Math.max(1, prev - 1))
//                     }
//                   >
//                     -
//                   </button>
//                   <span style={{ margin: "0 10px" }}>{numColors} Colors</span>
//                   <button
//                     onClick={() =>
//                       setNumColors((prev) => Math.min(10, prev + 1))
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//               )}

//               {/* Color Palette */}
//             <div className="colorGrid" style={{display:'flex'}}>
//   {colors.map((hex, i) => (
//     <div
//       key={i}
//       className="colorBox"
//       style={{
//         backgroundColor: hex,
//         width: "60px",
//         height: "60px",
//         // borderRadius: "8px"
//       }}
//     />
//   ))}
// </div>            </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// #f2b56d;
// #f4bd6a;
// }#f5bd6a,#f5bd6a;#fecf77;

// ImagePicker.jsx
// import React, { useRef, useState } from "react";
// import ColorThief from "colorthief";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function  ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [palette, setPalette] = useState([]);
//   const [picked, setPicked] = useState([]);
//   const [numColors, setNumColors] = useState(5);
//   const imgRef = useRef(null);

//   async function handleFileChange(e) {
//     const file = e.target.files && e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPalette([]);
//     setPicked([]);
//     // palette extraction after image loads (onLoad handler will run)
//   }

//   function handleURLSubmit(e) {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPalette([]);
//     setPicked([]);
//   }

//   async function extractPalette() {
//     if (!imgRef.current) return;
//     try {
//       // ensure crossOrigin to avoid tainting canvas when using remote images
//       imgRef.current.crossOrigin = "anonymous";
//       const ct = new ColorThief();
//       // wait for image decode (ensures width/height)
//       await imgRef.current.decode?.();
//       const pal = await ct.getPalette(imgRef.current, numColors);
//       setPalette(pal);
//       setPicked(pal.map((rgb) => rgbToHex(...rgb)));
//     } catch (err) {
//       console.error("Palette error:", err);
//       alert("Unable to extract palette. Try a different image or use same-origin URL.");
//     }
//   }

//   function copyHex(hex) {
//     navigator.clipboard.writeText(hex).then(
//       () => { /* success */ },
//       () => alert("Copy failed")
//     );
//   }

//   function exportAsCSS() {
//     if (!picked.length) return alert("No palette to export");
//     const css = picked.map((c, i) => `--color-${i+1}: ${c};`).join("\n");
//     const blob = new Blob([`:root {\n${css}\n}`], { type: "text/css" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.css";
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   function exportAsImage() {
//     if (!picked.length) return alert("No palette to export");
//     const canvas = document.createElement("canvas");
//     const w = 500;
//     const h = 100;
//     canvas.width = w;
//     canvas.height = h;
//     const ctx = canvas.getContext("2d");
//     const blockW = w / picked.length;
//     picked.forEach((c, idx) => {
//       ctx.fillStyle = c;
//       ctx.fillRect(idx * blockW, 0, blockW, h);
//     });
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.png";
//     a.click();
//   }

//   function togglePick(hex) {
//     setPicked((prev) => {
//       if (prev.includes(hex)) return prev.filter((p) => p !== hex);
//       return [...prev, hex];
//     });
//   }

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Image Picker — Coolors-like</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Colors:
//               <select value={numColors} onChange={(e) => setNumColors(Number(e.target.value))}>
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//                 <option value={5}>5</option>
//                 <option value={6}>6</option>
//                 <option value={8}>8</option>
//               </select>
//             </label>
//             <button onClick={extractPalette} className="primary">Extract palette</button>
//           </div>

//           <div className="ip-exports">
//             <button onClick={exportAsCSS}>Export CSS</button>
//             <button onClick={exportAsImage}>Export Image</button>
//             <button onClick={() => { navigator.clipboard.writeText(picked.join(", ")); }}>Copy all HEX</button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Picked palette</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && <div className="empty">No colors yet — extract from image.</div>}
//               {picked.map((hex) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-actions">
//                     <button onClick={() => copyHex(hex)}>Copy</button>
//                     <button onClick={() => togglePick(hex)}>{/* toggle visual */}{picked.includes(hex) ? "Remove" : "Select"}</button>
//                   </div>
//                   <div className="swatch-hex">{hex}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ? (
//               <img
//                 ref={imgRef}
//                 src={imageSrc}
//                 alt="preview"
//                 onLoad={() => { /* image loaded */ }}
//                 onError={() => alert("Cannot load image. Check CORS or URL.")}
//               />
//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>

//       <footer className="ip-footer">
//         <small>Made for learning — not the official Coolors site.</small>
//       </footer>
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import ColorThief from "colorthief";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [palette, setPalette] = useState([]);
//   const [picked, setPicked] = useState([]);
//   const [lockedColors, setLockedColors] = useState([]);
//   const [numColors, setNumColors] = useState(5);

//   const imgRef = useRef(null);

//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPalette([]);
//     setPicked([]);
//     setLockedColors([]);
//   };

//   // Handle URL submission
//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPalette([]);
//     setPicked([]);
//     setLockedColors([]);
//   };

//   // Extract colors using ColorThief
//   const extractColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (img.complete && img.naturalWidth > 0) {
//       try {
//         const ct = new ColorThief();
//         const pal = ct.getPalette(img, numColors);
//         const newPalette = pal.map((col, i) =>
//           lockedColors[i] ? lockedColors[i] : rgbToHex(...col)
//         );
//         setPalette(pal);
//         setPicked(newPalette);
//       } catch (err) {
//         console.error("Color extraction failed:", err);
//         alert("Palette extraction failed. Check CORS or image format.");
//       }
//     } else {
//       img.onload = () => extractColors();
//     }
//   };

//   // Re-extract colors if number of colors or image changes
//   useEffect(() => {
//     extractColors();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [numColors, imageSrc, lockedColors]);

//   // Toggle locked colors
//   const toggleLock = (index, hex) => {
//     setLockedColors((prev) => {
//       const updated = [...prev];
//       updated[index] = updated[index] ? null : hex;
//       return updated;
//     });
//   };

//   // Copy individual color
//   const copyHex = (hex) => {
//     navigator.clipboard.writeText(hex).catch(() => alert("Copy failed"));
//   };

//   // Export CSS
//   const exportAsCSS = () => {
//     if (!picked.length) return alert("No palette to export");
//     const css = picked.map((c, i) => `--color-${i + 1}: ${c};`).join("\n");
//     const blob = new Blob([`:root {\n${css}\n}`], { type: "text/css" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.css";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Export image
//   const exportAsImage = () => {
//     if (!picked.length) return alert("No palette to export");
//     const canvas = document.createElement("canvas");
//     const w = 500;
//     const h = 100;
//     canvas.width = w;
//     canvas.height = h;
//     const ctx = canvas.getContext("2d");
//     const blockW = w / picked.length;
//     picked.forEach((c, idx) => {
//       ctx.fillStyle = c;
//       ctx.fillRect(idx * blockW, 0, blockW, h);
//     });
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.png";
//     a.click();
//   };

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Beautifull Palette from  — Your-Photo</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Colors:
//               <select
//                 value={numColors}
//                 onChange={(e) => setNumColors(Number(e.target.value))}
//               >
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//                 <option value={5}>5</option>
//                 <option value={6}>6</option>
//                 <option value={8}>8</option>
//                 <option value={20}>20</option>

//               </select>
//             </label>
//             <button onClick={extractColors} className="primary">
//               Extract palette
//             </button>
//           </div>

//           <div className="ip-exports">
//             <button onClick={exportAsCSS}>Export CSS</button>
//             <button onClick={exportAsImage}>Export Image</button>
//             <button
//               onClick={() =>
//                 navigator.clipboard.writeText(picked.join(", "))
//               }
//             >
//               Copy all HEX
//             </button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Picked palette</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && (
//                 <div className="empty">
//                   No colors yet — extract from image.
//                 </div>
//               )}
//               {picked.map((hex, i) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-actions">
//                     <button onClick={() => copyHex(hex)}>Copy</button>
//                     <button onClick={() => toggleLock(i, hex)}>
//                       {lockedColors[i] ? "Unlock" : "Lock"}
//                     </button>
//                   </div>
//                   <div className="swatch-hex">{hex}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ? (
//               <img
//                 ref={imgRef}
//                 src={imageSrc}
//                 alt="preview"
//                 crossOrigin="anonymous"
//               />
//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* <footer className="ip-footer">
//         <small>Made for learning — not the official Coolors site.</small>
//       </footer> */}
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [picked, setPicked] = useState([]);
//   const [lockedColors, setLockedColors] = useState([]);

//   const imgRef = useRef(null);

//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPicked([]);
//     setLockedColors([]);
//   };

//   // Handle URL submission
//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPicked([]);
//     setLockedColors([]);
//   };

//   // Extract exact colors using Canvas API
//   const extractExactColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (img.complete && img.naturalWidth > 0) {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       // Optional: downscale for performance
//       const width = img.width;
//       const height = img.height;
//       canvas.width = width;
//       canvas.height = height;

//       ctx.drawImage(img, 0, 0, width, height);

//       const { data } = ctx.getImageData(0, 0, width, height);
//       const colorsSet = new Set();

//       for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         const hex = rgbToHex(r, g, b);
//         colorsSet.add(hex);
//       }

//       const colorsArray = [...colorsSet];
//       setPicked(colorsArray);
//     } else {
//       img.onload = () => extractExactColors();
//     }
//   };

//   // Toggle locked colors
//   const toggleLock = (index, hex) => {
//     setLockedColors((prev) => {
//       const updated = [...prev];
//       updated[index] = updated[index] ? null : hex;
//       return updated;
//     });
//   };

//   // Copy individual color
//   const copyHex = (hex) => {
//     navigator.clipboard.writeText(hex).catch(() => alert("Copy failed"));
//   };

//   // Export CSS
//   const exportAsCSS = () => {
//     if (!picked.length) return alert("No palette to export");
//     const css = picked.map((c, i) => `--color-${i + 1}: ${c};`).join("\n");
//     const blob = new Blob([`:root {\n${css}\n}`], { type: "text/css" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.css";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Export image
//   const exportAsImage = () => {
//     if (!picked.length) return alert("No palette to export");
//     const canvas = document.createElement("canvas");
//     const w = 500;
//     const h = 100;
//     canvas.width = w;
//     canvas.height = h;
//     const ctx = canvas.getContext("2d");
//     const blockW = w / picked.length;
//     picked.forEach((c, idx) => {
//       ctx.fillStyle = c;
//       ctx.fillRect(idx * blockW, 0, blockW, h);
//     });
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.png";
//     a.click();
//   };

//   useEffect(() => {
//     if (imageSrc) extractExactColors();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageSrc]);

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Exact Palette from Your Photo</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <button onClick={extractExactColors} className="primary">
//               Extract Exact Colors
//             </button>
//           </div>

//           <div className="ip-exports">
//             <button onClick={exportAsCSS}>Export CSS</button>
//             <button onClick={exportAsImage}>Export Image</button>
//             <button
//               onClick={() => navigator.clipboard.writeText(picked.join(", "))}
//             >
//               Copy all HEX
//             </button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Picked palette</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && (
//                 <div className="empty">No colors yet — extract from image.</div>
//               )}
//               {picked.map((hex, i) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-actions">
//                     <button onClick={() => copyHex(hex)}>Copy</button>
//                     <button onClick={() => toggleLock(i, hex)}>
//                       {lockedColors[i] ? "Unlock" : "Lock"}
//                     </button>
//                   </div>
//                   <div className="swatch-hex">{hex}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ? (
//               <img ref={imgRef} src={imageSrc} alt="preview"  />
//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [picked, setPicked] = useState([]);
//   const [numColors, setNumColors] = useState(10);

//   const imgRef = useRef(null);

//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPicked([]);
//   };

//   // Handle URL submission
//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPicked([]);
//   };

//   // Extract dominant colors
//   const extractDominantColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (img.complete && img.naturalWidth > 0) {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       // Downscale for performance
//       const width = 300; // smaller for speed
//       const height = (img.height / img.width) * width;
//       canvas.width = width;
//       canvas.height = height;

//       ctx.drawImage(img, 0, 0, width, height);

//       const { data } = ctx.getImageData(0, 0, width, height);
//       const colorCount = {};

//       for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         const hex = rgbToHex(r, g, b);
//         colorCount[hex] = (colorCount[hex] || 0) + 1;
//       }

//       // Sort by frequency
//       const sortedColors = Object.entries(colorCount)
//         .sort((a, b) => b[1] - a[1])
//         .map(([hex]) => hex);

//       setPicked(sortedColors.slice(0, numColors));
//     } else {
//       img.onload = () => extractDominantColors();
//     }
//   };

//   useEffect(() => {
//     if (imageSrc) extractDominantColors();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageSrc, numColors]);

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Dominant Colors from Your Photo</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Number of colors:
//               <select
//                 value={numColors}
//                 onChange={(e) => setNumColors(Number(e.target.value))}
//               >
//                 {[5, 10, 20, 50, 100].map((n) => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </label>
//             <button onClick={extractDominantColors} className="primary">
//               Extract Colors
//             </button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Dominant Colors</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && <div>No colors yet.</div>}
//               {picked.map((hex) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-hex">{hex}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ? (
//        <img ref={imgRef} src={imageSrc} alt="preview" crossOrigin="anonymous" />

//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useState, useEffect } from "react";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [picked, setPicked] = useState([]);
//   const [numColors, setNumColors] = useState(10);

//   const imgRef = useRef(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPicked([]);
//   };

//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPicked([]);
//   };

//   const extractUniqueColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (img.complete && img.naturalWidth > 0) {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       const width = img.width;
//       const height = img.height;
//       canvas.width = width;
//       canvas.height = height;

//       ctx.drawImage(img, 0, 0, width, height);
//       const { data } = ctx.getImageData(0, 0, width, height);

//       const colorMap = {};

//       for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         const hex = rgbToHex(r, g, b);
//         colorMap[hex] = (colorMap[hex] || 0) + 1;
//       }

//       // Sort unique colors by frequency (top-most colors first)
//       const sortedColors = Object.entries(colorMap)
//         .sort((a, b) => b[1] - a[1])
//         .map(([hex]) => hex);

//       setPicked(sortedColors.slice(0, numColors));
//     } else {
//       img.onload = () => extractUniqueColors();
//     }
//   };

//   useEffect(() => {
//     if (imageSrc) extractUniqueColors();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageSrc, numColors]);

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Unique Colors from Image</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Number of top colors:
//               <select
//                 value={numColors}
//                 onChange={(e) => setNumColors(Number(e.target.value))}
//               >
//                 {[5, 10, 20, 50, 100].map((n) => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </label>
//             <button onClick={extractUniqueColors} className="primary">
//               Extract Colors
//             </button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Unique Colors (Top {numColors})</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && <div>No colors yet.</div>}
//               {picked.map((hex) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-hex">{hex}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ? (
//               <img
//                 ref={imgRef}
//                 src={imageSrc}
//                 alt="preview"
//                 crossOrigin="anonymous"
//               />
//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [picked, setPicked] = useState([]);
//   const [numColors, setNumColors] = useState(10);

//   const imgRef = useRef(null);

//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPicked([]);
//   };

//   // Handle URL submission
//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPicked([]);
//   };

//   // Extract dominant colors
//   const extractDominantColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (img.complete && img.naturalWidth > 0) {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       // Downscale for performance
//       const width = 300; // smaller for speed
//       const height = (img.height / img.width) * width;
//       canvas.width = width;
//       canvas.height = height;

//       ctx.drawImage(img, 0, 0, width, height);

//       const { data } = ctx.getImageData(0, 0, width, height);
//       const colorCount = {};

//       for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         const hex = rgbToHex(r, g, b);
//         colorCount[hex] = (colorCount[hex] || 0) + 1;
//       }

//       // Sort by frequency
//       const sortedColors = Object.entries(colorCount)
//         .sort((a, b) => b[1] - a[1])
//         .map(([hex]) => hex);

//       setPicked(sortedColors.slice(0, numColors));
//     } else {
//       img.onload = () => extractDominantColors();
//     }
//   };

//   useEffect(() => {
//     if (imageSrc) extractDominantColors();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageSrc, numColors]);

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Dominant Colors from Your Photo</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Number of colors:
//               <select
//                 value={numColors}
//                 onChange={(e) => setNumColors(Number(e.target.value))}
//               >
//                 {[5, 10, 20, 50, 100].map((n) => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </label>
//             <button onClick={extractDominantColors} className="primary">
//               Extract Colors
//             </button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Dominant Colors</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && <div>No colors yet.</div>}
//               {picked.map((hex) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-hex">{hex}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ? (
//             <img ref={imgRef} src={imageSrc} alt="preview" crossOrigin="anonymous" />

//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useRef, useState, useEffect } from "react";
// import "./ColorExtractor.css";

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [picked, setPicked] = useState([]);
//   const [topColors, setTopColors] = useState(10);
//   const imgRef = useRef(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPicked([]);
//   };

//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPicked([]);
//   };

//   const extractColors = () => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (img.complete && img.naturalWidth > 0) {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       // Downscale image for performance
//       const width = 300;
//       const height = Math.round((img.height / img.width) * width);
//       canvas.width = width;
//       canvas.height = height;
//       ctx.drawImage(img, 0, 0, width, height);

//       const { data } = ctx.getImageData(0, 0, width, height);
//       const colorFreq = {};

//       // Count each pixel
//       for (let i = 0; i < data.length; i += 4) {
//         const r = data[i];
//         const g = data[i + 1];
//         const b = data[i + 2];
//         const hex = rgbToHex(r, g, b);
//         colorFreq[hex] = (colorFreq[hex] || 0) + 1;
//       }

//       // Sort colors by frequency descending
//       const sortedColors = Object.entries(colorFreq)
//         .sort((a, b) => b[1] - a[1])
//         .map(([hex]) => hex);

//       // Remove duplicates & pick top visible colors
//       const uniqueColors = [...new Set(sortedColors)];

//       setPicked(uniqueColors.slice(0, topColors)); // top visible colors
//     } else {
//       img.onload = () => extractColors();
//     }
//   };



//   // Copy single color
//   const copyHex = (hex) => navigator.clipboard.writeText(hex).catch(() => alert("Copy failed"));

//   // Export CSS
//   const exportCSS = () => {
//     if (!picked.length) return alert("No colors to export");
//     const css = picked.map((c, i) => `--color-${i + 1}: ${c};`).join("\n");
//     const blob = new Blob([`:root {\n${css}\n}`], { type: "text/css" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.css";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   // Export image palette
//   const exportImage = () => {
//     if (!picked.length) return alert("No colors to export");
//     const canvas = document.createElement("canvas");
//     const w = 500;
//     const h = 100;
//     canvas.width = w;
//     canvas.height = h;
//     const ctx = canvas.getContext("2d");
//     const blockW = w / picked.length;
//     picked.forEach((c, i) => {
//       ctx.fillStyle = c;
//       ctx.fillRect(i * blockW, 0, blockW, h);
//     });
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.png";
//     a.click();
//   };

//   useEffect(() => {
//     if (imageSrc) extractColors();
//   }, [imageSrc, topColors]);

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Top Dominant Colors</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Top Colors:
//               <select value={topColors} onChange={(e) => setTopColors(Number(e.target.value))}>
//                 {[5, 10, 15, 20, 30, 50,100,200].map((n) => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </label>
//             <button onClick={extractColors} className="primary">Extract Colors</button>
//           </div>

//           <div className="ip-exports">
//             <button onClick={exportCSS}>Export CSS</button>
//             <button onClick={exportImage}>Export Image</button>
//             <button onClick={() => navigator.clipboard.writeText(picked.join(", "))}>Copy all HEX</button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Top Colors</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && <div>No colors yet.</div>}
//               {picked.map((hex) => (
//                 <div key={hex} className="swatch" style={{ background: hex }}>
//                   <div className="swatch-hex">{hex}</div>
//                   <button onClick={() => copyHex(hex)}>Copy</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview">
//             {imageSrc ?  <img ref={imgRef} src={imageSrc} alt="preview" crossOrigin="anonymous" /> : <div className="placeholder">Browse or drop an image</div>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// emaail excel sheet..
// linkedin excel sheet
// startups find
//  refrence
// 


// import React, { useRef, useState, useEffect } from "react";
// import "./ColorExtractor.css";

// /* --- utility fns --- */
// function clamp(v, a = 0, b = 255) { return Math.max(a, Math.min(b, v)); }

// function rgbToHex(r, g, b) {
//   return (
//     "#" +
//     [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
//   ).toUpperCase();
// }

// /* RGB <-> XYZ <-> LAB conversions (needed for perceptual clustering) */
// function rgbToXyz(r, g, b) {
//   // r,g,b in [0,255]
//   r = r / 255; g = g / 255; b = b / 255;
//   // sRGB gamma inverse
//   r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
//   g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
//   b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

//   // Observer = 2°, Illuminant = D65
//   const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
//   const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
//   const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;
//   return [x * 100, y * 100, z * 100];
// }

// function xyzToLab(x, y, z) {
//   // ref white D65
//   const xr = x / 95.047;
//   const yr = y / 100.000;
//   const zr = z / 108.883;
//   const fx = xr > 0.008856 ? Math.cbrt(xr) : (7.787 * xr) + (16 / 116);
//   const fy = yr > 0.008856 ? Math.cbrt(yr) : (7.787 * yr) + (16 / 116);
//   const fz = zr > 0.008856 ? Math.cbrt(zr) : (7.787 * zr) + (16 / 116);

//   const L = (116 * fy) - 16;
//   const a = 500 * (fx - fy);
//   const b = 200 * (fy - fz);
//   return [L, a, b];
// }

// function rgbToLab(r, g, b) {
//   const [x, y, z] = rgbToXyz(r, g, b);
//   return xyzToLab(x, y, z);
// }

// /* Euclidean distance in LAB space */
// function labDist(a, b) {
//   const dl = a[0] - b[0];
//   const da = a[1] - b[1];
//   const db = a[2] - b[2];
//   return Math.sqrt(dl * dl + da * da + db * db);
// }

// /* --- simple k-means implementation on LAB vectors --- */
// function kmeans(samplesLab, k, maxIters = 30) {
//   if (!samplesLab.length) return [];

//   // pick k distinct random seeds
//   const centers = [];
//   const used = new Set();
//   while (centers.length < Math.min(k, samplesLab.length)) {
//     const idx = Math.floor(Math.random() * samplesLab.length);
//     if (!used.has(idx)) {
//       used.add(idx);
//       centers.push(samplesLab[idx].lab.slice());
//     }
//   }

//   let assignments = new Array(samplesLab.length).fill(-1);

//   for (let iter = 0; iter < maxIters; iter++) {
//     let changed = false;
//     // assignment step
//     for (let i = 0; i < samplesLab.length; i++) {
//       const lab = samplesLab[i].lab;
//       let best = 0;
//       let bestDist = labDist(lab, centers[0]);
//       for (let c = 1; c < centers.length; c++) {
//         const d = labDist(lab, centers[c]);
//         if (d < bestDist) { bestDist = d; best = c; }
//       }
//       if (assignments[i] !== best) { assignments[i] = best; changed = true; }
//     }

//     // update step
//     const sums = new Array(centers.length).fill(0).map(() => ({ L:0,a:0,b:0,count:0 }));
//     for (let i = 0; i < samplesLab.length; i++) {
//       const c = assignments[i];
//       const s = samplesLab[i].lab;
//       sums[c].L += s[0]; sums[c].a += s[1]; sums[c].b += s[2]; sums[c].count++;
//     }
//     for (let c = 0; c < centers.length; c++) {
//       if (sums[c].count === 0) {
//         // re-seed empty cluster with random sample
//         const rIdx = Math.floor(Math.random() * samplesLab.length);
//         centers[c] = samplesLab[rIdx].lab.slice();
//       } else {
//         centers[c][0] = sums[c].L / sums[c].count;
//         centers[c][1] = sums[c].a / sums[c].count;
//         centers[c][2] = sums[c].b / sums[c].count;
//       }
//     }

//     if (!changed) break;
//   }

//   // Build clusters array containing indices
//   const clusters = new Array(centers.length).fill(0).map(() => []);
//   for (let i = 0; i < assignments.length; i++) clusters[assignments[i]].push(i);
//   return { centers, clusters, assignments };
// }

// /* --- component --- */
// export default function ColorExtractor() {
//   const [imageSrc, setImageSrc] = useState("");
//   const [picked, setPicked] = useState([]); // [{hex, count, coords: [{x,y}], sample}] 
//   const [topColors, setTopColors] = useState(10);
//   const [markers, setMarkers] = useState([]); // overlay info for image
//   const imgRef = useRef(null);
//   const canvasRef = useRef(null); // offscreen canvas

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     if (file.size > 10 * 1024 * 1024) {
//       alert("Max file size 10 MB");
//       return;
//     }
//     const url = URL.createObjectURL(file);
//     setImageSrc(url);
//     setPicked([]);
//     setMarkers([]);
//   };

//   const handleURLSubmit = (e) => {
//     e.preventDefault();
//     const url = e.target.elements.url.value.trim();
//     if (!url) return;
//     setImageSrc(url);
//     setPicked([]);
//     setMarkers([]);
//   };

//   // main improved extractor
//   const extractColors = (options = {}) => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;

//     if (!(img.complete && img.naturalWidth > 0)) {
//       img.onload = () => extractColors(options);
//       return;
//     }

//     // create offscreen canvas sized for sampling (downscale for perf)
//     const targetWidth = 300; // you can tune
//     const targetHeight = Math.round((img.naturalHeight / img.naturalWidth) * targetWidth);

//     const canvas = document.createElement("canvas");
//     canvas.width = targetWidth;
//     canvas.height = targetHeight;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

//     try {
//       const imgd = ctx.getImageData(0, 0, targetWidth, targetHeight);
//       const data = imgd.data;

//       // Sample pixels with a stride to speed up (tune stride for speed/quality)
//       const stride = options.stride || 2; // 1 = every pixel, 2 = every 2nd pixel
//       const samples = []; // {lab, r,g,b, x,y}
//       for (let y = 0; y < targetHeight; y += stride) {
//         for (let x = 0; x < targetWidth; x += stride) {
//           const i = (y * targetWidth + x) * 4;
//           const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
//           if (a === 0) continue; // skip transparent
//           // optionally skip near-white or near-black if you want
//           const lab = rgbToLab(r, g, b);
//           samples.push({ lab, r, g, b, x, y });
//         }
//       }

//       if (!samples.length) {
//         setPicked([]);
//         return;
//       }

//       // Run k-means on LAB (k = topColors)
//       const k = Math.min(topColors, 40, Math.floor(samples.length / 5) || 1); // prevent too-large clusters
//       const { centers, clusters } = kmeans(samples, k, 30);

//       // Build cluster summary: count & representative sample (closest to center)
//       const clusterSummaries = centers.map((center, idx) => {
//         const indices = clusters[idx];
//         let bestIdx = indices[0];
//         let bestDist = labDist(samples[bestIdx].lab, center);
//         for (let ii = 1; ii < indices.length; ii++) {
//           const sIdx = indices[ii];
//           const d = labDist(samples[sIdx].lab, center);
//           if (d < bestDist) { bestDist = d; bestIdx = sIdx; }
//         }
//         const sample = samples[bestIdx];
//         return {
//           center,
//           count: indices.length,
//           sample, // representative pixel (r,g,b,x,y)
//         };
//       });

//       // sort clusters by count desc and pick topColors
//       clusterSummaries.sort((a,b)=> b.count - a.count);
//       const chosen = clusterSummaries.slice(0, topColors);

//       // map representative to original image coordinates
//       const imgNaturalW = img.naturalWidth;
//       const imgNaturalH = img.naturalHeight;
//       const scaleX = imgNaturalW / targetWidth;
//       const scaleY = imgNaturalH / targetHeight;

//       const pickedColors = chosen.map((c, i) => {
//         const px = Math.round(c.sample.x * scaleX);
//         const py = Math.round(c.sample.y * scaleY);
//         const hex = rgbToHex(c.sample.r, c.sample.g, c.sample.b);
//         return {
//           hex,
//           count: c.count,
//           coord: { x: px, y: py }, // natural image coordinates
//           samplePixel: { r: c.sample.r, g: c.sample.g, b: c.sample.b },
//         };
//       });

//       setPicked(pickedColors);

//       // prepare overlay markers in displayed coordinates
//       // compute displayed image size & position
//       const rect = img.getBoundingClientRect();
//       const displayedW = rect.width;
//       const displayedH = rect.height;
//       const left = rect.left + window.scrollX;
//       const top = rect.top + window.scrollY;

//       const markersOut = pickedColors.map((p, idx) => {
//         const leftPos = (p.coord.x / imgNaturalW) * displayedW;
//         const topPos = (p.coord.y / imgNaturalH) * displayedH;
//         return {
//           hex: p.hex,
//           x: left + leftPos,
//           y: top + topPos,
//           relX: leftPos,
//           relY: topPos,
//           idx,
//           coordNatural: p.coord,
//         };
//       });

//       setMarkers(markersOut);

//     } catch (err) {
//       console.error("Error extracting image data (CORS?)", err);
//       alert("Unable to read image data. Check image CORS or use a local file upload.");
//       setPicked([]);
//       setMarkers([]);
//     }
//   };

//   // Click handler on image -> pick that pixel color (exact)
//   const handleImageClick = (e) => {
//     const img = imgRef.current;
//     if (!img) return;
//     const rect = img.getBoundingClientRect();
//     const clickX = e.clientX - rect.left;
//     const clickY = e.clientY - rect.top;
//     // map to natural coordinates
//     const nx = Math.round((clickX / rect.width) * img.naturalWidth);
//     const ny = Math.round((clickY / rect.height) * img.naturalHeight);

//     // draw small canvas to read exact pixel
//     const c = document.createElement("canvas");
//     c.width = img.naturalWidth;
//     c.height = img.naturalHeight;
//     const ctx = c.getContext("2d");
//     try {
//       ctx.drawImage(img, 0, 0, c.width, c.height);
//       const d = ctx.getImageData(nx, ny, 1, 1).data;
//       const hex = rgbToHex(d[0], d[1], d[2]);
//       // add this color to top of picked
//       const newPicked = [{ hex, count: 1, coord: { x: nx, y: ny }, samplePixel: {r:d[0],g:d[1],b:d[2]} }, ...picked];
//       setPicked(newPicked.slice(0, topColors));
//       // add marker at click pos
//       const rectD = img.getBoundingClientRect();
//       const leftPos = (nx / img.naturalWidth) * rectD.width;
//       const topPos = (ny / img.naturalHeight) * rectD.height;
//       setMarkers(prev => [{ hex, x: rectD.left + leftPos, y: rectD.top + topPos, relX: leftPos, relY: topPos, idx: -1, coordNatural: {x:nx,y:ny}} , ...prev].slice(0, topColors));
//     } catch (err) {
//       console.error(err);
//       alert("Can't read pixel (CORS?). Try local upload.");
//     }
//   };

//   // Random-sample like Coolors "random circles" — picks N random pixel coords and reads their hex
//   const randomPick = (n = 5) => {
//     if (!imgRef.current) return;
//     const img = imgRef.current;
//     if (!(img.complete && img.naturalWidth > 0)) return;
//     const c = document.createElement("canvas");
//     c.width = img.naturalWidth;
//     c.height = img.naturalHeight;
//     const ctx = c.getContext("2d");
//     try {
//       ctx.drawImage(img, 0, 0, c.width, c.height);
//       const results = [];
//       for (let i = 0; i < n; i++) {
//         const nx = Math.floor(Math.random() * img.naturalWidth);
//         const ny = Math.floor(Math.random() * img.naturalHeight);
//         const d = ctx.getImageData(nx, ny, 1, 1).data;
//         results.push({ hex: rgbToHex(d[0], d[1], d[2]), coord: { x: nx, y: ny }, samplePixel: {r:d[0],g:d[1],b:d[2]} });
//       }
//       setPicked(results);
//       // update markers
//       const rect = img.getBoundingClientRect();
//       const marks = results.map((r, idx) => ({
//         hex: r.hex,
//         x: rect.left + (r.coord.x / img.naturalWidth) * rect.width,
//         y: rect.top + (r.coord.y / img.naturalHeight) * rect.height,
//         relX: (r.coord.x / img.naturalWidth) * rect.width,
//         relY: (r.coord.y / img.naturalHeight) * rect.height,
//         idx
//       }));
//       setMarkers(marks);
//     } catch (err) {
//       console.error(err);
//       alert("Can't random-pick (CORS?). Try local upload.");
//     }
//   };

//   // copy, export same as your original but now using picked array
//   const copyHex = (hex) => navigator.clipboard.writeText(hex).catch(() => alert("Copy failed"));
//   const exportCSS = () => {
//     if (!picked.length) return alert("No colors to export");
//     const css = picked.map((c, i) => `--color-${i + 1}: ${c.hex};`).join("\n");
//     const blob = new Blob([`:root {\n${css}\n}`], { type: "text/css" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.css";
//     a.click();
//     URL.revokeObjectURL(url);
//   };
//   const exportImage = () => {
//     if (!picked.length) return alert("No colors to export");
//     const canvas = document.createElement("canvas");
//     const w = 500;
//     const h = 100;
//     canvas.width = w;
//     canvas.height = h;
//     const ctx = canvas.getContext("2d");
//     const blockW = w / picked.length;
//     picked.forEach((c, i) => { ctx.fillStyle = c.hex; ctx.fillRect(i * blockW, 0, blockW, h); });
//     const url = canvas.toDataURL("image/png");
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "palette.png";
//     a.click();
//   };

//   useEffect(() => {
//     if (imageSrc) {
//       // small delay to allow image to layout for accurate marker placement
//       setTimeout(() => extractColors({ stride: 2 }), 100);
//     } else {
//       setPicked([]);
//       setMarkers([]);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [imageSrc, topColors]);

//   return (
//     <div className="ip-container">
//       <header className="ip-header">
//         <h1>Extract Top Dominant Colors (quantized + markers)</h1>
//       </header>

//       <div className="ip-main">
//         <div className="ip-left">
//           <label className="ip-upload">
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             Upload image
//           </label>

//           <form onSubmit={handleURLSubmit} className="ip-url-form">
//             <input name="url" placeholder="Paste image URL" />
//             <button type="submit">Use URL</button>
//           </form>

//           <div className="ip-options">
//             <label>
//               Top Colors:
//               <select value={topColors} onChange={(e) => setTopColors(Number(e.target.value))}>
//                 {[5, 10, 15, 20, 30, 50].map((n) => (
//                   <option key={n} value={n}>{n}</option>
//                 ))}
//               </select>
//             </label>
//             <button onClick={() => extractColors({ stride: 2 })} className="primary">Extract Colors</button>
//             <button onClick={() => randomPick(6)}>Random Pick</button>
//           </div>

//           <div className="ip-exports">
//             <button onClick={exportCSS}>Export CSS</button>
//             <button onClick={exportImage}>Export Image</button>
//             <button onClick={() => navigator.clipboard.writeText(picked.map(p=>p.hex).join(", "))}>Copy all HEX</button>
//           </div>

//           <div className="ip-picked-list">
//             <h3>Top Colors</h3>
//             <div className="swatches-row">
//               {picked.length === 0 && <div>No colors yet.</div>}
//               {picked.map((p, idx) => (
//                 <div key={`${p.hex}-${idx}`} className="swatch" style={{ background: p.hex }}>
//                   <div className="swatch-hex">{p.hex}</div>
//                   {/* <div style={{ fontSize: 11 }}>
//                     from: {p.coord ? `${p.coord.x}, ${p.coord.y}` : "unknown"}
//                   </div> */}
//                   <div style={{ display:'flex', gap:6, marginTop:6 }}>
//                     <button onClick={() => copyHex(p.hex)}>Copy</button>
//                     {/* <button onClick={() => { navigator.clipboard.writeText(`${p.hex} @ ${p.coord ? `${p.coord.x},${p.coord.y}` : ''}`) }}>Copy with pos</button> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="ip-right">
//           <div className="image-preview" style={{ position: "relative" }}>
//             {imageSrc ? (
//               <>
//                 <img
//                   ref={imgRef}
//                   src={imageSrc}
//                   alt="preview"
//                   crossOrigin="anonymous"
//                   onClick={handleImageClick}
//                   style={{ maxWidth: "100%", height: "auto", display: "block" }}
//                 />
//                 {/* overlay markers */}
//                 <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
//                   {markers.map((m, i) => (
//                     <div
//                       key={`${m.hex}-${i}`}
//                       title={`${m.hex} (${Math.round(m.coordNatural?.x || 0)}, ${Math.round(m.coordNatural?.y || 0)})`}
//                       style={{
//                         position: "absolute",
//                         left: m.relX - 10, // center marker
//                         top: m.relY - 10,
//                         width: 20,
//                         height: 20,
//                         borderRadius: "50%",
//                         border: "2px solid white",
//                         boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
//                         background: m.hex,
//                         pointerEvents: "auto",
//                       }}
//                     />
//                   ))}
//                 </div>
//               </>
//             ) : (
//               <div className="placeholder">Browse or drop an image</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from "react";
import "./ColorExtractor.css";

/* --- utility fns --- */
function clamp(v, a = 0, b = 255) { return Math.max(a, Math.min(b, v)); }

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
  ).toUpperCase();
}

/* RGB <-> XYZ <-> LAB conversions (needed for perceptual clustering) */
function rgbToXyz(r, g, b) {
  r = r / 255; g = g / 255; b = b / 255;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
  const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;
  return [x * 100, y * 100, z * 100];
}

function xyzToLab(x, y, z) {
  const xr = x / 95.047;
  const yr = y / 100.000;
  const zr = z / 108.883;
  const fx = xr > 0.008856 ? Math.cbrt(xr) : (7.787 * xr) + (16 / 116);
  const fy = yr > 0.008856 ? Math.cbrt(yr) : (7.787 * yr) + (16 / 116);
  const fz = zr > 0.008856 ? Math.cbrt(zr) : (7.787 * zr) + (16 / 116);
  const L = (116 * fy) - 16;
  const a = 500 * (fx - fy);
  const b = 200 * (fy - fz);
  return [L, a, b];
}

function rgbToLab(r, g, b) {
  const [x, y, z] = rgbToXyz(r, g, b);
  return xyzToLab(x, y, z);
}

function labDist(a, b) {
  const dl = a[0] - b[0];
  const da = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dl * dl + da * da + db * db);
}

function kmeans(samplesLab, k, maxIters = 30) {
  if (!samplesLab.length) return [];
  const centers = [];
  const used = new Set();
  while (centers.length < Math.min(k, samplesLab.length)) {
    const idx = Math.floor(Math.random() * samplesLab.length);
    if (!used.has(idx)) {
      used.add(idx);
      centers.push(samplesLab[idx].lab.slice());
    }
  }
  let assignments = new Array(samplesLab.length).fill(-1);
  for (let iter = 0; iter < maxIters; iter++) {
    let changed = false;
    for (let i = 0; i < samplesLab.length; i++) {
      const lab = samplesLab[i].lab;
      let best = 0;
      let bestDist = labDist(lab, centers[0]);
      for (let c = 1; c < centers.length; c++) {
        const d = labDist(lab, centers[c]);
        if (d < bestDist) { bestDist = d; best = c; }
      }
      if (assignments[i] !== best) { assignments[i] = best; changed = true; }
    }
    const sums = new Array(centers.length).fill(0).map(() => ({ L:0,a:0,b:0,count:0 }));
    for (let i = 0; i < samplesLab.length; i++) {
      const c = assignments[i];
      const s = samplesLab[i].lab;
      sums[c].L += s[0]; sums[c].a += s[1]; sums[c].b += s[2]; sums[c].count++;
    }
    for (let c = 0; c < centers.length; c++) {
      if (sums[c].count === 0) {
        const rIdx = Math.floor(Math.random() * samplesLab.length);
        centers[c] = samplesLab[rIdx].lab.slice();
      } else {
        centers[c][0] = sums[c].L / sums[c].count;
        centers[c][1] = sums[c].a / sums[c].count;
        centers[c][2] = sums[c].b / sums[c].count;
      }
    }
    if (!changed) break;
  }
  const clusters = new Array(centers.length).fill(0).map(() => []);
  for (let i = 0; i < assignments.length; i++) clusters[assignments[i]].push(i);
  return { centers, clusters, assignments };
}

/* --- component --- */
export default function ColorExtractor() {
  const placeholderImages = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1045/600/400",
    "https://picsum.photos/id/1055/600/400",
  ];

  const [imageSrc, setImageSrc] = useState("");
  const [picked, setPicked] = useState([]);
  const [topColors, setTopColors] = useState(10);
  const [markers, setMarkers] = useState([]);
  const imgRef = useRef(null);

  // pick random placeholder image on mount if no image uploaded
  useEffect(() => {
    if (!imageSrc) {
      const randIndex = Math.floor(Math.random() * placeholderImages.length);
      setImageSrc(placeholderImages[randIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("Max file size 10 MB");
      return;
    }
    const url = URL.createObjectURL(file);
    setImageSrc(url);
    setPicked([]);
    setMarkers([]);
  };

// const handleURLSubmit = (e) => {
//   e.preventDefault();
//   const url = e.target.elements.url.value.trim();
//   if (!url) return;

//  const safeURL = `http://localhost:3001/proxy?url=${encodeURIComponent(url)}`;
// setImageSrc(safeURL);
//   setPicked([]);
//   setMarkers([]);
// };
const handleURLSubmit = (e) => {
  e.preventDefault();
  const url = e.target.elements.url.value.trim();
  if (!url) return;

  // only use proxy if it's an external URL
  const safeURL = `http://localhost:4000/proxy?url=${encodeURIComponent(url)}`;
  setImageSrc(safeURL);
  setPicked([]);
  setMarkers([]);
};


  const extractColors = (options = {}) => {
    if (!imgRef.current) return;
    const img = imgRef.current;

    if (!(img.complete && img.naturalWidth > 0)) {
      img.onload = () => extractColors(options);
      return;
    }

    const targetWidth = 300;
    const targetHeight = Math.round((img.naturalHeight / img.naturalWidth) * targetWidth);
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    try {
      const imgd = ctx.getImageData(0, 0, targetWidth, targetHeight);
      const data = imgd.data;
      const stride = options.stride || 2;
      const samples = [];
      for (let y = 0; y < targetHeight; y += stride) {
        for (let x = 0; x < targetWidth; x += stride) {
          const i = (y * targetWidth + x) * 4;
          const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
          if (a === 0) continue;
          const lab = rgbToLab(r, g, b);
          samples.push({ lab, r, g, b, x, y });
        }
      }

      if (!samples.length) {
        setPicked([]);
        return;
      }

      const k = Math.min(topColors, 40, Math.floor(samples.length / 5) || 1);
      const { centers, clusters } = kmeans(samples, k, 30);

      const clusterSummaries = centers.map((center, idx) => {
        const indices = clusters[idx];
        let bestIdx = indices[0];
        let bestDist = labDist(samples[bestIdx].lab, center);
        for (let ii = 1; ii < indices.length; ii++) {
          const sIdx = indices[ii];
          const d = labDist(samples[sIdx].lab, center);
          if (d < bestDist) { bestDist = d; bestIdx = sIdx; }
        }
        const sample = samples[bestIdx];
        return { center, count: indices.length, sample };
      });

      clusterSummaries.sort((a,b)=> b.count - a.count);
      const chosen = clusterSummaries.slice(0, topColors);

      const imgNaturalW = img.naturalWidth;
      const imgNaturalH = img.naturalHeight;
      const scaleX = imgNaturalW / targetWidth;
      const scaleY = imgNaturalH / targetHeight;

      const pickedColors = chosen.map((c) => {
        const px = Math.round(c.sample.x * scaleX);
        const py = Math.round(c.sample.y * scaleY);
        const hex = rgbToHex(c.sample.r, c.sample.g, c.sample.b);
        return { hex, count: c.count, coord: { x: px, y: py }, samplePixel: { r: c.sample.r, g: c.sample.g, b: c.sample.b } };
      });

      setPicked(pickedColors);

      const rect = img.getBoundingClientRect();
      const displayedW = rect.width;
      const displayedH = rect.height;

      const markersOut = pickedColors.map((p, idx) => {
        const leftPos = (p.coord.x / imgNaturalW) * displayedW;
        const topPos = (p.coord.y / imgNaturalH) * displayedH;
        return { hex: p.hex, x: rect.left + leftPos, y: rect.top + topPos, relX: leftPos, relY: topPos, idx, coordNatural: p.coord };
      });

      setMarkers(markersOut);

    } catch (err) {
      console.error("Error extracting image data (CORS?)", err);
      alert("Unable to read image data. Check image CORS or use a local file upload.");
      setPicked([]);
      setMarkers([]);
    }
  };

  const handleImageClick = (e) => {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    const nx = Math.round((clickX / rect.width) * img.naturalWidth);
    const ny = Math.round((clickY / rect.height) * img.naturalHeight);

    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    try {
      ctx.drawImage(img, 0, 0, c.width, c.height);
      const d = ctx.getImageData(nx, ny, 1, 1).data;
      const hex = rgbToHex(d[0], d[1], d[2]);
      const newPicked = [{ hex, count: 1, coord: { x: nx, y: ny }, samplePixel: {r:d[0],g:d[1],b:d[2]} }, ...picked];
      setPicked(newPicked.slice(0, topColors));
      const rectD = img.getBoundingClientRect();
      const leftPos = (nx / img.naturalWidth) * rectD.width;
      const topPos = (ny / img.naturalHeight) * rectD.height;
      setMarkers(prev => [{ hex, x: rectD.left + leftPos, y: rectD.top + topPos, relX: leftPos, relY: topPos, idx: -1, coordNatural: {x:nx,y:ny}} , ...prev].slice(0, topColors));
    } catch (err) {
      console.error(err);
      alert("Can't read pixel (CORS?). Try local upload.");
    }
  };

  const randomPick = (n = 5) => {
    if (!imgRef.current) return;
    const img = imgRef.current;
    if (!(img.complete && img.naturalWidth > 0)) return;
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    try {
      ctx.drawImage(img, 0, 0, c.width, c.height);
      const results = [];
      for (let i = 0; i < n; i++) {
        const nx = Math.floor(Math.random() * img.naturalWidth);
        const ny = Math.floor(Math.random() * img.naturalHeight);
        const d = ctx.getImageData(nx, ny, 1, 1).data;
        results.push({ hex: rgbToHex(d[0], d[1], d[2]), coord: { x: nx, y: ny }, samplePixel: {r:d[0],g:d[1],b:d[2]} });
      }
      setPicked(results);
      const rect = img.getBoundingClientRect();
      const marks = results.map((r, idx) => ({
        hex: r.hex,
        x: rect.left + (r.coord.x / img.naturalWidth) * rect.width,
        y: rect.top + (r.coord.y / img.naturalHeight) * rect.height,
        relX: (r.coord.x / img.naturalWidth) * rect.width,
        relY: (r.coord.y / img.naturalHeight) * rect.height,
        idx
      }));
      setMarkers(marks);
    } catch (err) {
      console.error(err);
      alert("Can't random-pick (CORS?). Try local upload.");
    }
  };

  const copyHex = (hex) => navigator.clipboard.writeText(hex).catch(() => alert("Copy failed"));

  const exportCSS = () => {
    if (!picked.length) return alert("No colors to export");
    const css = picked.map((c, i) => `--color-${i + 1}: ${c.hex};`).join("\n");
    const blob = new Blob([`:root {\n${css}\n}`], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "palette.css";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportImage = () => {
    if (!picked.length) return alert("No colors to export");
    const canvas = document.createElement("canvas");
    const w = 500;
    const h = 100;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    const blockW = w / picked.length;
    picked.forEach((c, i) => { ctx.fillStyle = c.hex; ctx.fillRect(i * blockW, 0, blockW, h); });
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "palette.png";
    a.click();
  };

  useEffect(() => {
    if (imageSrc) {
      setTimeout(() => extractColors({ stride: 2 }), 100);
    } else {
      setPicked([]);
      setMarkers([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc, topColors]);

  return (
    <div className="ip-container">
      <header className="ip-header">
        <h1>Extract Beautifull Palatte Form Your Image......!</h1>
      </header>

      <div className="ip-main">
        <div className="ip-left">
          <label className="ip-upload">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            Upload image
          </label>

          <form onSubmit={handleURLSubmit} className="ip-url-form">
            <input name="url" placeholder="Paste image URL" />
            <button type="submit">Use URL</button>
          </form>

          <div className="ip-options">
            <label>
              Top Colors:
              <select value={topColors} onChange={(e) => setTopColors(Number(e.target.value))}>
                {[5, 10, 15, 20, 30, 50].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
            <button onClick={() => extractColors({ stride: 2 })} className="primary">Extract Colors</button>
         <button onClick={() => randomPick(topColors)}>Random Pick</button>

          </div>

          <div className="ip-exports">
            <button onClick={exportCSS}>Export CSS</button>
            <button onClick={exportImage}>Export Image</button>
            <button onClick={() => navigator.clipboard.writeText(picked.map(p=>p.hex).join(", "))}>Copy all HEX</button>
          </div>

          <div className="ip-picked-list">
            <h3>Top Colors</h3>
            <div className="swatches-row">
              {picked.length === 0 && <div>No colors yet.</div>}
              {picked.map((p, idx) => (
                <div key={`${p.hex}-${idx}`} className="swatch" style={{ background: p.hex }}>
                  <div className="swatch-hex">{p.hex}</div>
                  <div style={{ display:'flex', gap:6, marginTop:6 }}>
                    <button onClick={() => copyHex(p.hex)}>Copy</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ip-right">
          <div className="image-preview" style={{ position: "relative" }}>
            {imageSrc ? (
              <>
                <img
                  ref={imgRef}
                  src={imageSrc}
                  alt="preview"
                  crossOrigin="anonymous"
                  onClick={handleImageClick}
                  style={{ maxWidth: "100%", height: "auto", display: "block" }}
                />
                <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
                  {markers.map((m, i) => (
                    <div
                      key={`${m.hex}-${i}`}
                      title={`${m.hex} (${Math.round(m.coordNatural?.x || 0)}, ${Math.round(m.coordNatural?.y || 0)})`}
                      style={{
                        position: "absolute",
                        left: m.relX - 10,
                        top: m.relY - 10,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: "2px solid white",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
                        background: m.hex,
                        pointerEvents: "auto",
                      }}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="placeholder">Browse or drop an image</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
