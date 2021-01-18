import React from 'react'
import { withRouter } from 'react-router-dom'

function Info(props) {
    const goBack = () => {
        props.history.push({
            pathname: `/authors`
        })
    }
    const id = props.match.params.id
    return (
        <div>
            {props.data && props.data.filter(author => author.id == id)
            .map(elem => (
                <div key={elem.id}>
                    <h1>{elem.name}</h1>
                    <p>{elem.about}</p>
                    <button onClick={goBack}>Back</button>
                </div>
            ))}
        </div>
    )
}
export default withRouter(Info)