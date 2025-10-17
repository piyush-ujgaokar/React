import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  
  return (
    <div id='right' className='w-2/3 flex flex-nowrap overflow-x-auto gap-7 p-3 h-full'>
          {props.users.map((elem,idx)=>{
            return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tags={elem.tags}/>
            
             
          })}
    </div>

  )
}

export default RightContent