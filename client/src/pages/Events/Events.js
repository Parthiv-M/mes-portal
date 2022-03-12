import React from "react";
import "./Events.css";
import mes from "./../../assets/mes.png"
import { Link } from "react-router-dom";

const EventsPage = () => {
    return (
        <div class="m-container">
            <div className="events-header">
                <img src={mes} alt="MES-logo"></img>
                <h1 className="events-head">MES Events 2022</h1> 
                <Link to="/register">
                    <button>Register Now</button>
                </Link>
            </div>
            <div class="grid">
                <div class="article">
                    <h1 class="card-heading">Startup Fair </h1>
                    <p class="text-large">Students with their own startups can set up a stall and promote their startups and promote their job offerings, if any.</p>
                </div>
                <div class="article">
                    <h1 class="card-heading">Panel Discussion</h1>
                    <p class="text-large">A meeting of top entrepreneurship experts with discussions on various fields of start-ups and businesses. The experts will share their opinions on the entrepreneurial decision-making process.</p>
                </div>
                <div class="article ">
                    <h1 class="card-heading">Pitch Tank</h1>
                    <p class="text-large">A pitching session where top startups from MAHE get a chance to present their pitches and stand a chance to get funded by investors in exchange for equity. </p>
                </div>
              </div>
              <div class="grid">
                <div class="article">
                    <h1 class="card-heading">Money Quest</h1>
                    <p class="text-large"> This event will be a life-size treasure-hunt version of the board game “MONOPOLY”, where the rules of the game will be the same but the property-buying mechanics will be changed. All properties will be auctioned off, and teams will need to find safe notes hidden throughout the campus in order to participate in the auctions.</p>
                </div>
                <div class="article ">
                    <h1 class="card-heading">Keynote Address</h1>
                    <p class="text-large">With Shark Tank India releasing their first season, people from all age groups have started to witness the growth of innovation. Since this is the year of innovation, we have someone that will have you on the edge of your seat.</p>
                </div>
                <div class="article">
                    <h1 class="card-heading">Stand-Up Comedy</h1>
                    <p class="text-large">A stand-up set performed by a surprise guest, to provide a stressbuster after a series of hectic and serious events.</p>
                </div>
              </div>
              <div class="grid">
                <div class="article">
                    <h1 class="card-heading">Agree to Disagree</h1>
                    <p class="text-large">This event allows participants from all age groups to discuss and deliberate on subjects related to the startup world. Contest to experience and win a real life business-related discourse or gain insight about a certain situation from fellow entrepreneurs!</p>
                </div>
                <div class="article">
                    <h1 class="card-heading">Case Maze</h1>
                    <p class="text-large">This will be a case study competition which will help students develop critical thinking in terms of businesses and startups. A detailed case study about 2 startups/companies will be released. Participants will need to analyze them and answer questions based on them.This will take place in 4 challenging rounds.</p>
                </div>
              </div>
            </div>
    )
}

export default EventsPage