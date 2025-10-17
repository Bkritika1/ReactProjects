import "./ModernLanding.css";

export default function ModernLanding() {
  return (
    <div className="modern-landing">
      {/* HEADER */}
      <header className="ml-header">
        <div className="ml-logo">✴</div>
        <nav className="ml-nav">
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Stories</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
        </nav>
        <button className="ml-btn">Get Oppo</button>
      </header>

      {/* HERO SECTION */}
      <section className="ml-hero">
        <div className="ml-hero-top">
          <div className="ml-news">News</div>
          <div className="ml-funding">Raised $4.5M Funding — AngelVC</div>
        </div>
        <h1 className="ml-title">
          The Fastest Way To <br /> Understand Customer
        </h1>
        <p className="ml-subtitle">
          Effortlessly Transform Calls, Documents, And User Insights <br />
          Feedback Into Actionable Insights
        </p>
        <button className="ml-subscribe">Subscribe — Our Plan</button>
      </section>

      {/* IMAGE SECTION */}
      <section className="ml-visuals">
        <div className="ml-left-card">
          <div className="ml-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
              alt="Person"
            />
          </div>
          <div className="ml-chat-bubble">
            <strong>Anita J.</strong>
            <p>Hey, send the first AI doc ✨</p>
          </div>
        </div>

        <div className="ml-right-card">
          <div className="ml-message">
            <strong>Emilia Jones</strong>
            <p>
              We are happy with the quote & wanted <br /> to move forward with
              your team.
            </p>
          </div>
          <div className="ml-flow-icons">
            <div className="circle yellow"></div>
            <div className="circle blue"></div>
            <div className="circle black"></div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="ml-logos">
        <span>Deloitte</span>
        <span>NCR</span>
        <span>monday.com</span>
        <span>NETFLIX</span>
        <span>Dropbox</span>
      </section>

      {/* FOOTER */}
      <footer className="ml-footer">
        <p>© 2025 Color Mesh — Designed with 💛 by LGT</p>
      </footer>
    </div>
  );
}
