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
