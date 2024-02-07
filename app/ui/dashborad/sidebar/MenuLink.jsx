'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'


const MenuLink = ({item}) => {
    const path = usePathname()
  return (
    <Link
        href={item.path} 
        className={`${path === item.path ? "bg-[#2F374B]" : ""} hover:bg-[#2F374B] transition rounded-lg py-4 w-[100%] flex justify-start items-center gap-3 text-[22px] pl-6  `}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink