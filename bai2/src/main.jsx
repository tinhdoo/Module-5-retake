import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Vehicle from "./Vehicle.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />,
      <Vehicle/>
  </StrictMode>,
)
