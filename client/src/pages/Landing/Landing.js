import React from "react";
import "./Landing.css";
import {Link} from "react-router-dom";

import ecell from "./../../assets/eCellLight.png";
import mahe from "./../../assets/maheLogo.png";
import mes from "./../../assets/mesLogo.png";
import Timeline from "../../components/Timeline/Timeline";

const Landing = () => {
    return (
        <div className="page-wrapper">
            <div className="gradient-wrapper">
            <div className="content-wrapper">
                <div className="dummy-nav-wrapper">
                    <nav className="dummy-nav">
                        <div className="brand-img">
                            <img alt="Revels Logo" className="ecell-logo" src={ecell}></img>
                            <img alt="Revels Logo" className="mahe-logo" src={mahe}></img>
                        </div>
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
                    </nav>
                </div>
                <div className="description">
                    <div className="mes-logo">
                        <img src={mes} alt="MES Logo"/>
                    </div>
                    <p>
                        MAHE's flagship entrepreneurship event, MES, is a landmark two-day event from 17th March to 2nd April in the hybrid model. In this 
                        5th edition, we plan on bringing ideas, zeal and passion like never seen before. Here, a mere thought to solve a problem delivers solutions 
                        that will not just revolutionise the world but encourage others to put their thinking caps on and work outside their comfort zones. 
                        Creativity, innovation, and thriving for excellence are the primary carriers of this year's summit. Through MES, E-Cell MIT plans to 
                        instill a culture of economic innovation at MAHE and establish industry relations.
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