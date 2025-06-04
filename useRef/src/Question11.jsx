
        
// 11. Sync user preferences (like theme) with localStorage  
//    - When the user selects a theme, store it in localStorage. Use useEffect to read from localStorage on component mount and apply the stored theme if available.





// import { useEffect, useState } from "react";

// export default function Question11(){
// const[theme, setTheme] = useState('light')


// function handleTheme(){
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
// }

// useEffect(()=>{
//     const savedTheme = localStorage.getItem('theme')
//     if(savedTheme){
//         setTheme(savedTheme)
//     }
// }, [])

//  useEffect(()=>{
//     localStorage.setItem('theme', theme)
//  }, [theme])



//     return(
//         <>
//        <header className="{theme}">

//         <nav>
//             <ul>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Home</li>
//                 <li>Social</li>
//             </ul>
//         </nav>
//         <button onClick={handleTheme}>Toggle Theme</button>
//        </header>

//         </>
//     )
// }


import { useEffect, useState } from "react";

export default function Question11() {
  const [theme, setTheme] = useState("light");

  // Toggles between 'light' and 'dark' theme
  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // On component mount, read theme from localStorage and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Whenever theme changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className={theme}>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Home</li>
            <li>Social</li>
          </ul>
        </nav>
        <button onClick={handleTheme}>Toggle Theme</button>
      </header>
    </>
  );
}
