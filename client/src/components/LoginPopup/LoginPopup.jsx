import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const  LoginPopup = ({setshowLogin}) => {

    const [currState,setCurState] =useState("Login")
  return (


    <div className='login-popup'>
        
        
     <form action="" className="login-popup-container">


     <div className="login-popup-title">
        <h2>
{currState}
        </h2>

        <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-inputs">
        {currState ==="Login"?<> </>: <input type="text"  placeholder='Your name' required/>}
       
        <input type="email"  placeholder='Your email' required/>
        <input type="password"  placeholder='Your password' required/>
        

    </div>
    <button>{currState==="Sign Up"? "Create Account"  :"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By conduction ,I agree to the terms and conditions od us and policy</p>
    </div>
   {
    currState==="Login"? <p>Create New Account <span onClick={()=>setCurState("Sign Up")}>Click Here</span> </p> :
    <p>Already have an account ? <span onClick={()=>setCurState("Login")}>Login here</span> </p>
   }
     </form>
   
    


    
    
   
    </div>
  )
}

export default LoginPopup