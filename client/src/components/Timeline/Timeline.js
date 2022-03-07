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
                        <h5>3.30 pm</h5>
                        <p>Inauguration ~ Director, MIT</p>
                    </div>
                    <div className="time-box">
                        <h5>5.00 pm - 5.30 pm</h5>
                        <p>Metaverse Webinar ~ Anshul Rustaggi</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">18th March 2022</h2>
                    <div className="time-box">
                        <h5>5.00 pm - 5.30 pm</h5>
                        <p>Case Maze Round 1 ~ Quiz</p>
                    </div>
                    <div className="time-box">
                        <h5>6.30 pm - 7.00 pm</h5>
                        <p>Debate Round 1 ~ Quiz</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">19th March 2022</h2>
                    <div className="time-box">
                        <h5>7.00 pm</h5>
                        <p>Case Maze ~ Shortlisting Teams</p>
                    </div>
                    <div className="time-box">
                        <h5>8.00 pm</h5>
                        <p>Debate Round 2 ~ Teams Announced</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">20th March 2022</h2>
                    <div className="time-box">
                        <h5>7.00 pm - 9.00 pm</h5>
                        <p>Debate Round 2</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">24th March 2022</h2>
                    <div className="time-box">
                        <h5>2.00 pm</h5>
                        <p>Debate Round 2 ~ Result Announcement</p>
                    </div>
                    <div className="time-box">
                        <h5>5.30 pm - 6.30 pm</h5>
                        <p>Debate Round 2</p>
                    </div>
                    <div className="time-box">
                        <h5>7.00 pm</h5>
                        <p>Debate Round 2 ~ Result Announcement</p>
                    </div>
                    <div className="time-box">
                        <h5>11.59 pm</h5>
                        <p>Case Maze ~ Solution Submission</p>
                    </div>
                </div>
              </li>
            </ul>
        </section>
    )
}

export default Timeline