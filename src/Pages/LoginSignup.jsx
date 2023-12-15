import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="password" placeholder='Your Password'/>
            </div>
            <button>Continue</button>
            <p className="loginsugnup-login">ALready have an account? <span>Login</span></p>
            <div className="loginsugnup-agree">
                <input type="checkbox" />
                <p>By conituing, i agree the terms of use and privacy policy</p>
            </div>        
        </div>
    </div>
  )
}

export default LoginSignup