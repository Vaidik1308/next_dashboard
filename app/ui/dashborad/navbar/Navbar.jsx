'use client'
import React from 'react'
import SearchBox from './SearchBox'
import Icons from './Icons'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()
  const pageName = path.split('/').pop()
  return (
    <nav className='bg-[#1A2238] min-h-[10vh] px-4 my-3 mx-4 rounded-lg flex justify-between items-center'>
      <h1 className='text-[18px font-bold]'>{pageName.toUpperCase()}</h1>
      <div className='flex gap-4 w-fit justify-end'>
        <SearchBox/>
        <Icons/>
      </div>
    </nav>
  )
}

export default Navbar