import React from 'react';

export default function PaletteToolbar({palettes, onApply, onOpen, sidebarOpen, onClose}){
  return (
    <>
      <div className="toolbar">
        <button className="palette-button" aria-label="Open palettes" onClick={onOpen}>
          🎨 Palettes
        </button>
        <div className="swatches">
          {palettes.slice(0,6).map((p, i) => (
            <button key={i} className="swatch" title={p.name} onClick={()=>onApply(p)}>
              <div className="swatch-strip">
                {p.colors.slice(0,5).map((c, j) => <span key={j} style={{background: c}} />)}
              </div>
            </button>
          ))}
        </div>
      </div>

      <aside className={`drawer ${sidebarOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>Palettes</h3>
          <button onClick={onClose} className="close">✕</button>
        </div>
        <div className="drawer-body">
          {palettes.map((p, idx) => (
            <div key={idx} className="palette-row" onClick={()=>onApply(p)}>
              <div className="palette-preview">
                {p.colors.map((c,i)=> <div key={i} style={{background:c}} className="preview-block" />)}
              </div>
              <div className="palette-meta">
                <div className="palette-name">{p.name}</div>
                <div className="palette-code">{p.colors.join(' · ')}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className={`backdrop ${sidebarOpen ? 'show' : ''}`} onClick={onClose}></div>
    </>
  );
}
