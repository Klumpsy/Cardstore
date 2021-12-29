import React from 'react'
import "./products.css"

import {HiShoppingCart} from "react-icons/hi"

function Products({products, addProduct}) {
    return (
        <main id="product-container" data-testid = "product-container-test">
            {products.map(product => ( 
                <div key ={product.id} id= "product-item" data-testid = "product-shopping-card-test">
                    <img src={product.image["url"]}/>
                    <h3>{product.name}</h3>
                    <p>€{product.price["raw"]},-</p>
                    <HiShoppingCart 
                    id="product-shopping-card-icon"
                    onClick = {() => addProduct(product.id, 1)}
                    size ={25}/>
                </div>
            ))}
        </main>
    )
}

export default Products
