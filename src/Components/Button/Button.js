import React from 'react'
import { useState } from 'react'

function Button() {
    const [value, setValue] = useState("press")

    const changeFunction = () => { 
        setValue("You clicked")
    }

    return (
        <button onClick ={changeFunction} title="dummyButton">
            {value}
        </button>
    )
}

export default Button
