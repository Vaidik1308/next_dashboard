import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data'
import Image from 'next/image'
import React from 'react'

const SingleUserPage = async ({params}) => {
    const {id} = params;
    const user = await fetchUser(id)
  return (
    <div className='flex gap-[50px] w-[98%] mx-auto mt-[20px]'>
        <div className='bg-[#1A2238] flex-[1] p-[20px] rounded-[10px] font-bold max-h-[44vh] text-gray-300 '>
            <div className='relative w-[100%] h-[300px] rounded-[10px] overflow-hidden mb-[20px]'>
                <Image 
                    src={user.img || "/profilePic.jpg"}
                    fill
                    alt='user'
                    className=' object-cover'
                />
            </div>
            <p className='ml-2'>
                {user.username}
            </p>
        </div>
        <div className='bg-[#1A2238] flex-[3]  p-[20px] rounded-[10px] '>
            <form action={updateUser} className='flex flex-col gap-1 ' >
                <input type="hidden" name="id" value={user._id.toString()} />
                <label className='text-[12px]' >Username</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder={user.username} 
                    id="username"
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                />
                <label className='text-[12px]' >Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder={user.email}
                    id="email" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                />
                <label className='text-[12px]' >Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                />
                <label className='text-[12px]' >Phone</label>
                <input 
                    type="phone" 
                    name="phone" 
                    placeholder={user.phone}
                    id="phone" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    />
                <label className='text-[12px]' >Address</label>
                <textarea 
                    type="address" 
                    name="address" 
                    placeholder={user.address}
                    id="address" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    />
                <select 
                    name="isAdmin" 
                    id="isAdmin"
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    >
                    <option value={false} >Is Admin?</option>
                    <option value={true} selected={user.isAdmin}> yes</option>
                    <option value={false} selected={!user.isAdmin}>no</option>
                </select>
                <select 
                    name="isActive" 
                    id="isActive"
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    >
                    <option value={false} selected>Is Active?</option>
                    <option value={true} selected={user.isActive}> yes</option>
                    <option value={false} selected={!user.isActive}>no</option>
                </select>
                <button 
                    type='submit'
                    className='w-[100%] p-[20px] bg-teal-500 rounded-[8px] text-white border-none text-[22px] font-bold cursor-pointer'
                    >
                    Update
                </button>
            </form>
        </div>
    </div>
  )
}

export default SingleUserPage