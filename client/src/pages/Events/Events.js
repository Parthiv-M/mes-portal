import React from "react";
import "./Events.css";
import mes from "./../../assets/mes.png"

const EventsPage = () => {
    return (
        <div class="m-container">
            <div className="events-header">
                <img src={mes} alt="MES-logo"></img>
                <h1 className="events-head">MES Events 2022</h1> 
            </div>
            <div class="grid">
                <div class="article">
                    <h1 class="card-heading">Startup Fair </h1>
                    <p class="text-large">Display of products/services of startups, technology/projects of commercial potential, District Industry Association, Facilitating (Innovation & Entrepreneurship) units of MAHE</p>
                </div>
                <div class="article">
                    <h1 class="card-heading">Panel Discussion</h1>
                    <p class="text-large">Meeting of top entrepreneurship and discussions on various field of start-up and sharing their opinions on the entrepreneurial decisions.</p>
                </div>
                <div class="article ">
                    <h1 class="card-heading">Pitching Session</h1>
                    <p class="text-large">The best place to know how big your idea could grow, so brush up your presentation skills and be ready with your plan which would make our panelists eager to put their money in your project</p>
                </div>
              </div>
              <div class="grid">
                <div class="article">
                    <h1 class="card-heading">Money Quest</h1>
                    <p class="text-large">Everyone here has played monopoly once and we are bringing you the real-life version of it with some twists of our own so get your business minds ready to make the best deals and last but not the least have fun.</p>
                </div>
                <div class="article ">
                    <h1 class="card-heading">Keynote Address</h1>
                    <p class="text-large">With Shark tank India releasing their first season people from all age groups have started to witness the growth of innovation and this being the Year of Innovation we have someone that would make you to come to edge of your seats</p>
                </div>
                <div class="article">
                    <h1 class="card-heading">Stand-Up Comedy</h1>
                    <p class="text-large"> After this hectic and series of serious conversations you would want so conversations that would calm you and your stress levels, and this person talks in way that makes you fall in love with him all over again </p>
                </div>
              </div>
            </div>
    )
}

export default EventsPage