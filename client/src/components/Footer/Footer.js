import React from "react"
import "./Footer.css"

import instagram from "./instagram.svg"
import email from "./email.svg"
import linkedin from "./linkedin.svg"

import ecell from "./../../assets/eCellLight.png"

const Footer = () => {
    return (
        <footer id="contact"> 
            <div className="footer-content">
                <p>Get in touch</p>
                <div className="icons">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ecell.mit/?igshid=xdfcrxt635x1">
                        <img src={instagram}></img>
                    </a>
                    <a href="mailto:ecell.mit@manipal.edu">
                        <img src={email}></img>
                    </a>
                    <a href="https://www.linkedin.com/company/ecellmit">
                        <img src={linkedin}></img>
                    </a>
                </div>
                <div className="meta">
                    {/* <p className="conducted">Conducted by</p> */}
                    <img width="100px" src={ecell}></img>
                    <h4>The Entrepreneurship Cell, MIT Manipal</h4>
                    <div className="links-nav">
                        <a href="/">Home</a>
                        <p>|</p>
                        <a href="/events">Events</a>
                        <p>|</p>
                        <a href="/register">Register</a>
                    </div>
                    <p>Manipal Entrepreneurship Summit 2022</p>
                    <div className="contact-area">
                        <p>Contact</p>
                        <a href="tel:+919082928995">Saish Shetty</a>
                        <a href="tel:+919819148140">Shroat Mehta</a>
                        <a href="tel:+919530101234">Ujjwal Somani</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer