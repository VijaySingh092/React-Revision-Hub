import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme]=useContext(ThemeDataContext)    // using data from context
    const changeTheme=()=>{  // changes the theme using setTheme from context
       setTheme('dark')
    }
  return (
    <div>
        <button onClick={changeTheme}>Change Theme </button>
      
    </div>
  )
}

export default Button
