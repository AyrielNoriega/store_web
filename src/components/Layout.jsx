import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/Layout.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className='Main'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
