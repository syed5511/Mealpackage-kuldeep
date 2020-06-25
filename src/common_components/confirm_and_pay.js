import React from "react";
import "./confirm_and_pay.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Formik } from "formik";
import * as yup from "yup";
import StripeCheckout from "./stripe_checkout";
import Alert from "./alert";
import Tnc from "./tnc";

const schema = yup.object({
  address: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zipcode: yup.string().required(),
  terms: yup.bool().required(),
  discount_code: yup.bool().required(),
});

export default function ConfirmAndPay() {
  return (
    <div className="confirm_container">
      <div className="confirm_text">
        Almost there! So close you can almost taste it!
      </div>
      <div className="row cover-row">
        <div className="col-md-8">
          <Alert className="mid-space">
            You will receive future plan at $59.94 with 3 meals
          </Alert>
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
                <div className="order_form">
                  <h4>Where do you want your Delivery</h4>
                  <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationFormik01">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        className="text_input"
                        value={values.address}
                        onChange={handleChange}
                        isValid={touched.address && !errors.address}
                        placeholder="Enter address"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationFormik01">
                      <Form.Label>Zip code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zipcode"
                        className="text_input"
                        value={values.zipcode}
                        onChange={handleChange}
                        isValid={touched.zipcode && !errors.zipcode}
                        placeholder="Enter zip code"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="4" controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridState">
                      <Form.Label>City</Form.Label>
                      <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formGridState">
                      <Form.Label>Address type</Form.Label>
                      <Form.Control as="select" value="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </div>
                <div className="order_form mt-4">
                  <Form.Row>
                    <div className="col-md-3 discount_heading">
                      Discount Code
                    </div>
                    <div className="col-md-7">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik01"
                      >
                        <Form.Control
                          type="text"
                          name="discount_code"
                          className="text_input"
                          value={values.discount_code}
                          onChange={handleChange}
                          isValid={
                            touched.discount_code && !errors.discount_code
                          }
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </Form.Row>
                </div>

                <div className="order_form mt-4">
                  <StripeCheckout />
                </div>
                <div className="order_form mt-4 tnc_checkout">
                  <Tnc />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="col-md-4 order_summary">
          <h4>Order Summary</h4>
          <div className="p-10 summary_container">
            <div>Email</div>
            Syedhaq1122@gmail.com
          </div>
          <div className="p-10 summary_container">
            <div>Package</div>2 Person - 3 Meals
          </div>
          <div className="p-10 summary_container">
            <div>Complementary Meals</div>3 Meals
          </div>

          <div className="total">
            Sub Total <span className="right">$59.94</span>
            <div className="green">
              Shipping{" "}
              <span className="right">
                <b>Free</b>
              </span>
            </div>
            <div>
              Total meals <span className="right">6</span>
            </div>
            <div>
              Est. tax <span className="right">$0.00</span>
            </div>
            <div>
              <b>
                Total <span className="right">$59.94</span>
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
