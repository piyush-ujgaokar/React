import React from 'react'

const App = () => {
const user1={
  name:"Piyush ujgaokar",
  age:20,
  city:"nagpur"
}
const user2={
  name:"Krunal Ujgaokar",
  age:22,
  city:"Mumbai"
}

localStorage.setItem('user1',JSON.stringify(user1))
localStorage.setItem('user2',JSON.stringify(user2))

const userdata=JSON.parse(localStorage.getItem('user1'))

console.log(userdata);

  


  return (
    <div className='text-5xl'>App</div>
  )
}

export default App