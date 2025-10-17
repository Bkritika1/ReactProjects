// // /*
// // HeaderHero.jsx

// // Usage:
// // 1) Save this file as `src/components/HeaderHero.jsx` inside your React app.
// // 2) Import and use in App.jsx: `import HeaderHero from './components/HeaderHero';` then <HeaderHero />

// // Notes:
// // - This single-file component injects its own CSS (so you can paste it quickly and run).
// // - Edit the CSS variables inside `:root` to change theme colors and sizes easily.
// // - The layout is responsive and aims to match the provided design (header + hero) closely.

// // */

// // import React, { useEffect } from 'react';

// // export default function HeaderHero() {
// //   useEffect(() => {
// //     if (document.getElementById('header-hero-styles')) return;
// //     const style = document.createElement('style');
// //     style.id = 'header-hero-styles';
// //     style.innerHTML = `
// //       /* CSS variables for quick theming */
// //       :root{
// //         --color-bg: #ffffff;
// //         --color-muted: #6b7280;
// //         --color-text: #0b1220;
// //         --color-cta: #FFD84A; /* yellow */
// //         --color-cta-hover: #f2c431;
// //         --color-join: #000000; /* black */
// //         --radius-lg: 14px;
// //         --max-width: 1180px;
// //         --container-padding: 32px;
// //         --font-sans: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
// //       }

// //       /* reset-ish */
// //       *{box-sizing:border-box}
// //       html,body,#root{height:100%}
// //       body{font-family:var(--font-sans);margin:0;background:var(--color-bg);color:var(--color-text);-webkit-font-smoothing:antialiased}

// //       .ch-wrap{max-width:var(--max-width);margin:0 auto;padding:40px var(--container-padding)}

// //       /* Header */
// //       .ch-header{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
// //       .ch-logo{display:flex;align-items:center;gap:10px;font-weight:700;font-size:18px}
// //       .ch-logo .logo-mark{width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#4f46e5,#06b6d4);display:inline-flex;align-items:center;justify-content:center;color:white;font-weight:700}

// //       .ch-nav{display:flex;gap:28px;align-items:center}
// //       .ch-nav a{font-size:15px;color:var(--color-muted);text-decoration:none}
// //       .ch-join{background:var(--color-join);color:#fff;padding:10px 16px;border-radius:999px;border:none;font-weight:600;cursor:pointer}

// //       /* Hero */
// //       .ch-hero{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;padding:56px 0}
// //       .hero-left{padding-right:20px}
// //       .hero-eyebrow{font-size:12px;color:#7c8795;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
// //       .hero-title{font-size:56px;line-height:1.02;margin:0 0 18px;font-weight:800}
// //       .hero-sub{color:var(--color-muted);font-size:16px;margin-bottom:22px}

// //       .cta-row{display:flex;gap:14px;align-items:center}
// //       .btn-primary{background:var(--color-cta);border:none;padding:14px 20px;border-radius:999px;font-weight:700;cursor:pointer}
// //       .btn-primary:hover{background:var(--color-cta-hover)}
// //       .link-login{font-size:14px;color:var(--color-muted);text-decoration:none}

// //       /* Right cluster */
// //       .hero-right{position:relative;height:360px;min-height:320px}

// //       .cluster{position:relative;width:100%;height:100%;}

// //       /* colorful shapes */
// //       .shape{position:absolute;display:flex;align-items:center;justify-content:center;color:#0b1220;font-weight:700}
// //       .shape.circle{width:92px;height:92px;border-radius:50%}
// //       .shape.pill{width:128px;height:64px;border-radius:36px}
// //       .shape.square{width:110px;height:110px;border-radius:22px}

// //       .shape1{background:#ffcc00;right:70px;top:10px}
// //       .shape2{background:#ef4444;right:20px;top:110px;border-radius:20px}
// //       .shape3{background:#10b981;left:60px;top:80px;width:88px;height:120px;border-radius:18px;transform:rotate(-8deg)}
// //       .shape4{background:#7c3aed;right:120px;top:70px;width:64px;height:64px;border-radius:50%}
// //       .shape5{background:#fde68a;left:40px;bottom:30px;width:140px;height:84px;border-radius:20px}

// //       .avatar{position:absolute;border-radius:50%;width:76px;height:76px;display:flex;align-items:center;justify-content:center;font-weight:700;color:white;box-shadow:0 6px 20px rgba(11,18,32,0.12)}
// //       .avatar.a1{background:#3b82f6;right:38px;top:36px}
// //       .avatar.a2{background:#ef4444;right:110px;top:120px}
// //       .avatar.a3{background:#06b6d4;left:80px;top:28px}

// //       /* cluster badge */
// //       .badge{position:absolute;background:#0b1220;color:white;padding:10px 14px;border-radius:999px;font-weight:700;right:110px;top:28px;box-shadow:0 10px 30px rgba(11,18,32,0.08)}
// //       .badge small{display:block;font-size:11px;color:#d1d5db;font-weight:600}

// //       /* Trusted logos / subtle strip under hero (not full implementation) */
// //       .hero-substrip{margin-top:36px;padding:18px 0;border-top:1px solid #f1f5f9}

// //       /* Responsive */
// //       @media (max-width:900px){
// //         .ch-wrap{padding:28px}
// //         .ch-hero{grid-template-columns:1fr;gap:30px}
// //         .hero-title{font-size:40px}
// //         .hero-right{height:260px}
// //         .avatar{width:60px;height:60px}
// //       }

// //     `;
// //     document.head.appendChild(style);
// //   }, []);

// //   return (
// //     <div className="ch-wrap">
// //       <header className="ch-header">
// //         <div className="ch-logo">
// //           <span className="logo-mark">P</span>
// //           Postcrafts
// //         </div>

// //         <nav className="ch-nav" aria-label="Main navigation">
// //           <a href="#">Features</a>
// //           <a href="#">Solutions</a>
// //           <a href="#">Resources</a>
// //           <a href="#">Pricing</a>
// //         </nav>

// //         <div>
// //           <button className="ch-join">Join Now</button>
// //         </div>
// //       </header>

// //       <section className="ch-hero">
// //         <div className="hero-left">
// //           <div className="hero-eyebrow">A social media for learners</div>
// //           <h1 className="hero-title">Connect & learn from the experts</h1>
// //           <p className="hero-sub">Grow your career fast with right mentor.</p>

// //           <div className="cta-row">
// //             <button className="btn-primary">Join for free</button>
// //             <a className="link-login" href="#">Already joined? Log in</a>
// //           </div>

// //         </div>

// //         <div className="hero-right" aria-hidden>
// //           <div className="cluster">
// //             <div className="shape shape1"></div>
// //             <div className="shape shape2"></div>
// //             <div className="shape shape3"></div>
// //             <div className="shape shape4"></div>
// //             <div className="shape shape5"></div>

// //             <div className="avatar a1">JS</div>
// //             <div className="avatar a2">AM</div>
// //             <div className="avatar a3">RC</div>

// //             <div className="badge">
// //               <div style={{fontSize:16}}>13,422</div>
// //               <small>Active Professionals</small>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       <div className="hero-substrip">
// //         {/* placeholder for the small logo strip from the design */}
// //       </div>

// //     </div>
// //   );
// // }

// // import React from "react";
// // import "./HeaderHero.css";

// // export default function HeaderHero() {
// //   return (
// //     <div className="header-hero">
// //       {/* Header */}
// //       <header className="header">
// //         <div className="logo">
// //           <div className="logo-icon">P</div>
// //           <span>Postcrafts</span>
// //         </div>

// //         <nav className="nav">
// //           <a href="#">Features</a>
// //           <a href="#">Solutions</a>
// //           <a href="#">Resources</a>
// //           <a href="#">Pricing</a>
// //         </nav>

// //         <button className="btn-join">Join Now</button>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="hero">
// //         <div className="hero-left">
// //           <p className="eyebrow">A social media for learners</p>
// //           <h1>Connect & learn from the experts</h1>
// //           <p className="subtitle">Grow your career fast with right mentor.</p>
// //           <div className="cta">
// //             <button className="btn-primary">Join for free</button>
// //             <a href="#">Already joined? Log in</a>
// //           </div>
// //         </div>

// //         <div className="hero-right">
// //           {/* Decorative colorful shapes */}
// //           <div className="shape circle red"></div>
// //           <div className="shape circle yellow"></div>
// //           <div className="shape rect green"></div>
// //           <div className="shape rect blue"></div>

// //           {/* Avatar images */}
// //           <div className="avatars">
// //             <img src="/assets/avatar1.png" alt="User 1" />
// //             <img src="/assets/avatar2.png" alt="User 2" />
// //             <img src="/assets/avatar3.png" alt="User 3" />
// //           </div>

// //           {/* Badge */}
// //           <div className="badge">
// //             <strong>13,422</strong>
// //             <span>Active Professionals</span>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


// import React from "react";
// import { useState,useEffect } from "react";
// import "./HeaderHero.css";

// export default function HeaderHero({currentTheme}) {
//     const [colors, setColors] = useState({
//     primary: "#4f46e5",
//     secondary: "#facc15",
//     accent: "purple",
//   });

//   // Update colors when currentTheme changes
//   useEffect(() => {
//     if (currentTheme) setColors(currentTheme);
//   }, [currentTheme]);


//   return (
//     <div className="page-root">
//       {/* HEADER */}
//       <header className="site-header">
//         <div className="container header-inner">
//           <div className="brand">
//             <div className="logo-mark" aria-hidden>
//               <svg viewBox="0 0 120 120" width="36" height="36" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="logo">
//                 <defs>
//                   <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#4f46e5"/><stop offset="1" stopColor="#06b6d4"/></linearGradient>
//                 </defs>
//                 <rect rx="20" width="120" height="120" fill="url(#g1)"/>
//                 <text x="50%" y="56%" textAnchor="middle" fontFamily="Poppins, Arial" fontWeight="700" fontSize="56" fill="#fff">CM</text>
//               </svg>
//             </div>
//             <span className="brand-title">Color Mesh</span>
//           </div>

//           <nav className="main-nav" aria-label="Main">
//             <a href="#">Features</a>
//             <a href="#">Solutions</a>
//             <a href="#">Resources</a>
//             <a href="#">Pricing</a>
//           </nav>

//           <div className="header-cta">
//             <button className="btn btn-ghost">Join Now</button>
//           </div>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="hero-section">
//         <div className="container hero-inner">
//           <div className="hero-left">
//             <div className="eyebrow">This website helps you pick the perfect color palette for your design</div>
//             <h1 className="hero-title">
//               Choose &amp; <br />
//             Your Website  <strong>Theme</strong>
//             </h1>
//             <p className="hero-sub">Save and share your favorite palettes with one click..</p>

//             <div className="hero-ctas">
//               <button className="btn btn-primary">Get Started</button>
//               <a className="login-link" href="#">Generate Your Own Palettes ➜</a>
//             </div>
//           </div>

//      <div className="hero-right">
//       <div className="mockup-browser">
//         <div className="browser-top">
//           <div className="dots">
//             <span className="dot red"></span>
//             <span className="dot yellow"></span>
//             <span className="dot green"></span>
//           </div>
//           <div className="address-bar">www.yourwebsite.com</div>
//         </div>

//         <div
//           className="browser-content"
         
//         >
//           <h3 >Your Website Preview</h3>
//           <p >
//             Change colors & theme in real-time
//           </p>
//           <button
          
//           >
//             Try Now
//           </button>
//         </div>
//       </div>

//       {/* Animated Background Shapes */}
//       <div className="shapes">
//         <div className="shape shape-yellow"></div>
//         <div className="shape shape-green"></div>
//         <div className="shape shape-red"></div>
//         <div className="shape shape-blue"></div>
//       </div>
//     </div>
//         </div>

//         {/* logos strip */}
//         <div className="trusted-strip">
//           <div className="container logos">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpPfxZ2MSaobcD85v10lMcispRhi3hnckxw&s" alt="company" />
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HRtuZtdAPgv06lVQ0rlPQM3AB7F5AsPrrw&s" alt="company" />
//             <img src="https://www.google.com/imgres?q=logo%20images&imgurl=https%3A%2F%2Fwww.pixibitdesign.com%2Fwp-content%2Fuploads%2F2023%2F10%2Flogo-design-in-business.png&imgrefurl=https%3A%2F%2Fwww.pixibitdesign.com%2Fwhat-is-the-purpose-of-logo-design-and-the-importance-of-logo-design%2Flogo-design-in-business%2F&docid=umgjo-1Wjk770M&tbnid=C7ljJpa60gMtJM&vet=12ahUKEwiaq8Wr4-ePAxXaTmwGHQnpCckQM3oECFgQAA..i&w=2362&h=1417&hcb=2&ved=2ahUKEwiaq8Wr4-ePAxXaTmwGHQnpCckQM3oECFgQAA" alt="company" />
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbbYtrsz-JS8Z2ZwT7wmQINvWcpIk2Ha5Jw&s" alt="company" />
//             <img src="/assets/company5.png" alt="company" />
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="features-section">
//         <div className="container features-inner">
//           <h2 className="features-title">Celebration helps you build beautiful website</h2>
//           <div className="features-grid">
//             <ul className="features-list">
//               <li><strong>Simply Copy &amp; Paste</strong><p>Ready sections you can reuse instantly.</p></li>
//               <li><strong>Easy to Customize</strong><p>Change colors, images and layouts quickly.</p></li>
//               <li><strong>Made with CSS</strong><p>Clean code and simple variables for theming.</p></li>
//             </ul>

//             <div className="features-image">
//               <img src="data:image/jpeg;base64,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" alt="dashboard preview" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BUSINESS GROWTH */}
//       <section className="business-section">
//         <div className="container business-inner">
//           <div className="video-card">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiVqpNd0zv349lznWpZI0-KKoEyp-sFiA_g&s" alt="video" />
//             <button className="play">►</button>
//           </div>

//           <div className="stat-card">
//             <h3>Grow business with Celebration.</h3>
//             <p>Drive results and conversion with simple landing pages made for your customers.</p>
//             <div className="stat">
//               <div className="stat-num">2,984</div>
//               <div className="stat-label">Customers on daily</div>
//             </div>
//             <button className="btn btn-primary">Start Campaign</button>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="testimonials-section">
//         <div className="container testimonials-inner">
//           <h3>Trusted by 30k+ world class companies &amp; design teams</h3>
//           <div className="test-cards">
//             <blockquote className="test-card">
//               <p>“Amazing templates, helped our team ship faster.”</p>
//               <cite>- Jenny Wilson, Product Designer</cite>
//             </blockquote>
//             <blockquote className="test-card">
//               <p>“Crafted with great attention to detail.”</p>
//               <cite>- Robert Fox, Founder</cite>
//             </blockquote>
//             <blockquote className="test-card">
//               <p>“Best design system I've used.”</p>
//               <cite>- Kristin Watson, UX Designer</cite>
//             </blockquote>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="site-footer">
//         <div className="container footer-inner">
//           <div className="footer-brand">
//             <div className="logo-mark small" aria-hidden>
//               <svg viewBox="0 0 120 120" width="28" height="28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="logo">
//                 <defs><linearGradient id="g2" x1="0" x2="1"><stop offset="0" stopColor="#4f46e5"/><stop offset="1" stopColor="#06b6d4"/></linearGradient></defs>
//                 <rect rx="20" width="120" height="120" fill="url(#g2)"/>
//                 <text x="50%" y="56%" textAnchor="middle" fontFamily="Poppins, Arial" fontWeight="700" fontSize="56" fill="#fff">P</text>
//               </svg>
//             </div>
//             <span>Postcrafts</span>
//           </div>

//           <div className="footer-links">
//             <div>
//               <h4>Company</h4>
//               <a href="#">About</a>
//               <a href="#">Careers</a>
//             </div>
//             <div>
//               <h4>Resources</h4>
//               <a href="#">Blog</a>
//               <a href="#">Help</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }















// //  <div className="hero-right-section">
// //       <div className="card trendy">
// //         <div className="icon">✏️</div>
// //         <h3>Trendy Design</h3>
// //         <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed do eiusmod</p>
// //         <a href="#">Continue</a>
// //       </div>

// //       <div className="card modular">
// //         <div className="icon">⚙️</div>
// //         <h3>Modular Control</h3>
// //         <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed</p>
// //         <a href="#">Continue</a>
// //       </div>

// //       <div className="card device">
// //         <div className="icon">📱</div>
// //         <h3>Device Compatibility</h3>
// //         <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed</p>
// //         <a href="#">Continue</a>
// //       </div>

// //       <div className="card unique">
// //         <div className="icon">🔧</div>
// //         <h3>Unique Widget</h3>
// //         <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed</p>
// //         <a href="#">Continue</a>
// //       </div>
// //     </div>




// // .mockup-stairs {
// //   position: relative;
// //   width: max-content;
// // }

// // /* Default browser style */
// // .mockup-browser {
// //   width: 320px;
// //   border-radius: 12px;
// //   overflow: hidden;
// //   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
// //   position: absolute; /* allow stacking */
// //   animation: float 6s ease-in-out infinite;
// // }

// // /* Staircase effect: each next card shifted down & right */
// // .mockup-stairs .mockup-browser:nth-child(1) {
// //   top: 0;
// //   left: 0;
// //   z-index: 3;
// // }

// // .mockup-stairs .mockup-browser:nth-child(2) {
// //   top: 40px;
// //   left: 40px;
// //   z-index: 2;
// // }

// // .mockup-stairs .mockup-browser:nth-child(3) {
// //   top: 80px;
// //   left: 80px;
// //   z-index: 1;
// // }

// // @keyframes float {
// //   0%, 100% { transform: translateY(0); }
// //   50% { transform: translateY(-10px); }
// // }



// // .hero-right-section {
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   gap: 1.5rem;
// //   max-width: 600px;
// //   margin: 0 auto;
// //   font-family: var(--font-family);
// // }

// // .card {
// //   background: white;
// //   /* border-radius: 16px; */
// //   padding: 1.5rem;
// //   box-shadow: 0 4px 12px rgba(0,0,0,0.1);
// //   animation: float 3s ease-in-out infinite;
// //   transition: transform var(--animation-speed);
// // }

// // .card:nth-child(odd) {
// //   animation-delay: 0.5s;
// // }

// // .card h3 {
// //   font-size: 1.2rem;
// //   margin: 0.5rem 0;
// // }

// // .card p {
// //   font-size: var(--font-size-body);
// //   color: var(--color-text);
// //   margin-bottom: 0.5rem;
// // }

// // .card a {
// //   font-size: 0.9rem;
// //   color: var(--color-primary);
// //   text-decoration: none;
// //   font-weight: 600;
// // }

// // .card .icon {
// //   font-size: 2rem;
// //   margin-bottom: 0.5rem;
// // }

// // /* Different Background Styles for Each Card */
// // .trendy {
// //   background: linear-gradient(135deg, var(--color-primary), var(--color-accent-blue));
// //   color: white;
// //       border-start-end-radius: 3rem;
// //     border-bottom-left-radius: 3rem;
// // }
// // .modular {
// //   background: white;
// //   color: var(--color-text);
// //        border-start-start-radius: 3rem;
// //     border-bottom-right-radius: 3rem;
// // }
// // .device {
// //   background: white;
// //   color: var(--color-text);
// //        border-start-start-radius: 3rem;
// //     border-bottom-right-radius: 3rem;
// // }
// // .unique {
// //   background: linear-gradient(135deg, var(--color-accent-red), var(--color-primary));
// //   color: white;
// //       border-start-end-radius: 3rem;
// //     border-bottom-left-radius: 3rem;
// // }

// // /* Floating Animation */
// // @keyframes float {
// //   0% { transform: translateY(0px); }
// //   50% { transform: translateY(-8px); }
// //   100% { transform: translateY(0px); }
// // }