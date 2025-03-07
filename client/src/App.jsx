import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
        <ToastContainer />
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verification' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App