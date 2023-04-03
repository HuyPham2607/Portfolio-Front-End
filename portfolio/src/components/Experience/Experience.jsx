import React, { useState } from 'react';
import './Experience.css';

function Experience() {
    const [content, setContent] = useState(true);

    const handleClick = (id) => {
        const valueid = id.target.id;
        const linestyle = document.getElementById('line-style');
        linestyle.style.transform = `translateY(calc(${valueid}* 44px)`;
        if (valueid == 0) {
            setTimeout(() => {
                setContent(true);
            }, 300);
        } else {
            setTimeout(() => {
                setContent(false);
            }, 300);
        }
    };
    return (
        <section className="experience" id="experience">
            <div className="background-experience hidden">
                <span>
                    <h1>Experience</h1>
                </span>
                <div className="content-experience">
                    <div className="tab-list">
                        <button className="btn-experience" id={0} onClick={(id) => handleClick(id)}>
                            School
                        </button>
                        <button className="btn-experience" id={1} onClick={(id) => handleClick(id)}>
                            Internship
                        </button>
                        <div className="line-style" id="line-style"></div>
                    </div>
                    <div className="experience-list">
                        {content ? (
                            <>
                                <font className="title">
                                    <h3>Specialization in Software Engineering</h3>
                                    <p>August 2018 - 2023</p>
                                </font>
                                <div className="inner-experience">
                                    <ul>
                                        <li>
                                            Learn many programming languages C++, .Net, HTML, CSS, JavaScript. Work well
                                            independently or with a team. participate in projects, essays and graduation
                                            theses.
                                        </li>
                                        <li>
                                            However, I develop mainly in Front End Developer using HTML, CSS, and
                                            JavaScript languages. I have learned about TypeScript, Three.Js, but I have
                                            never applied it to coding.
                                        </li>
                                        <li>In the future, with what I have learned, I want to apply it to my work.</li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <font className="title">
                                    <h3>Internship at Design24</h3>
                                    <p>June 2021 - August 2021</p>
                                </font>
                                <div className="inner-experience">
                                    <ul>
                                        <li>
                                            Join real projects, learn more about nodejs backend and start writing an
                                            api.
                                        </li>
                                        <li>
                                            Coding landing pages, learning more scss, database mongodb. Responsive web
                                            design
                                        </li>
                                        <li>Learn more ReduxJs and coding support libraries.</li>
                                        <li>Building Backend Restful Api using Nodejs.</li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
