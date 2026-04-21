import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostsDetails = () => {
    const aPostObject = useLoaderData();//one object from the array of objects of posts.
    // console.log(aPostObject);

    //useNavigate 
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/posts");
    }

    const {title,id,body} = aPostObject;

    return (
        <div className=''>
            
            <div className='flex justify-center'>
            <button className='btn btn-secondary ' onClick={handleNavigate}>Return To Posts Page</button>
            </div>
            <h2 className='text-5xl font-bold text-center'>post details page</h2>
            <div className='bg-red-400 font-bold'>
            <h1>Id : {id}</h1>
            <h1>Title : {title}</h1>
            <h2>body : {body}</h2>
           </div>

        </div>
    );
};

export default PostsDetails;