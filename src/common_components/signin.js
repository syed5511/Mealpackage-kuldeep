import React from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "./button";
import * as yup from "yup";
import "./signin.css";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Signin() {
  return (
    <>
      <div className="row">
        <div className="signin-cover">
          <div className="signin_heading">Sign In</div>

          <div className="signin_text">
            Dont have an account? <a href="#">Sign up</a>
          </div>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: "Mark",
              lastName: "Otto",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group
                    className="margin_auto"
                    as={Col}
                    md="12"
                    controlId="validationFormik03"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Email Address"
                      name="email"
                      className="text_input signin_input"
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row className="signin-row">
                  <Form.Group
                    className="margin_auto"
                    as={Col}
                    md="12"
                    controlId="validationFormik01"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="text_input signin_input"
                      onChange={(e) => console.log(e)}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row className="signin-row">
                  <Form.Group
                    className="margin_auto signin-btn-cover"
                    as={Col}
                    md="12"
                    controlId="validationFormik01"
                  >
                    <Button
                      type="submit"
                      className="package_button signup_button"
                      variant="primary"
                      isLoading={true}
                    >
                      Sign In
                    </Button>
                  </Form.Group>
                </Form.Row>

                <div className="forgot_password">
                  <a href="#"> Forgot your password </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
