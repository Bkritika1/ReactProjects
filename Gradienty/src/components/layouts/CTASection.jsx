import React from "react";
import "../LandingPages.css";

export default function CTASection({ data }) {
  const { title, buttonText } = data || {};
  return (
    <section className="cta-section">
      <h2>{title}</h2>
      {buttonText && <button className="btn-primary">{buttonText}</button>}
    </section>
  );
}
