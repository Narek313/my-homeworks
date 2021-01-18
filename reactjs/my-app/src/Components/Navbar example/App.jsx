import React, { Component } from 'react'
import { Redirect, Route ,Switch } from 'react-router-dom'
import Navbar from "./Navbar"
import Home from "./Home"
import Author from "./Author"
import  Ourstore from "./Ourstore"
import Contact from "./Contact"
import Info from "./Info"
import "./App.css"

export default class App extends Component {
    state = {
        authors:[
            {id:1, name:"Erix Maria Remark", about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {id:2, name:"Mishel Monten", about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {id:3, name:"Joan Rouling", about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
            {id:4, name:"Hrant Matevosyan", about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},

        ]
    }
    render() {
        return (
            <div className="wrapper">
                <Navbar/>
                <Switch>
                <Route exact strict path= "/" render = {() => < Home name="Narek"/>}/>
                <Route exact path= "/ourstore" component={Ourstore}/>
                <Route exact path= "/authors" component={(props) => <Author {...props} data={this.state.authors}/>}/>
                <Route exact path="/authors/:id" render = {() => <Info data={this.state.authors}/> }/>
                <Route exact path= "/contact" component={Contact}/>
                <Route component={Home}/>
                </Switch>
            </div>
        )
    }
}
