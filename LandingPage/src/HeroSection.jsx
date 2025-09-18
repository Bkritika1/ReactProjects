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
                {/* <div className="blob" /> */}
      
      <div
        className="blob"
        style={{
          top: '150px',
          left: '200px',
        }}
      />
      

            <h1 className="hero-heading">
                Find The Best Productivity Tool <span className="highlight">Effortlessly</span>
            </h1>
          
            <div className="search-bar">
                <input type="text" placeholder="Search for tool, categories..." />
                <button>Search</button>
            </div>

            <p className="hero-subtext">
                Over 200+ productivity tools in our database reviewed and curated by Keep Productive to help you find the software.
            </p>

            <div className="hero-cards" >
               <div style={{display:'flex', flexDirection:'column',gap:'1rem'}}>
                 <div className="card">50+ Tools<br /><strong>Project Management</strong></div>
                <div className="card">20+ Tools<br /><strong>AI Tools</strong></div>
               </div>
                <div className="card highlight-card"> 50+ Tools<br /><strong>Remote Working Tools</strong></div>
               <div style={{display: 'flex', flexDirection:'column',gap:'1rem'}}>
                 <div className="card">1.3k Tools<br /><strong>Collaboration</strong></div>
               <div style={{display:'flex', gap:'1rem'}}> 
                 <div className="card">2.4k Tools<br /><strong>Time Tracking</strong></div>
                <div className="card">89 Tools<br /><strong>Mindful Tools</strong></div>
               </div>
               </div>
            </div>
        </section>
    );
}
