import React from 'react';
import  pizza from '../Images/pizza.webp';
import  homeDelivery from '../Images/homeDelivery.jpg';
import  safeDelivery from '../Images/safeDelivery.jpg';

export const Services = () => {
  return (
    <div>
        <section id="Services1">
          <p><br /></p>
          <h1 className="center">OUR SERVICES</h1>
          <div id="Services">
            <div className="box">
              <img src={pizza} alt="" />
              <center><h2> <i> Food</i></h2></center><p> 
                Nashik Food Web will Provide you the testier food from the all parts of the Nashik city. <br /> Also it will provide the street food at your own place</p>
            </div>
            <div className="box">
              <img src={homeDelivery} alt="" />
              <center><h2><i>Home Delivery</i></h2></center>
              <p>Nashik Food Web will provide you the  fastes and free delivery at your place in Nashik</p>
            </div>
            <div className="box">
              <img src={safeDelivery} alt="" />
              <center><h2><i>Safe Delivery</i></h2></center>
              <p>Now in the pandamic we need the safe food to be delivered. <br />It Will provide you the safe food</p>
            </div>
          </div>
        </section>
      </div>
  )
}
