import React, { useState } from "react";
import "./Register.css";
import toast from "react-hot-toast";
import mes from "./../../assets/mes.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [workshop, setWorkshop] = useState(false);
    const [informals, setInformals] = useState(false);
    const [media, setMedia] = useState(false);
    const [panel, setPanel] = useState(false);
    const [pitch, setPitch] = useState(false);
    const [startup, setStartup] = useState(false);
    let teamArray = []

    let workshopInit = {
        expectations: "",
        questions: ""
    };
    let panelInit = {
        attracted: "",
        expectations: ""
    };
    let pitchingInit = {
        companyName: "",
        compDesc: "",
        teamRep: {
            name: "",
            email: "",
            college: "",
            course: "",
            regNum: "",
            grad: "",
            contact: ""
        },
        teamMembers: [],
        website: "",
        legal: "",
        formed: null,
        revenue: ""
    };
    let startupInit = {
        name: "",
        legal: "",
        numDesk: 0,
        category: "",
        describe: "",
        website: "",
        extraServ: ""
    }
    const [userData, setUserData] = useState({
            name: "",
            college: "",
            yearOfStudy: 0,
            phoneNum: 0,
            email: "",
            learnerId: "",
            regNum: 0,
            regEvents: []
    });
    const [workData, setWork] = useState(workshopInit);
    const [panData, setPan] = useState(panelInit);
    const [pitchingData, setPitching] = useState(pitchingInit);
    const [startData, setStartData] = useState(startupInit);

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
                        value={workData.expectations}
                        onChange={(e) => setWork({ ...workData, expectations: e.target.value })}
                        placeholder="What are your expectations from the workshop?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Questions</label>
                    <textarea 
                        required 
                        type="text" 
                        onChange={ (e) => setWork({ ...workData, questions: e.target.value }) }
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
                        onChange={ (e) => setPan({ ...panData, attracted: e.target.value }) }
                        placeholder="What attracted you to this event?"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Expectations</label>
                    <textarea 
                        required 
                        type="text" 
                        onChange={ (e) => setPan({ ...panData, expectations: e.target.value }) }
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
                <h6>Pitch Tank Details</h6>
                <div>
                    <label>Company Name</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, companyName: e.target.value }) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, compDesc: e.target.value }) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, name: e.target.value }}) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, email: e.target.value }}) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, college: e.target.value }}) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, regNum: e.target.value }}) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, course: e.target.value }}) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, grad: e.target.value }}) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, teamRep: { ...pitchingData.teamRep, contact: e.target.value }}) }
                        placeholder="Phone number"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Team Members</label>
                    <textarea 
                        required  
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, teamMembers: teamArray.push(e.target.value)}) }
                        placeholder="Names of team members"
                    />
                </div>
                <div>
                    <label>Website</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setPitching({ ...pitchingData, website: e.target.value }) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, legal: e.target.value }) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, formed: e.target.value }) }
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
                        onChange={ (e) => setPitching({ ...pitchingData, revenue: e.target.value }) }
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
                <h6>Startup Fair Details</h6>
                <div>
                    <label>Name of Startup</label>
                    <input 
                        required 
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, name: e.target.value }) }
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
                        onChange={ (e) => setStartData({ ...startData, legal: e.target.value }) }
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
                        onChange={ (e) => setStartData({ ...startData, numDesk: e.target.value }) }
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
                        onChange={ (e) => setStartData({ ...startData, category: e.target.value }) }
                        placeholder="Category of startup"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Description</label>
                    <textarea 
                        required 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, describe: e.target.value }) }
                        placeholder="Tell us what you do!"
                    />
                </div>
                <div>
                    <label>Website</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" 
                        onChange={ (e) => setStartData({ ...startData, website: e.target.value }) }
                        placeholder="www.example.com"
                    />
                    <span className="underline"></span>
                </div>
                <div>
                    <label>Extra services (if any)</label>
                    <input 
                        required
                        className="reg-input" 
                        type="text" value={startData.extraServ}
                        onChange={ (e) => setStartData({ ...startData, extraServ: e.target.value }) }
                        placeholder="What do you need from us?"
                    />
                    <span className="underline"></span>
                </div>
            </div>
        )
    }

    const handleRegEventsArray = (checked, eventName) => {
        if(checked) {
            // add event name to registered events list
            let us = userData; 
            us.regEvents.push(eventName); 
            setUserData(us)
        } else {
            // remove event from registered events list
            let us = userData;
            const index = us.regEvents.indexOf(eventName);
            if(index > -1) { 
                us.regEvents.splice(index, 1); 
                setUserData(us)
            }
        }
    }

    const validateForm = (toastId) => {
        // check for empty fields in each state
        let flag = 0;
        Object.values(userData).forEach(val => {
            if(val === "") {
                flag = 1;
            }
        })
        if (flag === 1) {
            toast.error("Please fill in all the fields!", { id: toastId });
            return false;
        }
        if(userData.phoneNum.toString().length !== 10) {
            toast.error("Enter a valid phone number", { id: toastId });
            return false;
        }
        if(workshop) {
            Object.values(workData).every(val => {
                if(val === "") {
                    flag = 1;
                } 
            })
        }   
        if(panel) {
            Object.values(panData).every(val => {
                if(val === "") {
                    flag = 1;
                }
            })
        }
        if(pitch) {
            Object.values(pitchingData).every(val => {
                if(val === "") {
                    flag = 1;
                }
            })
            if(flag === 1)
                return false;
            else {
                if(pitchingData.teamRep.contact.toString().length !== 10) {
                    toast.error("Enter a valid phone number", { id: toastId })
                    return false;
                }
            }
        }
        if(startup) {
            Object.values(startData).every(val => {
                if(val === "") {
                    flag = 1;
                }
            })
        }
        if(userData.regEvents.length === 0) {
            toast.error("Please choose at least one event", { id: toastId });
            return false;
        }
        if (flag === 1) {
            toast.error("Please fill in all the fields!", { id: toastId });
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Loading...");
        if(validateForm(toastId)) {
            let user = {
                ...userData,
                informals: informals,
                media: media
            } 
            // add the relevant data to the user object
            if(workshop)
                user.workshop = workData;
            if(panel)
                user.panel = panData;   
            if(pitch)
                user.pitching = pitchingData;
            if(startup)
                user.startupFair = startData;
            console.log(user)
            try {
                const res 
                    = await axios.post(
                        "/api/participant/register", 
                        { ...user }
                    );
                if(res.data.success) {
                    toast.success("Successfully registered!", { id: toastId });
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                } else {
                    toast.error(res.data.msg[0][Object.keys(res.data.msg[0])[0]], { id: toastId });
                }
            } catch (error) {
                toast.error({...error}.response.data.message, { id: toastId });
            }
        }
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
                        <input 
                            required 
                            className="reg-input" 
                            type="text" 
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                            autoComplete="off" 
                            placeholder="Enter your name"
                        />
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>College</label>
                        <input required className="reg-input" type="text" onChange={(e) => setUserData({...userData, college: e.target.value})} placeholder="College Name"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Year of study</label>
                        <input required className="reg-input" type="number" onChange={(e) => setUserData({...userData, yearOfStudy: e.target.value})} placeholder="What year are you in?"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input required className="reg-input" type="number" onChange={(e) => setUserData({...userData, phoneNum: e.target.value})} placeholder="Enter your phone number"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Email ID</label>
                        <input required className="reg-input" type="email" onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="abc@example.com"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Learner ID</label>
                        <input required className="reg-input" type="email" onChange={(e) => setUserData({...userData, learnerId: e.target.value})} placeholder="Your @manipal.edu ID"/>
                        <span className="underline"></span>
                    </div>
                    <div>
                        <label>Registration Number</label>
                        <input required className="reg-input" type="number" onChange={(e) => setUserData({...userData, regNum: e.target.value})} placeholder="College Registration Number"/>
                        <span className="underline"></span>
                    </div>
                    <h5>CHOOSE EVENTS</h5>
                    <div className="events-choice">
                        <div>
                            <input 
                                onChange={(e) => { 
                                    setWorkshop(e.target.checked); 
                                    handleRegEventsArray(e.target.checked, "Workshops");
                                }} 
                                type="checkbox" 
                                name="workshop"
                            />
                            <label htmlFor="workshop">Workshop</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => {
                                    setInformals(e.target.checked); teamArray.push("Informals");
                                    handleRegEventsArray(e.target.checked, "Informals");
                                }}
                                type="checkbox" 
                                value="" 
                                name="informals"
                            />
                            <label htmlFor="informals">Informals</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => {setMedia(e.target.checked);
                                handleRegEventsArray(e.target.checked, "Media");
                            }}
                                type="checkbox" 
                                value="" 
                                name="media"
                            />
                            <label htmlFor="media">Media</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => {
                                    setPanel(e.target.checked); 
                                    handleRegEventsArray(e.target.checked, "Panel Discussion");
                            }} 
                                type="checkbox" 
                                value="" 
                                name="panel"
                            />
                            <label htmlFor="panel">Panel Discussion</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => {
                                    setPitch(e.target.checked); 
                                    handleRegEventsArray(e.target.checked, "Pitch Tank");
                                }}
                                type="checkbox" 
                                value="" 
                                name="pitch"
                            />
                            <label htmlFor="pitch">Pitch Tank</label>
                        </div>
                        <div>
                            <input 
                                onChange={(e) => {
                                    setStartup(e.target.checked); 
                                    handleRegEventsArray(e.target.checked, "Startup Fair");
                                }}
                                type="checkbox" 
                                value="" 
                                name="startup"
                            />
                            <label htmlFor="startup">Startup Fair</label>
                        </div>
                    </div>
                    {workshop ? Workshop() : ""}
                    {panel ? Panel()  : ""}
                    {pitch ? Pitching()  : ""}
                    {startup ? StartupFair() : ""}
                    <button onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register