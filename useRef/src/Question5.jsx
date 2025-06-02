// 5. Track window resize and update the size in state  
//    - Use useEffect to add an event listener for the window 'resize' event. Update the width and height in state whenever the window resizes. Don’t forget to remove the event listener in the cleanup function.


import { useEffect, useState } from "react";

export default function Question5(){
   const[windowsetWidth, setWindowWidth] = useState({
    height: window.innerHeight,
    width: window.innerWidth
   })




function handleSize() {
  setWindowWidth({
    height: window.innerHeight,
    width: window.innerWidth
  });
}

useEffect(()=>{
    handleSize();
    window.addEventListener("resize", handleSize)
    
    return() =>{
        window.removeEventListener("resize", handleSize)
    }

   
},[]);

return (
  <>
    <h1>Width: {windowsetWidth.width}</h1>
<h1>Height: {windowsetWidth.height}</h1>

  </>
);

}