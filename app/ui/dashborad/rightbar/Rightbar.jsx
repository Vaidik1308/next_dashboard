import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className='flex flex-col fixed mr-4 '>
      
      <div className='relative bg-gradient-to-t from-[#182237] to-[#253352] p-[20px] rounded-[10px] mb-[20px] '>
        <div className='absolute bottom-0 right-0 w-[50%] h-[50%] '>
          <Image
            src="/astronaut.png"
            fill
            className=' object-cover opacity-[0.2]'
          />
        </div>
        <div className='flex flex-col gap-4 items-start'>
          <span className='text-[18px] font-bold'>🔥 Available Now</span>
          <h3 className='font-bold text-[25px]'>How to use the new version of the admin dashboard?</h3>
          <span className='text-gray-300'>
            Takes 4 minutes to learn
          </span>
          <p className='w-[85%] text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dolores, quidem repudiandae rerum vitae qu
          </p>
          <button className='flex justify-start gap-2 items-center p-2 px-4 rounded-md bg-[#5C58C8]'>
            <span>
              <MdPlayCircleFilled fontSize={20} />
            </span>
            <span className='text-[16px] font-bold'>
              Watch
            </span>
          </button>
        </div>
      </div>
      <div className='relative bg-gradient-to-t from-[#182237] to-[#253352] p-[20px] rounded-[10px] mb-[20px] '>
        <div className='flex flex-col gap-4 items-start'>
          <span className='text-[18px] font-bold'>🔥 Available Now</span>
          <h3 className='font-bold text-[25px]'>How to use the new version of the admin dashboard?</h3>
          <span className='text-gray-300'>
            Takes 4 minutes to learn
          </span>
          <p className='w-[85%] text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium a dolores, quidem repudiandae rerum vitae qu
          </p>
          <button className='flex justify-start gap-2 items-center p-2 px-4 rounded-md bg-[#5C58C8]'>
            <span>
              <MdPlayCircleFilled fontSize={20} />
            </span>
            <span className='text-[16px] font-bold'>
              Learn
            </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Rightbar