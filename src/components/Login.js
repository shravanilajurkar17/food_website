import { Link } from "react-router-dom";
import logo1 from "../Images/logo1.jpg";
import React from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    axios
      .post("http://localhost:5000/api/auth/login", values)
      .then((response) => {
        alert("User Login Successfully");
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="back">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow">
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
                          Login
                        </button>
                      </form>
                    )}
                  </Formik>
                  <a href="/signup">I have already account? login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
