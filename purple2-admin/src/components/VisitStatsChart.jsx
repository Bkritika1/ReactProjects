import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVisitStats } from "../features/visitstatus/visitStatsSlice";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const VisitStatsChart = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.visitStats);

  useEffect(() => {
    dispatch(fetchVisitStats());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", width: '100%', margin: '1rem' }}>
      <h3>Visit And Sales Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={list}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="CHN" fill="#d678f4" />
          <Bar dataKey="USA" fill="#00cfff" />
          <Bar dataKey="UK" fill="#ffbd9b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitStatsChart;
