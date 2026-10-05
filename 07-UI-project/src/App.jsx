import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
   { 
    img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:'',
    color:'green',
    tag:'Statisfied'
  },
  {
     img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
     color:'lightseagreen',
    tag:'Underserved'
  },
  {
     img:'https://plus.unsplash.com/premium_photo-1661634136642-7a4d16900f84?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
     color:'red',
    tag:'Underbanked'
  }
]

  return (
    <div>
      <Section1 users ={users}/>
      <Section2/>
    </div>
  )
}

export default App
