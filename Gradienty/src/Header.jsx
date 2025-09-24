import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand / Logo */}
        <div className="brand">
          <div className="logo-mark">CM</div>
          <span className="brand-title">Color Mesh</span>
        </div>

        {/* Navigation */}
        <nav className="main-nav" aria-label="Main">
          <a href="#">Features</a>
          <a href="#">Solutions</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <button className="btn-ghost">Join Now</button>
        </div>
      </div>
    </header>
  );
}
