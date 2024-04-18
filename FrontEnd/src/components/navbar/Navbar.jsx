import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import testsvg from '../../assets/logo.svg'
const Navbar = () => {

    const[menu , setMenu] = useState("Home"); 

  return (
    <div className='navbar'>
        <div className="logobox">
            <img src={testsvg} alt="" className='logo'/>
            <div className="title">Taste E Best</div>

        </div>
        
        <ul className="navbar-menu">
            <li onClick = {() => setMenu("Home")} className={menu ==="Home" ? "active" : ""}>Home</li>
            <li onClick = {() => setMenu("Suggestions")} className={menu ==="Suggestions" ? "active" : ""}>Suggestions</li>
            <li onClick = {() => setMenu("UserReviews")} className={menu ==="UserReviews" ? "active" : ""}>User Reviews</li>
            <li onClick = {() => setMenu("ContactUs")} className={menu ==="ContactUs" ? "active" : ""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
           
  
        </div>
      
    </div>
  );
}

export default Navbar;
