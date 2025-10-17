
import './Modern.css';
export default function Modern() {
    return(
        <>
              <header  className='header-modern'>
        <div className="logo">ColourMesh</div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-modern" id="hero">
        <div>
          <h1>Welcome to <strong>ColourMesh</strong></h1>
          <p>Build amazing landing pages and interactive components fast.</p>
          <button>Get Started</button>
        </div>
        <div>
          <div className="blob-card fade-in">
            <h3>Animated Card</h3>
            <p>This is a blob card with hover animations and shadow effects.</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About ColourMesh</h2>
        <p>ColourMesh is a modern platform for creating landing pages with style and speed.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
       <div className="blob-card fade-in">
  <h3>Animated Demo</h3>
  <p>Check out our smooth animation.</p>
  
  <video
    src="https://www.w3schools.com/html/mov_bbb.mp4"  // yahan apna video URL daalo
    autoPlay
    loop
    muted
    playsInline
    style={{
      width: "100%",
      borderRadius: "20px",
      marginTop: "1rem",
      boxShadow: "var(--box-shadow-card)",
      objectFit: "cover", // video ko card me fit kare
    }}
  ></video>
</div>

          <div className="blob-card fade-in">
            <h3>Modern</h3>
            <p>Use latest design trends and animations.</p>
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay loop muted playsInline
              style={{ width: "100%", borderRadius: "20px", marginTop: "1rem", objectFit: "cover" }}
            />
          </div>
           <div className="blob-card fade-in">
            <h3>Customizable</h3>
            <p>Full control with CSS variables and components.</p>
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay loop muted playsInline
              style={{ width: "100%", borderRadius: "20px", marginTop: "1rem", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <footer id="contact">
        <p>© 2025 ColourMesh. All Rights Reserved.</p>
        <p>Designed by <a href="#">YourName</a></p>
      </footer>
</>
    )
}