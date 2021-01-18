import React from 'react'
import './Button.scss'

export default function Button(props) {
    const type = props.type || "random";
    
    return (
        <div>
            <button className={`btn btn-${type}`}>
                {props.text}
            </button>
        </div>
    )
}
