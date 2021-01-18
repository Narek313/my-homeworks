import React, { Component } from 'react';
import './App.scss';
import Form from './form'

export default class App extends Component {

    state = {
        surname:"",
        name:"",
        // isShow: false
    }

    handleChange = (e) => {
        console.log(e)
        e.persist()
            this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="main">
                <Form
                handleSubmit={this.handleSubmit}
                // isShow={this.isShow}
                name={this.state.name}
                surname={this.state.surname}
                handleChange={this.handleChange}/>
            </div>
        )
    }
}
