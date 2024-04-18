/* eslint-disable react/jsx-key */
//import React from 'react'
import reviewdata from '../components/reviewdata'
import Singlereview from '../components/Singlereview'
import '../cssfiles/stylereviewpage.css'

function Review() {
  return (
    <>
      <div className='review-box'>
        <hr></hr>
        <br/>
        <h2>USER REVIEWS</h2>
        <br/>
        <div className='user-reviews'>
          {reviewdata.map(({name,email,review}) => {
            return (<Singlereview name={name}  email={email} review={review} />)
          })}
        </div>
      </div>
      <div className='post-review'>
        <h2> POST YOUR REVIEW</h2>
        <form>
          <input type='text' placeholder='Name'></input>
          <input type='email' placeholder='Email'></input>
          <input type="number" placeholder='Contact No.'></input>
          <textarea type='text' placeholder='Review'></textarea>
          <button>Submit</button>
        </form>
      </div>

{/* <section id="contact">
  <h1><span>contact</span> us</h1>

  <form id="contact-form">
    <div>
      <label>Name :</label>
      <input type="text" id="name" placeholder="Enter your name" name="name" required />
    </div>
    <div>
      <label >Email :</label>
      <input type="email" id="email" placeholder="Enter your email ID" name="email" required />
    </div>
    <div>
      <label >Phone Number :</label>
      <input type="tel" id="phone" placeholder="Enter your phone number" name="phone" required />
    </div>
    <div>
      <label >Event Type :</label>
      <select id="event-type" name="event-type" required>
        <option value="">Select Event Type</option>
        <option value="Wedding">Wedding</option>
        <option value="Conference">Conference</option>
        <option value="Party">Party</option>
      </select>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</section> */}

      



    </>
  )
}

export default Review