'use client'
import {usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Pagination = ({count}) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()

  const params= new URLSearchParams(searchParams)
  const page = searchParams.get("page") || 1;
  const ITEM_PER_PAGE = 6

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type) => {
    type === "prev" 
      ? params.set("page",parseInt(page) - 1 ) 
      : params.set("page",parseInt(page) + 1 ) ;
      replace(`${pathname}?${params}`)
  } 
  // console.log(params);

  return (
    <div className='flex justify-between p-[10px]'>
        <button
          onClick={() => handleChangePage("prev")}  
          disabled={!hasPrev} 
          className='px-[10px] py-[5px] cursor-pointer disabled:cursor-not-allowed disabled:bg-zinc-600 bg-white text-black '
        >
          Previous
        </button>
        <button 
          onClick={() => handleChangePage("next")}
          disabled={!hasNext}
          className='px-[10px] py-[5px] cursor-pointer disabled:cursor-not-allowed disabled:bg-zinc-600 bg-white text-black '>Next</button>
    </div>
  )
}

export default Pagination