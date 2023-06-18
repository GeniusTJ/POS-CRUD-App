import React from 'react'
import CartItem from './Cartitem';
import classes from './CartItemContainer.module.css';
const CartItemContainer = () => {
  return (
    <div className={classes.container}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
    </div>
  )
}

export default CartItemContainer