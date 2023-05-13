import React from 'react'
import { Link } from "react-router-dom";
import logo1 from '../Images/logo1.jpg';
import pizza from '../Images/pizza.webp';
import nonveg from '../Images/nonveg.jpg';
import Healthy from '../Images/Healthy.jpg';


export const Order = () => {
  return (
    <div>
        <center>
          <nav className="log">
            <div id="logo"><img src={logo1} alt="" /></div>
            <Link to="/home">Back To Home</Link>
          </nav>
        </center>
        <section id="food">
          <section className="foodOrder" id="pizza">
            <img src={pizza} alt="" />
            <div className="shop">
              <p>Pizza</p>
              <p>Rs 370 <br /><br /> House made spicy peri peri sauce, onion, capsicum, paneer, mozzarella cheese, orange Cheddar  cheese, jalapeno, black olives.</p>
              <button><Link to="/contact">Order Now </Link></button></div>
          </section>
          <section className="foodOrder" id="Non-ved">
            <img src={nonveg} alt="" />
            <div className="shop">
              <p>Non-veg</p>
              <p>Rs 370 <br /><br /> House made spicy peri peri sauce, onion, capsicum, paneer, mozzarella cheese, orange Cheddar  cheese, jalapeno, black olives.</p>
              <button><Link  to="/contact">Order Now </Link></button></div>
          </section>
          <section className="foodOrder" id="Healthy">
            <img src={Healthy} alt="" />
            <div className="shop">
              <p>Healthy Food</p>
              <p>Rs 370 <br /><br /> House made spicy peri peri sauce, onion, capsicum, paneer, mozzarella cheese, orange Cheddar  cheese, jalapeno, black olives.</p>
              <button><Link to="/contact">Order Now </Link></button></div>
          </section>
        </section>
      </div>
  )
}
