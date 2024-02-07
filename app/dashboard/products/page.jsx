import { deleteProduct } from '@/app/lib/actions'
import { fetchProducts } from '@/app/lib/data'
import Pagination from '@/app/ui/dashborad/pagination/Pagination'
import Search from '@/app/ui/dashborad/users/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Products =  async ({placeholder,searchParams}) => {
  const q = searchParams?.q || ""
  const page= searchParams?.page || 1
  const {count,products} = await fetchProducts(q,page)

// console.log(products);

  return (
    <div className='w-[98%] mx-auto bg-[#1A2238] p-4 rounded-lg h-fit'>
      <div className='flex w-full justify-between items-center'>
        <Search  
          placeholder={"Search Products"}
        />
        <Link href={"/dashboard/products/addProduct"} className='bg-[#5D58C9] p-2 px-4 rounded-md '>
          Add New
        </Link>
      </div>
      <table className='w-full mt-4'>
        <thead>
          <tr className='text-[20px]'>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((product) => (
              <tr className='transition hover:bg-[#2F374B]' key={product?._id}>
                <td className='flex items-center p-[10px] gap-[10px] '>
                  <div className='relative h-[40px] w-[40px]'>
                      <Image
                          src={ product.img ||'/profilePic.jpg'}
                          fill
                          alt=''
                          className=' object-cover rounded-[50%]'
                      />
                  </div>
                  <div>
                      <p className='text-[15px]'>{product.title}</p>
                  </div>
                </td>
                {product.desc}
                <td>
                  &#x20B9;{product.price}
                </td>
                <td>
                  {product.createdAt?.toString().slice(4,16)}
                </td>
                <td>
                  {product.stock}
                </td>
                <td>
                  <div className='flex gap-[10px]'>
                    <Link href={`/dashboard/products/${product._id}`}>
                      <button className='px-[10px] py-[5px] rounded-[5px] cursor-pointer bg-teal-400 text-black'>View</button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name='id' value={product._id.toString()} />
                      <button className='px-[10px] py-[5px] rounded-[5px] cursor-pointer bg-red-600 text-white'>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))
          }
        
        </tbody>
      </table>
      <Pagination 
        count={count}
      />
    </div>
  )
}

export default Products