import React from 'react'
import "./products.css"

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
                </div>
            ))}
        </main>
    )
}

export default Products
