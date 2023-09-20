import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blog/Blogs';
import MealDetails from './Components/Blog/MealDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Blogs></Blogs>,
      },
      {
        path: '/blog/:name',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`),
        element: <MealDetails></MealDetails>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
