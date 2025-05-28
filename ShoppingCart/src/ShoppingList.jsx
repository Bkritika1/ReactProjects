import { useContext } from "react"
import { ShopContext } from "./ShoppingContext"

export default function ShoppingList(){

    const {Item, dispatch} = useContext(ShopContext)
    const items = Item.Items; 
    return(
      <div className="shoppingList">
         <ul>
        {items.map((item)=>(
           <li key={item.id}>
  <img src={item.image} alt={item.name} width="60" style={{
    padding: '8px',
    marginRight: '10px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
  }}  />
  {item.name}
  <button className="addbutton" onClick={()=>{
    dispatch({
        type: 'added',
        item: item
    });
  }}>Add</button>
</li>
            
        ))}
       </ul>
      
      </div>
    )
}