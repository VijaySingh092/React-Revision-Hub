import React from 'react'
import { useState } from 'react'

const App = () => {
  const[num,setNum]= useState(0)
  function numIncrease(){
    setNum(num+1);
  }
  function numDecrease(){
    setNum(num-1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={numIncrease}>Increase</button>
      <button onClick={numDecrease}>Decrease</button>
    </div>
  )
}

export default App
