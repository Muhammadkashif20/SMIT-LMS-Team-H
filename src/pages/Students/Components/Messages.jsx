import React from 'react'

const Messages = () => {
    const { collapsed } = useContext(sideBarContext);
  return (
    <div className='h-screen bg-[#F6F6F6] '>
      <h1 className='text-2xl text-center font-semibold'>Students Messages</h1>
      {/* Teacher Msg */}
      
      {/* Admin Msg */}
    </div>
  )
}

export default Messages
