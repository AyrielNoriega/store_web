import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

export const Layout = () => {
    return (
        <div className='main'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
