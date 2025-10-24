import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

    const data=useContext(DataContext)
    console.log(data);
    

  return (
    <div>
        <h1>Footer {data}</h1>
    </div>
  )
}

export default Footer