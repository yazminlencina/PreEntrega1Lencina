import React from 'react'

const ItemList = ({items}) => {
    
    return (
    <div>
        {items.map( (elemento) => (<ItemList item={elemento} key={elemento.title}/>))}
    </div>
    )
}

export default ItemList