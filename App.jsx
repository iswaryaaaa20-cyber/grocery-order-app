import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminpage from './Adminpage'
import Home from './Home'
import User from './User'
import Admin from './Admin'
import Userhomepage from './Userhomepage'
import Cart from './Cart'

function App() {
  const [cart,setcart]=useState([])
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/adminpage' element={<Adminpage/>}/>
      <Route path='/home' element={<View cart={cart} setcart={setcart}/>} />
      <Route path='/Cart' element={<Cart cart={cart} setcart={setcart}/>}/>
    </Routes>
    </>
  )
}

export default App
