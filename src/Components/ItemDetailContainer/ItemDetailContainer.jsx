import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { products } from '../../productsMock'
import ProductCard from '../ProductCard/ProductCard'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    return (
    <div>
        <ProductCard />
    </div>
    )
}

export default ItemDetailContainer