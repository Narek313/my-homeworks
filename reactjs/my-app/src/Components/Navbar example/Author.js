import React from 'react'

export default function Author(props) {
    const goToHomePage = (id) => {
        console.log(props)
        props.history.push({
            pathname: `authors/${id}`
        })
    }
    return (
        <div> 
           <ul className="list">
                {props.data.map(elem => <li key ={elem.id} onClick={() => goToHomePage(elem.id)}>{elem.name}</li>)}
           </ul>
           <button onClick={() => goToHomePage("/")}>Home Page</button>
        </div>
    )
}

