import React from "react";

export default function FAQ({ data }) {
  return (
    <section className="faq container">
      <h3 style={{marginBottom:18}}>{data.title}</h3>
      {data.items.map((q,i)=>(
        <div className="faq-item" key={i}>
          <strong>{q.q}</strong>
          <p style={{margin:'8px 0 0',color:'var(--muted)'}}>{q.a}</p>
        </div>
      ))}
    </section>
  );
}
