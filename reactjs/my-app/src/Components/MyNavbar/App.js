import React from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from './pages/Services'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Marketing from './pages/Marketing'
import Consulting from './pages/Consulting'
import Design from './pages/Design'
import Development from './pages/Development'

export default function App() {
    return (
        <>
         <Navbar/>
         <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/services' exact component={Services}/>
             <Route path='/products' exact component={Products}/>
             <Route path='/contact-us' exact component={ContactUs}/>
             <Route path='/sign-up' exact component={SignUp}/>
             <Route path='/marketing' exact component={Marketing}/>
             <Route path='/consulting' exact component={Consulting}/>
             <Route path='/design' exact component={Design}/>
             <Route path='/development' exact component={Development}/>
         </Switch>
        </>
    )
}
