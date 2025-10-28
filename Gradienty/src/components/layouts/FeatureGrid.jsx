// export default function FeatureGrid({ features, theme }) {
//   return (
//     <section className="features-grid">
//       {features.map((f, i) => (
//         <div key={i} className="feature-card fade-in" style={{ color: theme.text }}>
//           <h3 style={{ color: theme.primary }}>{f.title}</h3>
//           <p>{f.desc}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

import "../LandingPages.css";


export default function FeatureGrid({ data }) {
  return (
    <section className="features grid-3">
      {data.map((item, i) => (
        <div key={i} className="feature-item">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
