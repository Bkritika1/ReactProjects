// 12. Auto-save form input to localStorage after delay  
//    - Create a form input. Every time the user types, wait a short delay (e.g., 1 second) and then save the input value to localStorage using useEffect.





// import { useEffect, useState } from "react";

// export default function Question12(){

// const[text, setText] = useState('')


// function handleText(e){
//     setText(e.target.value)

// }

// useEffect(() => {
//     settimeout(()=>{
//     localStorage.setItem('text', text)

//     },1000)

    
// }, [text])


//     return(
// <label>Text
//     <input  onChange={handleText} type="text" placeholder="Type text....."/>{text}
//     </label>

//     )
// }


import { useEffect, useState } from "react";

export default function Question12() {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    // ✅ Start a timeout to save text after 1 second
    const timeoutId = setTimeout(() => {
      localStorage.setItem("text", text);
    }, 1000);

    // ❌ Clear previous timeout if user types again before 1 second
    return () => {
      clearTimeout(timeoutId);
    };
  }); // Run this effect every time text changes

  return (
    <label>
      Text:
      <input
        onChange={handleText}
        type="text"
        placeholder="Type text....."
      />
      {text}
    </label>
  );
}
