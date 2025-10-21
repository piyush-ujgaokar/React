import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './components/ImgCard'




const App = () => {

  const [userData, setUserdata] = useState([])
  const [index, setIndex] = useState(1)

  const getData=async ()=>{
    const {data}= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
    setUserdata(data)
  }

  useEffect(()=>{
      getData()
  },[index])

  let printUserdata=<h1 className='text-5xl absolute text-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>

if(userData.length>0){
  printUserdata=userData.map((elem,idx)=>{
        return <div key={idx} className='text-white'>
                <Card elem={elem}/>
        </div>
      
  })
}


  return (
    <div className='text-white text-center bg-black m-5'>
          <div className='flex text-3xl p-2 items-center justify-center flex-wrap gap-5'>
              {printUserdata}
          </div>
          <div className='flex relative justify-center items-center gap-5 mt-10'>
            <button 
            style={{opacity: index == 1?0.5:1}}
            onClick={()=>{
                if(index>1){
                  setUserdata([])
                  setIndex(index-1)
                }
            }}
              className='text-3xl px-7 tracking-wider font-semibold cursor-pointer py-2 rounded-2xl bg-amber-500 text-black '>
              Prev
            </button>
            <h1 className='text-4xl font-medium'>Page {index}</h1>
            <button 
             onClick={()=>{
              setUserdata([])
              setIndex(index+1)
            }}
              className='text-3xl px-7 tracking-wider font-semibold cursor-pointer py-2 rounded-2xl bg-amber-500 text-black '>
              Next
              </button>
          </div>
    </div>
  )}
export default App