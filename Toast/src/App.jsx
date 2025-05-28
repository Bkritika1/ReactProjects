
import './App.css'
import Parent from './Parent'
import { ToastProvider } from './ToastContext'

function App() {

  return (
    <>
   <ToastProvider>
    <Parent/>
   </ToastProvider>
    </>
  )
}

export default App
