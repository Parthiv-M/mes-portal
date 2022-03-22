import React from "react";
import "./Guidelines.css";
import mes from "./../../assets/mes.png";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Guidelines = () => {
    return (
        <div className="guide-container">
            <Navbar />
            <div className="guide-header">
                <img src={mes} alt="MES-logo"></img>
                <h1 className="events-head">Event Guidelines</h1> 
                <Link to="/register">
                    <button>Register Now</button>
                </Link>
            </div>
            <div className="guide">
                <div className="guide-event">Money Quest</div>
                <div className="guide-text">
                    <ul>
                        <li>The game will be played in teams, where each team at the start will get a sheet with a list of clues, each clue pertaining to a specific place on campus, once they solve the clue, they go to that specific place and get a safe note. </li>
                        <li>The game will be played in rounds where Innovation Center building will act as the starting point, after each round of 30 mins, every team will have to come to IC</li>
                        <li>At the Innovation Centre the teams will experience an auction of the buildings whose safe notes they possess, for example if 3 teams have the safe note of Student Plaza, these 3 teams will face each other in an auction and the highest bidder will get Student Plaza and any other team passing SP will have to pay rent from next round onwards </li>
                        <li>Each team will receive a game cash after every round when they come back to IC</li>
                        <li>Each team will have a volunteer with them. The volunteer will be keeping track of all the rent as well as cash and any unfair means the player might use </li>
                        <li>Incase of unfair means used the team will face a ban of 10 minutes or a penalty of Game cash </li>
                        <li>A few places act as an income tax for the players, players will.have to solve the clues given for those places and avoid them</li>
                        <li>Winner will be the team having the most cash+assets</li>
                    </ul>
                </div>
            </div>
            <div className="guide">
                <div className="guide-event">Case Maze</div>
                <div className="guide-text">
                    <ul>
                        <li>This will be a case study competition that will help students develop critical thinking in terms of businesses and startups. A detailed case study about 2 startups/ companies will be released. Participants will need to analyze them and answer questions based on them. This will take place in 4 challenging rounds.</li>
                        <li>Manipal Academy of Higher Education (MAHE) Students
Students from any year of study can apply.</li>
                        <li>Team size: 1-4</li>
                        <li>This round will consist of two mini case studies based on general entrepreneurship/business-related situations.</li>
                        <li>It will consist of 14 MCQ-type questions.</li>
                        <li>The quiz will be of 25 minutes and can be filled anytime between 23rd March 2022 12:00 AM to 24th March 2022 at 12:00 AM.</li>
                        <li>The top 10 teams will be shortlisted from round 1 scores and will be going forward with round 2.</li>
                        <li>In this round, a comprehensive case will be provided with the problem statement on 25th March 2022 at 12:00 AM.
Teams will have to submit their solutions before 29th March 2022 at 12:00 AM.</li>
                        <li>The top 5 teams will be shortlisted from round 2 and will have to present their solutions to an esteemed set of panelists.</li>
                    </ul>
                </div>
            </div>
            <div className="guide">
                <div className="guide-event">Agree to Disagree</div>
                <div className="guide-text">
                    <ul>
                        <li>Registered delegates should be present at the venue fifteen minutes prior to the event</li>
                        <li>All delegates will be allotted designations prior to the event based on their preferences </li>
                        <li>Avoid profanity and maintain decorum at all times. </li>
                        <li>If faced with any issues or have any queries, all participants are requested to directly message the EB (contact details will be provided) instead of disrupting/interrupting the event/speaker.</li>
                        <li>Committee-specific rules(if any) will be conveyed at the beginning of the event.</li>
                        <li>Session 1 (11 am-1pm): Discuss and come to an agreement on their stance w.r.t the agenda at hand.</li>
                        <li>Session 2 (2 pm-5 pm): The discussion committees engage in a Showdown where they battle to prove that their stance should have the upper hand.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Guidelines;