import React from 'react'
import "./navbar.css"

//Icons 
import {HiShoppingCart} from "react-icons/hi"
import {CgPokemon} from "react-icons/cg"

function Navbar({ totalItems }) {
    return (
        <nav id="navbar-wrapper" data-testid="navbar-test">
            <div  id="navbar-home-container">
                <CgPokemon
                size={28}
                id="navbar-pokeball-icon"/>
                <a>
                    <h1>Pokécards</h1>
                </a>
            </div>
            <div id="navbar-link-container">
                <a>About</a>
                <a>Cards</a>
                <a>Sealed product</a>
                <HiShoppingCart 
                id="navbar-checkout-cart"
                size={30}/>
                <span id="navbar-checkout-cart-amount-view">{totalItems}</span>
            </div>
        </nav>
    )
}

export default Navbar
