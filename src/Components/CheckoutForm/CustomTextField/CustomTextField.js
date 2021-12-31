import React from 'react'
import {useFormContext} from "react-hook-form"; 

import "./customTextField.css"

function CustomTextField({name, label}) {
    const { control } = useFormContext(); 

    return (
        <>
            <label id= "checkout-text-field-label">{label}</label>
            <input
            control={control}
            name = {name}
            />
        </>
    )
}

export default CustomTextField



