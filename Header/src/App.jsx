
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams, Outlet } from "react-router-dom"


function Home() {
  return (
    <h2>Home-Page</h2>
  )
}
function About() {
  return (
    <div>
      <Outlet />
      <h2>About Page</h2>
    </div>
  )
}


function Team() {
  return (
    <h2>Team Page</h2>
  )
}
function History() {
  return (
    <h2>History Page</h2>
  )
}



function UserProfile() {
  const { userId } = useParams();
  return (
    <h2>User Profile of {userId}</h2>
  )
}

// function UserProfile(){
//     const {userId} = useParams();
//     return (
//         <h2>User Profile of {userId}</h2>
//     )
// }


function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

function Dashboard() {
  return (
    <h2>Dashboard</h2>
  )
}

function ProtectedRoute({ children, isLoggedIn }) {
  return (
    isLoggedIn ? children : <h2>please log in </h2>
  )
}


export default function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path='team' element={<Team />} />
          <Route path='history' element={<History />} />
        </Route>
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/dashboard" element=
          {<ProtectedRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </ProtectedRoute>} />
      </Routes>
    </Router>

  )
}
