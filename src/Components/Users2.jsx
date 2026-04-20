import React, { use } from 'react';

const Users2 = ({fetchUsers}) => {

    let usersData = use(fetchUsers)//"usersData" is the array of objects
    // console.log(usersData);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-bold text-purple-500'>This is the users2 page</h2>
        {
            usersData.map((eachObject)=>
                <div key={eachObject.id}>
                  <b>  {eachObject.id}. {eachObject.name} </b>
                </div>
            )
        }
        </div>
    );
};

export default Users2;