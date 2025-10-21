import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  useEffect(()=>{
    console.log("use effect is running.....");
    
  },[])


  return (
    <div className='p-10'>
      <h3 className='text-5xl'>Num is {num}</h3>
      <button onClick={()=>{
        setNum(num+1)
      }} className='text-4xl px-5 py-2 mt-10 bg-gray-700 cursor-pointer rounded-2xl'>Click</button>
    </div>
  )
}

export default App