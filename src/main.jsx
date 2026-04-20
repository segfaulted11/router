import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Users from './Components/Users.jsx';
import Users2 from './Components/Users2.jsx';
import UsersDetails from './Components/UsersDetails.jsx';


//fetching for users2
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())


//createBrowserRouter
const router = createBrowserRouter([
{
  path : "/",
  Component : Root,
  children : [
    {index : true, Component : Home},
    {path : 'about', Component:About},
    {path : 'contact', Component : Contact},
    {//using loader,useLoaderData()
    path : 'users', 
    loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
    Component : Users,
  },
  {//using suspense,props,use()
    path : 'users2',
    element : <Suspense fallback={<b>Data is loading....</b>}>
<Users2 fetchUsers={fetchUsers}></Users2>
    </Suspense>
  },
  {
    path : 'users/:userId',

    //loader : ({params}) => {
    //console.log(params); //when the first show details is clicked, output -> {userId: '1'}. params returns an object. and it contains a property named 'userId' whose value is whatever after the users (users/whatever...) is set up for.
    //console.log(params.userId);//1
    //fetch('https://jsonplaceholder.typicode.com/users')},

  loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

  Component : UsersDetails,
  }
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)