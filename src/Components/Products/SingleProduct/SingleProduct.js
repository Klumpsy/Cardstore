import React, {useState, useEffect} from 'react'
import "../products.css"

import {HiShoppingCart} from "react-icons/hi"

function SingleProduct({product, addProduct}) {
    const [availableInventory, setAvailableInventory] = useState(product.inventory.available); 

    const checkCardStatus = () => { 
        return availableInventory === 0 ? "product-card-disabled" : "product-card-active"
    }

    useEffect(() => { 
        checkCardStatus()
    }, [availableInventory])

    return (
        <div key ={product.id} className= "product-item" data-testid = "product-shopping-card-test">
            <div className = {checkCardStatus()}></div>
            <img src={product.image["url"]}/>
            <h3>{product.name}</h3>
            <p>Available: {availableInventory > 0 ? availableInventory : "Out of stock"}</p>
            <p>€{product.price["raw"]},-</p>
            <HiShoppingCart 
            className="product-shopping-card-icon"
            onClick = {() => {addProduct(product.id, 1); setAvailableInventory(() => availableInventory -1)}}
            size ={25}/>
        </div>
    )
}

export default SingleProduct
