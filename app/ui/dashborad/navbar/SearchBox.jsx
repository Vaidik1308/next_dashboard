import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBox = () => {
  return (
    <div className='flex items-center justify-start rounded-lg bg-[#2F374B] pl-1 w-[80%]'>
        <MdSearch className='text-[22px] mt-1'/>
        <input 
            type="text" 
            name="" 
            id="" 
            placeholder='search...'
            className='p-1 pl-2 text-[18px] rounded-lg bg-[#2F374B] outline-none'
        />
    </div>
  )
}

export default SearchBox