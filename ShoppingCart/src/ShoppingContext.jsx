import { createContext, useReducer } from "react";

export const ShopContext = createContext(null);

export default function ShopProvider( {children}) {

    const [Item, dispatch] = useReducer(
        ShopRdeucer,
       ShoppingLists
    )
    return (
        <ShopContext.Provider value={{ Item, dispatch }}>
        {children}
        </ShopContext.Provider>
    )
}


function ShopRdeucer(itemss, action) {
 switch(action.type){
    case'added':
    return {
        ...itemss,
        cart:[...itemss.cart, action.item]
    };
    case 'removed':
        return{
            ...itemss,
            cart: itemss.cart.filter(item => item.id !== action.id)
        };
        default:
            return itemss;
 }
}



const ShoppingLists = {
    Items:[
        { image: 'https://images.unsplash.com/photo-1633536706502-8072f956614a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3Vya3VyZXxlbnwwfHwwfHx8MA%3D%3D', id: 0, name: 'kurkure' },
    { image: 'https://images.unsplash.com/photo-1638275995244-26a3f3a2ed49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpcnklMjBtaWxrfGVufDB8fDB8fHww', id: 1, name: 'chocolate' },
    { image: 'https://images.unsplash.com/photo-1618401375010-d0a57ec113fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG9mZmVlJTIwbmVzdGxlfGVufDB8fDB8fHww', id: 2, name: 'Coffee' },
    { image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1pbGt8ZW58MHx8MHx8fDA%3D', id: 4, name: 'Milk' },
    ],
    cart: []

}