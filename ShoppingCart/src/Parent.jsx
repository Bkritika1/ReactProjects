import  Cart  from "./Cart";
import ShoppingList from "./ShoppingList";

export default function Parent(){
    return(
      <div className="wrap">

         <div className="parentdiv">
            <h3>
                ShoppingList
            </h3>
<ShoppingList/>

        </div>
        <Cart/>
      </div>
    )
}