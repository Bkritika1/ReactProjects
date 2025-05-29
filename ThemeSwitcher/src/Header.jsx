import { useState } from "react"
import Menu from "./Menu";
export default function Header(){
  const[menu, setMenu] = useState(false);

 function ShowMenu(){
  setMenu(!menu)
 }

    return(
       <>
        <header>
        <button onClick={ShowMenu}>KS</button>
<nav>
  <ul>
    <li>About</li>
    <li>Contact</li>
    <li>Home</li>
    <li>Resume</li>
  </ul>
</nav>
        </header>
 {menu && <Menu />}
       </>
    )
   
}





/* app.js (theme state with some initial value)
- header with some button/icon
- on click of this button
- menu component will render in app.js
- menu have multiple options like accounts, profile and theme
- on click theme option
- look and feel component will render
- theme toggle button will get rendered
- onlclick of this button theme state mentioned inside app.js should get changed
-MainApp.js
  - header.js
    - menu.js
      - look and feel.js
        - themeSwitcher.js
          - themswi
MainApp.js
  - header.js
    - menu.js
      - look and feel.js
        - themeSwitcher.js
          - themswitch button.js */