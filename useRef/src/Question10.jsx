

// 10. Track and display mouse position using an event listener  
//    - Use useEffect to add an event listener for 'mousemove'. Update the X and Y position in state and display them on screen. Clean up the listener when the component unmounts.

import { useEffect, useState } from "react";

export default function Question10() {
const[position , setPosition] = useState({
    x: 0, 
    y: 0
})

function handleMouse(e){

    setPosition({
        x : e.clientX,
        y : e.clientY
    })
}

    useEffect(()=>{
window.addEventListener('mousemove' , handleMouse)
return() => {
    window.removeEventListener('mousemove', handleMouse)
}

    },[])

    return (
        <>

        <div style={{width:'400px', height:'400px', border:'1px solid black',}}>

            <h2>MousePosition</h2>
            <p>X: {position.x}</p>
            <p>Y: {position.y}</p>
        </div>
        </>

    )
}