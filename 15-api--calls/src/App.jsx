import axios from 'axios'
import { useState } from 'react'

// An API is a way for two software systems to communicate with each other.

// An API call is a request made by your application to another server to send or receive data.

// fetch and Axios are used in JavaScript/React to make HTTP/API requests.
// They allow your frontend to communicate with a backend server or external API.

//  fetch() is a built-in JavaScript Web API used to make HTTP requests.

// Axios is a third-party JavaScript library used for making HTTP requests.
// Unlike fetch, you need to install it

const App = () => {

  const [data,setData]= useState([])

  //  const getData= async()=>{
  //   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json()
  //   console.log(data)
  // }

  // const getData = async()=>
  //   {
  //   const response =await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    
  //   console.log(response)
  //   console.log(response.data)
  // }

  const getData =async()=>{
   const response=await axios.get('https://picsum.photos/v2/list')
   console.log(response.data)

   setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello,{elem.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
