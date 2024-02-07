import React from 'react'
import { MdEmojiEmotions } from 'react-icons/md'

const Card = () => {
  return (
    <div className='w-fit rounded-lg hover:bg-[#2F374B] bg-[#1A2238] flex p-4 items-start gap-6 transition'>
        <div className='flex items-center mt-1 text-[25px]'>
            <MdEmojiEmotions/>
        </div>
        <div className='flex flex-col gap-4'>
            <h3>Total Users</h3>
            <p className='text-[25px] font-bold'>10.928</p>
            <p>
                <span className='text-[#5AA567]'>12% </span> 
                more than previous week
            </p>
        </div>
    </div>
  )
}

export default Card