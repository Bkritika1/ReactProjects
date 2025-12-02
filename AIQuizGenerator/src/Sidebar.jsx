import { useState } from "react";
import { useAuth } from "./context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  const [page, setPage] = useState("home");

  return (
    <aside className="sidebar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("presentations")}>My Presentations</button>
      <button onClick={() => setPage("templates")}>Templates</button>
      <button onClick={logout}>Logout</button>
    </aside>
  );
}


// hiring@nexpro247.com
//anaxturia1@gmail.com