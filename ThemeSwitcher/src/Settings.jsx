// import { useContext } from "react"
// import { ThemeContext } from "./ThemeContext"

// export default function Settings(){
//     const {dispatch} = useContext(ThemeContext)
//     return(
//         <button onClick={()=>{
//             dispatch({
//                 type: 'changeTheme'
//             })
//         }}
        
//         >Theme</button>
//     )
// }
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Settings() {
    const { dispatch } = useContext(ThemeContext);

    return (
        <button  className="themebtn" onClick={() => dispatch({ type: 'changeTheme' })}>
            Theme
        </button>
    );
}
