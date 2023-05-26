import React, { useContext } from 'react';
import { Product } from './Product';
import { AppContext } from '../context/AppContext';
import "../styles/Products.css";

export const Products = () => {

    const { state: {products}, addToCart } = useContext(AppContext);
    // const { products } = state;

    const handleAddToCart = product => () => {
        addToCart(product)
    }
    
    return (
        <div className='products'>
            <div className="products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </div>
    )
}
