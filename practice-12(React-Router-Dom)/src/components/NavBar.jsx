import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-20 p-2 w-full flex items-center justify-between bg-cyan-900 '>
        <h6 className='text-4xl uppercase'>Uj Company</h6>
        <div className='flex items-center gap-5 '>
            <Link to='/' className='text-3xl cursor-pointer'>Home</Link>
            <Link to='/product' className='text-3xl cursor-pointer'>Products</Link>
            <Link to='/about' className='text-3xl cursor-pointer'>About</Link>
            <Link to='/courses' className='text-3xl cursor-pointer'>Courses</Link>
            <Link to='/contact' className='text-3xl cursor-pointer'>Contact</Link>
            <button className='px-5 text-3xl cursor-pointer active:scale-95 py-1 bg-green-700 rounded-xl'>Login</button>
        </div>
    </div>
  )
}

export default NavBar