import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Travel Mania logo.png';
import './Header.css';

const Header = () => {
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
                        <div className="col-md-6 text-end">
                            <button className='topBtn'>Book a tour with me</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light" >
                <div className="container">
                    <Link to={'/home'}><img className='logoImage' src={logo} alt="Logos" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                <Link className="nav-link logIn" to={'/login'}>
                                    <box-icon className="userIcn" name='user' color='#928773' ></box-icon>
                                    <p>Log or Register</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;