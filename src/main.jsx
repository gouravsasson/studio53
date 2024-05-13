import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Root from './Root';
import Home from '../src/component/Home/Home.jsx'
import Project from './component/Project/Project.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children : [
      {
        path :'',
      element: <Home/>,
    },  
    {
      path :'/Projects',
    element: <Project/>,
  },
    
  
  
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
