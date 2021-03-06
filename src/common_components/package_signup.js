import React from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "./button";
import * as yup from "yup";
import "./package_signup.css";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required(),
});

export default function PackageSignup({ isMobile }) {
  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6 offset-md-2 col-md-8 offset-xl-4 col-xl-4 signup-cover">
          <div className="signup_heading">Let’s set up your account</div>

          <div className="signup_subtext">
            You Selected the Free Plan: Get 40,000 Messages for one month
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
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    {!isMobile && <Form.Label>First name</Form.Label>}
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="text_input"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    {!isMobile && <Form.Label>Last name</Form.Label>}
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="text_input"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="8" controlId="validationFormik03">
                    {!isMobile && <Form.Label>Email</Form.Label>}
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="text_input"
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormik05"
                    className="zip"
                  >
                    {!isMobile && <Form.Label>Zip</Form.Label>}
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      className="text_input"
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    {!isMobile && <Form.Label>Password</Form.Label>}
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="text_input"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    {!isMobile && <Form.Label>Retype Password</Form.Label>}
                    <Form.Control
                      type="password"
                      name="retypePassword"
                      placeholder="Retype Password"
                      className="text_input"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Button
                  type="submit"
                  className="package_button signup_button"
                  variant="primary"
                  isLoading={true}
                >
                  Create My Account
                </Button>

                <div className="privacy">
                  By signing up, you agree to Instructs
                  <a href="#"> Terms of Service </a> and
                  <a href="#"> Privacy Policy </a>
                </div>
                <div className="already_account">
                  Already have an account? <a href="#"> Login </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
