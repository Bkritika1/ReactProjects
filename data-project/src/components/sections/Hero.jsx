// import React from "react";

// export default function Hero({ data, layout, style }) {
//   const d = data || {};
//   // supports layout "left-image", "center"
//   return (
//     <section className="hero" style={style}>
//       <div className="container" style={{display:'flex',gap:40,alignItems:'center'}}>
//         <div className="left" style={{flex:1}}>
//           <h1 className="title">{d.title}</h1>
//           <p className="subtitle">{d.subtitle}</p>
//           <div className="cta-row">
//             <button className="btn primary">{d.ctaPrimary}</button>
//             {d.ctaSecondary && <button className="btn ghost">{d.ctaSecondary}</button>}
//           </div>
//         </div>

//         <div className="right">
//           <div className="hero-right">
//             <div className="phone">
//               <img src={d.image} alt="app" style={{width:'100%'}}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from "react";

// export default function Hero({ data, layout = "right-image", style }) {
//   const d = data || {};

//   // determine layout style
//   const isCentered = layout === "center";
//   const isLeft = layout === "left-image";

//   const containerStyle = {
//     display: "flex",
//     flexDirection: isCentered ? "column" : isLeft ? "row-reverse" : "row",
//     alignItems: "center",
//     justifyContent: isCentered ? "center" : "space-between",
//     gap: "40px",
//     padding: "60px 20px",
//   };

//   return (
//     <section className={`hero ${layout}`} style={style}>
//       <div className="container" style={containerStyle}>
//         {/* Left content */}
//         <div className="hero-text" style={{ flex: 1, textAlign: isCentered ? "center" : "left" }}>
//           <h1 className="title">{d.title}</h1>
//           <p className="subtitle">{d.subtitle}</p>

//           {d.ctaPrimary && (
//             <div className="cta-row" style={{ marginTop: 20 }}>
//               <button className="btn primary">{d.ctaPrimary}</button>
//               {d.ctaSecondary && <button className="btn ghost">{d.ctaSecondary}</button>}
//             </div>
//           )}
//         </div>

//         {/* Right image */}
//         {d.image && (
//           <div className="hero-image" style={{ flex: 1 }}>
//             <img src={d.image} alt="hero" style={{ width: "100%", borderRadius: "10px" }} />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



import React from "react";

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  image,
  layout = "right-image",
  style
}) {
  // determine layout style
  const isCentered = layout === "center";
  const isLeft = layout === "left-image";

  const containerStyle = {
    display: "flex",
    flexDirection: isCentered ? "column" : isLeft ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: isCentered ? "center" : "space-between",
    gap: "40px",
    padding: "60px 20px",
  };

  return (
    <section className={`hero ${layout}`} style={style}>
      <div className="container" style={containerStyle}>
        {/* Left content */}
        <div className="hero-text" style={{ flex: 1, textAlign: isCentered ? "center" : "left" }}>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>

          {ctaPrimary && (
            <div className="cta-row" style={{ marginTop: 20 }}>
              <button className="btn primary">{ctaPrimary}</button>
              {ctaSecondary && <button className="btn ghost">{ctaSecondary}</button>}
            </div>
          )}
        </div>

        {/* Right image */}
        {image && (
          <div className="hero-image" style={{ flex: 1 }}>
            <img src={image} alt="hero" style={{ width: "100%", borderRadius: "10px" }} />
          </div>
        )}
      </div>
    </section>
  );
}
