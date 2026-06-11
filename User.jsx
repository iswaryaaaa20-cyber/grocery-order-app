import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function User() {
  const navigate=useNavigate()
    const [value,setvalue]=useState({
      username:"",
      email:"",
      Password:""
    })
    function handlechange(e){
         setvalue({...value,[e.target.name]:e.target.value})
    }
    function handlelogin(){
      if(value.name=="iswarya"&&value.email=="ishu@gmail.com"&&value.password==2004){
        navigate("/userhomepage")

      }
      else{
        alert("invalid username or email or password")
      }
    }
    
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
