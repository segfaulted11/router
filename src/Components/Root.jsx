import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;