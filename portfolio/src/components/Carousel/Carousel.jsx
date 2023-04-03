import React, { useEffect } from 'react';
import html from '../../Image-videos/html.png';
import css from '../../Image-videos/css.png';
import js from '../../Image-videos/js.png';
import reactjs from '../../Image-videos/reactjs.png';
import nodejs from '../../Image-videos/nodejs.png';
import redux from '../../Image-videos/redux.png';
import './Carousel.css';

const Carousel = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let radius;
                    let imgHeight;
                    let imgWidth;
                    var screenWidth = window.innerWidth;
                    if (screenWidth > 943) {
                        radius = 360;
                        imgWidth = 70;
                        imgHeight = 70;
                    } else if (screenWidth > 400 && screenWidth < 943) {
                        radius = 200;
                        imgWidth = 30;
                        imgHeight = 30;
                    } else {
                        radius = 120;
                        imgWidth = 20;
                        imgHeight = 20;
                    }

                    var autoRotate = true;
                    var rotateSpeed = -10;

                    setTimeout(init, 1000);

                    var ospin = document.getElementById('spin-container');
                    var aImg = ospin?.getElementsByTagName('img');
                    var text = document.getElementById('text');
                    var aEle = [...aImg];

                    for (var i = 0; i < aEle.length; i++) {
                        aEle[i].style.animation = 'img 3s ease-out';
                    }
                    console.log(radius);

                    ospin.style.width = imgWidth * 2 + 'px';
                    ospin.style.height = imgHeight * 2 + 'px';

                    function init(delayTime) {
                        for (var i = 0; i < aEle.length; i++) {
                            aEle[i].style.transform =
                                'rotateY(' + i * (360 / aEle.length) + 'deg) translateZ(' + radius + 'px)';
                            aEle[i].style.transition = 'transform 1s';

                            aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
                        }
                    }

                    if (autoRotate) {
                        var animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
                        ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
                        text.style.animation = `text ${Math.abs(rotateSpeed)}s linear`;
                    }
                } else {
                }
            });
        });

        const carousel = document.querySelectorAll('.carousel');
        carousel.forEach((el) => observer.observe(el));
    });

    return (
        <div
            className="carousel"
            style={{
                background: '#0e1a1f',
            }}
        >
            <div id="drag-container">
                <div id="spin-container">
                    <img src={redux} alt="" />
                    <img src={reactjs} alt="" />
                    <img src={nodejs} alt="" />
                    <img src={js} alt="" />
                    <img src={css} alt="" />
                    <img src={html} alt="" />
                </div>
                <p id="text">Technologies that I use</p>
                <div id="ground"></div>
            </div>
        </div>
    );
};

export default Carousel;
