import React from "react";
import "../LandingPages.css";


export default function PricingTable({ data }) {
  const { plans } = data || {};
  return (
    <section className="pricing-table">
      {plans.map((plan, i) => (
        <div key={i} className="pricing-card">
          <h3>{plan.name}</h3>
          <p className="price">{plan.price}</p>
          <ul>
            {plan.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
          <button className="btn-primary">Choose Plan</button>
        </div>
      ))}
    </section>
  );
}
