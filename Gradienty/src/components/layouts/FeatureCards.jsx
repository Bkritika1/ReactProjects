import React from "react";
import "../LandingPages.css";


export default function FeatureCards({ data }) {
  return (
    <section className="features cards">
      {data.map((item, i) => (
        <div key={i} className="feature-card">
          <div className="card-icon">⭐</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
