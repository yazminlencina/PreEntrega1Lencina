import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const ItemList = ({ items }) => {
    return (
        <div 
            style={{
                width: "40%",
                display:"flex", 
                justifyContent: "center",
                height: "100vh",
            }}
        >
            {items.map((elemento) => {
                return <ProductCard elemento={elemento} key={elemento.id} />;
            })}
        </div>
    );
};

export default ItemList