// import Sidebar from "../src/Sidebar";
// import { useAuth } from "./context/AuthContext";

// export default function Dashboard() {
//   const { user } = useAuth();

//   return (
//     <div className="dashboard-container">
     
//       <div className="main-area">
//         <h2>Welcome, {user?.name}</h2>
//       </div>
//        <Sidebar />

//     </div>
//   );
// }


import Sidebar from "./Sidebar";
import { useAuth } from "./context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
     

      <div className="main-area">
        <h2>Welcome, {user?.user_metadata?.full_name || "User"} 👋</h2>

        {user?.user_metadata?.avatar_url && (
          <img 
            src={user.user_metadata.avatar_url} 
            alt="Profile" 
            width="60" 
            style={{ borderRadius: "50%", marginTop: "10px" }}
          />
        )}

        <p>Email: {user?.email}</p>
        <p>Email: {user?.email}</p>

      </div>
       <Sidebar />
    </div>
  );
}
