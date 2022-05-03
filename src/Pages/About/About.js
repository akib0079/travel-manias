import React from 'react';
import aboutImg from '../../images/Group 1aa.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="aboutSec">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 g-4">
                        <img className='img-fluid' src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-8 g-4">
                        <div className="aboutInner">
                            <h3 className='a_header'>Learn More About me</h3>
                            <h2 className='a_title'>Hello this is Akib Zawayed.<br></br>Fullstack Web developer.</h2>
                            <p>Travel-Mania is a Travel guide solution project that was built by me.As like this project I am trying to make the Web Better and Innovative in my own way. Currently I am studying as a student and working as a Freelancer. You can explore more project from my github.</p>
                            <a target="blank" href='https://github.com/akib0079'><button className='AboutBtn'>Explore Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;