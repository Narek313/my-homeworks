import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/ourstore">Our Store</NavLink>
                </li>
                <li>
                    <NavLink to="/authors">Author</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}
