
import './App.css'
import Parent from './Parent'
import ShopProvider from './ShoppingContext'

function App() {
  

  return (
 <ShopProvider>
    <Parent/>
 </ShopProvider>
  )
}

export default App
