import React from "react"
import "./Footer.css"

import instagram from "./instagram.svg"
import email from "./email.svg"

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
                    <p className="conducted">Conducted by</p>
                    <h4>The Entrepreneurship Cell, MIT Manipal</h4>
                    <p>Manipal Entrepreneurship Summit 2022</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer