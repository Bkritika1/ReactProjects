import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrafficSources } from "../features/trafficsource/trafficSourceSlice";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const TrafficSourceChart = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.traffic);

  useEffect(() => {
    dispatch(fetchTrafficSources());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", width: '100%',margin: '1rem' }}>
      <h3>Traffic Sources</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={list}
            dataKey="value"
            nameKey="source"
             innerRadius={40}   // ⬅️ smaller inner radius
            outerRadius={100} 
            label
          >
            {list.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend  layout="vertical" verticalAlign="bottom" align="left"/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficSourceChart;
