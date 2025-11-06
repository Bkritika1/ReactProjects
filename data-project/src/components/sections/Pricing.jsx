import React from "react";

export default function Pricing({ data }) {
  return (
    <section className="pricing">
      <div className="container">
        <h3 style={{marginBottom:18}}>{data.title}</h3>
        <div className="pricing-grid">
          {data.plans.map((p,i)=>(
            <div key={i} className="price-card">
              <h4>{p.name}</h4>
              <div style={{fontSize:24,fontWeight:800,margin:'8px 0'}}>{p.price}</div>
              <p style={{color:'var(--muted)'}}>{p.desc}</p>
              <ul style={{marginTop:12}}>
                {p.features.map((f,ii)=><li key={ii}>{f}</li>)}
              </ul>
              <button className="btn primary" style={{marginTop:12}}>Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
