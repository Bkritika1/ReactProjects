import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AnimationPage from './pages/AnimationPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/animation/:animId" element={<AnimationPage />} />
    </Routes>
  )
}
