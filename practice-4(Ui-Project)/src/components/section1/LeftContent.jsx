import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'


const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default LeftContent