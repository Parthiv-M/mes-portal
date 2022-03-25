import React from "react";
import "./Navbar.css";
import ecell from "./../../assets/eCellLight.png";
import mahe from "./../../assets/maheLogo.png";

const Navbar = () => {
    const mobileNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const closeNav = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
    return (
        <nav class="navbar">
            <div class="nav-logo">
                <img src={ecell} alt="Entrepreneurship Cell, MIT"></img>
                <img src={mahe} alt="MAHE"></img>
            </div>
            <ul class="nav-menu">
                <li class="nav-item" onClick={closeNav}>
                    <a href="/standup" class="nav-link">Standup</a>
                </li>
                <li class="nav-item" onClick={closeNav}>
                    <a href="/register" class="nav-link">Register</a>
                </li>
                <li class="nav-item" onClick={closeNav}>
                    <a href="/events" class="nav-link">Events</a>
                </li>
                <li class="nav-item" onClick={closeNav}>
                    <a href="/guidelines" class="nav-link">Guidelines</a>
                </li>
                <li class="nav-item" onClick={closeNav}>
                    <a href="/#contact" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger" onClick={mobileNav}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    )
}

export default Navbar;