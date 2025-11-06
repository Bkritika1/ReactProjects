import React from "react";

export default function Features({ data }) {
  const cards = (data && data.cards) || [];
  return (
    <section className="container" style={{padding:'40px 0'}}>
      {/* <h3 style={{marginBottom:18}}>{data.title}</h3> */}
      <div className="grid grid-3">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            {c.image && <img src={c.image} style={{width:64,height:64}} alt="" />}
            <h4 style={{margin:'12px 0'}}>{c.title}</h4>
            <p style={{color:'var(--muted)'}}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
