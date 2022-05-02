import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logInImg from '../../../images/image-12.webp'
import './Login.css';

const LogIn = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleLogIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/home');
    }

    const navigateRegister = (e) => {
        navigate('/register')
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
                                <h2 className='a_title'>LogIn Here</h2>
                                <Form onSubmit={handleLogIn} className='mt-4'>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control ref={emailRef} required type="email" placeholder="Enter your Email Address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control ref={passwordRef} required type="password" placeholder="Enter your password" />
                                        </Form.Group>
                                    </Row>
                                    <p className='text-danger m-0'>{error?.message.slice(16)}</p>
                                    {
                                        loading ?
                                            <p className='text-success m-0'>Logging...</p>
                                            :
                                            <p className='text-success m-0'></p>
                                    }
                                    <button className='LogInBtn mt-1' type='submit'>LogIn as Customer</button>
                                    <p className='registerP'>New to Travel-Mania? <span onClick={navigateRegister}>Register Here.</span></p>
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