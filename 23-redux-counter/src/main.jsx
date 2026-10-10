import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap the app component with provider to make store accessible to all the components */}
    <Provider store ={store}>
    <App />
    </Provider>
  </StrictMode>,
)
