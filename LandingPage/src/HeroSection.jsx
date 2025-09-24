// export default function HeroSection() {
//   return (
//     <section className="hero">
//       <h2>Build Stunning Websites Easily</h2>
//       <p>Fast. Modern. Interactive. Just drag, drop, and customize.</p>
//       <button className="cta-button">Get Started Now</button>
//     </section>
//   );
// }


// export default function HeroSection() {
//   return (
//     <section className="hero">
//       {/* Background blobs */}


//       {/* Hero Text */}
//       <h2>Build Stunning Websites Easily</h2>
//       <p>Fast. Modern. Interactive. Just drag, drop, and customize.</p>
//       <button className="cta-button">Get Started Now</button>

//       {/* Glassmorphism Card */}
//       <div className="hero-card">
//         🚀 Fast Performance
//       </div>
//     </section>
//   );
// }



export default function Hero() {
  return (
    <section className="hero-container">
      {/* <div className="blob-blur" /> */}
      <div className="blob-blur" />


      <div
        className="blob"
        style={{
          top: '180px',
          left: '53rem',
        }}
      />


      <h1 className="hero-heading">
        Find your perfect palette today — explore, customize, and export  <span className="highlight">Effortlessly</span>
      </h1>

      <p className="hero-subtext">
        Browse hundreds of curated palettes designed for websites, apps, and branding.
        Filter by mood, theme, or style — then export clean code instantly.
      </p>

       <div class="hero-actions">
      <button class="btn-primary">Get Started</button>
      <h3 className="hero-h">Generate your own palettes →</h3>
    </div>

      {/* <div className="hero-cards" >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">50+ Tools<br /><strong>Project Management</strong></div>
          <div className="card">20+ Tools<br /><strong>AI Tools</strong></div>
        </div>
        <div className="card highlight-card"> 50+ Tools<br /><strong>Remote Working Tools</strong></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">1.3k Tools<br /><strong>Collaboration</strong></div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="card">2.4k Tools<br /><strong>Time Tracking</strong></div>
            <div className="card">89 Tools<br /><strong>Mindful Tools</strong></div>
          </div>
        </div>
      </div> */}
    </section>
  );
}


// import React from "react";

// export default function Hero() {
//   return (
//     <section className="hero-container">
//       <h1 className="hero-heading">
//         Find your perfect palette today — explore, customize, and export{" "}
//         <span className="highlight">Effortlessly</span>
//       </h1>

//       <p className="hero-subtext">
//         Browse hundreds of curated palettes designed for websites, apps, and branding.
//         Filter by mood, theme, or style — then export clean code instantly.
//       </p>

//       <div className="hero-actions">
//         <button className="btn-primary">Get Started</button>
//         <h3 className="hero-h">Generate your own palettes →</h3>
//       </div>
//     </section>
//   );
// }
