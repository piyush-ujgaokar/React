import {useState} from 'react'


const App = () => {

  const [count, setCount] = useState(0)

  const increment=()=>{
      setCount(count+1)
  }
  
  const decerement=()=>{
    setCount((elem)=>{
      if(elem<=0){
        return 0
      }
      return elem-1
    })
  }


  return (
    <div>
      <h1 className='text-5xl '>Current Count Is {count}</h1>
      <button className='text-2xl bg-gray-300 px-2 py-1  rounded-xl mt-10 ml-5' onClick={increment}>Increment</button>
      <button className='text-2xl bg-gray-300 px-2 py-1  rounded-xl mt-10 ml-5' onClick={decerement}>Decrement</button>

    </div>
  )
}

export default App