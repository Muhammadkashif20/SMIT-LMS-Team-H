import React, { useContext } from 'react'
import { sideBarContext } from '../../../Context/SidebarContext';

const Dashboard = () => {
  const {collapsed}=useContext(sideBarContext)
  return (
    <div className='h-screen bg-[#F6F6F6]'>
       <div className={`my-5 ${!collapsed ?"mx-72":"mx-32" }`}>
          <div className='leading-10'>
          <h1 className='font-semibold  sm:text-1xl md:text:[1.50rem] lg:text-[1.90rem]' >Hi! Muhammad Kashif 😎</h1>
          <h2 className='text-gray-500 font-semibold sm:text-1xl md:text:1xl lg:text-[1.10rem]'>"Welcome to the LMS Portal! Explore your courses and progress below."</h2>
      </div>
        
    </div>

    </div>
  )
}

export default Dashboard;
