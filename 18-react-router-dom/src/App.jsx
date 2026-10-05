import React from 'react'
import { Routes,Route } from "react-router-dom";

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from "./components/Navbar.jsx";
import Product from './pages/Product.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
     </Routes>

    </div>
  )
}

export default App
