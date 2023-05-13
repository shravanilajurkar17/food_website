import React from 'react';
import { Link } from "react-router-dom";

export const Login = () => {
  return (
     <div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        <center>
          <div className="back">
            <fieldset id="Login">
              <p><br /></p>
              <br/>
              <h1><b>Login</b></h1>
              <br/><br/>
              <form action id="form">
              Email:<input type="email" name="email" id="mail" placeholder="Enter e-mail ID" required /><br /><br />
              Name:<input type="password" name="pass" id="pass" placeholder="Enter Password" required /><br /><br />
                <input type="submit" defaultValue="Submit" />&nbsp;&nbsp;
                <input type="reset" defaultValue="Reset" /><br /><br />
              </form><Link to="/signup">Signup</Link >
            </fieldset></div>
        </center>
      </div>
  )
}
