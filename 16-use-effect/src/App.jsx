import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  // const [num,setNum]=useState(0)
  // const [num2,setNum2] = useState(1)

  // useEffect(function(){
  //   console.log('use effect is running')
  // },[num2])

  const [a,setA]=useState(0)
  const [b,setB]=useState(0)

  function aChanging(){
    console.log("a is changing")
  }

  function bChanging(){
    console.log("b is changing")
  }

  useEffect(function(){
   
    aChanging()
  },[a])
  

  return (
    <div>
      {/* <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button 
      onClick={()=>{ setNum(num+10)}} 
      onDoubleClick={()=>{ setNum2(num2+1)}}>click</button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
