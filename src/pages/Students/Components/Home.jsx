import React from 'react'
import Login from './Login'

const Home = () => {
  return (
   <div className='overflow-hidden'>
      <div className='leading-10 mt-60  mx-16 justify-start items-center'>
      <h1 className='font-semibold text-[1.90rem]'>Login into Your SMIT Students Portal 🔒  </h1>
      <h2 className='text-gray-500 font-semibold text-[1.10rem]'>Welcome to the SMIT LMS Portal! Please Login & Move To Students Dashboard.</h2>
    </div>
    <Login/>
   </div>
  ) 
}

export default Home
