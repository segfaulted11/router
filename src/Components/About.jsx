import React from 'react';
import { useNavigate } from 'react-router';

const About = () => {

    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate("/");
    }

    return (
        <div>
            <h1 className='text-4xl text-fuchsia-500 font-bold'>This is the About page</h1>
            <button className='btn btn-primary' onClick={handleNavigate}>Browse To Home Page</button>
        </div>
    );
};

export default About;