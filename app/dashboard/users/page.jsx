import { deleteUser } from '@/app/lib/actions'
import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/dashborad/pagination/Pagination'
import Search from '@/app/ui/dashborad/users/search/Search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Users = async ({searchParams}) => {
  const q = searchParams?.q || ""
  const page= searchParams?.page || 1
  const {count,users} = await fetchUsers(q,page)
  // console.log(users);
  return (
    <div className='w-[98%] mx-auto bg-[#1A2238] p-4 rounded-lg h-fit'>
      <div className='flex w-full justify-between items-center'>
        <Search  
          placeholder={"Search Users"}
        />
        <Link href={"/dashboard/users/addUser"} className='bg-[#5D58C9] p-2 px-4 rounded-md '>
          Add New
        </Link>
      </div>
      <table className='w-full mt-4'>
        <thead className='mt-8'>
          <tr className='py-2 text-[20px]'>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <tr className='transition hover:bg-[#2F374B]' key={user._id}>
              <td className='flex items-center p-[10px] gap-[10px] '>
                <div className='relative h-[40px] w-[40px]'>
                    <Image
                        src={user.img || "/profilePic.jpg"}
                        fill
                        alt=''
                        className=' object-cover rounded-[50%]'
                    />
                </div>
                <div>
                    <p className='text-[15px]'>{user.username}</p>
                </div>
              </td>
              <td>
                {user.email}
              </td>
              <td>
                {user.createdAt?.toString().slice(4,16)}
              </td>
              <td>
                {user.isAdmin === true ? "Admin" : "Client"}
              </td>
              <td>
              {user.isActive === true ? "Active" : "Passive"}
              </td>
              <td>
                <div className='flex gap-[10px]'>
                  <Link href={`/dashboard/users/${user._id}`}>
                    <button className='px-[10px] py-[5px] rounded-[5px] cursor-pointer bg-teal-400 text-black'>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user._id.toString()} />
                    <button className='px-[10px] py-[5px] rounded-[5px] cursor-pointer bg-red-600 text-white'>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default Users