import React from 'react';
import Cart from "./Cart.jsx";
import Modal from "./UI/Modal.jsx";
import {useState, useEffect} from "react";
import styles from "./Header.module.css";
import Container from "./UI/Container.jsx";
import {BsCartFill} from "react-icons/bs";
import {useCart} from "../contexts/CartProvider";

function Header() {
  const {cart} = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalItems = cart.reduce((totalItems, currentItem)=>{
    return totalItems + currentItem.quantity;
  },0);

  function closeModal(){
    setIsModalOpen(false);
  }
  useEffect(()=>{
    console.log("isModalOpen value changed");
    if(isModalOpen === true){
      document.documentElement.style.overflowY = "hidden";
    }else{
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen])
  return (
    <header className={styles.header}>
      <container >
        <nav className={styles.nav}>
        <h1>ARC shop</h1>
        <button className={styles.showCartBtn} onClick={()=>{setIsModalOpen(true)}}>
          <span className={styles.cartIconAndNumber}>
            <BsCartFill />
            {totalItems>0 && (<span className={styles.number}>{totalItems}</span>)}
          </span>
          <span>Cart</span>
        </button>
      </nav>
      </container>
      
      {isModalOpen && <Modal closeModal={closeModal}>
        <Cart/>
      </Modal>}
      
    </header>
  )
}

export default Header
