import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
      e.preventDefault()

      const copyTask=[...task]
   
      copyTask.push({title,details})
      console.log(copyTask);
      
      setTask(copyTask)
      
      
      
      setTitle('')
      setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
    
    
  }



  return (
    <div className='p-5 lg:flex h-screen gap-10'>
      <form onSubmit={submitHandler} className='flex lg:w-1/2 flex-col gap-4 items-start '>
      <h1 className='text-4xl font-medium mb-4'>Add Notes: </h1>
        <textarea
        className='text-3xl resize-none  outline-none px-2 w-full h-20 font-medium py-2 rounded-xl bg-gray-700 text-white'
        type="text" 
        placeholder='Enter Title' 
        value={title}
        maxLength={23}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />

        <textarea
        className='outline-none resize-none text-3xl px-2 w-full h-50 font-medium  py-2 rounded-xl bg-gray-700 text-white'
        type="text" 
        placeholder='Write details' 
        value={details}
        maxLength={115}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

        <button className='text-2xl bg-green-500 px-2 w-full py-2 rounded-xl'>Add Notes</button>
      </form>
      <div  className=' lg:w-1/2 lg:border-l-2 lg:mt-0 pl-4  mt-10'>
      <h1 className='text-4xl font-medium '>Your Notes:</h1>
       <div id='right-container' className='lg:overflow-auto lg:mt-4 h-[92%] pt-4 pl-2 flex flex-wrap gap-10 '>
        {task.map((elem,idx)=>{
          return  <div  key={idx} className='h-75 w-50 flex flex-col text-black justify-between text-wrap overflow-hidden relative rounded-3xl  px-2 pt-6 pb-2 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>

                <div>
                  <h3 className='text-black leading-6 mb-2 text-3xl font-bold' >{elem.title}</h3>
                  <p className=' leading-6 text-lg text-gray-500 font-normal'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='text-xl bg-red-500 text-white rounded-2xl cursor-pointer active:scale-95 font-medium'>Delete</button>
          </div>
          
        })}
    
       
      
 
       </div>
      </div>
    </div>
  )
}

export default App