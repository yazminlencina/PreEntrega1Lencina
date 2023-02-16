import React from 'react'

const ProductCard = ( {elemento} ) => {
    return (

        <div className="ContainerCard">
                    <h2>{elemento.title}</h2>
                    <h2>{elemento.price}</h2>
                    <img 
                        src={elemento.img} 
                        alt="" 
                        style={{ width: "40%", height: "900px" }}
                    />
                </div>
        
    )
}

export default ProductCard