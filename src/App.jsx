import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Contacto from "./Pages/Contacto"
import Beer from './Pages/Beer'
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beer/:id' element={<Beer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
