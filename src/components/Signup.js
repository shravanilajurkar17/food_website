import { Link } from "react-router-dom";
import logo1 from "../Images/logo1.jpg";
import React from "react";
import { TextField } from "@mui/material";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
// import { server } from "../../common";
// import { divisionList } from "../../config";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    axios
      .post("http://localhost:5000/api/auth/createuser", values)
      .then((response) => {
        alert("User Register Successfully");
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div>
    //   <br />
    //   <br />
    //   <br />
    //   <center>
    //     <div className="back">
    //       <fieldset id="signup">
    //         <p>
    //           <br />
    //         </p>
    //         <h1>
    //           <b>Signup</b>
    //         </h1>
    //         <br />
    //         <form action id="form">
    //           Name: &nbsp;
    //           <input
    //             name="name"
    //             type="text"
    //             id="Name"
    //             placeholder="Enter Your Name"
    //             required
    //           />
    //           <br />
    //           <br />
    //           {/* Male:{" "}
    //           <input
    //             type="radio"
    //             name="gender"
    //             id
    //             className="gender"
    //             required
    //           />
    //           Female:
    //           <input type="radio" name="gender" id className="gender " />
    //           Other:
    //           <input type="radio" name="gender" id className="gender" />
    //           <br />
    //           <br /> */}
    //           Birthdate: &nbsp;
    //           <input
    //             name="bdate"
    //             type="date"
    //             id="birth"
    //             placeholder="Eter Birth Date"
    //           />
    //           <br />
    //           <br />
    //           Mobile: &nbsp;
    //           <input
    //             type="number"
    //             name="number"
    //             id="mob"
    //             placeholder="Enter Mobile Number"
    //             required
    //           />
    //           <br />
    //           <br />
    //           Email: &nbsp;
    //           <input
    //             type="email"
    //             name="email"
    //             id="gmail"
    //             placeholder="Enter e-mail ID"
    //             required
    //           />
    //           <br />
    //           <br />
    //           Address:&nbsp;{" "}
    //           <textarea
    //             name="Address"
    //             id
    //             cols={20}
    //             rows={2}
    //             placeholder="Enter Your Address In Nashik"
    //             required
    //             defaultValue={""}
    //           />
    //           <br />
    //           <br />
    //           Password:&nbsp;
    //           <input
    //             type="password"
    //             name="passd"
    //             id="passd"
    //             placeholder="Enter Password"
    //             required
    //           />
    //           <br />
    //           <br />
    //           <input type="submit" defaultValue="Submit" />
    //           &nbsp;&nbsp;&nbsp;&nbsp;
    //           <input type="reset" defaultValue="Reset" />
    //           <br />
    //           <br />
    //         </form>
    //         <Link to="/login">Login</Link>
    //       </fieldset>
    //     </div>
    //   </center>
    // </div>

    <div>
      <section className="back">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow" style={{ borderRadius: "1rem" }}>
                <div className="card-body text-center p-5 ">
                  {/* <img
                  className="mb-3  "
                  width="100"
                  height="100"
                  src="/Images/logo4.jpg"
                /> */}
                  <h3 className="mb-3 text-center ">Creat Your Account</h3>
                  <Formik
                    initialValues={{
                      name: "",
                      contact: "",
                      address: "",
                      wardno: "",
                      // division: "",
                      pincode: "",
                      email: "",
                      password: "",
                    }}
                    validate={(values) => {}}
                    onSubmit={handleFormSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      setFieldValue,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                          <TextField
                            name="name"
                            margin="dense"
                            type="text"
                            placeholder="Lorem Ipsum"
                            variant="outlined"
                            label="Full Name"
                            value={values.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            required
                          ></TextField>
                          {/* {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null} */}
                        </div>
                        <div className="mb-2">
                          <TextField
                            name="contact"
                            margin="dense"
                            type="number"
                            placeholder="Enter Contact Number"
                            variant="outlined"
                            label="Contact Number"
                            value={values.contact}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            required
                          ></TextField>
                          {/* {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null} */}
                        </div>
                        <div className="mb-2">
                          <TextField
                            name="email"
                            margin="dense"
                            type="email"
                            placeholder="Lorem Ipsum"
                            variant="outlined"
                            label="Email Id"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            required
                          ></TextField>
                          {/* {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null} */}
                        </div>

                        <div className="mb-2">
                          <TextField
                            name="address"
                            margin="dense"
                            type="text"
                            placeholder="Enter Your Address"
                            variant="outlined"
                            label="Address"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                            required
                          ></TextField>
                          {/* {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null} */}
                        </div>

                        <div className="mb-2">
                          <div className="row">
                            <div className="col-md-6">
                              <TextField
                                name="wardno"
                                margin="dense"
                                type="text"
                                placeholder="Enter Your Ward Number"
                                variant="outlined"
                                label="Ward Number"
                                value={values.wardno}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                fullWidth
                                required
                              ></TextField>
                              {/* {errors.email && touched.email ? (
                      <p className="text-danger">{errors.email}</p>
                    ) : null} */}
                            </div>
                          </div>
                        </div>

                        <div className="mb-2">
                          <TextField
                            name="password"
                            margin="dense"
                            type="password"
                            placeholder="Password"
                            variant="outlined"
                            label="Password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            fullWidth
                            required
                          ></TextField>
                          {/* {errors.password && touched.password ? (
                      <p className="text-danger">{errors.password}</p>
                    ) : null} */}
                        </div>

                        <button
                          className="btn text-white btn-lg btn-block w-100"
                          type="submit"
                          style={{ backgroundColor: "#569DAA" }}
                        >
                          Register
                        </button>
                      </form>
                    )}
                  </Formik>
                  <a href="/login">I have already account? login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
