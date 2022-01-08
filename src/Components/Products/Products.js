import React from 'react'
import "./products.css"

//Components
import Searchbar from './SearchBar/Searchbar'
import SingleProduct from './SingleProduct/SingleProduct'

function Products({products, addProduct, filteredProducts, setFilteredProducts}) {

    return (
        <main id="product-page-wrapper">
            <Searchbar products = {products} setFilteredProducts = {setFilteredProducts}/>
            <div id="product-container" data-testid = "product-container-test">
                {filteredProducts.length > 0 ? filteredProducts.map(filteredProduct => (
                    <SingleProduct key = {filteredProduct.id} product = {filteredProduct} addProduct = {addProduct}/>
                )): "Nothing found"}
            </div>
        </main>
    )
}

export default Products
