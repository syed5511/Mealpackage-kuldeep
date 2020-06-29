import React from "react";
import "./confirm_and_pay.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Formik } from "formik";
import * as yup from "yup";
import StripeCheckout from "./stripe_checkout";
import Button from "./button";
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

export default function ConfirmAndPay({ isMobile }) {
  const renderZip = (values, handleChange, touched, errors) => (
    <Form.Group
      as={Col}
      md="4"
      controlId="validationFormik01"
      className="zip zero-margin"
    >
      {!isMobile && <Form.Label>Zip code</Form.Label>}
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
  );
  const renderSubmitButton = () => (
    <>
      <div className="note">Skip or cancel any time</div>
      <Button type="submit">PLACE ORDER & CHOOSE MEAL</Button>
    </>
  );
  const renderSummary = () => (
    <div className="col-md-4 order_summary">
      {!isMobile && <h4>Order Summary</h4>}
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
  );
  return (
    <div className="confirm_container">
      {!isMobile && (
        <div className="confirm_text">
          Almost there! So close you can almost taste it!
        </div>
      )}
      <div className="row cover-row">
        <div className="col-md-8">
          {!isMobile && (
            <Alert className="mid-space">
              You will receive future plan at $59.94 with 3 meals
            </Alert>
          )}
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
                {isMobile && (
                  <div className="top-heading">
                    <div className="main-heading">Delivery Information</div>
                    <div className="title-heading">Confirm & Pay</div>
                  </div>
                )}
                <div className="order_form">
                  {!isMobile && <h4>Where do you want your Delivery</h4>}
                  <Form.Row>
                    <Form.Group as={Col} md="8" controlId="validationFormik01">
                      {!isMobile && <Form.Label>Address</Form.Label>}
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
                    {!isMobile &&
                      renderZip(values, handleChange, touched, errors)}
                  </Form.Row>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="formGridState"
                      className="zip"
                    >
                      {!isMobile && <Form.Label>State</Form.Label>}
                      <Form.Control as="select" value="Select State">
                        <option>Select State</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="formGridState"
                      className="zip"
                    >
                      {!isMobile && <Form.Label>City</Form.Label>}
                      <Form.Control as="select" value="Select City">
                        <option>Select City</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="formGridState"
                      className="zip zero-margin"
                    >
                      {!isMobile && <Form.Label>Address type</Form.Label>}
                      <Form.Control as="select" value="Address Type">
                        <option>Address Type</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                    {isMobile &&
                      renderZip(values, handleChange, touched, errors)}
                  </Form.Row>
                </div>
                <div className="order_form mt-4 promo-container">
                  <Form.Row className="promo-cover">
                    <div className="col-md-3 col-5 discount_heading">
                      Discount Code
                    </div>
                    <div className="col-md-7 col-7 promoBox">
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

                {isMobile && (
                  <div className="top-heading">
                    <div className="main-heading margin-8">
                      Payment Information
                    </div>
                  </div>
                )}
                <div className="order_form mt-4">
                  <StripeCheckout isMobile={isMobile} />
                  {!isMobile && renderSubmitButton()}
                </div>
                {isMobile && (
                  <>
                    <div className="top-heading">
                      <div className="main-heading margin-8-2">
                        Order Summary
                      </div>
                    </div>
                    {renderSummary()}
                    {renderSubmitButton()}
                  </>
                )}
                <div className="order_form mt-4 tnc_checkout">
                  <Tnc />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {!isMobile && renderSummary()}
      </div>
    </div>
  );
}
