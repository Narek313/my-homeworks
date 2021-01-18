import React, { Component } from 'react'
import Child from './Child.jsx'
import data from './data.json'
import './App.css'
import Total from "./Total"

export default class App extends Component {
    state={
        data:data.images
    }
    deletehandler(id){
        const data = this.state.data.filter(elem => elem.id !== id)
        this.setState({data})
    }
    render() {
        const {data} = this.state
        return (
        <div className="main">
            <div className="cart">
                <button className = "add">Add To Cart</button>
            </div>
            <div className='wrapper'>
                <h3>My shopping bag {`(${data.length ? data.length:"no flowers yet"})`}</h3>
                <Child data={data} deletehandler={(id)=> this.deletehandler(id)}/>
                <Total data={data}/>
            </div>
        </div>
        )
    }
}