import { createContext, useReducer } from "react";

 export const ToastContext = createContext(null);


 const initialToast =[]
 export function ToastProvider({children}){
    const [Toast, dispatch] = useReducer(
        ToastReducer,
        initialToast
    )

    return(
        <ToastContext.Provider value={{Toast, dispatch}}>
         {children}
        </ToastContext.Provider>
    )
 }

  function ToastReducer(Toasts, action){
  switch(action.type){

    // case'success':{
    //     return[
    //         ...Toasts,
    //         {
    //             id: new Date(),
    //             message: ' Succssefully Submit'
    //         }
    //     ]
    // }
    case'success':{
        return[
            ...Toasts,
            {
                id:action.id,
                message: action.meassage||' Succssefully Submit',
                duration: action.duration|| 3000,
            }
        ]
    }
    case'warning':{
        return[
            ...Toasts,
            {
                id: new Date(),
                message: 'warning'
            }
        ]
    }
    case'remove':
    return Toasts.filter((toast)=> toast.id !== action.id);

     default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
  }