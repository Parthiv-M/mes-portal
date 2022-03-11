import React from "react"
import "./Timeline.css"

const Timeline = () => {
    return (
        <section className="timeline">
            <ul>
              <li>
                <div className="timeline-content">
                    <h2 className="date">17th March 2022</h2>
                    <div className="time-box">
                        <h5>Welcome to MES</h5>
                        <p>Inauguration ~ Director, MIT</p>
                    </div>
                    <div className="time-box">
                        <h5>All About Meta and Web3</h5>
                        <p>Metaverse Webinar ~ Anshul Rustaggi</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">24th March 2022</h2>
                    <div className="time-box">
                        <h5>Case Maze Begins</h5>
                        <p>Case Maze Round 1 ~ Quiz</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">25th March 2022</h2>
                    <div className="time-box">
                        <h5>Shortlisting Round</h5>
                        <p>Case Maze ~ Shortlisting Teams</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">27th March 2022</h2>
                    <div className="time-box">
                        <h5>Online Debate</h5>
                        <p>Agree to Disagre ~ Session One</p>
                    </div>
                    <div className="time-box">
                        <h5>Online Debate</h5>
                        <p>Agree to Disagree ~ Session Two</p>
                    </div>
                    <div className="time-box">
                        <h5>Deadline</h5>
                        <p>Case Maze solution submission</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">30th March 2022</h2>
                    <div className="time-box">
                        <h5>Presentation</h5>
                        <p>Case Maze Top 5 presentations</p>
                    </div>
                    <div className="time-box">
                        <h5>Movie Night</h5>
                        <p>Movie Night at FC2 Amphitheatre</p>
                    </div>
                </div>
              </li>
            </ul>
        </section>
    )
}

export default Timeline