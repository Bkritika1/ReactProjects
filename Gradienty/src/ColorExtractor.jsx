

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
    const sums = new Array(centers.length).fill(0).map(() => ({ L: 0, a: 0, b: 0, count: 0 }));
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
  const [topColors, setTopColors] = useState(5);
  const [markers, setMarkers] = useState([]);
  const [copied, setCopied] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [highlightIdx, setHighlightIdx] = useState(null);
  const [draggingIdx, setDraggingIdx] = useState(null);
  const imgRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    if (!imageSrc) {
      const randIndex = Math.floor(Math.random() * placeholderImages.length);
      setImageSrc(placeholderImages[randIndex]);
    }
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

  const handleURLSubmit = (e) => {
    e.preventDefault();
    const url = e.target.elements.url.value.trim();
    if (!url) return;
    setImageSrc(url);
    setPicked([]);
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
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
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

      clusterSummaries.sort((a, b) => b.count - a.count);
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
        return { hex: p.hex, relX: leftPos, relY: topPos, idx, coordNatural: p.coord };
      });

      setMarkers(markersOut);

    } catch (err) {
      console.error("Error extracting image data (CORS?)", err);
      alert("Unable to read image data. Check image CORS or use a local file upload.");
      setPicked([]);
      setMarkers([]);
    }
  };

  const handleDrag = (e, idx) => {
    e.preventDefault();
    if (!imgRef.current) return;

    setDraggingIdx(idx); // ✅ marker is being dragged

    const img = imgRef.current;
    const rect = img.getBoundingClientRect();

    const move = (moveEvent) => {
      const x = clamp(moveEvent.clientX - rect.left, 0, rect.width);
      const y = clamp(moveEvent.clientY - rect.top, 0, rect.height);

      const c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0, c.width, c.height);
      const nx = Math.round((x / rect.width) * img.naturalWidth);
      const ny = Math.round((y / rect.height) * img.naturalHeight);
      const d = ctx.getImageData(nx, ny, 1, 1).data;
      const hex = rgbToHex(d[0], d[1], d[2]);

      setMarkers((prev) =>
        prev.map((m, mi) => (mi === idx ? { ...m, relX: x, relY: y, hex } : m))
      );
      setPicked((prev) =>
        prev.map((p, pi) =>
          pi === idx
            ? { ...p, hex, coord: { x: nx, y: ny }, samplePixel: { r: d[0], g: d[1], b: d[2] } }
            : p
        )
      );
    };

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      setDraggingIdx(null); // ✅ reset dragging
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const copyHex = (hex) => navigator.clipboard.writeText(hex).catch(() => alert("Copy failed"));

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
        results.push({ hex: rgbToHex(d[0], d[1], d[2]), coord: { x: nx, y: ny }, samplePixel: { r: d[0], g: d[1], b: d[2] } });
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
  }, [imageSrc, topColors]);

  return (
    <div className="ip-container">
      <header className="ip-header">
        <h1 style={{ fontSize: '3rem', fontStyle: 'bolder' }}>Image Picker</h1>
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
            <button onClick={() => randomPick(topColors)} className="primary">Random Pick</button>
          </div>

          <div className="ip-exports">
            <button onClick={exportCSS}>Export CSS</button>
            <button onClick={exportImage}>Export Image</button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(picked.map(p => p.hex).join(", "))
                  .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000); // ✅ show tick for 2 sec
                  })
                  .catch(() => alert("Copy failed"));
              }}
            >
              {copied ? " ✓  Copied!" : "Copy all HEX"}
            </button>

          </div>

          <div className="ip-picked-list">
            <h3>Top Colors</h3>
            <div className="swatches-row">
              {picked.length === 0 && <div>No colors yet.</div>}
              {picked.map((p, idx) => {
                const handleClick = () => {
                  copyHex(p.hex);
                  setCopiedIdx(idx);
                  setTimeout(() => setCopiedIdx(null), 500);
                  setHighlightIdx(idx);   // ✅ highlight marker when clicked
                };
                return (
                  <div
                    key={`${p.hex}-${idx}`}
                    className="swatch"
                    style={{ background: p.hex, position: 'relative' }}
                    onClick={handleClick}
                    onMouseEnter={() => setHighlightIdx(idx)}   // ✅ highlight on hover
                    onMouseLeave={() => setHighlightIdx(null)} // ✅ reset on leave
                  >
                    <div className="swatch-hex">{p.hex}</div>
                    {copiedIdx === idx && (
                      <div style={{
                        position: "absolute",
                        right: 4,
                        top: 4,
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}>
                        ✓
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

        </div>

        <div className="ip-right">
          <div className="image-preview" style={{ position: "relative" }}>
            <div style={{
              width: '100%',
              maxWidth: '620px',
              minHeight: 'auto'
            }}>
              {imageSrc ? (
                <>
                  <img
                    ref={imgRef}
                    src={imageSrc}
                    alt="preview"
                    crossOrigin="anonymous"
                    style={{ maxWidth: "100%", height: "auto", display: "block" }}
                  />
                  <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
                    {markers.map((m, i) => (
                      <div
                        key={`${m.hex}-${i}`}
                        title={m.hex}
                        onMouseDown={(e) => handleDrag(e, i)}
                        onMouseEnter={() => setHighlightIdx(i)} // optional: hover on marker highlights
                        onMouseLeave={() => setHighlightIdx(null)}
                        style={{
                          position: "absolute",
                          left: m.relX - 10,
                          top: m.relY - 10,
                          width: highlightIdx === i || draggingIdx === i ? 38 : 20,
                          height: highlightIdx === i || draggingIdx === i ? 38 : 20,
                          borderRadius: "50%",
                          border: highlightIdx === i || draggingIdx === i ? "3px solid yellow" : "2px solid white",
                          boxShadow: highlightIdx === i || draggingIdx === i ? "0 0 10px yellow" : "0 1px 3px rgba(0,0,0,0.4)",
                          background: m.hex,
                          cursor: "grab",
                          pointerEvents: "auto",
                          transition: "all 0.15s ease"
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
    </div>
  );
}