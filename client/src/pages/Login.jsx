import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {

    const [state, setState] = useState('Sign Up')

  return (
    <div className='flex items-center justify-center min-h-screen px-6 
    sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      <div className='flex gap-3 absolute left-5 sm:left-20 top-5 cursor-pointer'>
        <img src={assets.logo} alt='auth' className='w-15 h-10 sm:w-23 mt-1' />
        <h1 className='font-outfit text-3xl font-bold mt-1'>auth</h1>
      </div>
      <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full 
      sm:w-96 text-indigo-300 text-sm'>

        <h2 className='text-3xl font-semibold text-white text-center mb-3'>
          {state === 'Sign Up' ? 'create Account' : 'Login'}
        </h2>
        <p className='text-center text-sm mb-6'>
          {state === 'Sign Up' ? 'create your account' : 'Login to your account!'}
        </p>

        <form>
          <div className='mb-4 flex items-center w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img className='w-6 h-6 mr-2' src={assets.person_icon} alt='' />
            <input className='bg-transparent outline-none' type='text' placeholder='Full Name' required />
          </div>
          <div className='mb-4 flex items-center w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img className='w-6 h-6 mr-2' src={assets.email} alt='' />
            <input className='bg-transparent outline-none' type='text' placeholder='Email' required />
          </div>
          <div className='mb-4 flex items-center w-full px-5 py-2.5
          rounded-full bg-[#333A5C]'>
            <img className='w-6 h-6 mr-2' src={assets.lock_button} alt='' />
            <input className='bg-transparent outline-none' type='text' placeholder='Password' required />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
