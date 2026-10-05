import { useState } from 'react'


const App = () => {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const [task, setTask]= useState([])


    const submitHandler=(e)=>{
    e.preventDefault()
   
    const copyTask =[...task];

    copyTask.push({title,detail})

    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote=(idx)=>{
    const copyTask= [...task];
    
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
    
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
  <h1 className='text-3xl font-bold'>Add Notes</h1>

{/* input for heading */}
          <input type="text" 
          placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
        setTitle(e.target.value)
        }}
        />

{/* input for detail */}
       <textarea 
       type="text" 
       className='px-5 w-full  font-medium h-32 py-2 flex items-start flex-row border-2 rounded outline-none '
       placeholder='Write Details'
       value={detail}
       onChange={(e)=>{
       setDetail(e.target.value)
       }}
       />

       <button className='bg-white w-full active:scale-95 font-medium text-black px-5 py-2 outline-none'>Add Notes</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10  '>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){

          return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40  bg-cover rounded-2xl pt-9 pb-4  px-4 text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] '>
            
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semi text-gray-600'>{elem.detail}</p>
            <button onClick={()=>{
              deleteNote(idx)
            }} className=' w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold'>Delete</button>
          </div>
        })}
        
        </div>
      </div>
    </div>
  )
}

export default App
