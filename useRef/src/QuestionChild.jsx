


import { useEffect } from "react";

export default function QuestionChild() {

    useEffect(() => {
        console.log('Child Component Mounted');



        return() =>{
            console.log('child Component Unmounted');  
        }
        
    }, [])
    return (

        <h1>Child</h1>
    )
}