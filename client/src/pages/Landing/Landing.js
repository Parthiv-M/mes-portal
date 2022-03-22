import React from "react";
import "./Landing.css";
import mes from "./../../assets/mesLogo.png";
import Timeline from "../../components/Timeline/Timeline";
import Navbar from "../../components/Navbar/Navbar";

const Landing = () => {
    return (
        <div className="page-wrapper">
            <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                        <img src={mes} alt="MES Logo"/>
                    </div>
                    <p>
                        MAHE's flagship entrepreneurship event, MES, is a landmark two-week event from 17th March to 2nd April in the hybrid model. In this 
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