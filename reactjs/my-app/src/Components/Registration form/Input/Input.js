import React from 'react'
// import 'Input.scss'

function isInvalid({valid, shouldValidate, touched}) {
    return !valid && shouldValidate && touched
}

export default function Input(props) {

    const inputType = props.type || "text";
    const htmlFor =  `${inputType}-${Math.random()}`;
    
    const cls = isInvalid(props) ? "invalid" : "text"

    return (
        <div className={cls}>
            <label htmlFor = {htmlFor}>{props.label}</label>
            <input
                type={inputType}
                placeholder={props.placeholder}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            {isInvalid(props)
                ? <span>{props.errorMessage || "Invalid"}</span>
                : null
            }
        </div>
    )

}
