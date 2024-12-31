import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SidebarProvider from './Context/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
    <App />
    </SidebarProvider>
  </StrictMode>,
)
