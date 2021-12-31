import React, {useState, useEffect} from 'react';
import "./checkout.css";
import {commerce} from "../../../lib/commerce";

//Icons 
import {IoMdCheckmarkCircleOutline} from "react-icons/io";

//Components
import AddressForm from '../AddresForm/AddressForm';
import PaymentForm from "../PaymentForm/PaymentForm";
import Confirmation from "../Confirmation/Confirmation";

function Checkout({cart}) {
    const [activeStep, setActiveStep] = useState(0); 
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({}); 

    useEffect(() => { 
        const generateToken = async () => { 
            try { 
                const token = await commerce.checkout.generateToken(cart.id, {type:'cart'})
                console.log(token)
                setCheckoutToken(token)
            }
            catch (error) { 

            }
        }
        generateToken();
    },[cart])

    const nextStep = () => setActiveStep((previousActiveStep) => previousActiveStep + 1);
    const backStep = () => setActiveStep((previousActiveStep) => previousActiveStep - 1); 

    const next = (data) => { 
        setShippingData(data); 
        nextStep(); 
    }

    const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next}/> : <PaymentForm/>

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
                {activeStep === 2 ? <Confirmation/> : checkoutToken && <Form/>}
            </div>
        </main>
    )
}

export default Checkout
