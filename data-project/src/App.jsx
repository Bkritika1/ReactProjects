import React, { useState } from "react";
import LandingRenderer from "./LandingRenderer";
import fintechData from "./data/fintech.json";
import foodData from "./data/foodApp.json";

export default function App(){
  const pages = [
    {id: fintechData.id, name: "Fintech (Velo)", data: fintechData},
    {id: foodData.id, name: "Food App", data: foodData}
  ];
  const [active, setActive] = useState(pages[0].id);

  const pageData = pages.find(p => p.id === active).data;

  return (
    <div>
      {/* Top small switcher */}
      <div style={{padding:12,background:'#f7f9ff',borderBottom:'1px solid #eef5ff'}}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{fontWeight:700}}>Landing Builder Preview</div>
          <div style={{display:'flex',gap:8}}>
            {pages.map(p => (
              <button
                key={p.id}
                onClick={()=>setActive(p.id)}
                className={`btn ${p.id===active ? 'primary' : 'ghost'}`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Renderer */}
      <LandingRenderer pageData={pageData}/>
    </div>
  );
}
