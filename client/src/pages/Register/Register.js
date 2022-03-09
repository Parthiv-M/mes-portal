import React, { useState } from "react";
import "./Register.css"
import mes from "./../../assets/mes.png"

const Register = () => {

    const [workshop, setWorkshop] = useState(false);
    const [informals, setInformals] = useState(false);
    const [media, setMedia] = useState(false);
    const [panel, setPanel] = useState(false);
    const [pitch, setPitch] = useState(false);
    const [startup, setStartup] = useState(false);

    const Workshop = () => {
        return (
            <div className="event-type">
                <h6>Workshop Details</h6>
                <div>
                    <label>Expectations</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="What are your expectations from the workshop?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Questions</label>
                    <textarea 
                        required 
                        type="text" 
                        placeholder="Any questions you might have?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const Panel = () => {
        return (
            <div className="event-type">
                <h6>Panel Discussion Details</h6>
                <div>
                    <label>Attraction</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="What attracted you to this event?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Expectations</label>
                    <textarea 
                        required 
                        type="text" 
                        placeholder="What are your expectations from the event?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const Pitching = () => {
        return (
            <div className="event-type">
                <h6>Pitching</h6>
                <div>
                    <label>Company Name</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="Company Name"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Company Description</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="What does your company do?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Name</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="Name"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Email</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="email" 
                        placeholder="Email"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative College</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="College"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Registration Number</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        placeholder="Registration Number"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Course</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="Course"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Year of Graduation</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        placeholder="Year of graduation"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Representative Contact</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        placeholder="Phone number"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Members</label>
                    <textarea 
                        required  
                        type="text" 
                        placeholder="Names of team members"
                    />
                </div>
                <div>
                    <label>Website</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="www.example.com"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Legal Status</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="Legal status"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Formed On</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="date" 
                        placeholder="Formed On"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Revenue</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="number" 
                        placeholder="Revenue in INR"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const StartupFair = () => {
        return (
            <div className="event-type">
                <h6>Startup Fair</h6>
                <div>
                    <label>Name of Startup</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        placeholder="The next Zomato?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Legal Status</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        placeholder="Legal status"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Number of people at desk</label>
                    <input 
                        required
                        className="reg-input" 
                        type="number" 
                        placeholder="1-4 people only"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Category</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        placeholder="Category of startup"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        required 
                        type="text" 
                        placeholder="Tell us what you do!"
                    />
                </div>
                <div>
                    <label>Website</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        placeholder="www.example.com"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Extra services (if any)</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        placeholder="What do you need from us?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    return (
        <div className="register-wrapper">
            <div className="form-wrapper">
                <div className="events-header">
                    <img src={mes} alt="MES-logo"></img>
                    <h1 className="events-head">MES Registration 2022</h1> 
                </div>
                <form>
                    <div>
                        <label>Name</label>
                        <input required className="reg-input" type="text" autoComplete="off" placeholder="Enter your name"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>College</label>
                        <input required className="reg-input" type="text" placeholder="College Name"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Year of study</label>
                        <input required className="reg-input" type="number" placeholder="What year are you in?"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input required className="reg-input" type="number" placeholder="Enter your phone number"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Email ID</label>
                        <input required className="reg-input" type="email" placeholder="abc@example.com"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Learner ID</label>
                        <input required className="reg-input" type="email" placeholder="Your @manipal.edu ID"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Registration Number</label>
                        <input required className="reg-input" type="number" placeholder="College Registration Number"/>
                        <span className="underline"></span>
                    </div>
                    <h5>CHOOSE EVENTS</h5>
                    <div className="events-choice">
                        <div>
                            <input 
                                onChange={(e) => setWorkshop(e.target.checked)} 
                                type="checkbox" 
                                name="workshop"
                            />
                            <label htmlFor="workshop">Workshop</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setInformals(e.target.checked)}
                                type="checkbox" 
                                value="" 
                                name="informals"
                            />
                            <label htmlFor="informals">Informals</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setMedia(e.target.checked)}
                                type="checkbox" 
                                value="" 
                                name="media"
                            />
                            <label htmlFor="media">Media</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setPanel(e.target.checked)} 
                                type="checkbox" 
                                value="" 
                                name="panel"
                            />
                            <label htmlFor="panel">Panel Discussion</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setPitch(e.target.checked)}
                                type="checkbox" 
                                value="" 
                                name="pitch"
                            />
                            <label htmlFor="pitch">Pitching session</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => setStartup(e.target.checked)}
                                type="checkbox" 
                                value="" 
                                name="startup"
                            />
                            <label htmlFor="startup">Startup Fair</label>
                        </div>
                    </div>
                    {workshop ? <Workshop /> : ""}
                    {panel ? <Panel /> : ""}
                    {pitch ? <Pitching /> : ""}
                    {startup ? <StartupFair /> : ""}
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register