import React from 'react';
import {useCart} from "../contexts/CartProvider.jsx";
import CartItem from "./CartItem.jsx";
import styles from "./Cart.module.css";

function Cart() {
  const {cart} = useCart();
 
  if(cart.length === 0) {
    return <h1>No items found!!</h1>
  }

  const totalAmount = cart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price*currentProduct.quantity;
  },0)
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
      <div>
        {cart.map((cartItem)=>{
          return <CartItem {...cartItem} key={cartItem.id}/>

        })}
      </div>
      <h1>Total Sum : &#8377; {totalAmount}</h1>
    </div>
  )
}

export default Cart;
