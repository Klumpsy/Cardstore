import React, {useState} from 'react'
import "../products.css"

import {HiShoppingCart} from "react-icons/hi"

function SingleProduct({product, addProduct}) {
    const [variant, setVariant] = useState({price: {formatted_with_symbol: `${product.price.formatted_with_symbol}`}}); 

    const checkCardStatus = () => { 
        return product.inventory.available === 0 ? "product-card-disabled" : "product-card-active"
    }

    const handleVariantUpgrade = (variant) => { 
        setVariant(variant)
    }

    return (
    <div key ={product.id} className= "product-item" data-testid = "product-shopping-card-test">
        <div className = {checkCardStatus()}></div>
        <img src={product.image["url"]}/>
        <h3>{product.name}</h3>
        <p>Available: {product.inventory.available > 0 ? product.inventory.available : "Out of stock"}</p>
        <p>{product.variant_groups.length < 1 ? product.price.formatted_with_symbol : variant.price.formatted_with_symbol}</p>
        <div id="variant-container">{product.variant_groups.length < 1 ? 
        ""
        : 
        product.variant_groups.map(group => (group.options.map(variantItem => 
            (<span 
            key = {variantItem.id}
            className = {variantItem.id === variant.id ? "product-chosen-variant product-variant" : "product-variant"}
            onClick = {() => handleVariantUpgrade(variantItem)}
            >
                {variantItem.name}
            </span>)
        )))}</div>
        <HiShoppingCart 
        className="product-shopping-card-icon"
        onClick = {() => {addProduct(product.id, 1, variant.id ? {vgrp_VKXmwDQJXorgDA: variant.id} : "")}}
        size ={25}/>
    </div>
    )
}

export default SingleProduct
