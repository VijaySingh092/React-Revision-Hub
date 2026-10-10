import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount, setAmount]= useState(0)
 const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  
    function handleIncrementClick(){
      dispatch(increment())
    }
    
    function handleDecrementClick(){
      dispatch(decrement())
    }

    function handleResetClick(){
      dispatch(reset())
    }

    function handleAmountInc(){
      dispatch(incrementByAmount(amount))
    }
  

  return (
   <div className="container">
    <button onClick={handleIncrementClick}>+</button>
    <p>Count: {count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <br /><br />
    <button onClick={handleResetClick}>Reset</button>

    <input 
    type="Number"
    placeholder='Enter amount'
    onChange={(e)=> setAmount(e.target.value)} />
    <br /><br />
    <button onClick={handleAmountInc}>Inc By Amount</button>
   </div>
  )
}

export default App


// Correct order for setting up Redux Toolkit

// 1. Create the slice in counterSlice.js.

// Define the initial state.

// Define reducer functions.

// Export the action creators and reducer.

// 2. Create the store in store.js.

// Import the reducer from counterSlice.js.

// Register it using configureStore().

// 3. Wrap the app with Provider in main.jsx.

// Import the store.

// Pass it to <Provider store={store}>.