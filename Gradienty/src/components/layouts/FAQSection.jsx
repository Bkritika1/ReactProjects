import React, { useState } from "react";
import "../LandingPages.css";


export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {data.map((faq, i) => (
          <div key={i} className="faq-item">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              {faq.q}
            </button>
            {openIndex === i && <p>{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
