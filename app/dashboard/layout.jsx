import React from 'react'
import Sidebar from '../ui/dashborad/sidebar/Sidebar'
import Navbar from '../ui/dashborad/navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-full flex '>
        <div className='flex-[1]'>
            <Sidebar/>
        </div>
        <div className='flex-[4] mx-4'>
            <Navbar/>            
            {children}
        </div>
    </div>
  )
}

export default Layout