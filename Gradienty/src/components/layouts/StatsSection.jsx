import React from "react";
import "../LandingPages.css";


export default function StatsSection({ data }) {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {data.items.map((item, i) => (
          <div key={i} className="stat">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
