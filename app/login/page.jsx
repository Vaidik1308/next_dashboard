import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex h-[100vh] justify-center items-center'>

      <form className='flex flex-col gap-[30px] p-[50px] bg-[#1A2238] rounded-[10px] h-[500px] w-[500px] justify-center ' >
        <h1 className='text-[35px] font-bold text-center'>Login</h1>
        <input 
          type="text" 
          placeholder='username' 
          name="" 
          id=""
          className='p-[20px] bg-[#161C2E] rounded-[5px] border-[2px] border-solid border-[#2e347a]' 
        />
        <input 
          type="password" 
          name="password" 
          id="" 
          placeholder='password'
          className='p-[20px] bg-[#161C2E] rounded-[5px] border-[2px] border-solid border-[#2e347a]' 
        />
        <button 
          className='p-[15px] bg-teal-600 text-[20px] rounded-[10px] text-gray-200' 
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login