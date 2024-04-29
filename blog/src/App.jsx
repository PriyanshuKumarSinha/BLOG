import { useEffect, useState } from 'react'
import './App.css'
import conf from '../conf/conf'
import { authService } from '../appwrite/auth'
import { service } from '../appwrite/config'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/authSlice'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch(logout());
  const status = useSelector((state) => state.auth.status)

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  return !loading && (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  )
}

export default App
