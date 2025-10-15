import React, { createContext, useContext, useState } from 'react'
import { animationsData } from '../data/animationData'


const AnimationContext = createContext()


export const AnimationProvider = ({ children }) => {
const [speed, setSpeed] = useState(1) // timeScale for matter
const [selectedAnimId, setSelectedAnimId] = useState(null)


const getAnimationById = (id) => animationsData.find(a => a.id === id)


return (
<AnimationContext.Provider value={{ animationsData, speed, setSpeed, selectedAnimId, setSelectedAnimId, getAnimationById }}>
{children}
</AnimationContext.Provider>
)
}


export const useAnimation = () => useContext(AnimationContext)