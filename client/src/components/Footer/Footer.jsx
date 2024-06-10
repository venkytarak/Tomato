import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
   <div className="footer" id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quisquam, impedit illo incidunt repellat necessitatibus. Sint, assumenda quo cupiditate minima suscipit nostrum illo recusandae amet dolorem ducimus possimus veritatis quod?</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
    </div>
    <div className="footer-content-center">
<h2>Tomato</h2>
<ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
    </div>
    <div className="footer-content-right">
<h2>GET ON TOUCH</h2>

<ul>
    <li>+1-212-133-123</li>
    <li>India</li>
    <li>india@Tomato.com</li>
   
</ul>
    </div>
</div>
<hr />
<p className='copy-right'>
    CopyRight 2025 #copy Tomato
</p>
   </div>
  )
}

export default Footer