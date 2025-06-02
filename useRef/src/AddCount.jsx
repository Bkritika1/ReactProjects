import { useEffect, useState } from "react";

export default function  AddCount(){
    const[Count,SetCount] = useState(0);


    function handlecounts(){
  SetCount(Count +1)
    }
useEffect(()=>{
    console.log(`click the buuton ${Count}`);
    
},[Count])

    return(
   <button onClick={handlecounts}>ClickMe</button>
    )
}










// 2. Run effect when a button is clicked (e.g., log a message when count changes)  
//    - Create a counter using useState. Each time you click a button to increase the counter, use useEffect to log the updated count to the console. Add 'count' to the dependency array.



// 3. Set the document title based on state (like count or input)  
//    - Create a simple counter or input field, and use useEffect to update the page’s tab title using document.title whenever the state changes.










// 2. Run effect when a button is clicked (e.g., log a message when count changes)  
//    - Create a counter using useState. Each time you click a button to increase the counter, use useEffect to log the updated count to the console. Add 'count' to the dependency array.
