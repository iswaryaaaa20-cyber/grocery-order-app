import React, { useState } from 'react'
import Data from './data.json'
import Product from './Product'
import './home.css'

function Home({cart,setcart}) {
  const [products]=useState(Data)
  
  
  return (
    <div className='product-container'>
      
      {products.map((grocery)=>(
        <Product key={grocery.id} product={grocery} cart={cart} setcart={setcart}/>
      ))}

    </div>
  )
}

export default Home