// 9. Toggle between dark and light theme and apply class to body  
//    - Create a button to toggle between 'dark' and 'light' themes. Use useEffect to apply a class to the <body> tag based on the current theme state.


import { ueseffect, useEffect, useState } from "react";

 export default function Question9() {
    const [Theme, setTheme] = useState('light')


    function handleTheme(){
        setTheme(Theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() =>{
     document.body.className = Theme;
    }, [Theme])


    return (
        <>
        <div>
            <h1>Theme : {Theme}</h1>
  <button onClick={handleTheme}>change Theme</button>
        </div>
       
        </>

    )
}