import React from 'react';
import { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import './Navbar.css';
const Navbar = () => {
    const handleOpenMenu = () => {
        const s = document.getElementById('pre-scrim');
        s.classList.add('is-open');
        const menu = document.querySelector('.nav-links');
        menu.classList.add('navbar-open');
    };

    const handleClose = () => {
        const menu = document.querySelector('.nav-links');
        menu.classList.remove('navbar-open');
        const prescrim = document.getElementById('pre-scrim');
        prescrim.classList.remove('is-open');
    };

    const handleClick = (id) => {
        scroller.scrollTo(id, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    const HandleCloseBlur = () => {
        const prescrim = document.getElementById('pre-scrim');
        prescrim.classList.remove('is-open');
        const menu = document.querySelector('.nav-links');
        menu.classList.remove('navbar-open');
    };

    useEffect(() => {
        const logo = document.getElementById('logo');
        const skills = document.getElementById('nav-links-skills');
        const about = document.getElementById('nav-links-about');
        const contact = document.getElementById('nav-links-contact');
        const experience = document.getElementById('nav-links-experience');
        const resume = document.getElementById('resume');

        logo.style.animation = 'nav-link 0.5s';
        skills.style.animation = 'nav-link 1s';
        about.style.animation = 'nav-link 1.4s';
        experience.style.animation = 'nav-link 1.8s';
        contact.style.animation = 'nav-link 2.2s';
        resume.style.animation = 'nav-link 2.4s';
    });

    return (
        <nav>
            <div className="container">
                <li id="logo">
                    <Link to="" activeClass="active" spy={true} duration={500} onClick={(id) => handleClick(id)}>
                        Portfolio
                    </Link>
                </li>
                <ul className="nav-links">
                    <div
                        className="button-inners"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        <div className="button-inner"></div>
                    </div>
                    <li id="nav-links-about">
                        <Link
                            to="about-me"
                            activeClass="active"
                            spy={true}
                            offset={-70}
                            duration={500}
                            onClick={(id) => handleClick(id)}
                        >
                            About
                        </Link>
                    </li>
                    <li id="nav-links-experience">
                        <Link
                            to="experience"
                            activeClass="active"
                            spy={true}
                            duration={500}
                            onClick={(id) => handleClick(id)}
                        >
                            Experience
                        </Link>
                    </li>

                    <li id="nav-links-buillding">
                        <Link
                            to="buillding"
                            activeClass="active"
                            spy={true}
                            duration={500}
                            onClick={(id) => handleClick(id)}
                        >
                            Work
                        </Link>
                    </li>
                    <li id="nav-links-contact">
                        <Link
                            to="contact"
                            activeClass="active"
                            spy={true}
                            duration={500}
                            onClick={(id) => handleClick(id)}
                        >
                            Contact
                        </Link>
                    </li>
                    <li id="nav-links-skills">
                        <Link
                            to="carousel"
                            activeClass="active"
                            spy={true}
                            duration={500}
                            onClick={(id) => handleClick(id)}
                        >
                            Skills
                        </Link>
                    </li>
                    <li id="resume">
                        <Link to="/resume" target={'_blank'}>
                            <button>Resume</button>
                        </Link>
                    </li>
                </ul>
                <div className="navbar_icons" onClick={() => handleOpenMenu()}>
                    <div className="navbar_icon"></div>
                </div>
            </div>
            <div className="pre-scrim" id="pre-scrim" data-pre="Scrim" onClick={() => HandleCloseBlur()}></div>
        </nav>
    );
};

export default Navbar;
