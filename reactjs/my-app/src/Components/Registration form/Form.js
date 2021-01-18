import React from 'react'
import './Form.scss'

export default function Form(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<label htmlFor="name">First Name</label>
			<input type="text" name="name" onChange={props.handleChange} className={props.error} placeholder="Enter First Name" />
			{/* <span>This field is invalid</span> */}
			<label htmlFor="email">Email</label>
			<input type="email" name="email" onChange={props.handleChange} className={props.error} placeholder="Enter Email" />
			{props.show && <span>This field is invalid</span>}
			<label htmlFor="password">Password</label>
			<input type="password" name="password" onChange={props.handleChange} className={props.error} placeholder="Enter Password" />
			{/* <span>This field is invalid</span> */}
			<input type="checkbox" id="checkbox" name="check" value="check" />
			<label htmlFor="check">Remember me</label>
			<input type="submit" value="Sign up" id="submit" onClick={props.handleCheck} />
		</form>
	)
}
