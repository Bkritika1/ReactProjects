
// import LandingPage from './LandingPage'

// function App() {

//   return (
//     <>
//    <LandingPage/>
//     </>
//   )
// }

// export default App

import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginModal from "./LoginModal";
import Dashboard from "./Dashboard";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginModal />} />

      {/* Protected Route */}
     <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}



//KITTU@844558