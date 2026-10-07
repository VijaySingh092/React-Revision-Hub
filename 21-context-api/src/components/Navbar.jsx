
import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
   const [theme]=useContext(ThemeDataContext)  // using data from the context
  return (
    <div className={theme}>
      <h2>React</h2>
      <Nav2/>
    </div>
  )
}

export default Navbar
