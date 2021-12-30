import React from 'react'
import {useForm, FormProvider} from 'react-hook-form'; 

import CustomTextField from '../CustomTextField/CustomTextField';

import "./addressForm.css"

function AddressForm() {
    const methods = useForm(); 

    return (
        <div id ="address-form-container">
            <h2>Shipping Address</h2>
            <FormProvider {...methods}>
                <form>
                    {/* <CustomTextField required name="firstName" label="First Name"/> */}

                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
