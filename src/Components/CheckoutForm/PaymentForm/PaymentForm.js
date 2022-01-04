import React from 'react';
import {Elements, CardElement, ElementsConsumer, CardNumberElement} from '@stripe/react-stripe-js'; 
import {loadStripe} from '@stripe/stripe-js'; 

import Review from "../Review/Review"

import "./paymentForm.css"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); 

function PaymentForm({checkoutToken, shippingData, backStep, onCaptureCheckout, nextStep}) {

    const handleSubmit = async (event, elements,stripe) => { 
        event.preventDefault(); 
        if (!stripe || !elements) return; 

        const cardElement = elements.getElement(CardElement); 

        const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement}); 

        if(error) { 
            console.log(error)
        } else { 
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
                fulfillment: { shipping_method: shippingData.shippingOption },
                payment: {
                  gateway: 'test_gateway',
                  card: { 
                      number: '4242 4242 4242 4242', 
                      expiry_month:  '01',
                      expiry_year: '2023',
                      cvc: '123', 
                      postal_zip_code: "94103"
                  },
                },
              };
        
            onCaptureCheckout(checkoutToken.id, orderData); 
            nextStep(); 
        }
    }

    return (
        <div id= "payment-form-container">
            <>
                <Review checkoutToken = {checkoutToken}/>
                <h2 id="paymentform-title-method">Payment Method</h2>
                <div id="paymentform-stripe-payment">
                <Elements stripe={stripePromise}>
                    <ElementsConsumer>
                        {({elements, stripe}) => ( 
                            <form onSubmit = {(e) => handleSubmit(e, elements, stripe)}>
                                <CardElement />
                                <br/><br/>
                                <div> 
                                    <button 
                                    type = "submit" 
                                    disabled={!stripe}
                                    className = "checkout-payment-button"
                                    id = "checkout-payment-submit-pay-button"
                                    >
                                        Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                    </button>
                                </div>
                            </form>
                        )}
                    </ElementsConsumer>
                </Elements>    
                </div> 
                <button onClick = {backStep} className = "checkout-payment-button" id = "back-button">Back</button>
            </>
        </div>
    )
}

export default PaymentForm
