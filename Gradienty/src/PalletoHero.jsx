import React from "react";
import "./PaletteHero.css";

export default function PalleteHero() {
  return (
    <div className="hero-container">
      {/* Header */}
      <header className="hero-header">
        <div className="logo">
          <span className="logo-icon">📌</span>
          <span className="logo-text">Pinterest</span>
        </div>

        <nav className="nav-links">
          <span>Explore ▾</span>
          <span>Log in</span>
          <button className="nav-btn">Sign</button>
        </nav>
      </header>

      {/* Main Card */}
      <main className="hero-main">
        <div className="card">
          {/* Card top header */}
          <div className="card-header">
            <div className="card-left">
              <div className="card-title">Colors</div>
              <p className="card-subtext">
                Black and white swatches are the main grounding hues to the color palette.  
                The darker hues and the neutral greys from the secondary palette are there to add harmony.
              </p>
            </div>
            <div className="card-right">Palette</div>
          </div>

          {/* Card body */}
          <div className="card-body">
            {/* Left circle swatch */}
            <div className="color-swatch"></div>

            {/* Right waveform */}
            <div className="wave-area">
              <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="wave-svg">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#8fd3f4" stopOpacity="1"/>
                    <stop offset="1" stopColor="#82e2c8" stopOpacity="1"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="1">
                    <stop offset="0" stopColor="#b6c9ff" stopOpacity="0.95"/>
                    <stop offset="1" stopColor="#f9b7d2" stopOpacity="0.95"/>
                  </linearGradient>
                  <linearGradient id="g3" x1="0" x2="1">
                    <stop offset="0" stopColor="#95e1ff" stopOpacity="0.85"/>
                    <stop offset="1" stopColor="#b6ffd9" stopOpacity="0.85"/>
                  </linearGradient>
                </defs>

                <path
                  className="wave wave-slow"
                  d="M0,110 C120,70 200,140 320,110 C440,80 560,150 680,110 C800,70 920,150 1200,110 L1200 200 L0 200 Z"
                  fill="url(#g1)"
                />
                <path
                  className="wave wave-mid"
                  d="M0,110 C140,90 260,120 380,105 C500,90 620,135 740,110 C860,85 980,135 1200,110 L1200 200 L0 200 Z"
                  fill="url(#g2)"
                />
                <path
                  className="wave wave-fast"
                  d="M0,110 C160,100 280,110 400,120 C520,130 640,100 760,120 C880,140 1000,120 1200,110 L1200 200 L0 200 Z"
                  fill="url(#g3)"
                />
              </svg>

              <div className="wave-labels">
                <span>5YC887</span>
                <span>BLUE/GREEN</span>
                <span>L1 - 80%</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
