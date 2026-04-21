import React from 'react';
import { Link, useNavigate } from 'react-router';

const Home = () => {

    const navigate= useNavigate();

    const handleNavigate = () =>  {
        navigate('about');
    };

    return (
        <div>
            <h1 className='text-4xl font-bold text-red-500'>This is the Home page</h1>
            <button className= 'btn btn-primary' onClick={handleNavigate}>Browse To About Page</button>
        </div>
    );
};

export default Home;