import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const[value,setvalue]=useState({
        name:'',
        password:''
    })
    const navigate=useNavigate()
    function handlechange(e){
       setvalue({...value,[e.target.name]:e.target.value})
    }
    function handlelogin(){
        if (value.name=="ishu"&&value.password==1234){
            navigate("/adminpage")
        }
        else{
           alert("name or password are incorrect ")
        }
    }
  return (
    <>
    <h1>
        Admin Page
    </h1>
    <input type="text" placeholder='name' name='name' onChange={handlechange}/><br /><br />
    <input type="password" placeholder='password' name='password' onChange={handlechange}/><br /><br />
    <button onClick={handlelogin}>login</button>
    </>
  )
}

export default Admin
