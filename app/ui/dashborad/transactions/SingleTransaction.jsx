import Image from 'next/image'
import React from 'react'

const SingleTransaction = () => {
  return (
    <section className='flex gap-5 transition hover:bg-[#2F374B] p-2 rounded-lg'>
        <div className='flex items-center gap-2 w-[32%]'>
            <div className='relative h-[40px] w-[40px]'>
                <Image
                    src='/profilePic.jpg'
                    fill
                    alt=''
                    className=' object-cover rounded-[50%]'
                />
            </div>
            <div>
                <p className='text-[15px]'>John Doe</p>
            </div>
        </div>
        <div className='flex items-center w-[16.5%]'>
            <span className='bg-[#64768A] text-[12px] p-1 rounded-lg px-[12px]'>
                Pending
            </span>
        </div>
        <div className='flex items-center w-[24%]'>
            <span className='text-[14px]'>
                14.02.2023
            </span>
        </div>
        <div className=' w-[20%] flex items-center'>
            <span className='text-[14px]'>&#x20B9; 12.5</span>
        </div>
    </section>
  )
}

export default SingleTransaction