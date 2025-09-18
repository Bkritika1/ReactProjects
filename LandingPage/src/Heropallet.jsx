import React from "react";
import { FaUpload, FaSyncAlt, FaAdjust, FaPalette } from "react-icons/fa";

export default function Heropallet() {
  return (
    <section className="palette-section">
      <p className="sub-heading">Visualize instantly</p>
      <h2 className="main-heading">See your palette in action</h2>
      <p className="description">
        Experience your color palette in a real-world context. Our visualizer provides an
        interactive preview that helps you perfect your color choices before implementation.
      </p>

      <div className="featuress">
        <div className="feature-card">
          <FaUpload className="feature-icon" />
          <div>
            <h3>Easy Export Options</h3>
            <p>
              Export your palette in multiple formats including CSS variables, Tailwind config, and
              more. Copy with one click and integrate seamlessly into your projects.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <FaSyncAlt className="feature-icon" />
          <div>
            <h3>20,000+ Palettes</h3>
            <p>
              Access our vast library of over 20,000 curated color palettes. Find inspiration or
              randomize to discover unexpected color combinations.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <FaAdjust className="feature-icon" />
          <div>
            <h3>Smart Mode Switching</h3>
            <p>
              Our intelligent system automatically adjusts between light and dark modes based on
              your environment.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <FaPalette className="feature-icon" />
          <div>
            <h3>Perfect with Generator</h3>
            <p>
              Seamlessly works with our Color Palette Generator. Create, preview, and refine your
              palettes with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
