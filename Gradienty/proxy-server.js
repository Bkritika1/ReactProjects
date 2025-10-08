// // proxy-server.js
// import express from "express";
// import fetch from "node-fetch"; // or native fetch in Node 18+
// import cors from "cors";

// const app = express();
// app.use(cors()); // allows all origins to access this proxy

// app.get("/proxy", async (req, res) => {
//   const { url } = req.query;
//   if (!url) return res.status(400).send("No URL provided");

//   try {
//     const response = await fetch(url);
//     if (!response.ok) return res.status(500).send("Failed to fetch image");

//     const buffer = await response.arrayBuffer();
//     res.set("Content-Type", response.headers.get("content-type") || "image/jpeg");
//     res.set("Access-Control-Allow-Origin", "*"); // critical for frontend access
//     res.send(Buffer.from(buffer));
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error fetching image");
//   }
// });

// app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));


// import express from "express";
// import fetch from "node-fetch"; // Node >=18: optional, can use native fetch
// import cors from "cors";

// const app = express();
// app.use(cors()); // allow all origins

// app.get("/proxy", async (req, res) => {
//   const { url } = req.query;
//   if (!url) return res.status(400).send("No URL provided");

//   try {
//     const response = await fetch(url, {
//       headers: {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0 Safari/537.36",
//         "Accept": "image/*"
//       },
//       timeout: 10000 // 10 seconds
//     });

//     if (!response.ok) return res.status(500).send("Failed to fetch image");

//     const buffer = await response.arrayBuffer();
//     res.set("Content-Type", response.headers.get("content-type") || "image/jpeg");
//     res.set("Access-Control-Allow-Origin", "*");
//     res.send(Buffer.from(buffer));
//   } catch (err) {
//     console.error("Proxy fetch error:", err);
//     res.status(500).send("Error fetching image. Maybe blocked by remote server.");
//   }
// });

// app.listen(3001, () => console.log("Proxy running on http://localhost:3001"));

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

  // const handleURLSubmit = (e) => {
  //   e.preventDefault();
  //   const url = e.target.elements.url.value.trim();
  //   if (!url) return;
  //   setImageSrc(url);
  //   setPicked([]);
  // };

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




import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 4000;

// Allow requests from your frontend
app.use(cors());

// Proxy endpoint
app.get("/proxy", async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).send("Missing url parameter");

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent": "Mozilla/5.0", // Some servers block default axios
      },
    });

    const contentType = response.headers["content-type"] || "image/jpeg";
    res.set("Content-Type", contentType);
    res.send(Buffer.from(response.data, "binary"));
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).send("Failed to fetch image");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
