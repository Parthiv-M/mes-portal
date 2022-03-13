import React from "react";
import "./Landing.css";
import {Link} from "react-router-dom";

import ecell from "./../../assets/eCellLight.png";
// import mahe from "./../../assets/maheLogo.png";
import mes from "./../../assets/mesLogo.png";
import Timeline from "../../components/Timeline/Timeline";

const Landing = () => {
    return (
        <div className="page-wrapper">
            <div className="gradient-wrapper">
            <div className="content-wrapper">
                <div className="dummy-nav-wrapper">
                    <div className="dummy-nav">
                        <img className="ecell-logo" src={ecell} alt="E-Cell MIT Logo" />
                        <div className="buttons-wrapper">
                            <div className="register">
                                <Link to="/register">
                                    <button>Register Now</button>
                                </Link>
                            </div>
                            <Link to="/events">
                                <button>Events</button>
                            </Link>
                            <a href="#contact">
                                <button>Contact Us</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className="mes-logo">
                        <img src={mes} alt="MES Logo"/>
                    </div>
                    <p>
                        The 17th edition of Entrepreneurship Summit is a 2-day event that is being organized with the vision of providing a platform that stimulates 
                        discussion on potent ideas. Such ideas have the power to turn the issues troubling us into an opportunities to revolutionize the world. 
                        E-Summit'22 will present rays of hope so dazzling that they penetrate even the darkness that veils our eyes.
                    </p>
                </div>
            </div>
            </div>
            <h3 className="timeline-head">MES Timeline</h3>
            <Timeline />
        </div>
    )
}

export default Landing