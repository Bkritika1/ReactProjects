import { useRef } from "react";

export default function Form(){
    const inputRef = useRef(null);




    function handleClick(){
        inputRef.current.focus();
    }


    return(
        <>
        <input ref={inputRef}/>
        <input placeholder="kkk"/>
        <button onClick={handleClick}></button>
        </>
    );
}