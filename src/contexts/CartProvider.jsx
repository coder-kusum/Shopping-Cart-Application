import {createContext, useContext, useReducer} from 'react';

export const CartContext = createContext();

function cartReducer(cart, action){
    // if(action.type === "ADD_ITEM"){
    //     // return [...cart, action.payload];
    //     if(cart.length === 0){
    //       return [action.payload];
    //     }

    //     cart.map((product)=>{
    //       if(product.id === action.payload.id){
    //         console.log("Item already added in cart");
    //         return cart;
    //       }else{
    //         return [...cart, action.payload];
    //       }
    //     })
    //     return cart; 
    // }

    switch(action.type){
      case "ADD_ITEM": {
        return [...cart, action.payload];
      }

      case "INCREASE_QTY": {
        return cart.map((cartItem)=>{
          if(cartItem.id === action.payload.id){
            return {...cartItem, quantity:cartItem.quantity +1};
          }else{
            return cartItem;
          }
        })
      }

      case "DECREASE_QTY": {
        return cart.map((cartItem)=>{
          if(cartItem.id === action.payload.id){
            return {...cartItem, quantity:cartItem.quantity - 1};
          }else{
            return cartItem;
          }
        })
      }

      case "DELETE_ITEM": {
        return cart.filter((cartItem)=>{
          return cartItem.id !== action.payload.id;
        })
      }
   
    }
    console.log("reducer called");
    return cart;
}

function CartProvider({children}) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({type:"ADD_ITEM", payload:newCartItem});
  }

  const increaseQty = (id) => {
    dispatch({type:"INCREASE_QTY",payload:{id:id}});
  }

  const decreaseQty = (id) => {
    dispatch({type:"DECREASE_QTY",payload:{id:id}});
  }

  const deleteItem = (id) => {
    dispatch({type:"DELETE_ITEM", payload:{id:id}});
  }


  return (
    <CartContext.Provider value={{cart, addItemToCart, increaseQty, decreaseQty, deleteItem}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
    return useContext(CartContext);
} 

export default CartProvider
