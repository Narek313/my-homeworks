import React, { Component } from 'react'
import './App.css'
import Button from './button/Button';
import Input from './Input/Input';
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

    const API = process.env.REACT_APP_API_KEY
    console.log(API)
export default class App extends Component {
    state={
        isFormValid: false,
        forControls: {
            email:{
                value:"",
                type:"email",
                label:"Your Email",
                errorMessage: "Invalid Email",
                valid:false,
                touched: false,
                validation:{
                    required:true,
                    email:true
                }

        },
        password:{
            value:"",
            type:"password",
            label:"Your Password",
            errorMessage: "Invalid Password",
            valid:false,
            touched: false,
            validation:{
                required:true,
                minLength:10,
                hasNumber:true
            }

        }   
    }
 }
validateControl = (value,validation) => {
    if(!validation) return true;
    let isValid = true;
    if(validation.required){
        isValid = value.trim() !== "" && isValid;
    }
    if(validation.email){
        isValid = validateEmail(value) && isValid;
    }
    if(validation.minLength){
        isValid = value.length >= validation.minLength && isValid;
    }
    if(validation.hasNumber){
        isValid = !!value.match(/[0-9]/g) && isValid;
    }
    return isValid;
}

handleSubmit = (e) => {
    e.preventDefault()
}

changeHandler = (event,controlName) =>{
    // sarqum enq krknorinakner
    const formControls = {...this.state.forControls}
    const control = {...formControls[controlName]}
    // veranshanakum enq
    control.value = event.target.value
    control.touched = true;
    control.valid = this.validateControl(control.value,control.validation)

    formControls[controlName] = control

    // etap 4
    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
    })
    this.setState({
        forControls:formControls,
        isFormValid
    })
}

renderInputs = () => {
    return Object.keys(this.state.forControls).map((InputName,index)=>{
        let control = this.state.forControls[InputName]
        return (
            <Input
            key={index}
            type={control.type}
            value={control.value}
            label={control.label}
            valid={control.valid}
            touched={control.touched}
            errorMessage={control.errorMessage}
            shouldValidate={!!control.validation}
            onChange={(event) => this.changeHandler(event,InputName)}
            />
            )
    })
}

loginHandler = () =>{
    const data = {
        email: this.state.formControls.email.value,
        password: this.state.forControls.password.value,
        returnSecureToken:true
    }
    // try{
    //     let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`,data);
    //     console.log(response)
    // } catch (error) {
    //     console.log(error)
    // }
}

registerHandler = async() =>{
    const data = {
        email: this.state.forControls.email.value,
        password: this.state.forControls.password.value,
        returnSecureToken:true
    }
    try{
        let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`,data);
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


    render() {
        return (
            <div className="main">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} className="authForm">
                    {this.renderInputs()}
                    <Button
                        type='success'
                        disabled={!this.state.isFormValid}
                        onClick={this.loginHandler}
                    >
                        Sign In
                    </Button>
                    <Button
                    type='primary'
                    disabled={!this.state.isFormValid}
                    onClick={this.registerHandler}
                    >
                        Register
                    </Button>
                </form> 
            </div>
        )
    }
}
