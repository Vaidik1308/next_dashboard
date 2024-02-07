import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import Image from 'next/image'
import React from 'react'

const SingleProductPage = async ({params}) => {
    
    const {id} = params;
    const product = await fetchProduct(id)

  return (
    <div className='flex gap-[50px] w-[98%] mx-auto mt-[20px]'>
        <div className='bg-[#1A2238] flex-[1] p-[20px] rounded-[10px] font-bold max-h-[44vh] text-gray-300 '>
            <div className='relative w-[100%] h-[300px] rounded-[10px] overflow-hidden mb-[20px]'>
                <Image 
                    src={product.img || "/profilePic.jpg"}
                    fill
                    alt='user'
                    className=' object-cover'
                />
            </div>
            <p className='ml-2'>
                Iphone
            </p>
        </div>
        <div className='bg-[#1A2238] flex-[3]  p-[20px] rounded-[10px] '>
            <form action={updateProduct} className='flex flex-col gap-1 ' >
                <input type="hidden" name="id" value={product._id.toString()} />
                <label className='text-[12px]' >Title</label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder={product.title} 
                    id="username"
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                />
                <label className='text-[12px]' >Price</label>
                <input 
                    type="number" 
                    name="price" 
                    placeholder={product.price} 
                    id="price" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                />
                <label className='text-[12px]' >stock</label>
                <input 
                    type="number" 
                    name="stock" 
                    id="stock" 
                    placeholder={product.stock} 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                />
                <label className='text-[12px]' >Color</label>
                <input 
                    type="text" 
                    name="color" 
                    placeholder={product.color} 
                    id="phone" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    />
                <label className='text-[12px]' >Size</label>
                <textarea 
                    type="text" 
                    name="size" 
                    placeholder={product.size}
                    id="address" 
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    />
                <label className='text-[12px]' htmlFor="">Cat</label>
                <select 
                    name="cat" 
                    id="isAdmin"
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    >
                    <option value="general">--Choose a Category--</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                </select>
                <label className='text-[12px]' >Desc</label>
                <textarea 
                    type="text" 
                    name="desc" 
                    id="" 
                    placeholder={product.desc}
                    className='p-[20px] border-[2px] border-solid border-[#2e374a] bg-[#161C2E] rounded-[5px] mt-[10px]'
                    />
                
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

export default SingleProductPage