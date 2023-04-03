import React from 'react';
import './Building.css';
import dessertation from '../../Image-videos/Dessertation.png';
import portfolio from '../../Image-videos/portfolio.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Building(props) {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <section className="somethings-building" id="buillding">
            <div className="background-building hidden">
                <span>
                    <h1>Some Things I’ve Built</h1>
                </span>
                <div className="content-building">
                    <div className="inner-building">
                        <h5>Dessertation</h5>
                        <h4>DEVELOPING AN E-COMMERCE WEBSITE </h4>
                        <p>
                            I spent 5 months researching and implementing the thesis, I focused on the interface more
                            than the data, but my thesis still works. There are basic functions, login, logout and the
                            interesting thing is that I learned the visa payment functionality with stripe-checkout. I
                            learn and build front end, back end and Restful Api
                        </p>
                        <ul>
                            <li>REACTJS</li>
                            <li>JAVASCRIPT</li>
                            <li>HTML, CSS</li>
                            <li>NODEJS</li>
                            <li>Redux</li>
                        </ul>
                        <span>
                            <FontAwesomeIcon
                                onClick={() => openInNewTab('https://github.com/HuyPham2607/Dissertation')}
                                icon={faGithub}
                            />
                        </span>
                    </div>
                    <div className="img-dessertation">
                        <img src={dessertation} alt="" />
                    </div>
                </div>
                <div className="content-building">
                    <div className="inner-building">
                        <h5>Portfolio</h5>
                        <p>
                            I have built a portfolio site according to the sources I searched for, in terms of interface
                            as well as integrating more projects I have worked on the site, to make it convenient for
                            employers to see about myself, My current experience and the technologies I use. This is
                            just the front end and not yet integrated data from the back end, I use simple things to be
                            able to build this website
                        </p>
                        <ul>
                            <li>REACTJS</li>
                            <li>JAVASCRIPT</li>
                            <li>HTML, CSS</li>
                        </ul>
                        <span>
                            <FontAwesomeIcon
                                onClick={() => openInNewTab('https://github.com/HuyPham2607/Dissertation')}
                                icon={faGithub}
                            />
                        </span>
                    </div>
                    <div className="img-dessertation">
                        <img src={portfolio} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Building;
