import { useState } from 'react'
import './App.css'
import conf from '../conf/conf'
import { authService } from '../appwrite/auth'
import { service } from '../appwrite/config'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const status = useSelector((state) => state.auth.status)
  const dispatch = useDispatch(logout());

  return (
    <div className='w-full '>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default App
