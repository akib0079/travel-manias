import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Travel Mania logo.png';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="header sticky-top">
            <div className="top-header">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <div className="topbarInfo">
                                <div className="tel">
                                    <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                                    <p>Tel:090576577</p>
                                </div>
                                <div className="mail">
                                    <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                                    <p>travelmanai@info</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-end d-flex justify-content-end align-items-center">
                            {
                                user ?
                                    <p className='m-0 pe-3'>Welcome {user?.email.slice(0, 30)}</p>
                                    :
                                    <p className='m-0'></p>
                            }
                            <button className='topBtn'>Book a tour with me</button>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to={'/home'}><img className='logoImage' src={logo} alt="Logos" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/home#service'}>Explore Packages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/blog'}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <div className='verify'>
                                    {user?.email ?
                                        <div className="nav-link logOut">
                                            <box-icon className="userIcn" name='log-in-circle' color='#928773'></box-icon>
                                            <p onClick={logout}>Logout</p>
                                        </div>
                                        :
                                        <Link className="nav-link logIn" to={'/login'}>
                                            <box-icon className="userIcn" name='user' color='#928773' ></box-icon>
                                            <p>Log or Register</p>
                                        </Link>
                                    }
                                </div>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;