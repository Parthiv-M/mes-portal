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
                        <h5>Business in Metaverse</h5>
                        <p>Metaverse Webinar ~ Anshul Rustaggi</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">23rd March 2022</h2>
                    <div className="time-box">
                        <h5>Case Maze Begins</h5>
                        <p>Case Maze Round 1 ~ Quiz</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">24th to 27th March 2022</h2>
                    <div className="time-box">
                        <h5>Round 2</h5>
                        <p>Case Maze ~ Round 2</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">25th March 2022</h2>
                    <div className="time-box">
                        <h5>Round 2</h5>
                        <p>Case Maze ~ Round 2</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">27th March 2022</h2>
                    <div className="time-box">
                        <h5>Online Debate</h5>
                        <p>Agree to Disagree ~ Session One</p>
                    </div>
                    <div className="time-box">
                        <h5>Online Debate</h5>
                        <p>Agree to Disagree ~ Session Two</p>
                    </div>
                    <div className="time-box">
                        <h5>Deadline</h5>
                        <p>Case Maze solution submission</p>
                    </div>
                    <div className="time-box">
                        <h5>Quiz</h5>
                        <p>BizzQuiz</p>
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
                    {/* <div className="time-box">
                        <h5>Movie Night</h5>
                        <p>Movie Night at FC2 Amphitheatre</p>
                    </div> */}
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">1st April 2022</h2>
                    <div className="time-box">
                        <h5>2.30pm to 5.45 pm</h5>
                        <p>Panel Discussion on Entrepreneurship Essentials, finance and business</p>
                    </div>
                    <div className="time-box">
                        <h5>5.45pm to 7pm</h5>
                        <p>Pitch Tank</p>
                    </div>
                    <div className="time-box">
                        <h5>7pm to 8.30pm</h5>
                        <p>Networking Arena</p>
                    </div>
                    <div className="time-box">
                        <h5>4.45pm to 8pm</h5>
                        <p>Money Quest</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">2nd April 2022</h2>
                    <div className="time-box">
                        <h5>11am</h5>
                        <p>Keynote session</p>
                    </div>
                    <div className="time-box">
                        <h5>10am to 4pm</h5>
                        <p>Startup Fair</p>
                    </div>
                    <div className="time-box">
                        <h5>2.30pm to 4.30pm</h5>
                        <p>Visit to Manipal Incubators</p>
                    </div>
                    <div className="time-box">
                        <h5>7pm</h5>
                        <p>Standup Comedy Show</p>
                    </div>
                </div>
              </li>
            </ul>
        </section>
    )
}

export default Timeline