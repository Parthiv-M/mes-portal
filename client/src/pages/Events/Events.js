import React from "react";
import "./Events.css";
import mes from "./../../assets/mes.png"
import { Link } from "react-router-dom";

const EventsPage = () => {
    return (
        <div className="m-container">
            <div className="events-header">
                <img src={mes} alt="MES-logo"></img>
                <h1 className="events-head">MES Events 2022</h1> 
                <Link to="/register">
                    <button>Register Now</button>
                </Link>
            </div>
            <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Innovation Mela</h1>
                    <p className="text-large">Students with their own startups can set up a stall and promote their startups and promote their job offerings, if any.</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Panel Discussion</h1>
                    <p className="text-large">A session by entrepreneurship experts on start-ups. The experts will share their opinions on the entrepreneurial decision-making process.</p>
                </div>
                <div className="article ">
                    <h1 className="card-heading">Pitch Tank</h1>
                    <p className="text-large">A pitching session where top startups from MAHE get a chance to present their pitches and stand a chance to get funded by investors in exchange for equity.</p>
                </div>
              </div>
              <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Money Quest</h1>
                    <p className="text-large">A life-size “MONOPOLY”,  All properties will be auctioned off, and teams will need to find safe notes hidden throughout the campus in order to participate in the auctions.</p>
                </div>
                <div className="article ">
                    <h1 className="card-heading">Keynote Address</h1>
                    <p className="text-large">With Shark Tank India releasing their first season, people from all age groups have started to witness the growth of innovation. Since this is the year of innovation, we have someone that will have you on the edge of your seat.</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Stand-Up Comedy</h1>
                    <p className="text-large">A stand-up set performed by a surprise guest, to provide a stressbuster after a series of hectic and serious events.</p>
                </div>
              </div>
              <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Agree to Disagree</h1>
                    <p className="text-large">This event allows participants from all age groups to discuss and deliberate on subjects related to the startup world. Contest to experience and win a real life business-related discourse or gain insight about a certain situation from fellow entrepreneurs!</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Case Maze</h1>
                    <p className="text-large">This will be a case study competition which will help students develop critical thinking in terms of businesses and startups. A detailed case study about 2 startups/companies will be released. Participants will need to analyze them and answer questions based on them.This will take place in 4 challenging rounds.</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Talk Series</h1>
                    <p className="text-large">Interact with Industry experts who will share their insights on how to go about building a solid business plan for your startup idea. Learn how to build relationships and communicate with people to excel as an entrepreneur.</p>
                </div>
              </div>
              <div className="grid">
                <div className="article">
                    <h1 className="card-heading">Workshops</h1>
                    <p className="text-large">It is  an offline event where in a lot of renowned dignitaries would come and enlighten us with all the knowledge they have to offer. We have some amazing people on board and it would be an exciting and enlightening event.</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Biz Quiz</h1>
                    <p className="text-large">Explore yourself and fathom your depths of interest, to pull out your veiling curiosity in the world of and business. BizQuiz at MES 2022 is designed to pull the inner quiz master out of you!</p>
                </div>
                <div className="article">
                    <h1 className="card-heading">Business in Metaverse</h1>
                    <p className="text-large">Let's do some exciting new businesses in the Metaverse! Do you be the next Meta in the Web3 space? Join us for a session on business opportunities in Web3.</p>
                </div>
              </div>
            </div>
    )
}

export default EventsPage