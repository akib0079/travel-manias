import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logInImg from '../../../images/image-12.webp'
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [c_error, setC_error] = useState();
    const nav = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.f_name.value;
        const password = e.target.password.value;
        const c_password = e.target.c_password.value;

        if (password !== c_password) {
            setC_error('Password did not match, Please Check again');
            return;
        }
        createUserWithEmailAndPassword(email, password);

        setC_error('');
    }

    if (user) {
        nav('/home');
    }

    const navigateLogIn = () => {
        nav('/login');
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
                                        <p className='text-danger m-0'>{error?.message.slice(16)}</p>
                                        <p className='text-danger mb-1'>{c_error}</p>
                                        {
                                            loading ?
                                                <p className='text-success mb-1'>Initialising User...</p>
                                                :
                                                <p className='text-success m-0'></p>
                                        }
                                    </Row>
                                    <button className='LogInBtn' type='submit'>Register as Customer</button>
                                    <p className='registerP'>Already have an account? <span onClick={navigateLogIn}>LogIn Here.</span></p>
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