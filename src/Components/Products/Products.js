import React from 'react'
import "./products.css"

import {HiShoppingCart} from "react-icons/hi"

function Products({products, addProduct}) {

    return (
        <main id="product-container" data-testid = "product-container-test">
            {products.map(product => ( 
                <div key ={product.id} className= "product-item" data-testid = "product-shopping-card-test">
                     <div className = {product.inventory.available === 0 ? "product-card-disabled" : "product-card-active"}></div>
                    <img src={product.image["url"]}/>
                    <h3>{product.name}</h3>
                    <p>Available: {product.inventory.available}</p>
                    <p>€{product.price["raw"]},-</p>
                    <HiShoppingCart 
                    className="product-shopping-card-icon"
                    onClick = {() => addProduct(product.id, 1)}
                    size ={25}/>
                </div>
            ))}
        </main>
    )
}

export default Products
