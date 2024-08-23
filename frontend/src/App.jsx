import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import { GoogleOAuthProvider } from '@react-oauth/google'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/login' element={
         <Login/>
        }/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
