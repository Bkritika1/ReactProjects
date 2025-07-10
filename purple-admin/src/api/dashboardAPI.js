import axios from "axios";

export const fetchDashboardData = async () => {
  const res = await axios.get("/dashboard.json");
  return res.data;
};