import React from 'react'
import { Link } from 'react-router-dom'

import "./confirmation.css"

let Confirmation = ({order, error}) => (
    error ? 
    <div>
        <p>Error: {error}</p>
        <Link to = "/">Back to Home</Link>
    </div>
    :
    order.customer ? 
    <div id="confirmation-container">
            <h1>Thanks for your purchase at Pokécards!</h1>
            <p>We hope you enjoy your new cards {order.customer.firstname} {order.customer.lastname}!</p>
            <p>We will ship your cards (Order reference: {order.customer_reference}) as soon as we can.</p>
            <Link to = "/">Back to Home</Link>
    </div>
    :
    <div>
        Wait a second for your order to be processed.. 
    </div>
)

export default Confirmation
