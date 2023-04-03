import React from 'react';
import './About.css';
import avatar from '../../Image-videos/avatar.jpg';

function About() {
    return (
        <section className="about-me">
            <div className="background-about hidden">
                <span>
                    <h1>About Me</h1>
                </span>
                <div className="content-about">
                    <div className="information-about-me">
                        <p>
                            Hello ! My name is Huy and I love to create things that exist on the internet. I started
                            learning about web programming in the last 2 years and I find it extremely interesting for
                            me. I love to learn about good technology and apply it to what I want. Sometimes I also go
                            through other things such as designing a photo or editing something on a video, but for now
                            I want to focus mainly on programming and developing web applications.
                        </p>
                        <p>
                            Fast forward to today, I have graduated and am currently looking for a job that can help me
                            improve my experience and develop myself. In school and internship I learned a lot and I can
                            apply it to my future work.
                        </p>
                        <p>Here are a few technologies I've been working on recently:</p>
                        <ul className="list-skills">
                            <li>HTML5</li>
                            <li>JavaScript (ES6)</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                    <div className="img-about-me">
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
