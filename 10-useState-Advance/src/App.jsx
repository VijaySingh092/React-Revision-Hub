import React from 'react'
import { useState } from 'react'

const App = () => {
  const [x,setX]=useState({user:'Aman',age:20});

const clicked=()=>{
  const newX ={...x};
  newX.user="Rahul"
  setX(newX);
  // setX(pre=>({...pre,age:30}))
}
  return (
    
    <div>
      <h1>{x.user},{x.age}</h1>
      <button onClick={clicked}>click here</button>
    </div>
  )
}

export default App
