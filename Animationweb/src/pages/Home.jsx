import React from 'react'
import { Link } from 'react-router-dom'
import { useAnimation } from '../context/AnimationContext'


export default function Home(){
const { animationsData } = useAnimation()
return (
<div className="page home">
<header className="site-header">
<h1>Animations</h1>
</header>


<main>
<p className="subtitle">Choose an animation — all fully data-driven</p>
<div className="grid">
{animationsData.map(a => (
<Link to={`/animation/${a.id}`} className="card" key={a.id}>
<h3>{a.name}</h3>
<p>{a.description}</p>
</Link>
))}
</div>
</main>


<footer className="site-footer">Made with 💥 Matter.js</footer>
</div>
)
}