import React from "react";
import "./Back.css";
import back from "./arrow.svg";
import { Link } from "react-router-dom";

const Back = () => {
    return (
        <Link to="/">
            <div className="back-wrapper">
                <img src={back} height={30}></img>
                <p>Go Back</p>
            </div>
        </Link>
    );
}

export default Back;