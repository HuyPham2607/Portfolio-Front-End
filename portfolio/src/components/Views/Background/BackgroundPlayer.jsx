import React, { useEffect } from 'react';
import './BackgroundPlayer.css';
import Typed from 'typed.js';

function BackgroundPlayer() {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: ['I build things for the Web.'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: 100,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    useEffect(() => {
        const name = document.getElementById('name');
        const spanname = document.getElementById('span-name');
        const information = document.getElementById('information');
        const btncheck = document.getElementById('check');
        const content = document.getElementById('content');
        name.style.opacity = '0';
        spanname.style.opacity = '0';
        information.style.opacity = '0';
        btncheck.style.opacity = '0';
        content.style.opacity = '0';

        setTimeout(() => {
            spanname.style.animation = 'name 2s';
            name.style.animation = 'name 2.4s';
            information.style.animation = 'name 2.6s';
            btncheck.style.animation = 'name 2.8s';
            content.style.animation = 'name 3s';

            name.style.opacity = '1';
            spanname.style.opacity = '1';
            information.style.opacity = '1';
            btncheck.style.opacity = '1';
            content.style.opacity = '1';
        }, 1000);
    });

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="content-center">
            <div className="content">
                <span id="span-name">Hi, my name is</span>
                <h1 id="name">Pham Nguyen Gia Huy.</h1>
                <div className="type-wrap" id="content">
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <p id="information">
                    I am a software engineer graduated from <strong>CANTHO</strong> university, I love designing and
                    programming however currently i want to develop web software focusing on useful features for people.
                    From time to time I do learn some design and I find it quite interesting for me.
                </p>
                <button id="check" onClick={() => openInNewTab('https://github.com/HuyPham2607?tab=repositories')}>
                    Check out my course
                </button>
            </div>
        </div>
    );
}

export default BackgroundPlayer;
