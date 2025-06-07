import useLocalStorage from "../uselocalstorage"


export default function Local1(){
const [text1, SetText] = useLocalStorage('mytext2', '')

    return(

        <>
        <label>
            checkingthe  hook
            <input value={text1} onChange={(e)=> SetText(e.target.value)} placeholder="hey type something..."/>
        </label>
        </>
    )
}