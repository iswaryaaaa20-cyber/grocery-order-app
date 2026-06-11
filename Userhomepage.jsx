import React from 'react'

function Userhomepage({cart}) {
  return (
    <>
    <div>
        <ul>
            <li>
                <link to={"/View"}>Homepage</link>
                <link to={"/cart"}> <div>{cart.length}</div>View cart</link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Userhomepage
