// // import { useState } from "react"
// // // import { useContext } from "react";
// // import { ShopContext } from "./ShoppingContext";


// // const {Shops} = useContext(ShopContext)
// // export function Cart() {

// //     const [item, setitem] = useState(0);


// //     return (

// //       <div className="cartdiv">

// //       </div>
// //     )
// // }

// import { useState, useContext } from "react";
// import { ShopContext } from "./ShoppingContext";

// export function Cart() {
//   // 1) import useContext
//   // 2) call it inside your component function
//   const { Shops, dispatch } = useContext(ShopContext);
//   const [itemCount, setItemCount] = useState(0);



//   return (
//     <div className="cartdiv">
//       {/* render cart contents and wire up remove buttons here */}
//     </div>
//   );
// }




// import { useContext } from "react";

// import { ShopContext } from "./ShoppingContext";

// export default function Cart(){
//     const {Item, dispatch} = useContext(ShopContext);
//     const {cart} =Item.Items;


//     return(
//         <div className="cartdiv">
//             <h3>Cart</h3>
//             <ul>
//                  {cart.map((Item) => (
//           <li key={Item.id}>
//             <img src={Item.image} alt={Item.name} width="50" />
//             {Item.name}
//             <button
//               onClick={() => {
//                 dispatch({
//                   type: 'removed',
//                   id: item.id
//                 });
//               }}
//             >
//               ❌
//             </button>
//           </li>
//         ))}
//             </ul>

//         </div>
//     )
// }

import { useContext } from "react";
import { ShopContext } from "./ShoppingContext";

export default function Cart() {
  const { Item, dispatch } = useContext(ShopContext);
  const { cart } = Item;

  return (
    <div className="cartdiv">
      <h3>Cart</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width="50" />
            {item.name}
            <button
              onClick={() => {
                dispatch({
                  type: 'removed',
                  id: item.id, 
                });
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
