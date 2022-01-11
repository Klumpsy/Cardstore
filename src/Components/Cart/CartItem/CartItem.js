import React, {useEffect, useState} from 'react'

import "./cartItem.css"

//icons
import {RiDeleteBin2Fill} from "react-icons/ri"

function CartItem({item, handleUpdateCartQuantity, handleRemoveItemFromCart, commerce}) {

    const [availableProduct, setAvailableProduct] = useState()

    useEffect( async () => { 
        const product = await commerce.products.retrieve(item.product_id); 
        setAvailableProduct(product.inventory.available)
        console.log(product)
    }, [])

    function checkProductAvailability() { 
        if(item.quantity < availableProduct) { 
            handleUpdateCartQuantity(item.id, item.quantity + 1)
        } else { 
            alert("Sorry, we don't have anymore of those!")
            return
        }
    }

    return (
        <div id="cart-item">
            <div id="cart-item-info">
                <img id="cart-item-image" src={item.image.url}/>
                <div id ="cart-item-quantity">
                    <button 
                    id="cart-item-decrement-button"
                    onClick = {() => handleUpdateCartQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button 
                    id="cart-item-increment-button"
                    onClick = {() => checkProductAvailability()}
                    >+</button>
                </div>
                <span>{item.name}</span>
            </div>
            <div id="cart-item-price">
                {item.line_total.formatted_with_symbol}
            </div>
            <RiDeleteBin2Fill 
            id = "cart-item-remove-item-button"
            size = {25} 
            onClick = {() => handleRemoveItemFromCart(item.id)}/>
        </div>
    )
}

export default CartItem
