import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();//'users' variable is array of objects

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold text-blue-600'>This is Users page</h1>
            {
                users.map((eachObject)=>
                <div key={eachObject.id} className='border-2 border-purple-500 rounded-2xl p-15 m-2'>
                  <p>  {eachObject.id}. {eachObject.name} </p>
                  <p>Email : {eachObject.email}</p>
                  <p>Phone : {eachObject.phone}</p>
                  <Link className='text-blue-700 font-bold' to={`/users/${eachObject.id}`}>Show Details...</Link>
                </div>
            )
            }
        </div>
    );
};
export default Users;