import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div className='w-full bg-blue-300'>
        <h1 className='text-5xl text-center mb-4'>This is the navbar</h1>

        <nav className='flex gap-2 font-bold justify-center active'>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/users2">Users2</NavLink>

        </nav>
        </div>
    );
};

export default Navbar;