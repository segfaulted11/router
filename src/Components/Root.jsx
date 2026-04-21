import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './Root.css';

const Root = () => {

//useNavigation hook
const navigation = useNavigation();
const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Navbar/>
            <Sidebar/>
            {isNavigating && <span className='text-5xl text-center font-bold'>Loading......</span>}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;