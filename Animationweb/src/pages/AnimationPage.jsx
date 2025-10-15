import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAnimation } from '../context/AnimationContext'
import AnimationCanvas from '../components/AnimationCanvas'
import AnimationControls from '../components/AnimationControls'


export default function AnimationPage(){
const { animId } = useParams()
const { getAnimationById, setSelectedAnimId } = useAnimation()
const anim = getAnimationById(animId)


useEffect(()=>{
setSelectedAnimId(animId)
},[animId])


if(!anim) return (
<div className="page">
<p>Animation not found. <Link to="/">Go back</Link></p>
</div>
)


return (
<div className="page animation-page">
<header className="anim-header">
<Link to="/">← Back</Link>
<h2>{anim.name}</h2>
<p className="muted">{anim.description}</p>
</header>


<AnimationControls anim={anim} />
<AnimationCanvas config={anim} />
</div>
)
}