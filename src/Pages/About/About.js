import React from 'react';
import aboutImg from '../../images/luca-bravo-O453M2Liufs-unsplash.webp'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="aboutSec">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 g-4">
                        <img className='img-fluid a_img' src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-6 g-4">
                        <div className="aboutInner">
                            <h3 className='a_header'>Learn More About me</h3>
                            <h2 className='a_title'>Learn More About us!</h2>
                            <p>Travel-Mania is a Travel guide solution for all the travel enthusiastic people. We provide travel guides for everyone. You can book our services and get a detailed view from us.</p>
                            <Link to={'/about'}><button className='AboutBtn'>About me</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;