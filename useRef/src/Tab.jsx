// 3. Set the document title based on state (like count or input)  
//    - Create a simple counter or input field, and use useEffect to update the page’s tab title using document.title whenever the state changes.



import { useEffect,useState } from "react";


 export default function Tab(){
const[Count, setclick] = useState(0);


 function handleclick(){
    setclick(Count +1)
 }

 useEffect(()=>{
    document.title = `Count: ${Count}`;
 },[Count])
  return(
    <>
    <button onClick={handleclick}>yoclick</button>
    </>
  )
 }




  