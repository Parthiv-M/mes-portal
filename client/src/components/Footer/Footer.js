import React from "react"
import "./Footer.css"

import instagram from "./instagram.svg"
import email from "./email.svg"

import ecell from "./../../assets/eCellLight.png"

const Footer = () => {
    return (
        <footer> 
            <div className="footer-content">
                <p>Get in touch</p>
                <div className="icons">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/ecell.mit/?igshid=xdfcrxt635x1">
                        <img src={instagram}></img>
                    </a>
                    <a href="mailto:ecell.mit@manipal.edu">
                        <img src={email}></img>
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
                </div>
            </div>
        </footer>
    );
}

export default Footer