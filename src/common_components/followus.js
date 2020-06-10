import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './followus.css';


export default function FollowUs() {
  return (
      <div className="followus_container">
          <div className="row" style={{height:'100%'}}>
            <div className="col-12 followus_content">
                <div className="row">
                    <div className="col-6 followus_left">
                        <div className="offset-lg-4 col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="whats_coockin">
                                        Discover What's <span className="cookin">Cookin'</span>
                                    </div>
                                    <Form>
                                        <Form.Row>

                                            <Form.Group className="margin_auto" as={Col} md="12" controlId="validationFormik03">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Email Address"
                                                    name="email"
                                                    className="text_input subscribe_input"
                                                />
                                            </Form.Group>

                                        </Form.Row>
                                    </Form>
                                    <div className="row">
                                        <div className="col-12" style={{'textAlign':'center'}}>
                                        Sign up for offers, recipes, news & more
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 p-0 subscribe_container">
                                    <Button className="subscribe_button">Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>








                    <div className="col-6 followus_right">
                        <div className="row">
                            <div className="col-md-5 offset-md-1">
                            <h6>FOLLOW US</h6>
                            <a href="#">
                                <img
                                    width="50"
                                    src="svg/facebook.svg" />
                            </a>
                            <a href="#">
                                <img
                                    width="50"
                                    src="svg/twitter.svg" />
                            </a>
                            <a href="#">
                                <img
                                    width="50"
                                    src="svg/instagram.svg" />
                            </a>
                            <a href="#">
                                <img
                                    width="50"
                                    src="svg/pinterest.svg" />
                            </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
          </div>
      </div>
  );
}