import React from 'react'

const Cards = ({userName,src}) => {

    

  return (
        <div className="card">
        <img src={src} alt="" />
        <h1>{userName}</h1>
        <p>Lorem ipsum  sit amet,el. Obcaecati, labore?</p>
        <button>View profile</button>
    </div>
  )
}

export default Cards