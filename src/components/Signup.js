import React from 'react'
import { Link } from "react-router-dom";
import logo1 from '../Images/logo1.jpg';

export const Signup = () => {
  return (
    <div>
      <br/><br/><br/>
        <center >
          <div className="back" >
            <fieldset id="signup">
              <p><br /></p>
              <h1><b>Signup</b></h1>
              <br/>
              <form action id="form">
                Name: &nbsp;<input type="text" id="Name" placeholder="Enter Your Name" required /><br /><br />
                Male: <input type="radio" name="gender" id className="gender" required />
                Female:<input type="radio" name="gender" id className="gender " />
                Other:<input type="radio" name="gender" id className="gender" /><br /><br />
                Birthdate: &nbsp;<input type="date" name="bdate" id="birth" placeholder="Eter Birth Date" /><br /><br />
                Mobile: &nbsp;<input type="number" name="number" id="mob" placeholder="Enter Mobile Number" required /><br /><br />
                Email: &nbsp;<input type="email" name="email" id="gmail" placeholder="Enter e-mail ID" required /><br /><br />
                Address:&nbsp; <textarea name="Address" id cols={20} rows={2} placeholder="Enter Your Address In Nashik" required defaultValue={""} /><br /><br />
                Password:&nbsp;<input type="password" name="passd" id="passd" placeholder="Enter Password" required /><br /><br />
                <input type="submit" defaultValue="Submit" />&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="reset" defaultValue="Reset" /><br /><br />
              </form><Link to="/login">Login</Link>
            </fieldset>
          </div>
        </center>
      </div>
  )
}
