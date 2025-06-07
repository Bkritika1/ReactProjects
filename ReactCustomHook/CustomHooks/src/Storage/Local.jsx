import { useState } from "react"
import useLocalStorage from "../uselocalstorage"

//  import {useLocalStorage} from './useLocalStorage'
export default function Local(){

const[text , setText] = useLocalStorage('myText' , '')
    // const{} =useLocalStorage();


    return(
     <>
     <label>Set Text in Local Storage......:
     <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="text..."/>
     </label>
     </>

    )
}


