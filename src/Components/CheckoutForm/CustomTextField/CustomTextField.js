import React from 'react'
import {useFormContext, Controller} from "react-hook-form"; 

import "./customTextField.css"

function CustomTextField({name, label}) {
    const { control } = useFormContext(); 
    const isError = false; 

    return (
        <div id="custom-text-field-container">
            <Controller
                control={control}
                name = {name}
                error={isError}
                render={
                    () => 
                    <>
                    <label id= "checkout-text-field-label">{label}</label>
                    <input id ="checkout-input-field"/>
                    </>
                  }
            />
        </div>
    )
}

export default CustomTextField



