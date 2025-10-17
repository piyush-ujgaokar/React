import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users=[

    {img:"https://plus.unsplash.com/premium_photo-1661765955533-596918f986f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
    color:'lightBlue',
    tags:"Satisfied",
    },

    {img:"https://images.unsplash.com/photo-1581629736732-70315e25b1e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
    color:'lightSeaGreen',
    tags:"UnderServed",
    },

    {img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
    color:'pink',
    tags:"UnderBanked",
    },
    {img:"https://images.unsplash.com/photo-1579389083175-247ef703006f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
      color:'blue',
    tags:"Satisfied",
    },
    {img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
    color:'pink',
    tags:"UnderBanked",
    },
    {img:"https://images.unsplash.com/photo-1579389083175-247ef703006f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
      color:'blue',
    tags:"Satisfied",
    },
    {img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
    color:'pink',
    tags:"UnderBanked",
    },
    {img:"https://images.unsplash.com/photo-1579389083175-247ef703006f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",des:"Prime customer, that have access to Bank Credit and are Satisfied with the current product",
      color:'blue',
    tags:"Satisfied",
    },

  ]


  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App