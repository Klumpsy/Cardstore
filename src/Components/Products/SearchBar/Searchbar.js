import React from 'react'
import "./searchbar.css"

export default function Searchbar({queryProducts}) {
    return (
        <div>
            <label for="search-input" id="search-input-label">
                Search: <input id="search-input" onChange ={(e) => queryProducts(e.target.value)}></input>
            </label>
        </div>
    )
}
