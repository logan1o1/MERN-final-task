import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import ItemsToday from './components/ItemsToday.jsx'
import AddItems from './components/AddItems.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='/' element= {<Home/>} />
      <Route path='/todayItems' element= {<ItemsToday/>}/>
      <Route path='/addItems' element={<AddItems/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/signup' element= {<Signup/>} />
      <Route path='/logout' />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
