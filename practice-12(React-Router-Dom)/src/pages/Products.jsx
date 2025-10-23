import React from 'react'
import Men from './Men'
import Kids from './Kids'
import Women from './Women'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>

       <div className=' flex justify-center mt-5 gap-10'>
         <Link className='text-xl' to='/product/men'>Men</Link>
         <Link className='text-xl' to='/product/women'>Women</Link>
         <Link className='text-xl' to='/product/kid'>Kids</Link>
       </div>
       <Outlet/>
    </div>
  )
}

export default Products