import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./navbar.css"

//Icons 
import {HiShoppingCart} from "react-icons/hi"
import {CgPokemon} from "react-icons/cg"
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar({totalItems, width, products, setFilteredProducts}) {

    const [toggleNav, setToggleNav] = useState(true); 
    
    //Uselocation Hook instance of the location object
    const location = useLocation(); 

    return (
        <>
            {width > 800 ? 
        <nav id="navbar-wrapper" data-testid="navbar-test">
            <Link 
                to = "/"
                id="navbar-home-container"
                onClick={() => setFilteredProducts(products)}
                >
                <CgPokemon
                size={28}
                id="navbar-pokeball-icon"
                />
                <h1>Pokécards</h1>
            </Link>
           <div id="navbar-link-container">
               <Link to="/">About</Link>
               <Link to="/">Cards</Link>
               <Link to="/">Sealed product</Link>
               {location.pathname === '/' ? 
               <Link 
               to = "cart" 
               id = "navbar-checkout-container"
               onClick={() => setFilteredProducts(products)}
               >
                    <HiShoppingCart id="navbar-checkout-cart"size={30}/>
                    <span id="navbar-checkout-cart-amount-view">{totalItems}</span>
                </Link>
               :
               ""
               } 
           </div>
       </nav>    
        :
        <nav id="navbar-wrapper" data-testid="navbar-test">
            <Link 
                to = "/"
                id="navbar-home-container"
                onClick={() => setFilteredProducts(products)}
                >
                <CgPokemon
                size={28}
                id="navbar-pokeball-icon"/>
                <h1>Pokécards</h1>
            </Link>
            <div>
                <div className= {toggleNav ? 'mobile-nav-links mobile-nav-links-show' : 'mobile-nav-links mobile-nav-links-hidden'}>
                    <Link to="/">About</Link>
                    <Link to="/">Cards</Link>
                    <Link to="/">Sealed product</Link>
                </div>
                <div id = "hamburger-shoppingcart-wrapper">
                    <button onClick = {() => setToggleNav(!toggleNav)} id = "mobile-nav-hambuger-button">
                        <GiHamburgerMenu size={25}/>
                    </button>
                    {location.pathname === '/' ?
                    <Link 
                    onClick={() => setFilteredProducts(products)}
                    to = "cart" 
                    id = "navbar-checkout-container"
                    >
                        <HiShoppingCart id="navbar-checkout-cart"size={30}/>
                        <span id="navbar-checkout-cart-amount-view">{totalItems}</span>
                    </Link>
                    :
                    ""
                    }
                </div>
            </div>
        </nav> 
        }
    </>
    )
}

export default Navbar
