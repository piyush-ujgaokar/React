import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    
    
  return (
    <div className='w-70 h-full overflow-hidden shrink-0 relative rounded-4xl'>
            <img className='w-full h-full object-cover' src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} tag={props.tags} />
    </div>
  )
}

export default RightCard