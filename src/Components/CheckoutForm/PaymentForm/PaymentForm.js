import React from 'react';
import {Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js'; 
import {loadStrip} from '@stripe/stripe-js'; 

import Review from "../Review/Review"

import "./paymentForm.css"

function PaymentForm({checkoutToken}) {
    return (
        <div id= "payment-form-container">
            <>
                <Review checkoutToken = {checkoutToken}/>
            </>
        </div>
    )
}

export default PaymentForm
