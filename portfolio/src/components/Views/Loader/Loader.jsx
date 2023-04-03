import React, { useEffect } from 'react';
import './Loader.css';
const Loading = () => {
    useEffect(() => {
        setTimeout(() => {
            const background = document.getElementById('background-loader');
            const loader = document.getElementById('loader');
            loader.style.animation = 'small 3s ease-out';
            background.style.animation = 'close 4s ease-out';
        }, 100);
    });

    return (
        <div className="background" id="background-loader">
            <div className="loader" id="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    );
};

export default Loading;
