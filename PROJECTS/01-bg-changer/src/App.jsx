import { useState } from 'react'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <>
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button 
        className='outline-none px-4 py-1 rounded-full bg-red-700'
        onClick={()=>setColor("red")} 
        >RED</button>
        <button 
        className='outline-none px-4 py-1 rounded-full bg-green-700' onClick={()=>setColor("green")}
        >GREEN</button>
        <button 
        className='outline-none px-4 py-1 rounded-full bg-blue-700'
        onClick={()=>setColor("blue")}>
          BLUE</button>
        <button 
        className='outline-none px-4 py-1 rounded-full text-white bg-black'
        onClick={()=>setColor("black")}>
          BLACK</button>
        <button 
        className='outline-none px-4 py-1 rounded-full bg-orange-700'
        onClick={()=>setColor("orange")}>
          ORANGE</button>
      </div>
      </div>
    </div>
     
    </>
  )
}

export default App
