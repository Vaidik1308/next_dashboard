import React from 'react'
import SingleTransaction from './SingleTransaction'

const Transactions = () => {
  return (
    <div className=' pl-4 pt-5 bg-[#1A2238] rounded-lg min-h-[50vh] h-fit'>
        <h1 className='text-[26px] text-gray-400 font-[200]'>Latest Transactions</h1>
        <div className='p-4'>
            <ul className=' flex justify-start'>
                <li className='w-[45%]'>Name</li>
                <li className='w-[25%]'>Status</li>
                <li className='w-[30%]'>Date</li>
                <li className='w-[30%]'>Amount</li>
            </ul>
            <div className='flex flex-col gap-4 mt-6'>
                <SingleTransaction/>
                <SingleTransaction/>
                <SingleTransaction/>
                <SingleTransaction/>
                <SingleTransaction/>
            </div>
        </div>
    </div>
  )
}

export default Transactions