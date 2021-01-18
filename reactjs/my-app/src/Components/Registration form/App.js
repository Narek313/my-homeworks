import React, { Component } from 'react';
import './App.scss';
import Input from './Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function validateName(name) {
    const re = /^[a-zA-Z]+$/;
    if(re.test(String(name)) && name.length >= 3) return true;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    return re.test(String(password));
}



export default class App extends Component {
    state={
        isFormValid: false,
        forControls: {
            name:{
                value:"",
                placeholder:"Enter First Name",
                type:"text",
                label:"First Name",
                errorMessage: "This field is invalid",
                valid:false,
                touched: false,
                validation:{
                    required:true,
                    name:true
                }

            },
            email:{
                value:"",
                placeholder:"Enter Email",
                type:"email",
                label:"Email",
                errorMessage: "This field is invalid",
                valid:false,
                touched: false,
                validation:{
                    required:true,
                    email:true
                }
            },

            password:{
                value:"",
                placeholder:"Enter Password",
                type:"password",
                label:"Password",
                errorMessage: "This field is invalid",
                valid:false,
                touched: false,
                validation:{
                    required:true,
                    password:true
                }

            }
        }   
    }

    validateControl = (value,validation) => {
        if(!validation) return true;
        let isValid = true;
        if(validation.required) {
            isValid = value.trim() !== "" && isValid;
        }
        if(validation.name) {
            isValid = validateName(value) && isValid;
        }
        if(validation.email) {
            isValid = validateEmail(value) && isValid;
        }
        if(validation.password) {
            isValid = validatePassword(value) && isValid;
        }
        return isValid;
    }


    handleSubmit = (e) => {
        e.preventDefault();
    }

    changeHandler = (e,controlName) => {
        const forControls = {...this.state.forControls};
        const  control = {...forControls[controlName]};

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value,control.validation);

        forControls[controlName] = control;

        let isFormValid = true;
        Object.keys(forControls).forEach(name => {
            isFormValid =  forControls[name].valid && isFormValid
        });
        this.setState({
            forControls,
            isFormValid
        });
    }

    renderInputs = () => {
        return Object.keys(this.state.forControls).map((inputName, index) => {
            let control = this.state.forControls[inputName]
            return(
                <Input
                key={index}
                value={control.value}
                placeholder={control.placeholder}
                type={control.type}
                label={control.label}
                errorMessage={control.errorMessage}
                valid={control.valid}
                touched={control.touched}
                shouldValidate={!!control.validation}
                onChange={(e) => this.changeHandler(e,inputName)}
                />
            );
        });
    }
    
    render() {

        return (
            <>
                <div className="home-icon">
                    <p>
                    <FontAwesomeIcon icon={faHome} style={{cursor: "pointer"}}/>
                    </p>
                </div>
                <div className="main">
                    <h1>Dorsin</h1>
                    <p>Sign up for a new Account</p>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInputs()}
                        <input type="checkbox" id="checkbox" name="check" value="check"/>
                        <label htmlfor="check">Remember me</label>
                        <input type="submit" value="Sign up" id="submit"/>
                    </form>
                    <p className="xxx">Don't have an account ? <span>Sign in</span></p>
                </div>
            </>
        )
    }
}
