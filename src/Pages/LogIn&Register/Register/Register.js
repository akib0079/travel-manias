import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logInImg from '../../../images/image-12.webp'
import './Register.css';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.f_name.value;
        const password = e.target.password.value;
        const c_password = e.target.c_password.value;

    }


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
                                <h2 className='a_title'>Register Here</h2>
                                <Form onSubmit={handleRegister} className='mt-4'>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGroupName">
                                            <Form.Control name='f_name' required type="text" placeholder="Enter your Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control name='email' required type="mail" placeholder="Enter your Email Address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPass">
                                            <Form.Control name='password' required type="password" placeholder="Enter your password" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupConfirmPass">
                                            <Form.Control name='c_password' required type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                    </Row>
                                    <button className='LogInBtn' type='submit'>Register as Customer</button>
                                    <p className='registerP'>Already have an account?
                                        <Link to={'/login'}><span> LogIn Here.</span></Link>
                                    </p>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;