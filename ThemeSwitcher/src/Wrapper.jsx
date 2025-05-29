import Header from "./Header";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Wrapper(){
    const{Theme} = useContext(ThemeContext)
    return(
        <div className="warapper" style={{
            ...Theme
        }}>
            
            <Header />
        </div>
    )
}