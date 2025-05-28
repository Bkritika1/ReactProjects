import { useContext } from "react";
import { ToastContext,ToastProvider } from "./ToastContext";

export default function Form() {
    const {dispatch} = useContext(ToastContext)
    return (
        <form>
            <label>Name<input type="text" placeholder="name" /></label>
            <label>LastName<input type="text" placeholder="LastName" /></label>
            {/* <button onClick={(e) => {
                e.preventDefault();
                dispatch({
                    type: 'success',
                    // message: 'Submit Succssefully '
                })
            }}>

                Submit Form</button> */}

                {/* <button onClick={(e)=>{
         e.preventDefault();
         const id=  Date.now();
         dispatch({
            type: 'success',
            id,
            message: 'Success',
            duration: 3000,
         });
         setTimeout(()=>{
            dispatch({
                type: 'remove', id
            },3000)
         })
                }}>Submit Form</button> */}
                <button onClick={(e) => {
  e.preventDefault();
  const id = Date.now();
  dispatch({
    type: 'success',
    id,
    message: 'Success',
    duration: 3000,
  });

  setTimeout(() => {
    dispatch({ type: 'remove', id });
  }, 3000);
}}>Submit Form</button>
        </form>
    )
}