// import React from "react";

// export default function ChartCard({ title, value, percentage }) {
//   return (
//     <div className="card chart-card">
//       <h3>{title}</h3>
//       <h2>{value}</h2>
//       <div
//         className="circle"
//         style={{
//           background: `conic-gradient(#4e5eff ${percentage}%, #e0e0e0 ${percentage}%)`,
//           width: 100,
//           height: 100,
//           borderRadius: "50%",
//         }}
//       />
//     </div>
//   );
// }


// src/sections/ChartCard.jsx
// import React from "react";

// export default function ChartCard({ title, value, chartType = "donut", percentage = 0, label }) {
//   const donut = `conic-gradient(#4e5eff ${percentage * 3.6}deg, #e0e0e0 ${percentage * 3.6}deg)`;

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center justify-center">
//       <h3 className="text-gray-600 text-sm">{title}</h3>
//       <h2 className="text-2xl font-semibold mt-2">{value}</h2>

//       <div
//         className="relative mt-4"
//         style={{
//           width: 120,
//           height: 120,
//           borderRadius: "50%",
//           background: chartType === "donut" ? donut : "#e0e0e0",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {chartType === "donut" && (
//           <span className="absolute text-sm text-gray-700">{percentage}%</span>
//         )}
//       </div>

//       {label && <p className="text-xs text-gray-400 mt-3">{label}</p>}
//     </div>
//   );
// }


// import React from "react";

// export default function ChartCard({ title, value, chartType, percentage, label }) {
//   return (
//     <div className="card chart-card">
//       <h3>{title}</h3>
//       <div className="chart-wrapper">
//         {chartType === "donut" && (
//           <div
//             className="circle donut"
//             style={{
//               background: `conic-gradient(#233cff ${percentage}%, #e6e6e6 ${percentage}%)`
//             }}
//           >
//             <div className="inner">
//               <h4>{value}</h4>
//               <span>{label}</span>
//             </div>
//           </div>
//         )}

//         {chartType === "pie" && (
//           <div
//             className="circle pie"
//             style={{
//               background: `conic-gradient(#233cff ${percentage}%, #00ccff ${percentage}% 20%, #e6e6e6 85%)`
//             }}
//           >
//             <div className="pie-labels">
//               <div><span className="dot usd"></span> USD</div>
//               <div><span className="dot gbp"></span> GBP</div>
//               <div><span className="dot kin"></span> KIN</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function ChartCard({
  title,
  value,
  chartType,
  percentage,
  label,
  segments = []
}) {
  // helper to build gradient from data
  const getGradient = () => {
    let start = 0;
    return segments
      .map((seg) => {
        const end = start + seg.value;
        const str = `${seg.color} ${start}% ${end}%`;
        start = end;
        return str;
      })
      .join(", ");
  };

  return (
    <div className="card chart-card">
      <h3>{title}</h3>

      <div className="chart-wrapper">
        {/* ✅ DATA-DRIVEN DONUT (HALF-CIRCLE) */}
        {chartType === "donut" && segments.length > 0 && (
          <div className="half-donut">
            <div
              className="half-donut-visual"
              style={{
                background: `conic-gradient(${getGradient()})`
              }}
            ></div>

            <div className="half-donut-inner">
              <h4>{value}</h4>
              <span>{label}</span>
            </div>

            <div className="half-donut-labels">
              {segments.map((seg, i) => (
                <div key={i} className="label-row">
                  <span
                    className="dot"
                    style={{ background: seg.color }}
                  ></span>
                  {seg.label} — {seg.value}%
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ✅ PIE (already data-driven) */}
        {chartType === "pie" && segments.length > 0 && (
          <div className="circle pie">
            <div
              className="pie-visual"
              style={{
                background: `conic-gradient(${getGradient()})`
              }}
            />
            <div className="pie-labels">
              {segments.map((seg, i) => (
                <div key={i}>
                  <span className="dot" style={{ background: seg.color }}></span>
                  {seg.label} — {seg.value}%
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
