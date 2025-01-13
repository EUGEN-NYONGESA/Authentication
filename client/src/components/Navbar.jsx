import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent} from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {

  const navigate = useNavigate()
  const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)

  const sendVerificationOtp = async ()=>{
    try {
      axios.defaults.withCredentials = true;
      const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')

      if(data.success){
        navigate('/email-verification')
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async ()=> {
    try {
      axios.defaults.withCredentials = true
      const {data} = await axios.post(backendUrl + '/api/auth/logout')
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/')

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 
    sm:px-24 absolute top-0'>
        <div className='flex gap-3'>
            <img src={assets.logo} alt='auth' className='w-15 h-10 sm:w-23 mt-1' />
            <h1 className='font-outfit text-3xl font-bold mt-1'>auth</h1>
        </div>

        {userData ?
        <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
              {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-300 
              cursor-pointer'>Verify Email</li>}

              <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 
              cursor-pointer'>Logout</li>
            </ul>
          </div>
        </div>
        
        : <button onClick={()=> navigate('/login')} className='flex items-center gap-2 border border-gray-500 
        bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full px-6 py-2 text-gray-900 hover:text-white 
        hover:bg-gray-500 transition-all active:bg-gray-400 cursor-pointer'>
          Login <img src={assets.right_arrow} alt='' className='w-10 h-5 sm:w-12'/>
        </button>
        }
        
    </div>
  )
}

export default Navbar