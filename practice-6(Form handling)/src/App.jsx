import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState("")


  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form Sbmitted By ", title);
    
    setTitle('')
    
  }


  return (
   <div>
    <form onSubmit={submitHandler}>
        <input className='px-2 py-2 bg-gray-700 text-3xl rounded-2xl m-5' 
        type="text" 
        placeholder='Enter Name' 
        value={title}
        onChange={(e)=>{
            setTitle(e.target.value)
            
        }}  
      
        />
        <button className='bg-green-500 px-2 py-2 rounded-2xl text-2xl ml-10'>submit</button>
    </form>
   </div>
  )
}

export default App