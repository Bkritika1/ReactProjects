import Sidebar from "../src/Sidebar";
import { useAuth } from "./context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-area">
        <h2>Welcome, {user?.name}</h2>
      </div>
    </div>
  );
}
