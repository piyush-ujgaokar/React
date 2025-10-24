import React, { createContext } from 'react'

export const DataContext=createContext()

const UserContext = ({children}) => {

    
    const username="Piyush"


  return (
    <div className= 'h-screen bg-black text-white'>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext