import React, { useContext } from 'react'
import { sideBarContext } from '../../../Context/SidebarContext'

const Dashboard = () => {
  const { collapsed } = useContext(sideBarContext)
  
  return (
    <div className='min-h-screen bg-[#F6F6F6] '>
      <div className={`${!collapsed ? "ml-72" : "ml-32"}`}>
        <div className='leading-10'>
          <h1 className='font-400 text-2xl md:text-3xl lg:text-4xl'>
            Hi! Muhammad Kashif 😎
          </h1>
          <h2 className='text-gray-500 mt-2 font-medium text-sm md:text-base lg:text-lg'>
            "Welcome to the LMS Portal! Explore your courses and progress below."
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard