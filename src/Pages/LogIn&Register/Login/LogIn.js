import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logInImg from '../../../images/image-12.webp'
import './Login.css';

const LogIn = () => {
    return (
        <div className='logInPage'>
            <div className="logInInner">
                <div className="container-fluid g-0">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-md-5">
                            <img className='img-fluid logInImg' src={logInImg} alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className="loginInner">
                                <h4 className='a_header'>Welcome to Travel-Mania</h4>
                                <h2 className='a_title'>LogIn Here</h2>
                                <Form className='mt-4'>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control required type="mail" placeholder="Enter your Email Address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control required type="password" placeholder="Enter your password" />
                                        </Form.Group>
                                    </Row>
                                    <button className='LogInBtn' type='submit'>LogIn as Customer</button>
                                    <p className='registerP'>New to Travel-Mania? <Link to={'/register'}><span>Register Here.</span></Link></p>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;