import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const UsersDetails = () => {
  const users = useLoaderData();
  // console.log(users);//returns a particular object from the array of objects, based on whichever id is invoked.

  //deconstructuring object
  const { id, name, phone, username, email, website, address, company } = users;

  const { street, city, zip, suite, geo } = address;
  const { lat, lng } = geo;
  const { catchPhrase, bs } = company;

//useNavigate hook
const navigate = useNavigate();
const handleNavigate = ()=>{
  navigate(-1);//return to the previous page
}

//useParams hook (using this you can access params on this component(UsersDeatils.jsx) beside the (main.jsx)

//useParams hook ->
const params = useParams();
console.log(params);//same output as the main.jsx's params
console.log(params.userId);//same output as the main.jsx's params

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-red-600">
        {id==1?`${id}st user's details`
        :id==2?`${id}nd user's details`
        :id==3?`${id}rd user's details`
        :`${id}th user's details`
        }
        </h1>
        <button className="btn btn-primary" onClick={handleNavigate}>Go Back</button>
      <div className="bg-gray-400 w-3/6">
        <p>Name is : {name}.</p>
        <p>Phone is : {phone}.</p>
        <p>UserName is : {username}.</p>
        <p>Email is : {email}.</p>
        <p>Website is : {website}.</p>
        <p>
          Street is : {street}, city is : {city}, zipcode is : {zip} and suite
          is : {suite}, lat is : {lat} and lang is : {lng}
        </p>
        <p>
          Company name is : {company.name}, catchPhrase is {catchPhrase} and bs
          is {bs}.
        </p>
      </div>
    </div>
  );
};

export default UsersDetails;