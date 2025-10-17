import React from 'react'
import {Bookmark} from 'lucide-react'

const Cards = (props) => {
    
  return (
    <div className="card">
          <div className="top">
            <img src={props.companyLogo} alt="" />
            <button>Save <Bookmark /> </button>
          </div>
          <div className="center">
              <h3>{props.companyName} <p>{props.jobPosted}</p></h3>
              <h2>{props.jobRole}</h2>
              <div className="btn">
                <button>{props.tag1}</button>
                <button>{props.tag2}</button>
              </div>
          </div>
          <div className="bottom">
            <div className="line"></div>
            <div className="btm-text">
                <h1>{props.pay}  <p>{props.location}</p></h1>
                <button>Apply Now</button>
            </div>
          </div>
    </div>
  )
}

export default Cards