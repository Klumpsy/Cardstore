import React from 'react'
import "./products.css"

import {HiShoppingCart} from "react-icons/hi"

//Products 
import {singleCards} from './allProducts/singleCards'; 

function Products() {
    return (
        <main id="product-container">
            {singleCards.map(card => ( 
                <div key ={card.id} id= "product-item">
                    <img src={card.image}/>
                    <h3>{card.name}</h3>
                    <p>€{card.price},-</p>
                    <HiShoppingCart 
                    id="product-shopping-card-icon"
                    size ={25}/>
                </div>
            ))}
        </main>
    )
}

export default Products
