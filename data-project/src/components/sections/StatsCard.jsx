// import React from "react";

// export default function StatsCard({ title, value, subtext }) {
//   return (
//     <div className="card stats-card">
//       <h3>{title}</h3>
//       <h2>{value}</h2>
//       <p>{subtext}</p>
//     </div>
//   );
// }


// src/sections/StatsCard.jsx
// import React from "react";

// export default function StatsCard({ title, value, subtext, growth }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between">
//       <div>
//         <h3 className="text-gray-500 text-sm">{title}</h3>
//         <h2 className="text-2xl font-semibold mt-1">{value}</h2>
//       </div>

//       {growth && (
//         <p className="text-green-600 text-xs mt-1">
//           ↑ {growth}% increase
//         </p>
//       )}

//       <p className="text-gray-400 text-sm mt-2">{subtext}</p>
//     </div>
//   );
// }


import React from "react";

export default function StatsCard({ title, value, subtext, growth }) {
  return (
    <div className="card stats-card">
      <div className="stats-top">
        <h3>{title}</h3>
        <span className="growth">+{growth}%</span>
      </div>
      <h2 className="value">{value}</h2>
      <p className="subtext">{subtext}</p>
    </div>
  );
}
