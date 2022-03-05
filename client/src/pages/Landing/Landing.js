import React from "react"
import "./Landing.css"
import {Link} from "react-router-dom"

import ecell from "./../../assets/ecellLogo.png"
import mes from "./../../assets/mes.png"

const Landing = () => {
    return (
        <div className="page-wrapper">
            <div className="content-wrapper">
                <div className="dummy-nav">
                    <img className="ecell-logo" src={ecell} alt="E-Cell MIT Logo" />
                    <div className="buttons-wrapper">
                        <Link to="/events">
                            <button>Events</button>
                        </Link>
                        <a to="/">
                            <button>MES Timeline</button>
                        </a>
                        <a href="/">
                            <button>Contact Us</button>
                        </a>
                    </div>
                </div>
                <div className="description">
                    <img className="mesLogo" src={mes} alt="MES Logo"/>
                    <p>The 17th edition of Entrepreneurship Summit is a 2-day event that is being organized with
                        the vision of
                        providing a platform that stimulates discussion on ideas that possess the potential to turn the issues
                        troubling us into an opportunity to revolutionize the world. E-Summit'22 will present rays of hope so
                        dazzling that they penetrate even the darkness that veils our eyes.</p>
                    <div className="register">
                        <button>Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing