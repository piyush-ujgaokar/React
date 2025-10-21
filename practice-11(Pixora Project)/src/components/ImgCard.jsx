import React from 'react'

const card = ({elem}) => {
  
  return (
    <div>
         <a target='_blank' href={elem.url}>
              <div className='h-72 w-full mt-2 text-white rounded-2xl overflow-hidden cursor-pointer'>
              <img className='h-full object-cover w-82' src={elem.download_url} alt="" />
          </div>
               <h2 className='text-3xl font-medium '>{elem.author}</h2>
          </a>
    </div>
  )
}

export default card