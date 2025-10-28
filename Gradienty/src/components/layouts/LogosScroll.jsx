import React from "react";
import "../LandingPages.css";


export default function LogosScroll({ data }) {
  return (
    <section className="logos-scroll">
      <div className="logos-container">
        {data.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}
