
import Card from './components/Card'

// Props drilling
// Props drilling means passing data from a parent component to a deeply nested child component through intermediate components, even when those intermediate components don't need the data themselves.

const App = () => {
  return (
    <div>
  < Card user="Aman" age={10}  img ="https://plus.unsplash.com/premium_photo-1771458556602-0a66f6b9f467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
   
  < Card user ="Sarthak" age={23} img ="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  < Card user ="Rahul" age ={33} img ="https://plus.unsplash.com/premium_photo-1682124710157-d1573373a4f5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  < Card user ="Ankit" age={12} img="https://plus.unsplash.com/premium_photo-1723428295291-d2abb18bc76c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <Card/>
  </div>
  )
}

export default App
