import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {

   const navigate=useNavigate()

  function handleadmin(){
    navigate("/admin")
  }
  function handleuser(){
    navigate("/User")
  }
  
  return (
   <>
   <div className='home'>
    <h1>Mevi Mart</h1>
   <button onClick={handleadmin}>Admin</button>
   <br /><br />
   <button onClick={handleuser}>User</button>
    </div>
   </>
  )
  
  
}

export default Home