import React from "react";
import "./PaletteGuide.css";

export default function PaletteGuide() {
  return (
    <section className="palette-guide">
      <div className="container">
        <h2 className="section-title">How to Pick a Color Palette</h2>
        <p className="section-subtitle">Create better branding with the right color balance.</p>

        <div className="color-roles">
          <div className="color-role dominant">
            <div className="circle color-dominant"></div>
            <h3>Dominant Colour</h3>
            <p>The dominant colour drives most of your brand's messaging and builds awareness.</p>
          </div>

          <div className="color-role accent">
            <div className="circle color-accent"></div>
            <h3>Accent Colour</h3>
            <p>Used to grab attention and highlight important elements of your design.</p>
          </div>

          <div className="color-role neutral">
            <div className="circle color-neutral"></div>
            <h3>Neutral Colour</h3>
            <p>Used for backgrounds and supporting UI elements to balance the design.</p>
          </div>

          <div className="color-role additional">
            <div className="circle color-additional"></div>
            <h3>Additional Colour</h3>
            <p>These colours complement your palette without overpowering the core design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
