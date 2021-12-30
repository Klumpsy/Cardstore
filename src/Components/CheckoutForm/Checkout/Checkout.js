import React, {useState} from 'react'
import "./checkout.css"

//Icons 
import {IoMdCheckmarkCircleOutline} from "react-icons/io"

//Components
import AddressForm from '../AddresForm/AddressForm';
import PaymentForm from "../PaymentForm/PaymentForm"
import Confirmation from "../Confirmation/Confirmation"

function Checkout() {
    const [activeStep, setActiveStep] = useState(0); 

    const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm/>

    return (
        <main id="checkout-container">
            <h1>Checkout</h1>
            <div id="checkout-container-box">
                <div id="checkout-stepper-container">
                    <div className ="checkout-stepper-step-component">
                        <div className = {activeStep === 1 || activeStep === 2 ? "checkout-stepper-step-component-circle checkout-stepper-active" : "checkout-stepper-step-component-circle"}>
                        {activeStep === 1 || activeStep === 2 ? <IoMdCheckmarkCircleOutline size={25}/> : "1"}
                        </div>
                        <p>Shipping adress</p>
                    </div>
                    <div className= {activeStep === 1 || activeStep === 2 ? "checkout-stepper-line checkout-stepper-line-active" : "checkout-stepper-line"}></div>
                    <div className ="checkout-stepper-step-component">
                        <div className = {activeStep === 2 ? "checkout-stepper-step-component-circle checkout-stepper-active" : "checkout-stepper-step-component-circle"}>
                        {activeStep === 2 ? <IoMdCheckmarkCircleOutline size={25}/> : "2"}
                        </div>
                        <p>Payment details</p>
                    </div>
                </div>
                {activeStep === 2 ? <Confirmation/> : <Form/>}
            </div>
        </main>
    )
}

export default Checkout
