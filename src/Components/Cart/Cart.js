import React from 'react'

//Carditem 
import CartItem from './CartItem/CartItem';

function Cart({ cart }) {
    const cartIsEmpty = false; 

    const EmptyCard = () => ( 
        <div>
            <h2>Your Cart is Empty</h2>
        </div>
    )

    const FilledCard = () => ( 
        <div>
        {cart.map(cartItem => ( 
            <CartItem cartItemInfo = {cartItem}/>
        ))}
        </div>
    )

    return (
        <main id="cart-product-container">
            {cartIsEmpty ? <EmptyCard/> : <FilledCard/>}
        </main>
    )
}

export default Cart
