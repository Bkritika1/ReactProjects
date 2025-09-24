
import { FaCheck } from "react-icons/fa";

const AdvancedColorTools = () => {
  return (
    <div className="advanced-color-tools"
    //  style={{
    //     minHeight: "100vh",
    //     width: "100%",
    //     backgroundImage: `
    //       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
    //       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
    //       radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
    //     `,
    //     backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    //   }}
    
    >
      <div className="blob-blurr" />

      <div className="image-container">
        <img
          src='../public/pallte.jpeg'
          alt="People enjoying the beach"
        />
      </div>

      <div className="content">
        <h2>Advanced Color Tools</h2>
        <p>
          Take your color palette to the next level with our comprehensive suite of tools designed for both beginners and professionals.
        </p>

        <div className="features">
          {/* <div className="blob"></div> */}
          <ul className="feature-list">
            <li><span className="check-icon"><FaCheck /></span> Real-time Preview</li>
            <li><span className="check-icon"><FaCheck /></span> Contrast Checking</li>
            <li><span className="check-icon"><FaCheck /></span> CSS Variable Export</li>
            <li><span className="check-icon"><FaCheck /></span> Color Variations</li>
            <li><span className="check-icon"><FaCheck /></span> Accessibility Tools</li>
            <li><span className="check-icon"><FaCheck /></span> Tailwind Integration</li>
          </ul>
        </div>
        

        <a href="#" className="learn-more">
          Learn more about our features →
        </a>
      </div>
    </div>
  );
};

export default AdvancedColorTools;
