import React, {useState, useEffect, useReducer} from 'react'
import { Link } from "react-router-dom"; 

import {commerce} from "../../../lib/commerce"

import "./addressForm.css"

const initialState = {
    firstName: "",
    lastName: "", 
    email: "",
    address1: "", 
    city: "", 
    zip_postal: ""
}

const reducer = (state, action) => { 
    switch (action.type) { 
        case "update_input": 
            return { 
            ...state, 
            [action.key]: action.value
            }
        default: 
            return state
    }
}

function AddressForm({checkoutToken, next}) {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');

    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');

    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState); 

    //API calls to set Checkoutstate 
    //Function for fetching countries (set in JS commerce dashboard)
    const fetchShippingCountries = async (checkoutTokenId) => { 
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId); 
        setShippingCountries(countries); 
        setShippingCountry(Object.keys(countries)[0]); 
    }
    //Function for fetching subdivisions (depending on set country state)
    const fetchSubdivisions = async (countryCode) => { 
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode); 
        setShippingSubdivisions(subdivisions); 
        setShippingSubdivision(Object.keys(subdivisions)[0]); 
    }
    //Function for fetching ShippingOptions (depending on set country state)
    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => { 
        const shippingOptions = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region}); 
        setShippingOptions(shippingOptions); 
        setShippingOption(shippingOptions[0].id)
    }

    //Function for submitting the From 
    const handleSubmitClick = (e) => { 
        e.preventDefault(); 
        next({ ...state, shippingCountry, shippingSubdivision, shippingOption})
    }

    useEffect(() => { 
        fetchShippingCountries(checkoutToken.id);
    }, [])

    useEffect(() => { 
       if (shippingCountry) fetchSubdivisions(shippingCountry);
    },[shippingCountry])

    useEffect(() => { 
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
     },[shippingSubdivision])

    return (
        <div id ="address-form-container">
            <h2>Shipping Address</h2>
                <form id="checkout-form" onSubmit={handleSubmitClick}>
                    <label id= "checkout-text-field-label">
                        <p>First Name</p>
                        <input 
                        id ="checkout-input-field"
                        name = "firstname"
                        value = {state.firstName}
                        onChange = {(e) => dispatch({
                            type: "update_input", 
                            value: e.target.value, 
                            key: "firstName"
                        })}
                        />
                    </label>
                    <label id= "checkout-text-field-label">
                        <p>Last Name</p>
                        <input 
                        id ="checkout-input-field"
                        name = "lastName"
                        value = {state.lastName}
                        onChange = {(e) => dispatch({
                            type: "update_input", 
                            value: e.target.value, 
                            key: "lastName"
                        })}
                        />
                    </label>
                    <label id= "checkout-text-field-label">
                        <p>Email</p>
                        <input 
                        id ="checkout-input-field" 
                        type="email"
                        name = "email"
                        value = {state.email}
                        onChange = {(e) => dispatch({
                            type: "update_input", 
                            value: e.target.value, 
                            key: "email"
                        })}
                        />
                    </label>
                    <label id= "checkout-text-field-label">
                        <p>Address</p>
                        <input 
                        id ="checkout-input-field"
                        name = "address1"
                        value = {state.address1}
                        onChange = {(e) => dispatch({
                            type: "update_input", 
                            value: e.target.value, 
                            key: "address1"
                        })}
                        />
                    </label>
                    <label id= "checkout-text-field-label">
                        <p>City</p>
                        <input 
                        id ="checkout-input-field"
                        name = "city"
                        value = {state.city}
                        onChange = {(e) => dispatch({
                            type: "update_input", 
                            value: e.target.value, 
                            key: "city"
                        })}
                        />
                    </label>
                    <label id= "checkout-text-field-label">
                        <p>ZIP/Postal code</p>
                        <input 
                        id ="checkout-input-field"
                        name = "zip_postal"
                        value = {state.zip_postal}
                        onChange = {(e) => dispatch({
                            type: "update_input", 
                            value: e.target.value, 
                            key: "zip_postal"
                        })}
                        />
                    </label>
                    <div id="select-field-container">
                        <select className = "select-field" value={shippingCountry} onChange ={(e) => setShippingCountry(e.target.value)}>
                            {
                                Object.entries(shippingCountries).map(country => ( 
                                    <option key={country[0]} value={country[0]}>{country[1]}</option>
                                ))
                            }
                        </select>
                        <select className = "select-field" value={shippingSubdivision} onChange ={(e) => setShippingSubdivision(e.target.value)}>
                            {
                                Object.entries(shippingSubdivisions).map(subdivision => ( 
                                    <option key={subdivision[0]} value={subdivision[0]}>{subdivision[1]}</option>
                                ))
                            }
                        </select>
                  
                        <select className = "select-field" value={shippingOption} onChange ={(e) => setShippingOption(e.target.value)}>
                            {
                                shippingOptions.map(option => ( 
                                    <option key={option} value={option}>{`${option.description}: ${option.price.formatted_with_symbol}`}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div id="shipping-buttons-container">
                        <Link
                        className= "cart-checkout-button"
                        id = "cart-back-to-cart-button"
                        to = "/cart"
                        >Back to cart</Link>
                        <button
                        className= "cart-checkout-button"
                        id = "cart-shipping-to-payment-button"
                        type = "submit"
                        >next</button>
                    </div>
                </form>
        </div>
    )
}

export default AddressForm

