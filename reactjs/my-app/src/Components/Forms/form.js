import React from 'react'

export default function form(props) {
    return (
                <form onSubmit={props.handleSubmit}
                // className={props.isShow ? "show" : ""}
                >
                    <input type="text" onChange={props.handleChange} name="name" value={props.name}/>
                    <input type="text" onChange={props.handleChange} name="surname" value={props.surname}/>
                    <input type="submit" value="send"/>

                </form>

    )
}
