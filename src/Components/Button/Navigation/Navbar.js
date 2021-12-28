import React from 'react'
import "./navbar.css"

//Icons 
import {HiShoppingCart} from "react-icons/hi"
import {CgPokemon} from "react-icons/cg"

function Navbar() {
    return (
        <nav id="navbar-wrapper">
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
                id="navbar-checkout-card"
                size={30}/>
            </div>
        </nav>
    )
}

export default Navbar
