import React, {useState, useEffect} from 'react'
import {useForm, FormProvider} from 'react-hook-form'; 
import { Link } from "react-router-dom"; 

import {commerce} from "../../../lib/commerce"

import CustomTextField from '../CustomTextField/CustomTextField';

import "./addressForm.css"

function AddressForm({checkoutToken, next}) {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');

    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');

    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm(); 

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
            <FormProvider {...methods}>
                <form id="checkout-form" onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption}))}>
                    <CustomTextField required name="firstName" label="First Name"/>
                    <CustomTextField required name="lastName" label="Last Name"/>
                    <CustomTextField required name="email" label="Email"/>
                    <CustomTextField required name="address1" label="Address"/>
                    <CustomTextField required name="city" label="City"/>
                    <CustomTextField required name="zip" label="ZIP/Postal Code"/>
                
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
            </FormProvider>
        </div>
    )
}

export default AddressForm
