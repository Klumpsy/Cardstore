import React from 'react'
import "./products.css"

//Components
import Searchbar from './SearchBar/Searchbar'
import SingleProduct from './SingleProduct/SingleProduct'

function Products({products, addProduct, queryProducts}) {

    return (
        <main id="product-page-wrapper">
            <Searchbar queryProducts={queryProducts}/>
            <div id="product-container" data-testid = "product-container-test">
                {products.length > 0 ? products.map(product => (
                    <SingleProduct product = {product} addProduct = {addProduct}/>
                )): "Nothing found"}
            </div>
        </main>
    )
}

export default Products
