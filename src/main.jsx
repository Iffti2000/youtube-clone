import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DarkModeProvider } from './Context/DarkModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>,
)