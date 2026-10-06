import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h3>ReactJS</h3>
        <div>
           
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/product'>Product</Link>
      <Link to='/careers'>Careers</Link>
      <Link to='/faq'>FAQ</Link>
      <Link to='/policy'>Privacy Policy</Link>
        </div>
      
    </div>
  )
}

export default Navbar
