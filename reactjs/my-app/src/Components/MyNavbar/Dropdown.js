import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export default function Dropdown(){

    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((elem, index) => {
                    return (
                        <li key={index}>
                            <Link className={elem.cName} to={elem.path} onClick={() => setClick(false)}>{elem.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}