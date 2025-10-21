import axios from 'axios'
import { useState } from 'react'

const Axios = () => {
    const [userData, setUserData] = useState([])

    const getData=async ()=>{
       const {data}= await axios.get('https://picsum.photos/v2/list')

       setUserData(data)

        
    }


  return (
     <div>
      <button onClick={getData} className='bg-gray-700 px-2 py-2 m-10 text-7xl rounded-2xl'>Get Data</button>
      <div className='flex flex-wrap gap-5'>
            {userData.map((elem,idx)=>{
                    console.log(elem);
                    
                    return <div key={idx} className=' w-62 h-72 bg-white flex flex-col items-center text-black text-2xl'>
                       <div className='h-32 w-32 object-cover overflow-hidden bg-black rounded-full '>
                            <img className='w-full h-ful object-cover' src={elem.download_url} alt="" />
                       </div>
                        <h1>{elem.author}</h1>
                        
                    </div>
                    
            })}
      </div>
    </div>
  )
}

export default Axios