// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStats } from "../features/stats/statsSlice";

// const SummaryCards = () => {
//     const dispatch = useDispatch();
//     const { list, status } = useSelector((state) => state.stats);

//     useEffect(() => {
//         dispatch(fetchStats());
//     }, [dispatch]);

//     if (status === "loading") return <p>Loading...</p>;
//     if (status === "failed") return <p>Error loading stats</p>;

//     return (
//         <div className="flex flex-wrap gap-4 m-4">
//             {list.map((card) => (
//                 <div
//                     key={card.id}
//                     className={`p-6 rounded-xl text-white w-[300px] bg-gradient-to-r ${card.color}`}
//                 >
//                     <div className="flex justify-between items-center">
//                         <h3 className="text-lg">{card.title}</h3>
//                         <span className="text-2xl">{card.icon}</span>
//                     </div>
//                     <h2 className="text-3xl font-bold mt-4">{card.value}</h2>
//                     <p className="mt-2 text-sm">{card.change}</p>
//                 </div>
//             ))}
//         </div>

//     );
// };

// export default SummaryCards;


// SummaryCards.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../features/stats/statsSlice";
import "./SummaryCards.css"; // 👈 Import normal CSS

const SummaryCards = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.stats);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading stats</p>;

  return (
    <div className="summary-container">
      {list.map((card) => (
        <div
          key={card.id}
          className="summary-card"
            style={{ backgroundColor: card.bgColor }}
        >
          <div className="summary-header">
            <h3>{card.title}</h3>
            <span className="summary-icon">{card.icon}</span>
          </div>
          <h2>{card.value}</h2>
          <p>{card.change}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
