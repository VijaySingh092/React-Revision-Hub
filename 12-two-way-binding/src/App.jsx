// Two-way binding means keeping React state and an input field synchronized in both directions.
// Two-way binding is the synchronization of data between the UI and the application's state, where state updates the UI and user input updates the state.



// import { useState } from 'react'

// const App = () => {

//   const[title,setTitle] = useState('')

//   const submitHandler=(e)=>{
//     e.preventDefault()
//     console.log('Form submitted by',title);
//     setTitle('')
//   }

//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input 
//         type="text" 
//         placeholder='Enter your name'
//         value={title}
//         onChange={(e)=>{
//           setTitle(e.target.value)
//         }}

//        />
//       <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App



import { useState } from "react"

const App = () => {
  const [title, setTitle]= useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('Form Submitted by',title)
    setTitle("")
  }

  return (
    <div>
      <form 
      onSubmit={(e)=>{
        handleSubmit(e)}}
       action="">
        <input 
        type="text" 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        placeholder='ENTER YOUR NAME' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

