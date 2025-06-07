
// 8. Create a debounced search input (use setTimeout and clearTimeout)  
//    - Make a search input field. When the user types, use a delay (e.g., 500ms) before updating a search result state. Use setTimeout in useEffect and clearTimeout in the cleanup function.


import { useEffect, useState } from "react";

 export default function Question8(){
  const[text, settext] = useState(0);
 const[searchResult, setsearchResult] = useState(0);


  function handleSearch(e){
  settext(e.target.value)
  }


  useEffect(()=>{
   const timeoutId = setTimeout(() => {
    setsearchResult(text);
   }, 500);

   return() =>{
    clearTimeout(timeoutId)
   }
  }, [text])

    return(
       <div>
        <label> SearchText :
            <input  value={text} onChange={handleSearch} type="text" placeholder="searchtext"/>

      </label>
      <p>Live Input: <strong>{text}</strong></p>
      <p>Debounced Search Result (500ms delay): <strong>{searchResult}</strong></p>
       </div>
    )
 }


  function Delay(){


   
  }