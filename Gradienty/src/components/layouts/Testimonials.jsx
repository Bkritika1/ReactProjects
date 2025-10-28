import React from "react";
import "../LandingPages.css";


export default function Testimonials({ data }) {
  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonial-grid">
        {data.map((item, i) => (
          <div key={i} className="testimonial-card">
            <p className="quote">“{item.quote}”</p>
            <div className="user-info">
              <img src={item.avatar} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
