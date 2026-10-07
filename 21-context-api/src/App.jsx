import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App

// Context is a React feature that allows you to share data between components without passing props manually through every level.

// Think of Context as a shared storage for a group of components.

// useContext() is a React Hook used to access data from a Context without passing it through props manually.

// The important idea is:
// createContext() → creates the shared context
// Provider → provides the data
// useContext() → consumes/gets the data


// Context API
// │
// ├── createContext()
// │      → creates the Context
// │
// ├── Provider
// │      → provides/shares the data
// │
// └── useContext()
//        → accesses/gets the shared data