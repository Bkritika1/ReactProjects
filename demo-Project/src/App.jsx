// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// // import LandingPage from "./pages/LandingPage";

// // // const Home = () => (
// // //   <div style={{ padding: "40px" }}>
// // //     <h1>Welcome to Landing Page Builder 🚀</h1>
// // //     <p>Select a landing page:</p>
// // //     <ul>
// // //       <li><Link to="/landing/ecommerce">E-Commerce</Link></li>
// // //       <li><Link to="/landing/portfolio">Portfolio</Link></li>
// // //       <li><Link to="/landing/startup">Startup</Link></li>
// // //     </ul>
// // //   </div>
// // // );


// // const Home = () => (
// //   <div style={{ padding: "40px" }}>
// //     <h1>Welcome to Landing Page Builder 🚀</h1>
// //     <p>Select a landing page:</p>
// //     <ul>
// //       {landingPagesData.map((page) => (
// //         <li key={page.id}>
// //           <Link to={`/landing/${page.id}`}>{page.title}</Link>
// //         </li>
// //       ))}
// //     </ul>
// //   </div>
// // );

// // const App = () => (
// //   <Router>
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/landing/:id" element={<LandingPage />} />
// //     </Routes>
// //   </Router>
// // );

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import { landingPagesData } from "./data/landingPagesData";

// const Home = () => (
//   <div style={{ padding: "40px" }}>
//     <h1>Welcome to Landing Page Builder 🚀</h1>
//     <p>Select a landing page:</p>
//     <ul>
//       {landingPagesData.map((page) => (
//         <li key={page.id}>
//           <Link to={`/landing/${page.id}`}>{page.name}</Link> {/* ✅ FIXED */}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/landing/:id" element={<LandingPage />} />
//     </Routes>
//   </Router>
// );

// export default App;


import LandingPage from "./pages/LandingPage";

function App() {
  return <LandingPage />;
}

export default App;
