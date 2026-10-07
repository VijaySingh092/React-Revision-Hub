import { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()   // creating context

const ThemeContext = (props) => {
    const [theme,setTheme]=useState('light')


  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]}>   {/*provider-provides data   Code means any component inside this Provider can access theme and setTheme*/}
        {props.children}
      </ThemeDataContext.Provider>   
    </div>
  )
} 

export default ThemeContext