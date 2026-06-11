import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminpage from './Adminpage'
import Home from './Home'
import User from './User'
import Admin from './Admin'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/adminpage' element={<Adminpage/>}/>
    </Routes>
    </>
  )
}

export default App
