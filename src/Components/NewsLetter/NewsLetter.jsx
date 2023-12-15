import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to or newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter