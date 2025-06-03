
        
// 11. Sync user preferences (like theme) with localStorage  
//    - When the user selects a theme, store it in localStorage. Use useEffect to read from localStorage on component mount and apply the stored theme if available.





import { useEffect, useState } from "react";

export default function Question11(){
const[theme, setTheme] = useState('light')


function handleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light')
}





    return(
        <>
       <header>

        <nav>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Home</li>
                <li>Social</li>
            </ul>
        </nav>
        <button onClick={handleTheme}></button>
       </header>

        </>
    )
}