import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar2 = () => {

    const navigate=useNavigate()
    

  return (
    <div className='w-full py-3 flex gap-5 px-10 bg-cyan-700'>
        <button onClick={()=>{
            navigate('/')
        }} className='text-3xl bg-emerald-600 rounded-2xl px-3 py-2 cursor-pointer active:scale-95'>Return to Home Page</button>
        <button onClick={()=>{
            navigate(-1)
        }} className='text-3xl bg-emerald-600 rounded-2xl px-3 py-2 cursor-pointer active:scale-95'>Back</button>
        <button onClick={()=>{
            navigate(+1)
        }} className='text-3xl bg-emerald-600 rounded-2xl px-3 py-2 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default NavBar2