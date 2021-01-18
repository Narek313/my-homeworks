import React from 'react'
import { totalPrice } from './Helpers'

export default function Total(props) {
    return (
        <div className = "total-section">
            <h2>Total : <span>{totalPrice(props.data)}</span></h2>
            <button className="Checkout">Check out</button>
        </div>
    )
}
