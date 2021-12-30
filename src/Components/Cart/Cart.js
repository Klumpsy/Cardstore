import React from 'react'
import "./cart.css"
import { Link } from 'react-router-dom';

//Cartitem 
import CartItem from './CartItem/CartItem';

function Cart({ cart, handleUpdateCartQuantity, handleRemoveItemFromCart, handleEmptyCart }) {
    
    const EmptyCard = () => ( 
        <div className = "cart-checkout-box">
            <Link id="cart-empty-back-link" to ="/">Your cart is empty, start adding cards :)</Link>
        </div>
    )

    const FilledCard = () => (
        <div className = "cart-checkout-box">
            <div>
            {
               cart.line_items.map(item => ( 
                    <CartItem 
                    key ={item.id} 
                    item = {item}
                    handleUpdateCartQuantity = {handleUpdateCartQuantity}
                    handleRemoveItemFromCart = {handleRemoveItemFromCart}
                    />
               ))
            }
            </div>
            <div id="cart-checkout-subtotal">
                <div id="cart-checkout-buttons">
                    <button 
                    className ="cart-button" 
                    id="cart-empty-cart-button"
                    onClick = {handleEmptyCart}
                    >Empty Cart</button>
                    <button 
                    className ="cart-button" 
                    id="cart-checkout-button"
                    >Checkout</button>
                </div>
                <div id="cart-checkout-subtotal-price">
                    <h3>Subtotal: </h3>
                    <span>{cart.subtotal.formatted_with_symbol}</span>
                </div>
            </div>
        </div>
    )

    if(!cart.line_items) return <div id="cart-checkout-loading">Loading your cart...</div>

    return (
        <main id="cart-checkout-container">
            {!cart.line_items.length ? <EmptyCard/> : <FilledCard/>}
        </main>
    )
}

export default Cart
