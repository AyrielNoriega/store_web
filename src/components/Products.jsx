import React, { useContext } from 'react';
import { Product } from './Product';
import { AppContext } from '../context/AppContext';
import "../styles/Products.css";

export const Products = () => {

    const { state: {products}, addToCart } = useContext(AppContext);
    // const { products } = state;
    console.log(products);
    const handleAddToCart = product => () => {
        addToCart(product)
    }
    
    return (
        <div className='products'>
            <div className="products-items">
                {products.length === 0 && <h3>No hay productos</h3>}
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </div>
    )
}
