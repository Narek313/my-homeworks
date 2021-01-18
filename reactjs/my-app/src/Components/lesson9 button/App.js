import React, { Component } from 'react';
import './App.scss';
import Button from './Button'

export default class App extends Component {

    state = {
        isShow:false,
        options:"title",
        colors:[
            {id:1,name:'React.js',color:'#62D9FC'},
            {id:2,name:'Node.js',color:'#0C660C'},
            {id:3,name:'JavaScript',color:'#C6AD32'},
            {id:4,name:'Html-css',color:'brown'},
        ],
        currentColor:"",
        textarea:""
    }

    handleChange = (e) => {
        e.persist()
        let color = this.state.colors.filter(elem => elem.name === e.target.value)[0].color;
        console.log(color)
        this.setState({options: e.target.value,currentColor:color })
    }

    isChecked = (e) => {
        e.persist()
        console.log(e)
    }

    render() {
        return (
            <div className="main" style={{background:`white`}}>

                    <Button type='dark' text= "I am a dark button"></Button>
                    <Button type='light' text= "I am a light button"></Button>
                    <Button type='random' text= "I am a random button"></Button>







                {/* <h1>{this.state.options}</h1>
                <select onChange={this.handleChange}>
                    <option value=""></option>
                    {this.state.colors.map(elem => (
                        <option value={elem.name} key={elem.id} >{elem.name}</option>
                    ))}
                </select>
                <textarea name="" id="" cols="30" rows="10" value={this.state.textarea}>
                    
                </textarea> */}


                {/* <input type="checkbox" value = "English" onChange={this.isChecked} checked={this.state.isShow}/> */}
            </div>
        )
    }
}
