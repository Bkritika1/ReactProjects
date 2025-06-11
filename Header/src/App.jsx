
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom"


function Home() {
  return (
    <h2>Home-Page</h2>
  )
}
function About() {
  return (
    <h2>About Page</h2>
  )
}

// function UserProfile(){
//   const {userId} = useParams();
//   return(
//     <h2>User Profile of {userId}</h2>
//   )
// }

function UserProfile(){
    const {userId} = useParams();
    return (
        <h2>User Profile of {userId}</h2>
    )
}


// function Navigation(){
//     return (
//         <nav>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//             </ul>
//         </nav>
//     )
// }


export default function App(){
    return (
        <Router>
            {/* <Navigation /> */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                {/* <Route path="/user/:userId" element={<UserProfile/>}/> */}
                <Route path="/user/:userId" element={<UserProfile />}/>
            </Routes>
        </Router>

    )
}
