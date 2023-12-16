import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Series from './pages/Series.jsx';
import Description from './pages/Description.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/movies',
    element: <Movies />
  },
  {
    path: '/series',
    element: <Series />
  },
  {
    path: '/description/:title',
    loader: ({params}) => {
        return params.title;
    },
    element: <Description />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
