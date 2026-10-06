import React from 'react'
import { Routes,Route } from "react-router-dom";

import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from "./components/Navbar.jsx";
import Product from './pages/Product.jsx';
import Careers from './pages/Careers.jsx';
import FAQ from './pages/FAQ.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';



const App = () => {
  return (
    <div>
      <Navbar/>
     <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='policy' element={<PrivacyPolicy/>}/>
      <Route path='faq' element={<FAQ/>}/>
      <Route/>
     </Routes>

    </div>
  )
}

export default App


// Routing simply means:
// Changing what component/page is displayed based on the URL.
// Routing means deciding which component/page to show based on the URL.

// React itself does not provide a built-in routing system.
// React doesn't have built-in routing because routing isn't React's core responsibility.

// React Router DOM is a React library that provides client-side routing for web applications, allowing different components to be displayed for different URLs without full-page reloads.

// React Router DOM is used because it provides a complete, convenient client-side routing system for React web apps.

// A router is something that decides where a request/navigation should go based on the URL or path.
// In a React application, the router looks at the current URL and decides which component should be displayed.

// BrowserRouter is a React Router component that enables client-side routing in a React web application.
// BrowserRouter connects React Router with the browser's URL.
// Enable browser-based routing, look at the URL, and if it is /about, render the About component."

// BrowserRouter → provides the routing system
// Routes → contains the routes
// Route → tells the router what to show for a particular path

// React itself is used to build the SPA, while React Router is used to add client-side navigation/routing to that SPA.
// A Single Page Application (SPA) is a web application that loads a single HTML page initially and dynamically updates the UI as the user navigates, without requiring full-page reloads.

// React → builds the SPA
// React Router → handles routing/navigation within the SPA