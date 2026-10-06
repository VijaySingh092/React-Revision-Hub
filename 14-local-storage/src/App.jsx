// Local Storage is a browser feature that allows a web application to store data in the user's browser.
// Data stored in Local Storage remains even after you close or refresh the browser.

const App = () => {
 
  const user =localStorage.getItem('user')
  console.log(user);

  localStorage.removeItem('user')  // removeItem()-> remove one item
  localStorage.clear();   //  clear() -> remove everything

  const person= {
    name: 'Vijay',
    age:18,
    city:'Delhi'
  }

  localStorage.setItem('person',JSON.stringify(person))  // setItem()-> store data

    const item = JSON.parse(localStorage.getItem('person'))  // getItem() -> get data
    console.log(item)

  return (
    <div>
      app
      app
    </div>
  )
}

export default App
