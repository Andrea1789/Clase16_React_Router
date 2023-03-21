import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
        <button onClick={() => navigate(-1)}>↩</button>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
        <Link to='/id'><h3>Beer</h3></Link>
    </nav>
  )
}

export default Navbar