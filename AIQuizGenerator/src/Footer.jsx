import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-brand">
            <div className="brand-row">
              <div className="brand-icon">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  ></path>
                </svg>
              </div>
              <h2 className="brand-title">QuizPlatform</h2>
            </div>

            <p className="brand-text">
              Engage, educate, and entertain with live quizzes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-links">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Live Hosting</a></li>
              <li><a href="#">Leaderboards</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Quiz Builder</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 2024 QuizPlatform. All rights reserved.</p>
          <div className="social-icons">
            <a href="#">X</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
