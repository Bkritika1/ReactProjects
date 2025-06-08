// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// App.js
import React from 'react';
// import UsersList from './UseEffect/UsersList';
// import PostsList from './UseEffect/PostsList';
// import CommentsList from './UseEffect/CommentsList';
// import Local from './Storage/Local';
// import Local1 from './Storage/Local1';
// import Parent from './Parent';
import UseMemos from  './UseMemo'
import Dashboard from './Dashboard';
import Debounce from './Debounce';
import ResizeExample from './ResizeExample';
const App = () => {
  return (
    <div>
      {/* <UsersList />
      <PostsList />
      <CommentsList /> */}
      {/* <Local/>
      <Local1/> */}
      {/* <Parent/> */}
      <Dashboard/>
      <UseMemos/>
      <Debounce/>
      <ResizeExample/>
    </div>
  );
};

export default App;


//useGeolocation,usefetch, useLocalStorage, useSessionStorage, useWindowResize, useDebounce, useThrottle , useForm , useValidation, useHistory, useQuery * usefetch use local storage use seeeion storarage use window resize usedebouce usethrottle , useform , usevalidationgit add