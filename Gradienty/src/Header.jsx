import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div  className="container header-inner">
        <div className="brand">
          
          <div className="logo-mark" style={{listStyle:'none', textDecoration:'none'}}> <a href="/"> CM</a></div>
         
          <span className="brand-title">  <a href="/"> Color Mesh</a></span>
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
