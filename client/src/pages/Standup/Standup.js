import React from "react";
import "./Standup.css";
import calendar from "./calendar.svg";
import map from "./map.svg";

const Standup = () => {
    return (
        <div className="standup-wrapper">
            <div className="standup-header">
                <div className="com-image">
                    <div className="gradient">
                        <div className="head-content">
                            <h3>Karunesh Talwar</h3>
                            <p>
                                A standup performance by Karunesh Talwar, one of India’s leading standup comics, with two specials on Amazon Prime. Karunesh 
                                has a unique spot in the pantheon of Indian comics, with a knack for observation that is second to none, a signature low-key 
                                style of delivery, and a great command over language. A professional purveyor of shower thoughts, he has entertained audiences 
                                with his takes on everything from Masterchef to Mukesh Ambani, and will be a hilarious highlight for MES 2022.
                            </p>
                            <div className="standup-meta">
                                <div className="date">
                                    <img alt="Calendar" src={calendar}></img>
                                    <p>2nd April 2022</p>
                                </div>
                                <div className="date">
                                    <img alt="Location" src={map}></img>
                                    <p>Quadrangle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="standup-form">
                <form>
                    <div>
                        <label>Name</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="text" 
                            autoComplete="off" 
                            placeholder="Enter your name"
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Name</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="email" 
                            autoComplete="off" 
                            placeholder="Enter your email"
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Name</label>
                        <input 
                            required 
                            className="reg-input" 
                            type="number" 
                            autoComplete="off" 
                            placeholder="Enter your registration number"
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>College</label>
                        <select 
                            required 
                            className="reg-input-select" 
                            type="text" 
                            autoComplete="off" 
                        >
                            <option>MIT</option>
                            <option>KMC</option>
                            <option>WGSHA</option>
                            <option>MCOPS</option>
                            <option>TAPMI</option>
                            <option>OTHERS...</option>
                        </select>
                        <span className="underline"></span>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        </div>
    );
}
export default Standup;