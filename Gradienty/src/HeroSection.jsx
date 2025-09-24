import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
<>
<section className="heroo">
      <div className="cards-column">
        <div className="card trendy">
          <div className="icon">✏️</div>
          <h3>Trendy Design</h3>
          <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed do eiusmod</p>
          <a href="#">Continue</a>
        </div>

        <div className="card modular">
          <div className="icon">⚙️</div>
          <h3>Export Easily</h3>
          <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed</p>
          <a href="#">Continue</a>
        </div>

        <div className="card device">
          <div className="icon">📱</div>
          <h3>Live Preview</h3>
          <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed</p>
          <a href="#">Continue</a>
        </div>

        <div className="card unique">
          <div className="icon">🔧</div>
          <h3>Unique Widget</h3>
          <p>Lorem ipsum dolor sit amet consect adipiscingelit, sed</p>
          <a href="#">Continue</a>
        </div>
      </div>
      <div className="content-column">
        <h2> Designed to Help You Do More With Less Stress</h2>
        <p>
          Tired of spending countless hours on customizing widgets to give it a
          better look? We know how boring and tedious task it is. HappyAddons
          brings you a never seen feature before in elementor widgets from other
          vendors.
        </p>
        {/* <p>
          You can get slick look and feels with just a click using our powerful 
          preset engine, and that is something you are going to love.
        </p> */}
      </div>
    
    </section>
       <section className="business-section">
        <div className="container business-inner">
          <div className="video-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiVqpNd0zv349lznWpZI0-KKoEyp-sFiA_g&s" alt="video" />
            <button className="play">►</button>
          </div>

          <div className="stat-card">
            <h3>Grow business with Celebration.</h3>
            <p>Drive results and conversion with simple landing pages made for your customers.</p>
            <div className="stat">
              <div className="stat-num">2,984</div>
              <div className="stat-label">Customers on daily</div>
            </div>
            <button className="btn btn-primary">Start Campaign</button>
          </div>
        </div>
      </section>
</>
  )
}