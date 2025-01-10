import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 
    sm:px-24 absolute top-0'>
        <div className='flex gap-3'>
            <img src={assets.logo} alt='auth' className='w-15 h-10 sm:w-23 mt-1' />
            <h1 className='font-outfit text-3xl font-bold mt-1'>auth</h1>
        </div>

        <button onClick={()=> navigate('/login')} className='flex items-center gap-2 border border-gray-500 
        bg-orange-400 rounded-full px-6 py-2 text-gray-800 hover:bg-white 
        transition-all'>
          Login <img src={assets.right_arrow} alt='' className='w-10 h-5 sm:w-12'/>
        </button>
    </div>
  )
}

export default Navbar