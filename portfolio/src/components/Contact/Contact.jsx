import React, { useEffect, useState } from 'react';
import { faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import emailjs from '@emailjs/browser';

import './Contact.css';
function Contact(props) {
    const [templateParams, setTemplateParams] = useState({
        subject: '',
        message: '',
        email_id: '',
    });
    useEffect(() => {
        const subject = document.getElementById('subject');
        const email_id = document.getElementById('email_id');
        const message = document.getElementById('message');

        if (subject === document.activeElement) {
            if (templateParams.subject.length <= 0) {
                subject.style.border = '1px solid red';
            } else {
                subject.style.border = '1px solid #a8b2d1';
            }
        }

        if (email_id === document.activeElement) {
            if (templateParams.email_id.length <= 0) {
                email_id.style.border = '1px solid red';
            } else {
                email_id.style.border = '1px solid #a8b2d1';
            }
        }

        if (message === document.activeElement) {
            if (templateParams.message.length <= 0) {
                message.style.border = '1px solid red';
            } else {
                message.style.border = '1px solid #a8b2d1';
            }
        }
    });

    const onChangeEmmailForm = (event) =>
        setTemplateParams({ ...templateParams, [event.target.name]: event.target.value });

    const SendMail = (e) => {
        e.preventDefault();

        if (
            templateParams.subject.length === 0 ||
            templateParams.email_id.length === 0 ||
            templateParams.message.length === 0
        ) {
            console.log(false);
        } else {
            emailjs.send('service_fgcvy9g', 'template_6bd86kh', templateParams, 'fiJM9E-QH-TtAHY-L').then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    const letter = document.getElementById('icon-evenlope');
                    letter.style.visibility = 'inherit';
                    letter.style.animation = 'letter 2s';
                    letter.style.color = '#64ffda';

                    setTimeout(() => {
                        letter.style.visibility = 'hidden';
                        letter.style.animation = 'none';
                        letter.style.color = 'none';
                    }, 2000);
                    const subject = document.getElementById('subject');
                    const email_id = document.getElementById('email_id');
                    const message = document.getElementById('message');
                    subject.value = '';
                    email_id.value = '';
                    message.value = '';
                    setTimeout(() => {
                        CloseInput();
                    }, 1000);
                },
                (err) => {
                    const letter = document.getElementById('icon-evenlope');
                    letter.style.visibility = 'inherit';
                    letter.style.animation = 'letter 2s';
                    letter.style.color = 'red';

                    setTimeout(() => {
                        letter.style.visibility = 'hidden';
                        letter.style.animation = 'none';
                        letter.style.color = 'none';
                    }, 2000);
                    console.log('FAILED...', err);
                },
            );
        }
    };

    const OpenInput = () => {
        const innercontact = document.getElementById('inner-contact');
        const inputcontact = document.getElementById('inner-input-contact');
        innercontact.style.top = '-30px';
        innercontact.style.opacity = '0';
        innercontact.style.visibility = 'hidden';

        setTimeout(() => {
            inputcontact.style.top = '-80px';
            inputcontact.style.opacity = '1';
            inputcontact.style.visibility = 'initial';
        }, 700);
    };

    const CloseInput = () => {
        const innercontact = document.getElementById('inner-contact');
        const inputcontact = document.getElementById('inner-input-contact');

        inputcontact.style.top = '-50px';
        inputcontact.style.opacity = '0';
        inputcontact.style.visibility = 'hidden';

        setTimeout(() => {
            innercontact.style.top = '0';
            innercontact.style.opacity = '1';
            innercontact.style.visibility = 'initial';
        }, 700);
    };

    return (
        <section className="contact">
            <div className="background-contact hidden">
                <div className="inner-contact" id="inner-contact">
                    <span>What's next ?</span>
                    <span>
                        <h1>Contact</h1>
                    </span>
                    <p>
                        I am looking for a new opportunity for myself and would like to grow with you if you are
                        interested in me. Whether you have a question or just want to say hi, I’ll try my best to get
                        back to you!
                    </p>
                    <button onClick={() => OpenInput()}>Say Hi !</button>
                </div>
                <div className="input-contact" id="input-contact">
                    <div className="inner-input-contact" id="inner-input-contact">
                        <span>
                            <h1 id="get-in-touch">Get In Touch</h1>
                        </span>
                        <span>
                            <FontAwesomeIcon id="icon-evenlope" className="icon-envelope" icon={faEnvelope} />
                        </span>
                        <form onSubmit={SendMail}>
                            <label htmlFor="subject">Title</label>
                            <input
                                className="suject"
                                id="subject"
                                name="subject"
                                type="text"
                                onChange={onChangeEmmailForm}
                            />

                            <label htmlFor="name">Your Email</label>
                            <input
                                className="name"
                                name="email_id"
                                id="email_id"
                                type="email"
                                onChange={onChangeEmmailForm}
                            />

                            <label htmlFor="message">Email Message</label>
                            <textarea
                                placeholder="I have an idea for a project...."
                                name="message"
                                id="message"
                                onChange={onChangeEmmailForm}
                            />
                            <div className="list-button">
                                <button type="button" onClick={() => CloseInput()}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
