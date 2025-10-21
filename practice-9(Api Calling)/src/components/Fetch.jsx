import React from 'react'

const Fetch = () => {
  const getData=async ()=>{

  console.log("Getting data");

  const response=await fetch('https://jsonplaceholder.typicode.com/todos')

  const data=await response.json()

  console.log(data);

}


  return (
    <div>
      <button onClick={getData} className='bg-gray-700 px-2 py-2 m-10 text-7xl rounded-2xl'>Get Data</button>
    </div>
  )
}

export default Fetch