import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./Home"
import Contacto from "./Contacto"
import Beer from './Beer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/beer/:id' element={<Beer/>}/>
        </Route>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
