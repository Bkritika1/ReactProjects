import { useState } from "react";
import Settings from "./Settings";

export default function Menu() {
    const[btn, setshowBtn] = useState(false);
     function showbtn(){
        setshowBtn(!btn)
     }
    return (
       <>
        <ul>
             <li>Profile</li>
            <li>Account</li>
            <li onClick={showbtn}>Settings</li>
        </ul>
        {btn   &&  <Settings/>}
       </>
    )

  
}