import React from 'react'
import "./searchbar.css"

function Searchbar({products, setFilteredProducts}) {

    let productsFilter = (searchInput) => { 
        const filtered = products.filter(product => { 
            return product.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        setFilteredProducts(filtered);
    }

    return (
        <div>
            <label id="search-input-label">
                Search: <input id="search-input" onChange = {(e) => productsFilter(e.target.value)}></input>
            </label>
        </div>
    )
}

export default Searchbar
