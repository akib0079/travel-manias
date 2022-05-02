import React, { useEffect, useState } from 'react';
import './Home.css';
import ServiceLoop from './ServiceLoop';
import aboutImg from '../../images/luca-bravo-O453M2Liufs-unsplash.webp'
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const Home = () => {

    const [services, setServices] = useServices();

    return (
        <div className="homePage">
            <div className="heroSec">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="HeroSecInner">
                                <h1>Travel Mania</h1>
                                <h2>Your Journey Begins Here, Welcome to the Traveling world</h2>
                                <p>Let your journey be exeptional with us. Learn more about our packages</p>
                                <a href="#service">
                                    <button className='HeroBtn'>Book a tour with me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services Section */}
            <div className="services" id='service'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="s_header">
                                <h3 className='f_header'>Featured guides</h3>
                                <h1 className='s_title'>Popular Travel guides</h1>
                            </div>
                            <div className="allServices">
                                {
                                    services.map(service => <ServiceLoop key={service.id}
                                        info={service}
                                    ></ServiceLoop>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Sec */}
            <div className="aboutSec">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 g-4">
                            <img className='img-fluid a_img' src={aboutImg} alt="" />
                        </div>
                        <div className="col-md-6 g-4">
                            <div className="aboutInner">
                                <h3 className='a_header'>Learn More About me</h3>
                                <h2 className='a_title'>Learn More About me!</h2>
                                <p>Travel-Mania is a Travel guide solution for all the travel enthusiastic people. We provide travel guides for everyone. You can book our services and get a detailed view from us.</p>
                                <Link to={'/about'}><button className='AboutBtn'>About me</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;