import { useEffect } from "react";


export default function ConsoleLog(){
     useEffect(()=>{
console.log('ComponentMounted');

   },[])
    
  return(
    <h1>ComponentMounted</h1>
  )
}