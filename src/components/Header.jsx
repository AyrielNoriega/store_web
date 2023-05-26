import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Header.css';

export const Header = () => {

    const {state: {cart}} = useContext(AppContext);

    return (
        <header className='header'>
            <h1 className='header-title'>
                <Link to="/">
                    Store
                </Link>
            </h1>
            <div className='header-checkout'>
                <Link to="/checkout" >
                    <i className='fas fa-shopping-basket' title="Checkout" />
                </Link>
                {cart.length > 0 && <div className='header-alert'>{cart.length}</div>}
            </div>
        </header>
    )
}
