import React from 'react'
import Sidebar from './pages/Students/Components/sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "./pages/Students/Components/Dashboard"
const App = () => {
  return (
    <div>
    <div className='flex justify-center align-middle '>
      <h1 className='text-center font-bold text-2xl'>Hello Students</h1>
    </div>
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
