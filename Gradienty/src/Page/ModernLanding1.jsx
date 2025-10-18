import React from "react";
import "./ModeranLanding1.css";

export default function ModeranLanding1() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="logo">Tiro.ai</span>
          <nav className="nav-links">
            <a href="#">Product</a>
            <a href="#">Solutions</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </nav>
        </div>
        <div className="header-right">
          <button className="sign-in">Sign in</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        {/* Left Hero */}
        <div className="hero-left">
          <div className="trustpilot">
            <span>⭐ 4.7</span> on TrusPilot
          </div>
          <h1 className="hero-title">
            Verified emails. <br /> Accurate Phone Numbers
          </h1>
          <p className="hero-subtitle">
            The first prospecting tool that pulls live data in real-time as you
            search—giving you accurate, reliable contact info you can count on
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Try Tiro for free</button>
            <button className="btn-secondary">Book a demo</button>
          </div>
        </div>

        {/* Right Hero */}
        <div className="hero-right">
          <div className="chat-card">
            <div className="chat-message bot">
              <span className="user">Tiro.ai</span>
              <p>Hi, what can I help you with today?</p>
            </div>
            <div className="chat-message user">
              <p>
                Hey Tiro, Can you please extract information "Emilia Smith" Url
                "linkedin.com/Emilia1"
              </p>
            </div>
            <div className="chat-message bot">
              <p>Generating ...</p>
            </div>

            <div className="contact-card">
              <div className="contact-info">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Emilia Smith"
                  className="contact-avatar"
                />
                <div>
                  <h3>Emilia Smith</h3>
                  <span>California, United States</span>
                </div>
              </div>
              <div className="contact-actions">
                <span>📞 880-2999-872</span>
                <span>✉️</span>
                <span>⋯</span>
              </div>
              <div className="other-contacts">
                <span>Other matching contacts found</span>
              </div>
            </div>
          </div>
          <div className="extract-tag">Extract your customers with AI</div>
        </div>
      </main>

      {/* Footer logos */}
      <footer className="footer">
        <img src="https://via.placeholder.com/80x40?text=Rakuten" alt="Rakuten" />
        <img src="https://via.placeholder.com/80x40?text=NCR" alt="NCR" />
        <img src="https://via.placeholder.com/80x40?text=monday.com" alt="Monday" />
        <img src="https://via.placeholder.com/80x40?text=Disney" alt="Disney" />
        <img src="https://via.placeholder.com/80x40?text=Dropbox" alt="Dropbox" />
      </footer>
    </div>
  );
}
