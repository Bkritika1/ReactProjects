// Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
        {/* <div class="wave-top">
    <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
 <path d="M0,0 C480,150 960,0 1440,120 L1440,0 L0,0 Z" fill="#efefef"></path>
    </svg>
  </div> */}
      <div className="footer-inner container">
        <div className="footer-about">
          <div className="footer-logo">CM</div>
          <p className="footer-desc">
            Color Mesh helps you generate and share beautiful color palettes in realtime. Create themes that define your brand with just a few clicks.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="link-column">
            <h4>Resources</h4>
            <a href="#">Help Center</a>
            <a href="#">Tutorials</a>
            <a href="#">Guides</a>
          </div>
          <div className="link-column">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="link-column">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h4>Join Our Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑ Back to Top</button>
        <p>© {new Date().getFullYear()} Color Mesh. All rights reserved.</p>
      </div>
    </footer>
//     <section class="grey-wave-section">

  // <div class="wave-top">
  //   <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
  //     <path d="M0,0 C480,150 960,0 1440,120 L1440,0 L0,0 Z" fill="#efefef"></path>
  //   </svg>
  // </div>

//   <div class="content">
//     <div class="top-row">
//       <h4>Colors</h4>
//       <span class="wave-symbol">~</span>
//       <span class="page-number">04</span>
//     </div>

//     <div class="divider-line"></div>

//     <div class="bottom-row">
//       <p class="description">
//         Black and white swatches are the main grounding hues to the color palette. The darker hues and the neutral greys from the secondary palette are there to add harmony and balance to the interaction colors below.
//       </p>
//       <h1 class="title">Mesh</h1>
//     </div>
//   </div>


 
    
//       <div className="footer-links">
//           <div className="link-column">
//              <h4>Company</h4>
//              <a href="#">About Us</a>
//              <a href="#">Careers</a>
//            <a href="#">Blog</a>
//            </div>
//            <div className="link-column">
//              <h4>Resources</h4>
//            <a href="#">Help Center</a>
//              <a href="#">Tutorials</a>
//          <a href="#">Guides</a>
//         </div>
//          <div className="link-column">
//            <h4>Support</h4>
//         <a href="#">Contact Us</a>
//          <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//        </div>
//         <div className="link-column">
//           <h4>Follow Us</h4>
//          <div className="social-icons">
//           <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//               <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
//              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//         </div>
//      </div>
//      </div>
     
   
// </section>
  );
}
