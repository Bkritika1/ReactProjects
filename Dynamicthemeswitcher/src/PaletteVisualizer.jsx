import React, { useState, useEffect } from 'react';
import { Copy, Download, Eye, Palette, Monitor, Smartphone, Tablet } from 'lucide-react';

// CSS Styles
const styles = `
  .app-container {
    min-height: 100vh;
    background-color: #f9fafb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  .main-header {
    background-color: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 1.5rem;
  }

  .header-content {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .app-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #111827;
    margin: 0;
  }

  .header-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .header-button:hover {
    background-color: #1d4ed8;
  }

  .main-content {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    .main-content {
      flex-direction: row;
    }
  }

  .color-panel {
    flex: 1;
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    .color-panel {
      max-width: 33.333333%;
    }
  }

  .panel-card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .panel-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
    // margin-left:'30px'
  }

  .add-color-btn {
    font-size: 0.875rem;
    color: #2563eb;
    background: none;
    border: none;
    cursor: pointer;
  }

  .add-color-btn:hover {
    color: #1d4ed8;
  }

  .color-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .color-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
  }

  .color-item:hover .color-actions {
    opacity: 1;
  }

  .color-swatch {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 2px solid #e5e7eb;
    cursor: pointer;
  }

  .color-info {
    flex: 1;
  }

  .color-input-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .color-label {
    display: block;
    font-size: 0.875rem;
    font-family: 'Courier New', monospace;
    color: #111827;
    cursor: pointer;
  }

  .color-label:hover {
    color: #2563eb;
  }

  .color-text-input {
    margin-top: 0.25rem;
    display: block;
    width: 100%;
    font-size: 0.75rem;
    font-family: 'Courier New', monospace;
    color: #6b7280;
    border: none;
    outline: none;
    background: transparent;
  }

  .color-actions {
    display: flex;
    gap: 0.25rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .action-btn {
    padding: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 0.25rem;
  }

  .action-btn:hover {
    background-color: #f3f4f6;
  }

  .remove-btn {
    color: #ef4444;
  }

  .copy-status {
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: #dcfce7;
    color: #166534;
    font-size: 0.875rem;
    border-radius: 0.25rem;
  }

  .export-section {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  .export-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.75rem 0;
  }

  .export-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .export-btn {
    width: 100%;
    text-align: left;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .export-btn:hover {
    background-color: #f9fafb;
  }

  .preview-panel {
    flex: 2;
  }

  .preview-controls {
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 1.5rem;
  }

  .controls-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .controls-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .preview-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .view-toggle {
    display: flex;
    align-items: center;
    background-color: #f3f4f6;
    border-radius: 0.5rem;
    padding: 0.25rem;
  }

  .view-btn {
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 0.25rem;
  }

  .view-btn.active {
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .preview-mode-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #6b7280;
    background: none;
    border: none;
    cursor: pointer;
  }

  .preview-mode-btn:hover {
    color: #111827;
  }

  .preview-content {
    padding: 1.5rem;
  }

  .preview-container {
    margin: 0 auto;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    overflow: hidden;
    transition: all 0.3s;
  }

  .preview-container.desktop {
    max-width: 100%;
    height: 24rem;
  }

  .preview-container.tablet {
    max-width: 42rem;
    height: 24rem;
  }

  .preview-container.mobile {
    max-width: 24rem;
    height: 24rem;
  }

  .preview-scroll {
    height: 100%;
    overflow: auto;
  }

  .url-section {
    margin-top: 1.5rem;
  }

  .url-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.75rem 0;
  }

  .url-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .url-code {
    flex: 1;
    font-size: 0.875rem;
    background-color: #f3f4f6;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
    border: 1px solid #e5e7eb;
  }

  .copy-url-btn {
    padding: 0.5rem 0.75rem;
    background-color: #2563eb;
    color: white;
    font-size: 0.875rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .copy-url-btn:hover {
    background-color: #1d4ed8;
  }

  /* Sample Website Styles */
  .sample-website {
    min-height: 100%;
  }

  .sample-header {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .header-container {
    max-width: 72rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .brand-logo {
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
  }

  .brand-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .nav-menu {
    display: none;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .nav-menu {
      display: flex;
    }
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;
  }

  .nav-link:hover {
    opacity: 0.7;
  }

  .cta-button {
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 500;
    border: none;
    cursor: pointer;
  }

  .hero-section {
    padding: 4rem 1.5rem;
  }

  .hero-container {
    max-width: 72rem;
    margin: 0 auto;
    text-align: center;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 1.5rem 0;
  }

  .hero-description {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
    opacity: 0.8;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }

  @media (min-width: 640px) {
    .hero-buttons {
      flex-direction: row;
    }
  }

  .primary-button {
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    color: white;
    font-weight: 500;
    font-size: 1.125rem;
    border: none;
    cursor: pointer;
  }

  .secondary-button {
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1.125rem;
    border: 2px solid;
    background: transparent;
    cursor: pointer;
  }

  .features-section {
    padding: 4rem 1.5rem;
  }

  .features-container {
    max-width: 72rem;
    margin: 0 auto;
  }

  .features-title {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    margin: 0 0 3rem 0;
  }

  .features-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .feature-card {
    text-align: center;
    padding: 1.5rem;
  }

  .feature-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin: 0 auto 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .feature-icon-inner {
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
  }

  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  .feature-description {
    opacity: 0.7;
    margin: 0;
  }

  .cta-section {
    padding: 4rem 1.5rem;
  }

  .cta-container {
    max-width: 64rem;
    margin: 0 auto;
    text-align: center;
  }

  .cta-title {
    font-size: 1.875rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
  }

  .cta-description {
    font-size: 1.25rem;
    margin: 0 0 2rem 0;
    opacity: 0.9;
  }

  .cta-final-button {
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1.125rem;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const PaletteVisualizer = () => {
  // Default colors from the URL
  const defaultColors = ['#010e23', '#f2f7fd', '#0962ea', '#0e7cf4', '#0aa0f6'];
  const [colors, setColors] = useState(defaultColors);
  const [activeView, setActiveView] = useState('desktop');
  const [copyStatus, setCopyStatus] = useState('');

  // Parse colors from URL-like format
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paletteParam = urlParams.get('palette');
    if (paletteParam) {
      const parsedColors = paletteParam.split('-').map(color => `#${color}`);
      if (parsedColors.length > 0) {
        setColors(parsedColors);
      }
    }
  }, []);

  // Update color at specific index
  const updateColor = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  // Add new color
  const addColor = () => {
    setColors([...colors, '#000000']);
  };

  // Remove color
  const removeColor = (index) => {
    if (colors.length > 2) {
      const newColors = colors.filter((_, i) => i !== index);
      setColors(newColors);
    }
  };

  // Copy color to clipboard
  const copyColor = (color) => {
    navigator.clipboard.writeText(color);
    setCopyStatus(color);
    setTimeout(() => setCopyStatus(''), 2000);
  };

  // Generate CSS variables from colors
  const generateCSSVars = () => {
    const vars = colors.reduce((acc, color, index) => {
      acc[`--color-${index + 1}`] = color;
      return acc;
    }, {});
    
    // Assign semantic meanings
    vars['--primary'] = colors[0] || '#000000';
    vars['--background'] = colors[1] || '#ffffff';
    vars['--accent'] = colors[2] || '#0000ff';
    vars['--secondary'] = colors[3] || '#666666';
    vars['--tertiary'] = colors[4] || '#888888';
    
    return vars;
  };

  const cssVars = generateCSSVars();

  // Sample website component
  const SampleWebsite = () => (
    <div 
      className="sample-website"
      style={{
        backgroundColor: cssVars['--background'],
        color: cssVars['--primary'],
        ...cssVars
      }}
    >
      {/* Header */}
      <header className="sample-header" style={{ borderColor: cssVars['--tertiary'] + '20' }}>
        <div className="header-container">
          <div className="brand-section">
            <div 
              className="brand-logo"
              style={{ backgroundColor: cssVars['--accent'] }}
            />
            <h1 className="brand-name">BrandName</h1>
          </div>
          <nav className="nav-menu">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <button 
            className="cta-button"
            style={{ backgroundColor: cssVars['--accent'] }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h2 className="hero-title">
            Build Something Amazing
          </h2>
          <p className="hero-description">
            Transform your ideas into reality with our innovative platform. 
            Join thousands of creators who trust our solution.
          </p>
          <div className="hero-buttons">
            <button 
              className="primary-button"
              style={{ backgroundColor: cssVars['--accent'] }}
            >
              Start Free Trial
            </button>
            <button 
              className="secondary-button"
              style={{ 
                borderColor: cssVars['--secondary'],
                color: cssVars['--secondary']
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" style={{ backgroundColor: cssVars['--background'] }}>
        <div className="features-container">
          <h3 className="features-title">
            Why Choose Us
          </h3>
          <div className="features-grid">
            {[
              { title: 'Fast Performance', desc: 'Lightning-fast loading times for optimal user experience.' },
              { title: 'Secure & Reliable', desc: 'Enterprise-grade security with 99.9% uptime guarantee.' },
              { title: '24/7 Support', desc: 'Round-the-clock customer support whenever you need help.' }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div 
                  className="feature-icon"
                  style={{ backgroundColor: cssVars['--tertiary'] + '20' }}
                >
                  <div 
                    className="feature-icon-inner"
                    style={{ backgroundColor: cssVars['--secondary'] }}
                  />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ backgroundColor: cssVars['--primary'], color: cssVars['--background'] }}>
        <div className="cta-container">
          <h3 className="cta-title">
            Ready to Get Started?
          </h3>
          <p className="cta-description">
            Join over 10,000+ satisfied customers today.
          </p>
          <button 
            className="cta-final-button"
            style={{ 
              backgroundColor: cssVars['--accent'],
              color: 'white'
            }}
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        {/* Main Header */}
        <header className="main-header">
          <div className="header-content">
            <div className="logo-section">
              <Palette size={32} color="#2563eb" />
              <h1 className="app-title">Palette Visualizer</h1>
            </div>
            <div>
              <button
                onClick={() => window.location.reload()}
                className="header-button"
              >
                Generate Random
              </button>
            </div>
          </div>
        </header>

        <div className="main-content">
          {/* Color Palette Panel */}
          <div className="color-panel">
            <div className="panel-card">
              <div className="panel-header">
                <h2 className="panel-title">Color Palette</h2>
                <button
                  onClick={addColor}
                  className="add-color-btn"
                >
                  + Add Color
                </button>
              </div>

              <div className="color-list">
                {colors.map((color, index) => (
                  <div key={index} className="color-item">
                    <div 
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                      onClick={() => copyColor(color)}
                    />
                    <div className="color-info">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => updateColor(index, e.target.value)}
                        className="color-input-hidden"
                        id={`color-${index}`}
                      />
                      <label 
                        htmlFor={`color-${index}`}
                        className="color-label"
                      >
                        {color.toUpperCase()}
                      </label>
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => updateColor(index, e.target.value)}
                        className="color-text-input"
                      />
                    </div>
                    <div className="color-actions">
                      <button
                        onClick={() => copyColor(color)}
                        className="action-btn"
                      >
                        <Copy size={16} color="#6b7280" />
                      </button>
                      {colors.length > 2 && (
                        <button
                          onClick={() => removeColor(index)}
                          className="action-btn remove-btn"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {copyStatus && (
                <div className="copy-status">
                  Copied {copyStatus} to clipboard!
                </div>
              )}

              {/* Export Options */}
              <div className="export-section">
                <h3 className="export-title">Export</h3>
                <div className="export-buttons">
                  <button className="export-btn">
                    <Download size={16} />
                    <span>Download as PNG</span>
                  </button>
                  <button className="export-btn">
                    <Copy size={16} />
                    <span>Copy CSS Variables</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="preview-panel">
            <div className="panel-card">
              {/* Preview Controls */}
              <div className="preview-controls">
                <div className="controls-header">
                  <div className="controls-left">
                    <h2 className="preview-title">Live Preview</h2>
                    <div className="view-toggle">
                      <button
                        onClick={() => setActiveView('desktop')}
                        className={`view-btn ${activeView === 'desktop' ? 'active' : ''}`}
                      >
                        <Monitor size={16} />
                      </button>
                      <button
                        onClick={() => setActiveView('tablet')}
                        className={`view-btn ${activeView === 'tablet' ? 'active' : ''}`}
                      >
                        <Tablet size={16} />
                      </button>
                      <button
                        onClick={() => setActiveView('mobile')}
                        className={`view-btn ${activeView === 'mobile' ? 'active' : ''}`}
                      >
                        <Smartphone size={16} />
                      </button>
                    </div>
                  </div>
                  <button className="preview-mode-btn">
                    <Eye size={16} />
                    <span>Preview Mode</span>
                  </button>
                </div>
              </div>

              {/* Preview Content */}
              <div className="preview-content">
                <div className={`preview-container ${activeView}`}>
                  <div className="preview-scroll">
                    <SampleWebsite />
                  </div>
                </div>
              </div>
            </div>

            {/* URL Info */}
            <div className="panel-card url-section">
              <h3 className="url-title">Shareable URL</h3>
              <div className="url-container">
                <code className="url-code">
                  /palette-visualizer/{colors.map(c => c.substring(1)).join('-')}
                </code>
                <button
                  onClick={() => copyColor(`/palette-visualizer/${colors.map(c => c.substring(1)).join('-')}`)}
                  className="copy-url-btn"
                >
                  Copy URL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaletteVisualizer;