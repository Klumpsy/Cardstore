import React from 'react'
import {useFormContext, Controller} from "react-hook-form"; 

function CustomTextField({name, label, required}) {
    const { control } = useFormContext(); 

    return (
        <div>
            <Controller
                as = {<input/>}
                control={control}
                name = {name}
                label = {label}
                required = {required}
            />
        </div>
    )
}

export default CustomTextField

//https://react-hook-form.com/api/usecontroller/controller