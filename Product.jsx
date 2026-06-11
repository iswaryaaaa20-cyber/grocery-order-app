import React from 'react'
import './product.css'

function Product({product,cart,setcart}) {
    const addcart=()=>{
        setcart([...cart, product])
    }
    const removecart=()=>{
        setcart(cart.filter((c)=> c.id !== product.id))
    }
  return (
   <div className="product">
    <div className="img">
        <img src={product.pic} alt="grocery" />
    </div>
    <div className="details">
        <h3>{product.name}</h3>
    <p>price Rs:{product.amt}</p>
    {cart.includes(product) ? (<button className='btnremove' onClick={removecart}>remove cart</button>)
    :(<button onClick={addcart}>Add to cart</button>)}
    </div>
   </div>
  )
}

export default Product