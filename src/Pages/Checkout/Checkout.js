import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import './Checkout.css';

const Checkout = () => {
    let params = useParams();
    return (
        <div className='checkOutPage'>
            <div className="CheckOutHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Book or Checkout for <span className='s_name1'>{params.serviceInfo}</span> Service</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkoutForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="formInner">
                                <h3 className='a_header'>Book {params.serviceInfo}</h3>
                                <h2 className='a_title'>Fill up the form for Booking</h2>
                                <Form className='mt-4'>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control required type="text" placeholder="Enter your Full Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control required type="mail" placeholder="Enter your Email Address" />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>City</Form.Label>
                                            <Form.Select required defaultValue="Choose...">
                                                <option>Dhaka</option>
                                                <option>Chittagong</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mt-3" controlId="formGroupEmail">
                                        <Form.Label>Tour Guide that you want to book!</Form.Label>
                                        <Form.Control value={params.serviceInfo} readOnly type="text" placeholder="Enter your Full Name" />
                                    </Form.Group>
                                    <Form.Group className="mt-3" controlId="formGroupEmail">
                                        <Form.Label>Send us a Message!</Form.Label>
                                        <Form.Control required as="textarea" rows={5} />
                                    </Form.Group>
                                    <button className='subBtn' type='submit'>Checkout for more details</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;