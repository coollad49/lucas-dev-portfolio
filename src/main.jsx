import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PopupContextProvider } from './context/PopupContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopupContextProvider>
      <App />
    </PopupContextProvider>
    
  </React.StrictMode>,
)
