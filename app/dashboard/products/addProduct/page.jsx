import { addProduct } from '@/app/lib/actions'
import React from 'react'

const AddProductPage = () => {
  return (
    <div className='p-[20px] rounded-[10px] mt-[20px] bg-[#]'>
        <form  action={addProduct} 
            className='flex flex-wrap justify-between '
        >
            <input 
                type="text" 
                id="" 
                name='title'
                placeholder='title'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]  '
                required
            />
            <select
                className='w-[45%] bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] rounded-[5px] mb-[30px]' 
                name="cat" 
                id=""
            >
                <option value="general">--Choose a Category--</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Phone">Phone</option>
                <option value="Computer">Computer</option>
            </select>
            <input 
                type="number" 
                id="" 
                name='price'
                placeholder='price'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px] '
                required
            />
            <input 
                type="number" 
                id="" 
                name='stock'
                placeholder='stock'
                className=' bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]'
                required
            />
            <input 
                type="text" 
                id="" 
                name='color'
                placeholder='color'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]'
                required
            />
            <input 
                type="text" 
                id="" 
                name='size'
                placeholder='size'
                className='bg-[#1A2238] border-[2px] border-solid border-[#2e374a] p-[30px] w-[45%] rounded-[5px] mb-[30px]'
                required
            />
            <textarea 
                name="desc" 
                placeholder='desc'
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

export default AddProductPage