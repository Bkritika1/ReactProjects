
import { FaCheck } from "react-icons/fa";

const AdvancedColorTools = () => {
  return (
    <div className="advanced-color-tools">
      <div className="image-container">
        <img
          src="data:image/jpeg;base64,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" // Replace with your actual image path
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
