import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

``
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root';
import Home from '../src/component/Home/Home.jsx'
import Project from './component/Project/Project.jsx';
import Team from './component/Team/Team.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>} >
      <Route path='' element = {<Home/>} />
      <Route path='/Projects' element = {<Project/>} />
      <Route path='/team' element = {<Team/>} />
      <Route path='/contacts' element = {<ContactUs/>} />
      


    </Route>
  )

)


  
  
//   ]
//   }
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
