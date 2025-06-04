
// 14. Toggle a component’s visibility and log mount/unmount events  
//    - Use a button to toggle showing and hiding a child component. Inside the child component, use useEffect to log messages when it mounts and when it unmounts (with cleanup).



import { useState } from "react";
import QuestionChild from "./QuestionChild";
export default function Question14Parent() {
    const [showChild, setShowChild] = useState(true)

    function handleShow() {
        setShowChild(!showChild)
    }



    return (

      <>

        <button  onClick={handleShow}>
       {showChild ? 'hide Child' : 'show Child'}

        </button>

       {showChild &&  <QuestionChild />}
      </>
    )
}