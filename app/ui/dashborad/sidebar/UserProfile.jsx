import Image from 'next/image'
import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex justify-start items-center gap-2 pl-4 pt-6 mb-4'>
        <div className='relative h-[60px] rounded-[50%] w-[60px]'>
            <Image 
                src="/profilePic.jpg"
                alt=''
                fill
                className=' object-cover rounded-[50%]'
            />
        </div>
        <div>
            <h2>User</h2>
            <p className='text-[12px]'>Administrator</p>
        </div>
    </div>
  )
}

export default UserProfile