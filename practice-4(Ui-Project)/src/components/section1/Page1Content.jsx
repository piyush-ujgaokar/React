import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-10 pb-10 py-7 gap-7 flex items-center justify-between h-[90vh]'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content