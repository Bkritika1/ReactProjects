// // src/App.js
// import React, { useEffect } from 'react';
// import Header from './components/Header';
// import NotificationBanner from './components/NotificationBanner';
// import { useDispatch } from 'react-redux';
// import { login } from './features/auth/authSlice';
// import { showNotification } from './features/notifications/notificationSlice';
// import { setFeatureFlags } from './features/features/featureFlagsSlice';

// const App = () => {
//   const dispatch = useDispatch();

  

//   return (
//     <div>
//       <NotificationBanner />
//       <Header />
//       <main style={{ padding: '1rem' }}>
//         <p>This is the main content of the app.</p>
//       </main>
//     </div>
//   );
// };

// export default App;


// import React, { useEffect } from 'react';
// import Header from './components/Header';
// import NotificationBanner from './components/NotificationBanner';
// import { useDispatch } from 'react-redux';
// import { login } from './features/Auth/authSlice';
// import { showNotification } from './features/notifications/notificationSlice';
// import { setFeatureFlags } from './features/features/featuresFlagsSlice';

// const App = () => {
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(login({
//             name: "Jason"
//         }))
//         dispatch(showNotification({
//             message: "Logged in successfully",
//             type: "success"
//         }))
//         dispatch(setFeatureFlags({
//             newDashboard: true
//         }))
//     },[dispatch])

//     return (
//         <div>
//             <NotificationBanner />
//             <Header />
//             <main style={{ padding: '1rem' }}>
//                 <p>This is the main content of the app.</p>
//             </main>
//         </div>
//     );
// };

// export default App;

import React, { useState } from "react";
import NaiveImageList from "./NaiveImageList";
import VirtualizedImageList from "../src/VirtualizedImageList ";
import FPSMeter from "../src/FPSMeter";

export default function App() {
  const [mode, setMode] = useState("naive");

  return (
    <div style={{ padding: 20 }}>
      <h2>CMS Image Upload Performance Test (Render 20,000 items)</h2>

      <FPSMeter />

      <label className="switch">
        <input
          type="checkbox"
          onChange={() =>
            setMode(mode === "naive" ? "optimized" : "naive")
          }
        />
        <span className="slider"></span>
      </label>

      <strong style={{ marginLeft: 10 }}>
        {mode === "naive" ? "Naive Rendering (Slow)" : "Optimized Rendering (Fast 🔥)"}
      </strong>

      {mode === "naive" ? <NaiveImageList /> : <VirtualizedImageList />}
    </div>
  );
}
