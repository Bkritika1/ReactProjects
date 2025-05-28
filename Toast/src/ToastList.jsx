import { useContext } from "react"
import { ToastContext, ToastProvider } from "./ToastContext"
export default function ToastList() {
 
    const {Toast} = useContext(ToastContext)

    return (
            <div className="Toasts">
        <ul>

            {
                Toast.map((toast) => (
                    <li key={toast.id}>{toast.message}</li>
                ))
            }
        </ul>
        </div>
    )
}