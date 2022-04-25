import React from 'react';
import Footer from './footer/Footer';
import Navbar from "./navbar/Navbar";
import Navbar2 from './navbar2/Navbar2';

function Layout({ children }) {
    return (
        <div className='layouts'>
            <div className='layout'>
                <Navbar />
                <Navbar2 />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
