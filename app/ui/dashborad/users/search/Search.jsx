'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'

const Search = ({placeholder}) => {

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const {replace} = useRouter()

  const handleSearch =  useDebouncedCallback( (e) => {


    const params = new URLSearchParams(searchParams)

    params.set("page",1)

    if(e.target.value){
      e.target.value.length > 2 && params.set("q",e.target.value)
    }
    else{
      params.delete("q")
    }
    // console.log(params);
    // console.log(searchParams);
    // console.log(pathName);

    replace(`${pathName}?${params}`)
  },300)
  return (
    <div className='bg-[#2F374B] flex items-center w-fit rounded-lg px-1'>
        <MdSearch fontSize={25}/>
        <input 
            type="text" 
            className='bg-[#2F374B] text-[18px] p-1 rounded-lg outline-none'
            id="" 
            placeholder={placeholder}
            onChange={handleSearch}
        />
    </div>
  )
}

export default Search