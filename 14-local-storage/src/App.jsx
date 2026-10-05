import React from 'react'

const App = () => {
 
  const user =localStorage.getItem('user')
  console.log(user);

  localStorage.removeItem('user')
  localStorage.clear();

  const person= {
    name: 'Vijay',
    age:18,
    city:'Delhi'
  }

  localStorage.setItem('person',JSON.stringify(person))

    const item = JSON.parse(localStorage.getItem('person'))
    console.log(item)

  return (
    <div>
      app
      app
    </div>
  )
}

export default App
