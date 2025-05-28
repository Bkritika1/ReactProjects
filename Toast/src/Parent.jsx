import Form from "./Form"

import ToastList from "./ToastList" 

export default function Parent(){

return(
    <div className="parent">
        <h2>My Form</h2>
        <Form/>
        <ToastList/>
    </div>
)
}