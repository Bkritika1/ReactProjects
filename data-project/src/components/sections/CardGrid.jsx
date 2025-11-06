// import React from "react";
// import StatsCard from "../sections/StatsCard";
// import ChartCard from "../sections/ChartCard";

// const cardTypes = {
//   StatsCard,
//   ChartCard,
// };

// export default function CardGrid({ cards = [], columns = 3 }) {
//   return (
//     <div className="card-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
//       {cards.map((card, i) => {
//         const Comp = cardTypes[card.type];
//         if (!Comp) return null;
//         return <Comp key={i} {...card} />;
//       })}
//     </div>
//   );
// }


// src/sections/CardGrid.jsx
// import React from "react";
// import StatsCard from "../sections/StatsCard";
// import ChartCard from "../sections/ChartCard";

// const cardTypes = {
//   StatsCard,
//   ChartCard,
// };

// export default function CardGrid({ cards = [], columns = 3 }) {
//   return (
//     <div
//       className="grid gap-6 p-4"
//       style={{
//         gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
//       }}
//     >
//       {cards.map((card, i) => {
//         const Comp = cardTypes[card.type];
//         if (!Comp) return null;
//         return <Comp key={i} {...card} />;
//       })}
//     </div>
//   );
// }


import React from "react";
import StatsCard from "./StatsCard";
import ChartCard from "./ChartCard";

const cardTypes = { StatsCard, ChartCard };

export default function CardGrid({ cards = [], columns = 3 }) {
  return (
    <div className="card-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {cards.map((card, i) => {
        const Comp = cardTypes[card.type];
        if (!Comp) return null;
        return <Comp key={i} {...card} />;
      })}
    </div>
  );
}
