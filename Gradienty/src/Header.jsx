import './Header.css';
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="site-header">
      <div  className="container header-inner">
        <div className="brand">
          
            <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '50%', backgroundColor: '#DFF6DD', padding: '6px' }}
    >
      <circle cx="22" cy="22" r="22" fill="#DFF6DD" />
      <line x1="22" y1="8" x2="22" y2="36" stroke="#000" strokeWidth="2"/>
      <line x1="8" y1="22" x2="36" y2="22" stroke="#000" strokeWidth="2"/>
      <line x1="12" y1="12" x2="32" y2="32" stroke="#000" strokeWidth="2"/>
      <line x1="32" y1="12" x2="12" y2="32" stroke="#000" strokeWidth="2"/>
    </svg>
         
          <span className="brand-title">    <Link to="/">Color Mesh</Link></span>
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
