import React from "react";

export default function Testimonials({ data }) {
  const items = data.items || [];
  return (
    <section className="testimonials">
      <div className="container">
        <h3 style={{marginBottom:18}}>{data.title}</h3>
        <div className="test-cards">
          {items.map((t,i)=>(
            <div className="card" key={i}>
              <p style={{color: 'var(--muted)'}}>"{t.quote}"</p>
              <div style={{display:'flex',gap:12,alignItems:'center',marginTop:12}}>
                <img src={t.avatar} alt="" style={{width:40,height:40,borderRadius:999}}/>
                <div>
                  <div style={{fontWeight:700}}>{t.name}</div>
                  <div style={{color:'var(--muted)',fontSize:13}}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
