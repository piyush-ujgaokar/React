import React from 'react'

const RightCardContent = (props) => {

    console.log(props.color);
    
    
  return (
     <div className='w-full p-6 flex flex-col justify-between h-full absolute top-0 left-0'>
                   <h2 className='bg-gray-300 rounded-full font-medium text-3xl h-13 w-13 flex items-center justify-center'>{props.id+1}</h2>
                   <div  >
                        <p className='text-shadow-amber-200 text-xl mb-18 leading-relaxed text-white font-medium w-[80%]'>Prime customer, that have access to Bank Credit and are Satisfied with the current product</p>
                        <div className=' flex justify-between'>
                            <button style={{backgroundColor:props.color}} className='px-7 text-lg font-medium rounded-full'>{props.tag}</button>
                            <button style={{backgroundColor:props.color}} className='w-10 h-10 text-3xl font-medium rounded-full'><i className="ri-arrow-right-line"></i></button>
                        </div>
                   </div>

            </div>
  )
}

export default RightCardContent