/* eslint-disable react/prop-types */
//import React from 'react'


function Singlereview({name,email,review}) {
    return (
      <div className="single-reviewbox">
        <h5>{name}</h5>
        <h6>{email}</h6>
        <h4>{review}</h4>
      </div>
    )
  }
  
  export default Singlereview