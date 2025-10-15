import React from 'react'
import { useAnimation } from '../context/AnimationContext'


export default function AnimationControls({ anim }){
const { speed, setSpeed } = useAnimation()


return (
<div className="controls">
<label>Speed: <strong>{speed.toFixed(1)}x</strong></label>
<input
type="range"
min="0.2"
max="3"
step="0.1"
value={speed}
onChange={(e)=> setSpeed(parseFloat(e.target.value))}
/>


{/* Animation-specific quick toggles */}
{anim.id === 'gravityBalls' && (
<div className="note">Tip: drag balls with mouse in canvas.</div>
)}
</div>
)
}