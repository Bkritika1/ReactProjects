  
  
  
  const items = [
    { type: "logo", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpPfxZ2MSaobcD85v10lMcispRhi3hnckxw&s", alt: "Company" },
    { type: "text", text: "10k+ Active Users" },
    { type: "logo", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HRtuZtdAPgv06lVQ0rlPQM3AB7F5AsPrrw&s", alt: "Company" },
    { type: "text", text: "24/7 Support" },
    { type: "logo", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbbYtrsz-JS8Z2ZwT7wmQINvWcpIk2Ha5Jw&s", alt: "Company" },
    { type: "text", text: "500+ Companies" },
  ];
import './Hero.css';
import { useUI } from "../src/context/UIContext";

import { Link } from "react-router-dom";
export default function Hero(){
    const {
      toggleTheme,
      currentTheme,
      toggleSidebar,
      changeTheme,
       applyCustomPalette 
    } = useUI();
    
    return(
           <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-left">
            <div className="eyebrow">This website helps you pick the perfect color palette for your design</div>
            <h1 className="hero-title">
              Choose  <br />
            Your Website  <strong>Theme</strong>
            </h1>
            <p className="hero-sub">Save and share your favorite palettes with one click..</p>

            <div className="hero-ctas">
             <button className='btn btn-primary'  onClick={() => setSidebarOpen(true)}>Get Started</button>

             <Link className="login-link" to="/palette-generator">
            Generate Your Own Palettes ➜
          </Link>
            </div>
          </div>

     <div className="hero-right">
      <div className="mockup-browser">
        <div className="browser-top">
          <div className="dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="address-bar">www.yourwebsite.com</div>
        </div>

        <div
          className="browser-content"
         
        >
          <h3 >Your Website Preview</h3>
          <p >
            Change colors & theme in real-time
          </p>
          {/* <button
          
          >
            Try Now
          </button> */}
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="shapes">
        <div className="shape shape-yellow"></div>
        <div className="shape shape-green"></div>
        <div className="shape shape-red"></div>
        <div className="shape shape-blue"></div>
      </div>
    </div>
        </div>

        {/* <div className="trusted-strip">
      <div className="ticker">
        <div className="ticker-track">
          {items.map((item, idx) => (
            <div className="ticker-item" key={idx}>
              {item.type === "logo" ? (
                <img src={item.src} alt={item.alt} />
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
          {items.map((item, idx) => (
            <div className="ticker-item" key={`dup-${idx}`}>
              {item.type === "logo" ? (
                <img src={item.src} alt={item.alt} />
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div> */}
      </section>
    )
}