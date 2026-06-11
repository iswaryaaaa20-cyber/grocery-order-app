import React, { useState } from 'react'

function User() {
    const [value,setvalue]=useState({
      username:"",
      email:"",
      Password:""
    })
    
  return (
    <>
    <h1>Login Page</h1>
    <input type="text" name="username" placeholder='username' onChange={handlechange} />
   <input type="email" name="email" placeholder='email id' onChange={handlechange}/>
   <input type="password" name="password" placeholder='password' onChange={handlechange}/>
   <button onClick={handlelogin}>login</button>
</>
  )
}

export default User
