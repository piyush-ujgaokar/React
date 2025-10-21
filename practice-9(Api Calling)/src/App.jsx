import React from 'react'
import Fetch from './components/Fetch'
import Axios from './components/Axios'

const App = () => {
  return(
  <div className='w-screen h-full p-5 bg-black text-white'>
    {/* <Fetch /> */}
    <Axios/>
  </div>
  )
}

export default App