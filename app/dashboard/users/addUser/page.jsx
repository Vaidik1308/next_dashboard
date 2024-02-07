import { addUser } from '@/app/lib/actions'
import React from 'react'

const AddUserPage = () => {
  return (
    <div className='p-[20px] rounded-[10px] mt-[20px] bg-[#]'>
        <form  action={addUser} 
            className='flex flex-wrap justify-between '
        >
            <input 
                type="text" 
                id="" 
                name='username'
                placeholder='username'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]  '
                required
            />
            <input 
                type="email" 
                id="" 
                name='email'
                placeholder='email'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]  '
                required
            />
            <input 
                type="password" 
                id="" 
                name='password'
                placeholder='password'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]  '
                required
            />
            <input 
                type="phone" 
                id="" 
                name='phone'
                placeholder='phone'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]  '
                
            />
            <select
                className='w-[45%] bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] rounded-[5px] mb-[30px]' 
                name="isAdmin" 
                id="isAdmin"
            >
                <option value={false} >Is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select
                className='w-[45%] bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] rounded-[5px] mb-[30px]' 
                name="isActive" 
                id="isActive"
            >
                <option value={true} >Is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            
            <textarea 
                name="address" 
                placeholder='Address'
                id="" 
                className=' w-[100%] border-[2px] border-solid border-[#2e374a] bg-[#1A2238] p-[30px] rounded-[5px] mb-[30px]'
                rows="16"
            >

            </textarea>
            <button 
                type='submit'
                className='w-[100%] p-[20px] bg-teal-500 rounded-[8px] text-white border-none text-[22px] font-bold cursor-pointer'
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default AddUserPage