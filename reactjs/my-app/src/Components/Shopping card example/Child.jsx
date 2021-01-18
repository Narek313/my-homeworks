import React from 'react'
import PropTypes from 'prop-types'
import { forPrice } from './Helpers'

export default function Child(props) {
    return (
        <>
            {
                props.data.map(elem => {
                    return (
                        <div className="wrapper-items" key={elem.id}>
                            <img src={elem.url} alt={elem.description} />
                            <div className="W-title">
                                <h3>{elem.title}</h3>
                                <p>{forPrice(elem.price)}</p>
                            </div>
                            <div className="W-deleter" onClick={()=>props.deletehandler(elem.id)}>
                                <span>X</span>
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}
Child.propTypes = {
    data: PropTypes.array.isRequired,
}