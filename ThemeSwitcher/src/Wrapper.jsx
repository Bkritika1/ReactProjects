import Header from "./Header";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Countries from "./Countries";
import LoginForm from "./Countries";
export default function Wrapper(){
    const{Theme} = useContext(ThemeContext)
    return(
        <div className="warapper" style={{
            ...Theme
        }}>
            
            <Header />
            <Countries/>
            <LoginForm/>
        </div>
    )
}