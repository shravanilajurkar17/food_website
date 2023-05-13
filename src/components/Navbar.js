import React from 'react'
import { Link } from "react-router-dom";
import logo from '../Images/logo1.jpg'

const Navbar = () => {
  return (
    <div>
    <nav id="navbar">

    <div id="logo"><img src={logo} alt="" width="150px"/></div>
    <div>
    <Link to="/" class="items"> Home</Link>
    <Link to="/services" class="items">Services</Link>
    <Link to="/ourteam" class="items">Our-Team</Link>
    <Link to="/contact" class="items">Contact-us</Link>
    <Link to="/address" class="items">Address</Link>
    <Link to="/login" class="items">Login</Link>
</div>

</nav>
</div>
  )
}

export default Navbar