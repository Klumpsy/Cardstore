import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./navbar.css"

//Icons 
import {HiShoppingCart} from "react-icons/hi"
import {CgPokemon} from "react-icons/cg"

function Navbar({ totalItems }) {
    //Uselocation Hook instance of the location object
    const location = useLocation(); 

    return (
        <nav id="navbar-wrapper" data-testid="navbar-test">
                <Link 
                to = "/"
                id="navbar-home-container">
                    <CgPokemon
                    size={28}
                    id="navbar-pokeball-icon"/>
                    <h1>Pokécards</h1>
                </Link>
            <div id="navbar-link-container">
                <Link to="/">About</Link>
                <Link to="/">Cards</Link>
                <Link to="/">Sealed product</Link>
                {location.pathname === '/' ? 
                <Link to = "cart">
                <HiShoppingCart 
                id="navbar-checkout-cart"
                size={30}/>
                <span id="navbar-checkout-cart-amount-view">{totalItems}</span>
                </Link>
                :
                ""
                } 
            </div>
        </nav>
    )
}

export default Navbar
