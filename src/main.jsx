import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Details from './Components/Details/Details.jsx';
import Comments from './Components/Comments/Comments.jsx';
import SectionComments from './Components/SectionComments/SectionComments.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/home",
        loader: () => fetch('https://restcountries.com/v3.1/all'),
        element: <Home></Home>
      },
      {
        path: "/details/:name",
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/alpha/${params.name}`),
        element: <Details></Details>
      },
      {
        path: "/comments",
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: "/section/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`),
        element: <SectionComments></SectionComments>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
