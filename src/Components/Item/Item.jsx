import React from 'react'

const Item = ({elemento}) => {
    return (
    <div style={{border:"2px solid pink"}}>
        <h1>{elemento.title}</h1>
        <p>{elemento.price}</p>
        <p>{elemento.description}</p>
        <img src={elemento.img} alt="" style={{width: "100%", height: "300px"}}/>
    </div>
    )
}

export default Item