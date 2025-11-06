import Home from './pages/Home'
import Layout from './pages/Layout'
import ResumeBuilder from './pages/ResumeBuilder'
import Dashboard from './pages/Dashboard' 
import Preview from './pages/Preview'
import Login from './pages/Login'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import api from './configs/api.js'
import { setLoading } from './app/features/authSlice.js'
import { login } from './app/features/authSlice.js'
import {Toaster} from 'react-hot-toast'

const App = () => {

  const dispatch = useDispatch()

  const getUserData = async()=>{
    const token = localStorage.getItem('token')
    try {
      if(token){
        const {data} = await api.get('/api/users/data', {headers: {Authorization: token}})
        if(data.user){
          dispatch(login({token, user: data.user}))
        }
        dispatch(setLoading(false))
      } else{
        dispatch(setLoading(false))
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUserData()
  },[])

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='app' element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path='builder/:resumeId' element={<ResumeBuilder />} />
        </Route>

        <Route path='view/:resumeId' element={<Preview />} />

      </Routes>
    </>
  )
}

export default App