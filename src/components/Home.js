import React from 'react';
import  pizza from '../Images/pizza.webp';
import  homeDelivery from '../Images/homeDelivery.jpg';
import  safeDelivery from '../Images/safeDelivery.jpg';
import  OurTeam from '../Images/OurTeam.jpg';
import { Link } from "react-router-dom";
export const Home = () => {
  return (
<div>
        <div>
          <section id="home" >
            <br /><br /><br /><br /><br /><br /><br /><br />
            <h1><b><i>WELCOME TO NASHIK FOOD WEB</i></b></h1><br />
            <p><b> Nashik Food is devloped to help the nashik local pepole to enjoy the any type of food From the different parts of nashik at home <br /></b></p><b> 
              <button className="btn"> <Link to="/order">Order Food</Link></button>
            </b></section><b>
          </b></div><b>
        </b>
        </div>
  )
}
