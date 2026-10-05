import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-8 bg-cyan-900 items-center'>
        <h2 className='text-xl font-bold'>React</h2>
        <div className='flex gap-10 '></div>

    <Link className='text-lg font-medium' href="/product" to='/'>Home</Link>
    <Link className='text-lg font-medium' href="/product" to='/about'>About</Link>
    <Link className='text-lg font-medium' href="/product" to='/product'>Product</Link>
    <Link className='text-lg font-medium' href="/product" to='/courses'>Courses</Link>

    </div>
  )
}

export default Navbar
