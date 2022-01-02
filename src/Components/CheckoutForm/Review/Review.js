import React from 'react'

import "./review.css"

function Review({checkoutToken}) {

    return (
        <div id="order-summery-container">
            <h2>Order Summery</h2>
            <div>
            {
                checkoutToken.live.line_items.map(product => (
                    <div key = {product.name}>
                        <span>{product.name}</span>
                        <span>{product.line_total.formatted_with_symbol}</span>
                    </div>
                ))
            }
            </div>
            <div>
                <h3>Total</h3>
                <span>{checkoutToken.live.subtotal.formatted_with_symbol}</span>
            </div>
        </div>
    )
}

export default Review
